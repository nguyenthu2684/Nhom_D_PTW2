import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { KeyCodeUtils, LanguageUtils } from "../../utils";
import './Login.scss';

import { handleLoginApi } from '../../services/userService';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPasswords: false,
            errMessage: ''
        }
    }

    handleOnchangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })

    }
    handleOnchangePassword = (event) => {
        this.setState({
            //DCM lỗi
            password: event.target.value
        })

    }

    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
    
        try {
            const {data} = await handleLoginApi(this.state.username, this.state.password);
            
            if (data.errCode === 1) {
                this.setState({
                    errMessage: data.message
                })

                return;
            }

            if (data) {
                this.props.userLoginSuccess(data.user)
            }

        } catch (e) {
            if (e.response) {
                if (e.response.data) {
                    this.setState({
                        errMessage: e.response.data.message
                    })
                }
            }
            // console.log('result', e.response);
 
        }
       
    }
 
    handleShowHidePassword = () => {
        this.setState({
            isShowPasswords: !this.state.isShowPasswords
        })
    }

    render() {


        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <lable>Username:</lable>
                            <input type='text' className='form-control' placeholder='Enter your username' value={this.state.username} onChange={(event) => this.handleOnchangeUsername(event)}></input>
                        </div>
                        <div className='col-12 form-group login-input'>
                            <lable>Password:</lable>
                            <div className='custon-input-password'>
                                <input className='form-control' type={this.state.isShowPasswords ? 'text' : 'password'} placeholder='Enter your password' onChange={(event) => this.handleOnchangePassword(event)}></input>
                                <span onClick={() => { this.handleShowHidePassword() }}>
                                    <i class={this.state.isShowPasswords ? 'far fa-eye' : 'far fa-eye-slash'}></i>
                                </span>
                            </div>
                        </div>

                        <div className='col-12' style={{ color: 'red' }}>
                            {this.state.errMessage}

                        </div>
                        <div className='col-12'>
                            <button className='btn-login' onClick={() => { this.handleLogin() }}>Submit</button>
                            <button className='btn-sign'>Sign in</button>

                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),

        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
