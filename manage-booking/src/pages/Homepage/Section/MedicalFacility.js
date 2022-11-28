import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './MedicalFacility.scss';

import { FormattedMessage } from 'react-intl';

import Slider from "react-slick";



class MedicalFacility extends Component {

    render() {
       
      

        return (
            <div className='section-share section-medical-facility'>
            <div className='section-content'>
                <div className='section-header'>
                    <span className='title-section'>
                    <div><FormattedMessage id="homeheader.Popularspecialties"></FormattedMessage></div>
                    </span>
                    {/* <button className='btn-section'>Xem them</button> */}
                </div>
                <div className='section-body'>
                    <Slider {...this.props.settings}>
                  <div className='section-customize'>
                        <div className='bg-image section-medical-facility'/>
                        <div>
                        <div><FormattedMessage id="homeheader.Musculoskeletal"></FormattedMessage></div>

                        </div>
                  </div>
                  <div className='section-customize'>
                        <div className='bg-image section-medical-facility'/>
                         <div>
                        <div><FormattedMessage id="homeheader.DepartmentofNeurology"></FormattedMessage></div>

                         </div>
                  </div>
                  <div className='section-customize'>
                        <div className='bg-image section-medical-facility'/>
                         <div>
                        <div><FormattedMessage id="homeheader.Gastroenterology"></FormattedMessage></div>

                         </div>
                  </div>
                  <div className='section-customize'>
                        <div className='bg-image section-medical-facility'/>
                         <div>
                        <div><FormattedMessage id="homeheader.cardiology"></FormattedMessage></div>

                         </div>
                  </div>
                  <div className='section-customize'>
                        <div className='bg-image section-medical-facility'/>
                         <div>
                        <div><FormattedMessage id="homeheader.Otorhinolaryngology"></FormattedMessage></div>

                         </div>
                  </div>
                  <div className='section-customize'>
                        <div className='bg-image section-medical-facility'/>
                         <div>
                         <div><FormattedMessage id="homeheader.Otorhinolaryngology"></FormattedMessage></div>
                         </div>
                  </div>
                    </Slider>

                </div>
            </div>
        </div>
    
        );
    }

}

export default(MedicalFacility)

// const mapStateToProps = state => {
//     return {
//         isLoggedIn: state.user.isLoggedIn
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
