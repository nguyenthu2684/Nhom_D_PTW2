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
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                      <div className='section-customize'>
                            <div className='bg-image section-specialty '/>
                            <h5>Kit test nước bọt</h5>
                            <ul>
                                <li>Kit test nhanh bằng nước bọt</li>
                                <li>Đơn giản, tiện lợi, chính xác</li>
                                <li>Được bộ y tế công nhận</li>
                            </ul>
                      </div>
                      <div className='section-customize'>
                            <div className='bg-image section-specialty '/>
                            <h5>Kit test nước bọt</h5>
                            <ul>
                                <li>Kit test nhanh bằng nước bọt</li>
                                <li>Đơn giản, tiện lợi, chính xác</li>
                                <li>Được bộ y tế công nhận</li>
                            </ul>
                      </div>
                      <div className='section-customize'>
                            <div className='bg-image section-specialty '/>
                            <h5>Kit test nước bọt</h5>
                            <ul>
                                <li>Kit test nhanh bằng nước bọt</li>
                                <li>Đơn giản, tiện lợi, chính xác</li>
                                <li>Được bộ y tế công nhận</li>
                            </ul>
                      </div>
                      <div className='section-customize'>
                            <div className='bg-image section-specialty '/>
                            <h5>Kit test nước bọt</h5>
                            <ul>
                                <li>Kit test nhanh bằng nước bọt</li>
                                <li>Đơn giản, tiện lợi, chính xác</li>
                                <li>Được bộ y tế công nhận</li>
                            </ul>
                      </div>
                      <div className='section-customize'>
                            <div className='bg-image section-specialty '/>
                            <h5>Kit test nước bọt</h5>
                            <ul>
                                <li>Kit test nhanh bằng nước bọt</li>
                                <li>Đơn giản, tiện lợi, chính xác</li>
                                <li>Được bộ y tế công nhận</li>
                            </ul>
                      </div>
                      <div className='section-customize'>
                            <div className='bg-image section-specialty '/>
                            <h5>Kit test nước bọt</h5>
                            <ul>
                                <li>Kit test nhanh bằng nước bọt</li>
                                <li>Đơn giản, tiện lợi, chính xác</li>
                                <li>Được bộ y tế công nhận</li>
                            </ul>
                      </div>
                      <div className='section-customize'>
                            <div className='bg-image section-specialty '/>
                            <h5>Kit test nước bọt</h5>
                            <ul>
                                <li>Kit test nhanh bằng nước bọt</li>
                                <li>Đơn giản, tiện lợi, chính xác</li>
                                <li>Được bộ y tế công nhận</li>
                            </ul>
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
