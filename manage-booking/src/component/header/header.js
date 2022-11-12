import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../img/logo.png';
function HeaderComponent  ()  {
    return (
        <>
       <div className='container'> 

            <nav className="navbar navbar-expand-lg bg-white ">
            <img id='logo' src={logo} alt={"logo"}/> 
               
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a className="nav-link" href="./">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./"> <span className='icon'> <FontAwesomeIcon icon={faUser} /></span>   Đăng nhập </a>
                        </li>
                       
                    </ul>
                   
                </div>
            </nav>
         
            </div>
        </>
    );
}

export default HeaderComponent;