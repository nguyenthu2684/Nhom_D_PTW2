import React, { Component } from 'react';
import { connect } from 'react-redux';
import './InfoDoctor.scss';
import axios from 'axios';
import LikeAndShare from '../SocailPlugin/LikeAndShare';






class ManagerDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            managerData: [],
        };

    }
    async componentDidMount() {
        let res = await axios.get('api/specialist/getAll')
        this.setState({
            managerData: res,
        });
        console.log('check data', res)

    }


    render() {
        let currentURL = process.env.REACT_APP_IS_LOCALHOST == true ?
            "https://main--booking-doctor.netlify.app/" : window.location.href;

        return (
            // <div className='like-share-plugin'>
            //     <LikeAndShare
            //     dataHref= {currentURL}
            //     />
            // </div>
            <div className='doctor'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-2'>
                            <div className='doctorImg'></div>
                        </div>
                        <div className='col-10'>
                            <div className='doctorText'>Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng</div>
                            <div>Nguyên Trưởng phòng chỉ đạo tuyến tại Bệnh viện Da liễu Trung ương
                                Bác sĩ từng công tác tại Bệnh viện Da liễu Trung ương
                                Nguyên Tổng Thư ký Hiệp hội Da liễu Việt Nam</div>

                        </div>
                        <div className='likeandshare'>
                            <div class="fb-like" data-href="https://main--booking-doctor.netlify.app/" data-width="" data-layout="standard" data-action="like" data-size="small" data-share="true"></div>

                        </div>

                    </div>

                    <div className='row'>
                        <div className='col-12'>
                            <div className='infoOne'>
                                <div className='level'>
                                    Phó Giáo sư, Tiến sĩ, Bác sĩ Cao cấp Nguyễn Duy Hưng
                                </div>
                                <ul>
                                    <li>Phó giáo sư, Tiến sĩ, Bác sĩ cao cấp chuyên khoa Da liễu</li>
                                    <li>Bác sĩ từng công tác tại Bệnh viện Da liễu Trung ương</li>
                                    <li>Nguyên Trưởng phòng chỉ đạo tuyến tại Bệnh viện Da liễu Trung ương</li>
                                    <li>Đạt chứng chỉ Diploma về Da liễu tại Viện da liễu Băng Cốc - Thái Lan</li>
                                    <li>Bác sĩ thường xuyên tham gia các Hội thảo, Hội nghị Quốc tế về Da liễu</li>
                                    <li>Hội viên của Hội Da liễu Đông Nam Á, Châu Á và Thế giới</li>
                                    <li>Giảng viên bộ môn Da liễu tại Đại Học Y Hà Nội</li>
                                    <li>Trưởng Bộ môn Da liễu, Trường Đại học Kinh doanh và Công nghệ</li>
                                    <li>Tốt nghiệp Đại học Y Hà Nội (1977)</li>
                                    <li>Nguyên Tổng Thư ký Hiệp hội Da liễu Việt Nam</li>

                                </ul>
                            </div>
                            <div className='infoOne'>
                                <div className='level'>
                                Phó Giáo sư khám và điều trị
                                </div>
                                <div className='drug'>
                                Các bệnh lý về chuyên sâu về da liễu người lớn và trẻ em
                                </div>
                                <ul>
                                    <li>Trứng cá thông thường thanh thiếu niên, người lớn, trứng cá do thuốc, mỹ phẩm, do bôi corticord, các thể bệnh trứng cá nặng, trứng cá đỏ (rosacea)</li>
                                    <li>Điều trị da phục hồi da tổn hại do trứng cá, sẹo trứng cá</li>
                                    <li>Các bệnh lý da mặt: viêm da dị ứng, tổn hại da do sử dụng mỹ phẩm, do corticord, lão hóa da</li>
                                    <li>Đạt chứng chỉ Diploma về Da liễu tại Viện da liễu Băng Cốc - Thái Lan</li>
                                    <li>Nám da, tàn nhang, sạm da, các bệnh da tăng sắc tố sau viêm, sau trứng cá, do mỹ phẩm</li>
                                    <li>Viêm da cơ địa trẻ em và người lớn</li>
                                    <li>Viêm da dị ứng, viêm da tiếp xúc, viêm da dầu</li>
                                    <li>Các bệnh da do nhiễm khuẩn: Viêm nang lông, chốc, nhọt, viêm da mủ</li>
                                    <li>Các bênh da do nấm: Nấm nông da, nấm da đầu, nấm móng tay, móng chân, lang ben, nấm men niêm mạc</li>
                                    <li>U lành tính của da: Đồi mồi, u cổ tuyến mồ hôi, u mềm lây, u mềm treo, u tuyến bã</li>
                                    <li>Chăm sóc da (skincare)  cho viêm da mặt, trứng cá, liệu trình trị nám, lăn kim, huyết tương giàu tiểu cầu, trị sẹo trứng cá, laser, plasma trị u lành da, nám, đồi mồi</li>

                                </ul>
                            </div>
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManagerDoctor);
