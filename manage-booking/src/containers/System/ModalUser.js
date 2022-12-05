import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { emitter} from '../../utils/emitter';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormText } from 'reactstrap';
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''

        }

        this.listenToEmitter();
    }

    
    listenToEmitter(){
        emitter.on('EVENT_CLEAR_MODAL_DATA',()=>{
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: ''
    
            })
        })
    }

    componentDidMount() {

    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnchangeInput = (event, id) => {

        // this.state[id]= event.target.value;
        // this.setState({
        //     ...this.state
        // }, ()=> {
        // console.log('check bad state', this.state);

        // })
        // console.log('event1', event.target.value, id);


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
                alert('Missing parameter ', +arrInput[i])
                break;
            }
        }
        return isValid;
    }

    handleAddNewUser = () => {
        let isValid = this.checkValideInput();
        if (isValid === true) {
            //call API
            this.props.createNewUser(this.state);
           
          

        }
    }


    render() {


        return (
            <Modal isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size='lg'>

                <ModalHeader toggle={() => { this.toggle() }}>Thêm mới đơn thuốc</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Tên thuốc</label>
                            <input type='text' onChange={(event) => { this.handleOnchangeInput(event, "email") }}
                                value={this.state.email} />
                        </div>
                        <div className='input-container'>
                            <label>PP</label>
                            <input type='password' onChange={(event) => { this.handleOnchangeInput(event, "password") }}
                                value={this.state.password} />
                        </div>
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
                    <Button color="primary" className='px-3' onClick={() => { this.handleAddNewUser() }}>Lưu Thông tin</Button>{' '}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);







