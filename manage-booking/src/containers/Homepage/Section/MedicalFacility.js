import axios from "../../../axios";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss';

import { FormattedMessage } from 'react-intl';

import Slider from "react-slick";



class MedicalFacility extends Component {

  //Khai báo
  constructor(props) {
    super(props);
    this.state = {
      bookingData: [],
    };
  }

  //ComDiMounts
  async componentDidMount() {
      let res = await axios.get("/api/post/getAll");
      this.setState({
        bookingData: res,
      });
      console.log("res:", res);
    }
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.bookingData !== this.state.bookingData) {
    }
  }

  render() {
    let { bookingData } = this.state;
    console.log(this.state)
    return (
      <>
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
                  <div className='bg-image section-medical-facility' />
                  <div>
                    <div><FormattedMessage id="homeheader.Musculoskeletal"></FormattedMessage></div>

                  </div>
                </div>
                <div className='section-customize'>
                  <div className='bg-image section-medical-facility' />
                  <div>
                    <div><FormattedMessage id="homeheader.DepartmentofNeurology"></FormattedMessage></div>

                  </div>
                </div>
                <div className='section-customize'>
                  <div className='bg-image section-medical-facility' />
                  <div>
                    <div><FormattedMessage id="homeheader.Gastroenterology"></FormattedMessage></div>

                  </div>
                </div>
                <div className='section-customize'>
                  <div className='bg-image section-medical-facility' />
                  <div>
                    <div><FormattedMessage id="homeheader.cardiology"></FormattedMessage></div>

                  </div>
                </div>
                <div className='section-customize'>
                  <div className='bg-image section-medical-facility' />
                  <div>
                    <div><FormattedMessage id="homeheader.Otorhinolaryngology"></FormattedMessage></div>

                  </div>
                </div>
                <div className='section-customize'>
                  <div className='bg-image section-medical-facility' />
                  <div>
                    <div><FormattedMessage id="homeheader.Otorhinolaryngology"></FormattedMessage></div>
                  </div>
                </div>
              </Slider>

            </div>
          </div>
        </div>


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
                  <div className='bg-image section-medical-facility' />
                  <div>
                    <div><FormattedMessage id="homeheader.Musculoskeletal"></FormattedMessage></div>
                  </div>
                </div>
                <div className='section-customize'>
                  <div className='bg-image section-medical-facility' />
                  <div>
                    <div><FormattedMessage id="homeheader.DepartmentofNeurology"></FormattedMessage></div>

                  </div>
                </div>
                <div className='section-customize'>
                  <div className='bg-image section-medical-facility' />
                  <div>
                    <div><FormattedMessage id="homeheader.Gastroenterology"></FormattedMessage></div>

                  </div>
                </div>
                <div className='section-customize'>
                  <div className='bg-image section-medical-facility' />
                  <div>
                    <div><FormattedMessage id="homeheader.cardiology"></FormattedMessage></div>

                  </div>
                </div>
                <div className='section-customize'>
                  <div className='bg-image section-medical-facility' />
                  <div>
                    <div><FormattedMessage id="homeheader.Otorhinolaryngology"></FormattedMessage></div>

                  </div>
                </div>
                <div className='section-customize'>
                  <div className='bg-image section-medical-facility' />
                  <div>
                    <div><FormattedMessage id="homeheader.Otorhinolaryngology"></FormattedMessage></div>
                  </div>
                </div>
              </Slider>

            </div>
          </div>
        </div>

//3
        <div className='section-share section-medical-facility'>
          <div className='section-content'>
            <div className='section-header'>
              <span className='title-section'>
                <div><FormattedMessage id="homeheader.Post"></FormattedMessage></div>
              </span>
              {/* <button className='btn-section'>Xem them</button> */}
            </div>
            <div className='section-body'>
              <Slider {...this.props.settings}>
              {bookingData && bookingData.length > 0 && bookingData.map((item, index) => {
                  return (
                    <>
                      <div className='section-customize ' id={index} >
                      <div className='bg-image'>  <img src={item.img}></img>  </div>
                      <div>
                        <div>{item.namePost}</div>
                      </div>
                    </div>
                    </> );
                })}

              </Slider>

          </div>
        </div>
      </div>     
       

      </>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
