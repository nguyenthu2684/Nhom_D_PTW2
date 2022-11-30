import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";



class OutStandingDoctor extends Component {

    render() {
       
      

        return (
            <div className='section-share section-outstanding-doctor'>
            <div className='section-content'>
                <div className='section-header'>
                    <span className='title-section'>Bác sĩ nổi bật tuần qua</span>
                    <button className='btn-section'>Xem thêm</button>
                </div>
                <div className='section-body'>
                    <Slider {...this.props.settings}>
                  <div className='section-customize'>
                    <div className='customize-border'>
                        <div className='outer-bg'>
                            <div className='bg-image section-outstanding-doctor'/>
                        </div>
                        <div className='positon text-center'>
                            <div>Giáo sư</div>
                            <div>Xương khớp</div>
                        </div>
                  </div>

                    </div>
                    <div className='section-customize'>
                    <div className='customize-border'>
                        <div className='outer-bg'>
                            <div className='bg-image section-outstanding-doctor'/>
                        </div>
                        <div className='positon text-center'>
                            <div>Bác sĩ</div>
                            <div>Thần kinh</div>
                        </div>
                  </div>

                    </div>
                    <div className='section-customize'>
                    <div className='customize-border'>
                        <div className='outer-bg'>
                            <div className='bg-image section-outstanding-doctor'/>
                        </div>
                        <div className='positon text-center'>
                            <div>Phó giáo sư</div>
                            <div>Nha khoa</div>
                        </div>
                  </div>

                    </div>
                    <div className='section-customize'>
                    <div className='customize-border'>
                        <div className='outer-bg'>
                            <div className='bg-image section-outstanding-doctor'/>
                        </div>
                        <div className='positon text-center'>
                            <div>Bác sĩ</div>
                            <div>Da liễu</div>
                        </div>
                  </div>

                    </div>
                    <div className='section-customize'>
                    <div className='customize-border'>
                        <div className='outer-bg'>
                            <div className='bg-image section-outstanding-doctor'/>
                        </div>
                        <div className='positon text-center'>
                            <div>Bác sĩ</div>
                            <div>Tim mạch</div>
                        </div>
                  </div>

                    </div>
                    <div className='section-customize'>
                    <div className='customize-border'>
                        <div className='outer-bg'>
                            <div className='bg-image section-outstanding-doctor'/>
                        </div>
                        <div className='positon text-center'>
                            <div>Bác sĩ</div>
                            <div>Thần kinh</div>
                        </div>
                  </div>

                    </div>
                    
                 
                    </Slider>

                </div>
            </div>
        </div>
    
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
