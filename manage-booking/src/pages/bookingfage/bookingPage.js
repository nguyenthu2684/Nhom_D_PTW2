import axios from "../../axios";
import React from "react";

import UserModal from "../modal/userModal";
import BookingModal from "../modal/bookingModal";
// import {
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from "reactstrap";

import "./bookingPage.scss";
class BookingPage extends React.Component {
  //Khai báo
  constructor(props) {
    super(props);
    this.state = {
      bookingData: [],
      addBooking: [],
      custonText: [],
      header: "",
      ttArr: [],
      visible: 4,
      layID: "",
      isOpenModal: false,

      valueDateBook: "",
      valueTimeBook: "",

      datetimeBook: "",
    };
    this.loadMore = this.loadMore.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  //Thay doi

  async handleDropdownChange(e) {
    this.setState({ valueDateBook: e.target.value });
  }

  handleSubmit(event) {
    if(this.state.valueDateBook == "" || this.state.valueDateBook == "Chon ngay"){
      alert("vui long chon ngay");
    }
    this.setState({ valueTimeBook: event.target.value,
      datetimeBook:  this.state.valueDateBook + " " + event.target.value
    });
    event.preventDefault();
  }

  

  //Loadmore
  loadMore() {
    this.setState((prev) => {
      return { visible: prev.visible + 25 };
    });
  }

  //GetUser

  //ComDiMounts
  async componentDidMount() {
    let httpht = window.location.href;
    let idS = httpht.slice(30, 32);
    let res = await axios.get("/api/user/getUserDoctor/" + idS);
    let adds = await axios.get("/api/examinationCard/addExaminationCard/");
    this.setState({
      bookingData: res,
      addBooking: adds,
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

  hienThiThongTin = (iu) => {
    this.setState({
      isOpenModal: true,
      layID: iu,
    });
  };

  // capNhatDT = (time) => {
  //   console.log("res:", typeof this.state.valueDateBook);
  //   return {
  //     datetimeBook: String(time),
  //   };
  // };

  toggleModal = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal,
    });
  };

  render() {
    let { bookingData } = this.state;
    let dateBook = this.state.dateBook;
    // let dateE = this.state.valueDateBook + " "+ this.state.valueTimeBook;
    console.log(typeof dateBook);
    console.log("check state booking", this.state.bookingData);
    console.log("check state tt", this.state.ttArr);
    console.log("check state tt", this.state.layID);
    console.log(this.state.datetimeBook);
    console.log(this.state.valueDateBook);
    console.log(this.state.valueTimeBook);
    //  console.log(bookingData);
    return (
      <>
        <div>
          <UserModal
            isOpen={this.state.isOpenModal}
            toggleModal={this.toggleModal}
            truyenTT={this.state.layID}
          />
        </div>
        <div><BookingModal
        toggleModal={this.toggleModal}
        dayEx={this.state.datetimeBook}
        />
        
        </div>

        <div className="container">
          <div className="imformation">
            {bookingData &&
              bookingData.length > 0 &&
              bookingData.map((item, index) => {
                return (
                  <>
                    <div className="tenKhoa key={index}">
                      <h2>{item.name}</h2>
                    </div>
                  </>
                );
              })}
            <div>
              {bookingData &&
                bookingData.length > 0 &&
                bookingData.map((item, index) => {
                  return (
                    <>
                      <div className="noiDung">
                        <div id="header">
                          {this.customtext(item.describeSpe).header}
                          <p></p>
                        </div>
                        <div>
                          <ul>
                            {this.customtext(item.describeSpe).ttArr &&
                              this.customtext(item.describeSpe).ttArr.length >
                                0 &&
                              this.customtext(item.describeSpe)
                                .ttArr.slice(0, this.state.visible)
                                .map((textli, index2) => {
                                  return <li key={index2}>{textli}</li>;
                                })}
                          </ul>
                          {this.state.visible <
                            this.customtext(item.describeSpe).ttArr.length && (
                            <div className=" mt-2 mb-5">
                              <button
                                onClick={this.loadMore}
                                type="button"
                                className="btn btn-primary load-more"
                              >
                                Xem thêm
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
            <div className="row bsi">
              <div className="col-md-6 col-left">
                {bookingData &&
                  bookingData.length > 0 &&
                  bookingData.map((item, index) => {
                    return (
                      <>
                        <div className="row">
                          <div className="col-md-2">
                            <img
                              className="imageBooking"
                              src={item.imageUser}
                              width="80"
                              height="80"
                              alt="#"
                            ></img>{" "}
                            <div>
                              <button
                                onClick={() =>
                                  this.hienThiThongTin(item.idUser)
                                }
                                type="button"
                                className="btn btn-primary createIn"
                              >
                                Xem thêm
                              </button>
                            </div>
                          </div>
                          <div className="col-md-10">
                            <div className="tenVaHieu">
                              <div className="tenBacSi">
                                {" "}
                                {item.degree} {item.fullName}{" "}
                              </div>
                            </div>
                            <div className="thongTin">{item.describeDoc}</div>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>

              <div className="col-md-6 col-right">
                <div>
                  <select
                    value={this.state.valueDateBook}
                    onChange={this.handleDropdownChange}
                  >
                    <option>Chon ngay</option>
                    <option value="2022/12/02">Thứ 6 - 2/12</option>
                    <option value="2022/12/03">Thứ 7 - 3/12</option>
                    <option value="2022/12/04">CN - 4/12</option>
                    <option value="2022/12/05">Thứ 2 - 5/12</option>
                  </select>

                  <div>Ngay duoc chon : {this.state.valueDateBook}</div>
                </div>
                <p>LỊCH KHÁM</p>
                <div className="btnGio">
                  <button
                    onClick={this.handleSubmit}
                    value="08:30:00"
                    type="button"
                    className="btn btn-primary bttime"
                  >
                    08:30 - 09:00
                  </button>
                  <button
                    onClick={this.handleSubmit}
                    value="09:00:00"
                    type="button"
                    className="btn btn-primary bttime"
                  >
                    09:00 - 09:30
                  </button>
                  <button
                    onClick={this.handleSubmit}
                    value="09:30:00"
                    type="button"
                    className="btn btn-primary bttime"
                  >
                    09:30 - 10:00
                  </button>
                  <button
                    onClick={this.handleSubmit}
                    value="10:00:00"
                    className="btn btn-primary bttime"
                  >
                    10:00 - 10:30
                  </button>
                  <button
                    onClick={this.handleSubmit}
                    value= "10:30:00"
                    type="button"
                    className="btn btn-primary bttime"
                  >
                    10:30 - 11:00
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BookingPage;
