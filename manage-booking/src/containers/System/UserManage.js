import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManager.scss';
import { getALLUsers, createNewUserService, deleteUserService,editUserService} from '../../services/userService';
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';

import { emitter} from '../../utils/emitter';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit:{}

        }
    }

    async componentDidMount() {
        await this.getALLUsersFromReact();
    }

    getALLUsersFromReact = async () => {
        let response = await getALLUsers('ALL')
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true,
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }

    toggleUserEditModal = ()=> {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser,
        })
    }

    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data)
            if (response && response.errCode !== 0) {
                alert(response.errMessage)

            } else {
                await this.getALLUsersFromReact();
                this.setState({
                    isOpenModalUser: false
                })

                emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }
            console.log('response user', response);
        } catch (e) {
            console.log(e);
        }

        console.log('check data child', data);
    }

    handleDeleUser = async (user) => {
        try {
            let res = await deleteUserService(user.id);
            if (res && res.errCode === 0) {
                await this.getALLUsersFromReact();

            }else{
                alert(res.errMessage)
            }

        } catch (e) {
            console.log(e);
        }

    }

    handleEditUser = (user)=> {
        
        this.setState({
            isOpenModalEditUser:true,
            userEdit: user
        })
    }

    doEditUser = async(user)=>{
        try {
            let res = await editUserService(user)
            if(res && res.errCode ===0){
                this.setState({
                    isOpenModalEditUser: false
                })
                await this.getALLUsersFromReact();
            }else {
                alert(res.errCode)
            }
        }catch(e){
            console.log(e);
        }

    }


    render() {
     
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <ModalUser

                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                {
                this.state.isOpenModalEditUser &&
                <ModalEditUser
                   isOpen={this.state.isOpenModalEditUser}
                   toggleFromParent={this.toggleUserEditModal}
                   currentUser = {this.state.userEdit}
                   editUser={this.doEditUser}
                />
             }   

                <div className='title text-center drug'>QUẢN LÝ ĐƠN THUỐC</div>
                <div className='mx-1'>
                    <button className='btn btn-primary px-3'
                        onClick={() => this.handleAddNewUser()}
                    >Thêm đơn thuốc
                    </button>

                </div>
                <div className='users-table mt-3 mx-1'>

                    <table id="customers">
                        <tr>
                            <th>Tên thuốc</th>
                            <th>Dược phẩm</th>
                            <th>Sử dụng</th>
                            <th>Số lượng</th>
                            <th>Hành động</th>



                        </tr>

                        {
                            arrUsers && arrUsers.map((item, index) => {
                              
                                return (
                                    <tr>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>



                                        <td>
                                            <button className='btn-edit' onClick={()=>this.handleEditUser(item)}>Edit</button>

                                            <button className='btn-delete' onClick={() => this.handleDeleUser(item)}>Delet</button>

                                        </td>
                                    </tr>


                                )
                            })


                        }



                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
