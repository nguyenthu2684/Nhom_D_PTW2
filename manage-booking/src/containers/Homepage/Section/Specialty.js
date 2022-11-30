import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';

import Slider from "react-slick";


import specailtyImg from '../../../assets/specialty/khoaps.jpg'


class Specialty extends Component {

    render() {
        
        return (
            <div className='section-share section.specialty'>
                <div className='section-content'>
                    <div className='section-header'>
                        <span className='title-section'>            
                        </span>
                        <button className='btn-section'>Xem them</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                      <div className='section-customize'>
                            <div className='bg-image section-specialty '/>
                            <div>Co suong khop 1</div>
                      </div>
                      <div className='section-customize'>
                            <div className='bg-image section-specialty '/>
                             <div>Co suong khop 1</div>
                      </div>
                      <div className='section-customize'>
                            <div className='bg-image section-specialty '/>
                             <div>Co suong khop 1</div>
                      </div>
                      <div className='section-customize'>
                            <div className='bg-image section-specialty '/>
                             <div>Co suong khop 1</div>
                      </div>
                      <div className='section-customize'>
                            <div className='bg-image section-specialty '/>
                             <div>Co suong khop 1</div>
                      </div>
                      <div className='section-customize'>
                            <div className='bg-image section-specialty '/>
                             <div>Co suong khop 1</div>
                      </div>
                      <div className='section-customize'>
                            <div className='bg-image section-specialty '/>
                             <div>Co suong khop 1</div>
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
