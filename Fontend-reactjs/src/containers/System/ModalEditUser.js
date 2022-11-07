import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { after } from 'lodash';
import {emitter} from '../../utils/emitter';
import _ from 'lodash';
class ModalEditUser extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:'',
            firstName:'',
            lastName:'',
            address:''

        }
    }

    listenToEmiter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                id: '',
                email: '',
                password:'',
                firstName:'',
                lastName:'',
                address:''
            })
        })
    }

    componentDidMount() {
        let user = this.props.currentUser;
        if(user && !_.isEmpty(user)){
            this.setState({
                id: user.id,
                email: user.email,
                password:'hardCode',
                firstName:user.firstName,
                lastName:user.lastName,
                address:user.address
            })
        }
        console.log('didmout edit modal',this.props.currentUser);

    }

    toggle = ()=> {
       this.props.togleFromParent();

    }

    handleOnChangeInput = (event, id) => {
        let copyState ={...this.state};
        copyState[id] = event.target.value;

        this.setState({
            ...copyState
        });
  
    }
    checkValidaInput = ()=> {
        let isValue = true;
        let arrInput =['email','password', 'firstName', 'lastName', 'address'];
        for(let i=0;i<arrInput.length;i++) {
            console.log('check vong lap',this.state[arrInput[i]]);
            if(!this.state[arrInput[i]]){
                isValue =false;
                alert('Missing parameter:' +arrInput[i])
                break;
            }
        }
        return true;
    }
    handleSaveUser = ()=> {
        let isValid= this.checkValidaInput();
        if(isValid ===true) {
            this.props.editUser(this.state);
        
        }

    }


    render() {
        console.log('check pros parent',this.props);
        return (
            
      <Modal 
            isOpen={this.props.isOpen} 
            toggle={()=>{this.toggle()}}
            className={'modal-user-container'}
            size='lg'
             centered>
                
            <ModalHeader toggle={()=>{this.toggle()}}>Edit user</ModalHeader>
            <ModalBody>
                <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input type='text' onChange={(evvent)=> {this.handleOnChangeInput(evvent,"email")}} value={this.state.email} disabled></input>
                        </div>
                        <div className='input-container'>
                            <label>password</label>
                            <input type='password' onChange={(evvent)=> {this.handleOnChangeInput(evvent,"password")}} value={this.state.password} disabled></input>
                        </div>
                        <div className='input-container'>
                            <label>FirstName</label>
                            <input type='text' onChange={(evvent)=> {this.handleOnChangeInput(evvent,"firstName")}}value={this.state.firstName}></input>
                        </div>
                        <div className='input-container'>
                            <label>LastName</label>
                            <input type='text' onChange={(evvent)=> {this.handleOnChangeInput(evvent, "lastName")}}value={this.state.lastName}></input>
                        </div>
                        <div className='input-container'>
                            <label>Address</label>
                            <input type='text' onChange={(evvent)=> {this.handleOnChangeInput(evvent,"address")}} value={this.state.address}></input>
                        </div>
                </div>


            </ModalBody>
            <ModalFooter>
          <Button color="primary" className='m' onClick={()=>{this.handleSaveUser()}}>Save
            Change
          </Button>{' '}
          <Button color="secondary" onClick={()=>{this.toggle()}}>
            Close
          </Button>
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
