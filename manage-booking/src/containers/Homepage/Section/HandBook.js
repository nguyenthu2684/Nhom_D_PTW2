import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './HandBook.scss';
import Slider from "react-slick";





class HandBook extends Component {

    render() {
        
        return (
            <div className='section-share section-handbook'>
                <div className='section-content'>
                    <div className='section-header'>
                        <span className='title-section'>Cẩm nang</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                      <div className='section-customize'>
                            <div className='bg-image section-handbook'/>
                            <div>Tạp chí cộng đồng</div>
                      </div>
                      <div className='section-customize'>
                            <div className='bg-image section-handbook'/>
                             <div>Nghiên cứu y học ở việt nam</div>
                      </div>
                      <div className='section-customize'>
                            <div className='bg-image section-handbook'/>
                             <div>Bệnh viện quân khu 7</div>
                      </div>
                      <div className='section-customize'>
                            <div className='bg-image section-handbook'/>
                             <div>Tạp chí cộng đồng</div>
                      </div>
                      <div className='section-customize'>
                            <div className='bg-image section-handbook'/>
                             <div>Nghiên cứu y học ở việt nam</div>
                      </div>
                      <div className='section-customize'>
                            <div className='bg-image section-handbook'/>
                             <div>Bệnh viện quân khu 7</div>
                      </div>
                      {/* <div className='section-customize'>
                            <div className='bg-image section-handbook'/>
                             <div>Co suong khop 1</div>
                      </div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
