import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import {LANGUAGE} from '../../utils';

import {changeLanguageApp} from '../../store/actions';


class HomeHeader extends Component {

    changeLanguage= (language) => {
        this.props.changeLanguageAppRedux(language);
    }

    render() {
        let language = this.props.language;
       

        return (
            <React.Fragment>
            <div className="home-header-container">
                <div className='home-header-content'>
                    <div className='left-content'>
                        {/* <i className='fas fa-bars'></i> */}
                        <div className='header-logo size-logo'></div>

                        </div>
                    <div className='center-content'>
                        <div className='child-content'>
                             <div><b><FormattedMessage id="homeheader.speciality"></FormattedMessage></b></div>
                             <div className='subs-title'>Tìm bác sĩ theo chuyên khoa
                             </div>
                        </div>
                         <div className='child-content'>
                             <div><b>Cơ sở y tế</b></div>
                             <div className='subs-title'>Chọn bệnh viện phòng khám</div>

                        </div>
                         <div className='child-content'>
                              <div><b>Bác sĩ</b></div>
                              <div className='subs-title'>Chọn bác sĩ giỏi</div>

                        </div>
                         <div className='child-content'>
                              <div><b>Gói khám</b></div>
                              <div className='subs-title'>Khám sức khỏe tổng quát</div>
                        </div>
                    </div>

                    <div className='right-content'>
                        <div className='support'>
                            <i className='fas fa-question-circle'></i>
                            Ho tro
                            <div className={language ===LANGUAGE.VI ? 'language-vi active': 'language-vi'}><span onClick={() => this.changeLanguage(LANGUAGE.VI)}>VN</span></div>
                            <div className={language ===LANGUAGE.EN ? 'language-en active': 'language-en'}><span onClick={() => this.changeLanguage(LANGUAGE.EN)}>EN</span></div>


                        </div>

                    </div>

                </div>

            </div>

            <div className='home-header-banner'>
                <div className='content-up'>
                <div className='tittle1'>NỀN TẢNG Y TẾ</div>
                <div className='tittle2'>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>       
                <div className='search'><i className='fas fa-search'></i><input type='text' placeholder='Tim phong kham benh'/></div>
                </div>
                <div className='content-down'>
                <div className='options'>
                    <div className='option-child'>
                        <div className='icon-child'><i class="fas fa-hospital"></i></div>
                        <div className='text-child'>Khám Chuyên khoa</div>
                    </div>
                    <div className='option-child'>
                        <div className='icon-child'><i class="fas fa-hospital"></i></div>
                        <div className='text-child'>Khám Chuyên khoa</div>
                    </div>
                    <div className='option-child'>
                        <div className='icon-child'><i class="fas fa-hospital"></i></div>
                        <div className='text-child'>Khám Chuyên khoa</div>
                    </div>
                    <div className='option-child'>
                        <div className='icon-child'><i class="fas fa-hospital"></i></div>
                        <div className='text-child'>Khám Chuyên khoa</div>
                    </div>
                    <div className='option-child'>
                        <div className='icon-child'><i class="fas fa-hospital"></i></div>
                        <div className='text-child'>Khám Chuyên khoa</div>
                    </div>
                    <div className='option-child'>
                        <div className='icon-child'><i class="fas fa-hospital"></i></div>
                        <div className='text-child'>Khám Chuyên khoa</div>
                    </div>
                </div>       
                </div>
                


            </div>
            </React.Fragment>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language)=>dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
