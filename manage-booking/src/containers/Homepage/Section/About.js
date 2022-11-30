import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';





class About extends Component {

    render() {
        
        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                <div><FormattedMessage id="homeheader.infoBooking"></FormattedMessage></div>
                       
                </div>
                <div className='section-about-content'>
                      <div className='section-left'>
                      <iframe width="100%" height="400px" src="https://www.youtube.com/embed/FyDQljKtWnI" title="HỌC CÁC KỸ THUẬT ĐỠ BÓNG QUA NGƯỜI BƯỚC 1 | Tungage" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      </div>
                      <div className='section-right'>
                        <p>Tải ứng dụng BookingCare cho điện thoại hoặc máy tính bảng: AndroidiPhone/iPadKhác</p>

                       </div>
                </div>
            </div>
        
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
