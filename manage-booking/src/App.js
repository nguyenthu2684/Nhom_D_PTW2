import { Routes, Route } from 'react-router-dom'
import React, { useState, Component } from 'react';
import './App.css';
import './pages/login/login.css';
import './pages/login/login'
import Login from './pages/login/login';


function App() {

  return (

    <div className='App'>{
      <Routes>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    }
    </div>

  );
}



export default App;
