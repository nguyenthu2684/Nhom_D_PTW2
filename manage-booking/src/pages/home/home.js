import React from 'react';
import './home.css';
import logo from '../img/logo.png';
import coxuong from '../img/120331-co-xuong-khop.png';
import timmach from '../img/120741-tim-mach.png';
import tieuhoa from '../img/120933-tieu-hoa.png';
import thankinh from '../img/121042-than-kinh.png';
import baiviet1 from '../img/232320-adn-9.png';
import baiviet2 from '../img/174210-review-phong-kham-da-lieu-thai-ha.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import video from '../img/video.mp4'
import img1 from '../img/cuc-cong-nghe-thong-tin-bo-y-te-2.png'
import img2 from '../img/infonet.png'
import img3 from '../img/suckhoedoisong.png'
import img4 from '../img/vtv1.png'
import img5 from '../img/vnexpress.png'
import img6 from '../img/infonet.png'
import imgct1a from '../img/140801-test-covid.png'
import imgct1b from '../img/140432-fskin.png'
import imgct1c from '../img/170022-kit-test-nhanh.png'
import imgct1d from '../img/174941-114730-uu-dai-phau-thuat-tat-khuc-xa-benh-vien-mat-dnd .png'

function HomePage() {
    return (
        <div className='container'>

            <h1 className='tieude'>Nền tảng y tế
                <br />
                <b>chăm sóc sức khỏe toàn diện</b>
            </h1>         
            <div className='search'>
                <span className='iconsearch'> <FontAwesomeIcon id='iconsearch' icon={faSearch} > </FontAwesomeIcon></span>
           
                <input type="text" class="form-control" placeholder="Tìm phòng khám" />
             
            </div>
            <div className='luachon'>
                <ul>

                    <li> <a>Khám chuyên khoa</a> </li>
                    <li> <a>Khám từ xa </a> </li>
                    <li> <a>Khám tổng quát</a> </li>
                    <li> <a>Khám nha khoa</a> </li>
                    <li> <a>Sản phẩm y tế</a> </li>
                    <li> <a>Gói phẩu thuật</a> </li>
                </ul>
            </div>
            <div className='content-1'>
                <div class="row">
                    <div class="col-md-3">
                        <img id='img-ct1' src={imgct1a} alt={"logo"} />

                        <ul>
                            <li> <a>khám chuyên khoa</a> </li>
                            <li> <a>khám từ xa </a> </li>
                            <li> <a>khám tổng quát</a> </li>

                        </ul>
                        <a className='xemct'>Xem chi tiết<FontAwesomeIcon icon={faAngleRight} > </FontAwesomeIcon></a>
                    </div>
                    <div class="col-md-3">
                        <img id='img-ct1' src={imgct1b} alt={"imgct1b"} />

                        <ul>
                            <li> <a>khám chuyên khoa</a> </li>
                            <li> <a>khám từ xa </a> </li>
                            <li> <a>khám tổng quát</a> </li>

                        </ul>
                        <a className='xemct'>Xem chi tiết <FontAwesomeIcon icon={faAngleRight} > </FontAwesomeIcon></a>
                    </div>
                    <div class="col-md-3">
                        <img id='img-ct1' src={imgct1c} alt={"imgct1c"} />

                        <ul>
                            <li> <a>khám chuyên khoa</a> </li>
                            <li> <a>khám từ xa </a> </li>
                            <li> <a>khám tổng quát</a> </li>

                        </ul>
                        <a className='xemct'>Xem chi tiết <FontAwesomeIcon icon={faAngleRight} > </FontAwesomeIcon></a>
                    </div>
                    <div class="col-md-3 ">
                        <div className='flex'>
                        <img id='img-ct1' src={imgct1d} alt={"imgct1d"} />
                        <button class="w3-button w3-display-right" onclick="plusDivs(+1)">&#10095;</button>
                        </div>
                        <ul>
                            <li> <a>khám chuyên khoa</a> </li>
                            <li> <a>khám từ xa </a> </li>
                            <li> <a>khám tổng quát</a> </li>

                        </ul>
                       
                        <a className='xemct'>Xem chi tiết <FontAwesomeIcon icon={faAngleRight} > </FontAwesomeIcon></a>
                        {/* <button class="w3-button w3-display-left" onclick="plusDivs(-1)">&#10094;</button> */}
                        
                    </div>
                    
                </div>
            </div>
            <div className='content-2'>
                <div className='title-2'>
                    <h3> Chuyên khoa phổ biển</h3>
                    <button>
                        Xem thêm
                    </button>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <img id='xuongkhop' src={coxuong} alt={"coxuong"} />
                        <br />
                        <a >Cơ xương khớp</a>
                    </div>
                    <div class="col-md-3">
                        <img id='thankinh' src={thankinh} alt={"thankinh"} />
                        <br />
                        <a>Thần kinh</a>
                    </div>
                    <div class="col-md-3">
                        <img id='tieuhoa' src={tieuhoa} alt={"tieuhoa"} />
                        <br />
                        <a>Tiêu hóa</a>
                    </div>
                    <div class="col-md-3">
                        
                        <div className='flex'>
                        <img id='timmach' src={timmach} alt={"timmach"} />
                        <button class="w3-button w3-display-right" onclick="plusDivs(+1)">&#10095;</button>
                        </div>
                        <br />
                        <a>Tim mạch</a>
                    </div>
                </div>
            </div>
            <div className='content-3'>

                <div class="row">
                    <div class="col-md-6">
                        <video width="400" height="200" controls >
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>
                    <div class="col-md-6">
                        <a> <i className='img-ct3'><img id=' ' src={img1} alt={"img1"} />  </i></a>
                        <a> <i className='img-ct3'><img id=' ' src={img2} alt={"img2"} /> </i></a>
                        <a> <i className='img-3ct'> <img id=' ' src={img3} alt={"img3"} /></i></a>

                        <a> <i className='img-ct3'> <img id=' ' src={img4} alt={"img4"} /></i></a>
                        <a> <i className='img-ct3'> <img id=' ' src={img5} alt={"img5"} /></i></a>
                        <a> <i className='img-ct3'><img id=' ' src={img6} alt={"img6"} /> </i></a>
                    </div>

                </div>
            </div>
            <div className='content-4'>
                <div className='title-2'>
                    <h3> Cẩm nang</h3>

                </div>
                <div class="row">
                    <div class="col-md-6 camnang">

                        <img id='baiviet' src={baiviet1} alt={"baiviet1"} />


                        <a>Điều trị tàn nhang bao nhiêu tiền? </a>
                    </div>
                    <div class="col-md-6 camnang">
                    <div className='flex'>
                        <img id='baiviet' src={baiviet2} alt={"baiviet2"} />


                       
                       
                        <a>Review Phòng Khám Da liễu Thái Hà </a>
                        <button class="w3-button w3-display-right" onclick="plusDivs(+1)">&#10095;</button>
                        </div>
                    </div>

                </div>
            </div>
          
        </div>

    );
}

export default HomePage;