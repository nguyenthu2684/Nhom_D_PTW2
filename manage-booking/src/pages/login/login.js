// import React, { useState, useEffect } from 'react'
// // import axios from 'axios';
// import { Form, useNavigate } from 'react-router-dom';
const Login = () => {
  return (
    <>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form method='POST'>
        <h3>Login Here</h3>
        <label className="email">Username</label>
        <input type="email" placeholder="ngocyen@gmail.com" id="email" name="email" />
        <label for="password">Password</label>
        <input type="password" placeholder="************************" id="password" name="password" />
        <div className='button'>
          <button type="submit" className='login'>Submit</button>
          <button type="" className='sign-up'>Sign Up</button>
        </div>
      </form>

    </>
  )
}
export default Login