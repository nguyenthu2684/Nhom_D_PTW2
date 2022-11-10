import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';





class About extends Component {

    render() {
        
        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                       Truyền thông nói về BookingCare
                </div>
                <div className='section-about-content'>
                      <div className='section-left'>
                      <iframe width="100%" height="400px" src="https://www.youtube.com/embed/i5TXm_PGIBY" title="HỌC CÁC KỸ THUẬT ĐỠ BÓNG QUA NGƯỜI BƯỚC 1 | Tungage" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      </div>
                      <div className='section-right'>
                        <p>HỌC CÁC KỸ THUẬT ĐỠ BÓNG QUA NGƯỜI BƯỚC 1 | Tungage
* *  Như thường lệ thì hãy quay lại video tập luyện và gửi về email: tungagefreestyle@gmail.com để xuất hiện trên video kế tiếp nhé.
* Tham gia cộng đồng đam mê kỹ thuật bóng đá Phủi</p>

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
