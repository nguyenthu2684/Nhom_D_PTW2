import React from 'react';
import './home.css';
import logo from '../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import video from '../img/video.mp4'
 import img1 from '../img/cuc-cong-nghe-thong-tin-bo-y-te-2.png'
 import img2 from '../img/infonet.png'
 import img3 from '../img/suckhoedoisong.png'
 import img4 from '../img/vtv1.png'
 import img5 from '../img/vnexpress.png'
 import img6 from '../img/infonet.png'
import ReactCardSlider from 'react-card-slider-component';
// a slide object contains the image link, title and function/click event for when a user clicks on a card

function HomePage() {
    return (
        <div className='container'>

            <h1 className='tieude'>Nền tảng y tế
                <br />
                <b>chăm sóc sức khỏe toàn diện</b>
            </h1>

            <div className='search'>
                <FontAwesomeIcon icon={faSearch} > </FontAwesomeIcon>
                <input type="text" class="form-control" placeholder="Tìm phòng khám" />
            </div>
            <div className='luachon'>
                <ul>

                    <li> <a>khám chuyên khoa</a> </li>
                    <li> <a>khám từ xa </a> </li>
                    <li> <a>khám tổng quát</a> </li>
                    <li> <a>khám nha khoa</a> </li>
                    <li> <a>Sản phẩm y tế</a> </li>
                    <li> <a>Gói phẩu thuật</a> </li>
                </ul>
            </div>
            <div className='content-1'>
                <div class="row">
                    <div class="col-md-3">
                        <img id='logo' src={logo} alt={"logo"} />

                        <ul>
                            <li> <a>khám chuyên khoa</a> </li>
                            <li> <a>khám từ xa </a> </li>
                            <li> <a>khám tổng quát</a> </li>

                        </ul>
                        <a>Link</a>
                    </div>
                    <div class="col-md-3">
                        <img id='logo' src={logo} alt={"logo"} />

                        <ul>
                            <li> <a>khám chuyên khoa</a> </li>
                            <li> <a>khám từ xa </a> </li>
                            <li> <a>khám tổng quát</a> </li>

                        </ul>
                        <a>Link</a>
                    </div>
                    <div class="col-md-3">
                        <img id='logo' src={logo} alt={"logo"} />

                        <ul>
                            <li> <a>khám chuyên khoa</a> </li>
                            <li> <a>khám từ xa </a> </li>
                            <li> <a>khám tổng quát</a> </li>

                        </ul>
                        <a>Link</a>
                    </div>
                    <div class="col-md-3">
                        <img id='logo' src={logo} alt={"logo"} />

                        <ul>
                            <li> <a>khám chuyên khoa</a> </li>
                            <li> <a>khám từ xa </a> </li>
                            <li> <a>khám tổng quát</a> </li>

                        </ul>
                        <a>Link</a>
                    </div>
                </div>
            </div>
            <div className='content-2'>
                <div className='title-2'>
                    <h3> Bác sĩ từ xa</h3>
                    <button>
                        Xem thêm
                    </button>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <img id='logo' src={logo} alt={"logo"} />
                        <br />
                        <a>Link</a>
                    </div>
                    <div class="col-md-3">
                        <img id='logo' src={logo} alt={"logo"} />
                        <br />
                        <a>Link</a>
                    </div>
                    <div class="col-md-3">
                        <img id='logo' src={logo} alt={"logo"} />
                        <br />
                        <a>Link</a>
                    </div>
                    <div class="col-md-3">
                        <img id='logo' src={logo} alt={"logo"} />
                        <br />
                        <a>Link</a>
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
                        <a> <i className='img-ct3'><img id=' 'src={img1} alt={"img1"}/>  </i></a>
                        <a> <i className='img-ct3'><img id=' 'src={img2} alt={"img2"}/> </i></a>
                        <a> <i className='img-3ct'> <img id=' 'src={img3} alt={"img3"}/></i></a>
                       
                        <a> <i className='img-ct3'> <img id=' 'src={img4} alt={"img4"}/></i></a>
                        <a> <i className='img-ct3'> <img id=' 'src={img5} alt={"img5"}/></i></a>
                        <a> <i className='img-ct3'><img id=' 'src={img6} alt={"img6"}/> </i></a>
                    </div>

                </div>
            </div>
            <div className='content-4'>
                <div className='title-2'>
                    <h3> Bác sĩ nổi bật</h3>

                </div>
                <div class="row">
                    <div class="col-md-6">
                        <img id='logo' src={logo} alt={"logo"} />


                        <a>Link</a>
                    </div>
                    <div class="col-md-6">
                        <img id='logo' src={logo} alt={"logo"} />


                        <a>Link</a>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default HomePage;