// import axios from "axios";
import axios from "../../axios";
import React from "react";
import "./bookingPage.scss";
class BookingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingData: [],
    };
  }
  async componentDidMount() {
    let res = await axios.get("/api/user/getUserDoctor");
    this.setState({
      bookingData: res,
    });
  }
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.bookingData !== this.state.bookingData) {
    }
  }

  render() {
    let { bookingData } = this.state;
    console.log("check state", this.state);
    return (
      <>
        <div class="container">
          <div class="imformation">
            <div class="tenKhoa">
              <h2>Cơ Xương Khớp</h2>
            </div>
            <div class="noiDung">
              <p>
                <b>Bác sĩ Cơ Xương Khớp giỏi</b>
                Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt
                Nam:
                <ul class="param">
                  <li>
                    Các chuyên gia có quá trình đào tạo bài bản, nhiều kinh
                    nghiệm
                  </li>
                  <li>
                    Các giáo sư, phó giáo sư đang trực tiếp nghiên cứu và giảng
                    dạy tại Đại học Y khoa Hà Nội
                  </li>
                  <li>
                    Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu Khoa
                    Cơ Xương Khớp - Bệnh viện Bạch Mai, Bệnh viện Hữu nghị Việt
                    Đức,Bệnh Viện E.
                  </li>
                  <li>
                    Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp
                    hội Cơ Xương Khớp, Hội Thấp khớp học,...
                  </li>
                  <li>
                    Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân,
                    Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...
                  </li>
                </ul>
                {/* <!-- <b>Bệnh Cơ Xương Khớp</b>
                <ul class="param">
                    <li>Gout</li>
                    <li>Thoái hóa khớp: khớp gối, cột sống thắt lưng, cột sống cổ</li>
                    <li>Viêm khớp dạng thấp, Viêm đa khớp, Viêm gân</li>
                    <li>Tràn dịch khớp gối, Tràn dịch khớp háng, Tràn dịch khớp khủy, Tràn dịch khớp vai</li>
                    <li>Loãng xương, đau nhức xương</li>
                    <li>Viêm xương, gai xương</li>
                    <li>Viêm cơ, Teo cơ, chứng đau mỏi cơ</li>
                    <li>Yếu cơ, Loạn dưỡng cơ</li>
                    <li>Các chấn thương về cơ, xương, khớp</li>
                    <li>...</li>
                </ul> --> */}
              </p>
              <a href="#" id="load-more">
                Xem thêm
                <span class="loading"></span>
              </a>
            </div>
          </div>
          {bookingData &&
            bookingData.length > 0 &&
            bookingData.map((item, index) => {
              return (
                <div class="row bsi">
                  <div class="col-md-6">
                    <div class="row ">
                      <div class="col-md-2">
                        <img
                          src="https://cdn.bookingcare.vn/fr/w200/2018/04/09/151800292142135730131997187173031663525568184320n.jpg" width="80" height="80" alt="#" ></img> <a href="#">xem thêm</a>
                      </div>
                      <div class="col-md-10">
                        <div class="thongTin">
                          <a href="#" class="tenBacSi">
                            {item.degree} {item.fullName}
                          </a>
                          <div class="thongTinThem">
                          {item.describe}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="dropdown">
                      <button
                        type="button"
                        class="btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        Thứ 2 - 14/11
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">
                            Thứ 3 - 15/11
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Thứ 4 - 16/11
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Thứ 5 - 17/11
                          </a>
                        </li>
                      </ul>
                    </div>
                    <p>LỊCH KHÁM</p>
                    <div class="row">
                      <div class="col-md-3 bttime">08:00 - 08:30</div>
                      <div class="col-md-3 bttime">08:30 - 09:00</div>
                      <div class="col-md-3 bttime">09:00 - 09:30</div>
                    </div>
                  </div>
                </div>
              );
            })}

          {/* <div class="row bsi">
            <div class="col-md-6 ">
              <div class="row">
                <div class="col-md-2">
                  <img
                    src="https://cdn.bookingcare.vn/fr/w200/2019/12/31/161245-pgs-vu-thi-thanh-thuy.jpg"
                    class="luoi"
                    width="80"
                    height="80"
                    alt="#"
                  ></img>
                  <a href="#">xem thêm</a>
                </div>
                <div class="col-md-10">
                  <div class="thongTin">
                    <div class="tenBacSi">
                      Phó Giáo sư, Tiến sĩ Vũ Thị Thanh Thủy
                    </div>
                    <div class="thongTinThem">
                      Nguyên Trưởng khoa Cơ xương khớp, Bệnh viện Bạch Mai
                      Nguyên Trưởng khoa Cơ - Xương - Khớp, Bệnh viện Bạch Mai
                      Chủ tịch Hội loãng xương Hà Nội Bác sĩ nhận bệnh nhân từ
                      18 tuổi trở lên
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 ">
              <div class="dropdown">
                <button
                  type="button"
                  class="btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Thứ 2 - 14/11
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Thứ 3 - 15/11
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Thứ 4 - 16/11
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Thứ 5 - 17/11
                    </a>
                  </li>
                </ul>
              </div>
              <p>LỊCH KHÁM</p>
              <div class="row">
                <div class="col-md-3 bttime">08:00 - 08:30</div>
                <div class="col-md-3 bttime">08:30 - 09:00</div>
                <div class="col-md-3 bttime">09:00 - 09:30</div>
              </div>
            </div>
          </div> */}
        </div>
      </>
    );
  }
}

export default BookingPage;
