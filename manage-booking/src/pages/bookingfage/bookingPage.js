// import axios from "axios";
import axios from "../../axios";
import React from "react";
// import Header from "../../component/Header";
import "./bookingPage.scss";
class BookingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingData: [],
      custonText: [],
      header: "",
      ttArr: [],
      visible: 4,
    };
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 25};
    });
  }

  async componentDidMount() {
    let httpht = window.location.href;
    let idS = httpht.slice(30, 32);
    let res = await axios.get("/api/user/getUserDoctor/" + idS);
    this.setState({
      bookingData: res,
    });
    console.log("res:", res);
  }
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.bookingData !== this.state.bookingData) {
    }
  }

  customtext = (data) => {
    let textArr = data.split("\r\n");
    var removed = textArr.splice(2);
    return {
      header: textArr[0],
      ttArr: removed,
    };
  };

  render() {
    let { bookingData } = this.state;
    // let { ttArr } = ;
    console.log("check state booking", this.state.bookingData);
    console.log("check state tt", this.state.ttArr);
    //  console.log(bookingData);
    return (
      <>
        {bookingData &&
          bookingData.length > 0 &&
          bookingData.map((item, index) => {
            return (
              <div className="container" key={index}>
                <div className="imformation">
                  <div className="tenKhoa">
                    <h2>{item.name}</h2>
                  </div>
                  <div className="noiDung">
                    <div id="header">
                      {this.customtext(item.describeSpe).header}
                      <p></p>
                    </div>
                    <div>
                      <ul>
                        {this.customtext(item.describeSpe).ttArr &&
                          this.customtext(item.describeSpe).ttArr.length > 0 &&
                          this.customtext(item.describeSpe).ttArr.slice(0, this.state.visible).map((textli, index2) => {
                              return <li key={index2}>{textli}</li>;
                            })}
                      </ul>
                      {this.state.visible < this.customtext(item.describeSpe).ttArr.length &&
                        <div className=" mt-2 mb-5">
                            <button onClick={this.loadMore} type="button" className="btn btn-primary load-more">Xem thêm</button>
                        </div>
                      }
                    </div>
                  </div>
                  <div className="row bsi">
                    <div className="col-md-6 col-left">
                      <div className="row">
                        <div className="col-md-2">
                          <img
                            className="imageBooking"
                            src={item.imageUser}
                            width="80"
                            height="80"
                            alt="#"
                          ></img>{" "}
                          <a href="#">xem thêm</a>
                        </div>
                        <div className="col-md-10">
                          <div className="tenVaHieu">
                            <a href="#" className="tenBacSi">
                              {" "}
                              {item.degree} {item.fullName}{" "}
                            </a>
                          </div>
                          <div className="thongTin">
                            {item.describeDoc}
                            <div>
                              <h3 className="hea3"></h3>
                              <ul className="ulli"></ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-right">
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Thứ 2 - 14/11
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              {" "}
                              Thứ 3 - 15/11{" "}
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              {" "}
                              Thứ 4 - 16/11{" "}
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              {" "}
                              Thứ 5 - 17/11{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <p>LỊCH KHÁM</p>
                      <div className="row">
                        <div className="col-md-3 bttime">08:00 - 08:30</div>
                        <div className="col-md-3 bttime">08:30 - 09:00</div>
                        <div className="col-md-3 bttime">09:00 - 09:30</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </>
    );
  }
}

export default BookingPage;
