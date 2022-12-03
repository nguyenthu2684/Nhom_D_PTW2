import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { KeyCodeUtils, LanguageUtils } from "../../utils";
import './ChangePassWord.scss';

import { handleLoginApi, handleResetPassword } from '../../services/userService';
import { Link, Redirect } from 'react-router-dom';



class ChangePassWord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mailEnc: '',
            username: '',
            password: '',
            isShowPasswords: false,
            errMessage: ''
        }
    }


    componentDidMount() {

        const authResult = new URLSearchParams(window.location.search);
        const mailEnc = authResult.get('m');

        // spread data es6.
        this.setState((prev) => ({
            ...prev,
            mailEnc,
        }))
    }

    handleOnchangePassword = (event) => {
        this.setState({
            //DCM lỗi
            password: event.target.value
        })

    }


    handleShowHidePassword = () => {
        this.setState({
            isShowPasswords: !this.state.isShowPasswords
        })
    }

    handleResetPassword = async () => {
        const res = await handleResetPassword(this.state.mailEnc, this.state.password);
        if (res.status === 200) {
            alert('change password success!')
            return window.location.href = '/login';
        }
    }


    render() {

        return (
            <div className='change-pass-background'>
                <div className='change-pass-container'>
                    <div className='change-pass-content row'>
                        <div className='col-12 text-change-pass'>Reset PassWord</div>
                        <div className='col-12 form-group change-pass-input'>
                            <lable> New Password :</lable>
                            <div className='custon-input-password'>
                                <input className='form-control' type={this.state.isShowPasswords ? 'text' : 'password'} placeholder='Enter your password' onChange={(event) => this.handleOnchangePassword(event)}></input>
                                <span onClick={() => { this.handleShowHidePassword() }}>
                                    <i className={this.state.isShowPasswords ? 'far fa-eye' : 'far fa-eye-slash'}></i>
                                </span>
                            </div>
                        </div>
                        <div className='col-12 form-group change-pass-input'>
                            <lable> Confirm PassWord</lable>
                            <div className='custon-input-password'>
                                <input className='form-control' type={this.state.isShowPasswords ? 'text' : 'password'} placeholder='Enter your password' onChange={(event) => this.handleOnchangePassword(event)}></input>
                                <span onClick={() => { this.handleShowHidePassword() }}>
                                    <i className={this.state.isShowPasswords ? 'far fa-eye' : 'far fa-eye-slash'}></i>
                                </span>
                            </div>
                        </div>

                        <div className='col-12' style={{ color: 'red' }}>
                            {this.state.errMessage}

                        </div>


                        <div className='col-12'>

                            <button className='btn-change-pass' onClick={() => this.handleResetPassword()}>Reset PassWord</button>

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

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassWord);
