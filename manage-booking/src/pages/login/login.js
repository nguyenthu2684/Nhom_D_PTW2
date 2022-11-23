import React, { Component } from 'react'
import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isShowPassword: false
    }
  }
  handelOnChangeUserName = (event) => {
    this.setState({
      username: event.target.value
    })

  }
  handelOnChangePassWord = (event) => {
    this.setState({
      password: event.target.value
    })

  }
  handelLogin = () => {
    console.log('username: ', this.state.username, 'password: ', this.state.password)
    console.log('all state', this.state)
  }
  handelShowHidePassWord = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword
    })
  }
  render() {
    return (
      <>
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form>
          <h3>Login Here</h3>
          <label className="form-label">Username</label>
          <input className='form-control'
            type="text"
            placeholder="ngocyen@gmail.com"
            value={this.state.username}
            onChange={(event) => {this.handelOnChangeUserName(event)}}
          />
          <label className='form-label'>Password</label>
          <div className='custom-input-password'>
            <input
              className='form-control'
              type={this.state.isShowPassword ? 'text' : 'password'}
              placeholder="**********************"            
              onChange={(event) => {this.handelOnChangePassWord(event)}}
            />
            <span
              onClick={() => {this.handelShowHidePassWord() }}>
              {/* <FontAwesomeIcon  icon={faEye}  id='eye'/>     */}
              <FontAwesomeIcon icon={this.state.isShowPassword ? faEye : faEyeSlash}  id='eye'/>         
            </span>
          </div>
          <div className='button'>
            <button type="submit" className='btn-login' onClick={() => { this.handelLogin() }}>Submit</button>
            <button type="" className='sign-up'>Sign Up</button>
          </div>
        </form>
      </>
    )
  }
}
export default Login