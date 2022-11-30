import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './HomeFooter.scss';

class HomeFooter extends Component {

    render() {

        return (
            <footer class="footer-section">
            <div class="container">
          
                <div class="row">
                    <div class="col-md-4">
                    <div class="footer-widget">
                            
                            <div className='footer-logo size-logo'></div>
                    
                            <div class="footer-title">
                             <h3>Nhóm D</h3>
                            </div>
                            <div class="footer-infor">
                                
                               <span> <a href="#"> <span className='iconFooter'><i class="fa-regular fa-location-dot"></i></span> 123 Linh Đông, Thủ Đức </a></span>
                              
                               <span> <a href="#"> <span className='iconFooter'></span>Số DT 012345678</a></span> 
                           
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                    <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3 className='inf'>Thông tin</h3>                         
                            <ul>
                                <li><a href="#">Trang chủ</a></li>
                                <li><a href="#">Về chúng tôi</a></li>
                                <li><a href="#">Liên hệ</a></li>                              
                                <li><a href="#">Điều khoản sử dụng</a></li>                           
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-4">.
                    <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Sức khỏe</h3>                                                                             
                                <p className='information-text'>Sức khỏe là vàng</p>
                                <h3>Dinh dưỡng</h3>                                             
                                <p className='information-text'>Dinh dưỡng là một phần quan trọng ảnh hưởng đến sức khỏe</p>      
                                <h3>Vitamin</h3>                                             
                                <p className='information-text'>Uống nhiều vitamin để khỏe hơn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
      
      </footer>

        );
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
