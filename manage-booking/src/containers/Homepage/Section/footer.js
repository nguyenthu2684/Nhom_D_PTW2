import React from 'react';
import './footer.css';
import logo from '../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLocationDot ,faPhone} from '@fortawesome/free-solid-svg-icons';
function FooterComponent() {
    return (
        <footer class="footer-section">
        <div class="container">
            
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                            <img id='logo' src={logo} alt={"logo"}/> 
                            </div>
                            <div class="footer-title">
                             <h3>Nhóm D</h3>
                            </div>
                            <div class="footer-infor">
                                
                               <span> <a href="#"> <span className='iconFooter'><FontAwesomeIcon icon={ faLocationDot} /></span> 123 Linh Đông, Thủ Đức </a></span>
                               <br/>
                               <span> <a href="#"> <span className='iconFooter'><FontAwesomeIcon icon={faPhone} /></span>Số DT 012345678</a></span> 
                           
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Thông tin</h3>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">about</a></li>
                                <li><a href="#">services</a></li>                              
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">About us</a></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Sức khỏe</h3>                                             
                                <p className='information-text'>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                <h3>Dinh dưỡng</h3>                                             
                                <p className='information-text'>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>      
                                    <h3>Vitamin</h3>                                             
                                <p className='information-text'>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </footer>
    );
}

export default FooterComponent;

