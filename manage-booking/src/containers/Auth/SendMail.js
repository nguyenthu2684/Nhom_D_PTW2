import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { KeyCodeUtils, LanguageUtils } from "../../utils";
import './SendMail.scss';

import { handleCheckEmail, handleLoginApi } from '../../services/userService';
import { Link } from 'react-router-dom';



class SendMail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            errMessage: ''
        }
    }


    handleOnchangeEmail = ({target}) => {
        this.setState({
            email: target.value
        })
    }

    handleClickResetPassword = async () => {
        const { email } = this.state;
        console.log(email);

        const res = await handleCheckEmail(email);
        console.log({
            res,
        })
    }

    render() {
        return (
            <div className='fogotpass-background'>
                <div className='fogotpass-container'>
                    <div className='fogotpass-content row'>
                        <div className='col-12 text-fogotpass'>Forgot PassWord</div>
                        <div className='col-12 form-group fogotpass-input'>
                            <lable>Email:</lable>
                            <input type='email' className='form-control' placeholder='Enter your email' value={this.state.email} onChange={(event) => this.handleOnchangeEmail(event)}></input>
                        </div>
                        <div className='col-12'>
                            <button className='btn-fogot-pass' onClick={() => this.handleClickResetPassword()}>Confirm reset password</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(SendMail);
