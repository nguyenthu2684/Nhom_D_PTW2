// import axios from "axios";
import axios from "../../../axios";
import React from "react";
import "./confirmPage.scss";
class ConfirmPage extends React.Component {
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
                </div>
              );
            })}
        </div>
        </div>
      </>
    );
  }
}

export default ConfirmPage;
