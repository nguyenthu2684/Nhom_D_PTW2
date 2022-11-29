import axios from "axios";
import React from "react";
// import Header from "../../component/Header";
import "./toaThuocPage.scss";
class ToaThuoc extends React.Component {
  //Khai báo
  constructor(props) {
    super(props);
    this.state = {
      bookingData: [],
    };
  }

  //ComDiMounts
  async componentDidMount() {
    let res = await axios.get("/api/prescription/getLK/5");
    this.setState({
      bookingData: res,
    });
    console.log("res:", res);
  }
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.bookingData !== this.state.bookingData) {
    }
  }

  render() {
    let { bookingData } = this.state;
    console.log(this.state)
    return (
      <>
        {bookingData && bookingData.length > 0 &&
          bookingData.map((item, index) => {
            return (
              <div class="container">
                <div class="row nhapMaToa">
                  <div class="col-md-2">
                    <label for="maToa" class="form-label-ma-toa">
                      {" "}
                      MÃ TOA THUỐC:{" "}
                    </label>
                  </div>
                  <div class="col-md-3">
                    <input
                      type="text"
                      class="form-control-ma-toa"
                      placeholder="Nhập mã toa thuốc"
                    />
                  </div>
                  <div class="col-md-5">
                    <button class="btn-tim">TÌM</button>
                  </div>
                </div>
                <div class="row bang-thuoc-border bang-thuoc">
                  <div class="col-md-8">
                    <div class="row bang-thuoc-border pt-2 pb-2">
                      <div>Tên thuốc</div>
                    </div>
                    <div class="row bang-thuoc-border-right">
                      {item.nameDrug}
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="row bang-thuoc-border pt-2 pb-2">
                      <div>Số lượng</div>
                    </div>
                    <div class="row soLuong" id="soLuong">
                      {item.amount}
                    </div>
                  </div>
                </div>
                <div>
                  <div class="mb-3 mt-3">
                    <label for="comment">GHI CHÚ:</label>
                    <textarea
                      class="form-control"
                      rows="5"
                      id="comment"
                      name="text"
                    >
                      {" "}
                      {item.node}
                    </textarea>
                  </div>
                </div>
                {/* <button type="submit" class="btn btn-primary">Submit</button> */}
              </div>
            );
          })}
      </>
    );
  }
}

export default ToaThuoc;
