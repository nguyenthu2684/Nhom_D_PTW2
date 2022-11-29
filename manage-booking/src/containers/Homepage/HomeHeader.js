import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import {LANGUAGE} from '../../utils';
import DetailDoctor from '../Paitent/Doctor/DetailDoctor';

import {changeLanguageApp} from '../../store/actions';
import { NavLink } from 'react-router-dom';


class HomeHeader extends Component {

    changeLanguage= (language) => {
        this.props.changeLanguageAppRedux(language);
    }

    // handViewDetailDoctor = (doctor) => {
    //    this.props.history.push(DetailDoctor);
    // }

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
                             <NavLink to='/detailDoctor'><b><FormattedMessage id="homeheader.speciality"></FormattedMessage></b></NavLink>
                             <div className='subs-title'>
                             <div><b><FormattedMessage id="homeheader.findspecialityDoctor"></FormattedMessage></b></div>

                             </div>
                        </div>
                         <div className='child-content'>
                             <div><b>
                             <div><FormattedMessage id="homeheader.HealthFacilities"></FormattedMessage></div>
                            </b></div>
                             <div className='subs-title'>
                             <div><b><FormattedMessage id="homeheader.chosseClinic"></FormattedMessage></b></div>

                             </div>

                        </div>
                         <div className='child-content'>
                             <div><b><FormattedMessage id="homeheader.doctor"></FormattedMessage></b></div>
                              <div><b></b></div>
                              <div className='subs-title'>
                             <div><b><FormattedMessage id="homeheader.goodDoctor"></FormattedMessage></b></div>
                                
                              </div>

                        </div>
                         <div className='child-content'>
                             <div><b><FormattedMessage id="homeheader.checkPackage"></FormattedMessage></b></div>
                              <div><b></b></div>
                              <div className='subs-title'>
                             <div><b><FormattedMessage id="homeheader.checkHeathy"></FormattedMessage></b></div>
                          


                              </div>
                        </div>
                    </div>

                    <div className='right-content'>
                        <div className='support'>
                            <i className='fas fa-question-circle'></i>
                            <div><b><FormattedMessage id="homeheader.Sport"></FormattedMessage></b></div>

                            <div className={language ===LANGUAGE.VI ? 'language-vi active': 'language-vi'}><span onClick={() => this.changeLanguage(LANGUAGE.VI)}>VN</span></div>
                            <div className={language ===LANGUAGE.EN ? 'language-en active': 'language-en'}><span onClick={() => this.changeLanguage(LANGUAGE.EN)}>EN</span></div>


                        </div>

                    </div>

                </div>

            </div>

            <div className='home-header-banner'>
                <div className='content-up'>
                <div className='tittle1'>
                <div><b><FormattedMessage id="homeheader.medicalBackground"></FormattedMessage></b></div>

                </div>
                <div className='tittle2'>
                <div><b><FormattedMessage id="homeheader.allCare"></FormattedMessage></b></div>
                    </div>       
                <div className='search'><i className='fas fa-search'></i><input type='text' placeholder='Tim phong kham benh'/></div>
                </div>
                <div className='content-down'>
                <div className='options'>
                    <div className='option-child'>
                        <div className='icon-child'><i class="fas fa-hospital"></i></div>
                        <div className='text-child'>
                        <div><FormattedMessage id="homeheader.Musculoskeletal"></FormattedMessage></div>
                        </div>
                    </div>
                    <div className='option-child'>
                        <div className='icon-child'><i class="fas fa-hospital"></i></div>
                        <div className='text-child'>
                        <div><FormattedMessage id="homeheader.DepartmentofNeurology"></FormattedMessage></div>

                        </div>
                    </div>
                    <div className='option-child'>
                        <div className='icon-child'><i class="fas fa-hospital"></i></div>
                        <div className='text-child'>
                        <div><FormattedMessage id="homeheader.Gastroenterology"></FormattedMessage></div>

                        </div>
                    </div>
                    <div className='option-child'>
                        <div className='icon-child'><i class="fas fa-hospital"></i></div>
                        <div className='text-child'>
                        <div><FormattedMessage id="homeheader.cardiology"></FormattedMessage></div>

                        </div>
                    </div>
                    <div className='option-child'>
                        <div className='icon-child'><i class="fas fa-hospital"></i></div>
                        <div className='text-child'>
                        <div><FormattedMessage id="homeheader.Otorhinolaryngology"></FormattedMessage></div>

                        
                        </div>
                    </div>
                    <div className='option-child'>
                        <div className='icon-child'><i class="fas fa-hospital"></i></div>
                        <div className='text-child'>
                        <div><FormattedMessage id="homeheader.spinedepartment"></FormattedMessage></div></div>
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
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language)=>dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
