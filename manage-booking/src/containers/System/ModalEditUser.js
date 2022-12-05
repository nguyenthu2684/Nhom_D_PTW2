import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { emitter} from '../../utils/emitter';
import _ from 'lodash';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormText } from 'reactstrap';
class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id:'',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''

        }
    }

 

    componentDidMount() {
        let user = this. props.currentUser;
        if(user && !_.isEmpty(user)){
            this.setState({
                id:user.id,
                email: user.email,
                password: 'harcode',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
            })
        }
    

    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnchangeInput = (event, id) => {

       


        let copyState = { ...this.state };
        console.log('copyState', copyState);
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        }, () => {

            console.log('check good state', this.state);
        })

    }

    checkValideInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                // alert('Missing parameter ', +arrInput[i])
                break;
            }
        }
        return isValid;
    }

    handleSaveUser = () => {
        let isValid = this.checkValideInput();
        if (isValid === true) {
            //call  API
            this.props.editUser(this.state);
           
          

        }
    }


    render() {
        console.log('check props pareeent', this.props);
        return (
            <Modal isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size='lg'>

                <ModalHeader toggle={() => { this.toggle() }}>Thêm một đơn thuốc</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Tên thuốc</label>
                            <input type='text' onChange={(event) => { this.handleOnchangeInput(event, "email") }}
                                value={this.state.email}
                                 disabled/>
                        </div>
                        {/* <div className='input-container'>
                            <label>Password</label>
                            <input type='password' onChange={(event) => { this.handleOnchangeInput(event, "password") }}
                                value={this.state.password} />
                        </div> */}
                        <div className='input-container'>
                            <label>Dược phẩm</label>
                            <input type='text' onChange={(event) => { this.handleOnchangeInput(event, "firstName") }}
                                value={this.state.firstName} />
                        </div>
                        <div className='input-container'>
                            <label>Sử dụng</label>
                            <input type='text' onChange={(event) => { this.handleOnchangeInput(event, "lastName") }}
                                value={this.state.lastName} />
                        </div>
                        <div className='input-container max-width-input'>
                            <label>Số lượng</label>
                            <input type='text' onChange={(event) => { this.handleOnchangeInput(event, "address") }}
                                value={this.state.address} />
                        </div>


                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3' onClick={() => { this.handleSaveUser() }}>Lưu thay doi</Button>{' '}
                    <Button color="secondary" className='px-3' onClick={() => { this.toggle() }}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);







