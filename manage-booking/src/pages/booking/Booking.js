import React from "react";
import Header from "../../component/Header";

// import ReactDOM from 'react-dom/client';

class Booking extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div>
        <div class="container">
      <div class="information-department">
        <h1>Tên khoa</h1>
        <p>Thông tin khoa khám</p>
      </div>
      <div class="form-information-doctor-time-medical-examination">
        <div class="row">
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-6">
                <img
                  src="https://cdn.bookingcare.vn/fr/w200/2018/04/09/151800292142135730131997187173031663525568184320n.jpg"
                  alt="img"/>
                <a href="https://bookingcare.vn/giao-su-tien-si-bac-si-tran-ngoc-an-d48.html?ck=1&dv=1">xem thêm</a>
              </div>
              <div class="col-md-6">
                <h2>Chức vị và tên bác sĩ</h2>
                <p>Thông tin bác sĩ</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <select name="time-date" id="time-date">
              <option value="volvo">weekdays - dd/MM</option>
              <option value="volvo">weekdays - dd/MM</option>
            </select>
            <p><i class="fas fa-calendar-alt"></i> LỊCH KHÁM</p>
            <button>TIME - TIME</button>
            <button>TIME - TIME</button>
            <button>TIME - TIME</button>
            <button>TIME - TIME</button>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    );
  }
}
export default Booking;
