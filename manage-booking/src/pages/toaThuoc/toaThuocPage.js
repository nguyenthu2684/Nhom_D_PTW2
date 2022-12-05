import axios from "../../axios";
import React from "react";
// import Header from "../../component/Header";
import "./toaThuocPage.scss";
class ToaThuoc extends React.Component {
  //Khai báo
  constructor(props) {
    super(props);
    this.state = {
      bookingData: [],
      node: [],
      valueToa: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    //Thay doi gia tri input
    handleChange(event) {
      this.setState({valueToa: event.target.value});
    } 
    handleSubmit(event) {
      console.log(this.state.valueToa)
      event.preventDefault();
      this.componentDidMount();
    }

  //ComDiMounts
  async componentDidMount() {
    console.log(this.state.valueToa);

    let res = await axios.get("api/prescription/getLK/" + this.state.valueToa);
    let test = await axios.get("api/specialistDoctor/" + this.state.valueToa);
    this.setState({
      bookingData: res,
      node: test,
    });
    console.log("res:", res);
  }
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.bookingData !== this.state.bookingData) {
    }
  }



  render() {
    let { bookingData } = this.state;
    let { node } = this.state;
    // console.log('check state ',this.state)
    return (
      <>
        <div class="container">
          {/* <div class="row nhapMaToa">
            <div class="col-md-2">            
              <label for="maToa" class="form-label-ma-toa"> 
                MÃ TOA THUỐC:
              </label>
            </div>
            <div class="col-md-3">
            <input type="text" value={this.state.value} onChange={this.handleChange} class="form-control-ma-toa" placeholder="Nhập mã toa thuốc" />
            </div>
            <div class="col-md-5">
            <input type="submit" value="Submit" />
              <button class="btn-tim">TÌM</button>
            </div>
          </div> */}

          <form onSubmit={this.handleSubmit}>
        <label>
        MÃ TOA THUỐC:
          <input type="text" value={this.state.value} onChange={this.handleChange} class="form-control-ma-toa" placeholder="Nhập mã toa thuốc"/>
        </label>
        <input type="submit" value="Tìm" class="btn-tim"/>
      </form>
          <div class="row bang-thuoc-border bang-thuoc">
            <div class="col-md-8">
              <div class="row bang-thuoc-border pt-2 pb-2">
                <div>Tên thuốc</div>
              </div>
                {bookingData && bookingData.length > 0 && bookingData.map((item, index) => {
                  return ( 
                        <div class="row bang-thuoc-border-right">
                          {item.nameDrug} <br></br>
                          {item.medicine} <br></br>
                          {item.instructions}
                        </div>  );})}
            </div>
                      <div class="col-md-4">
                        <div class="row bang-thuoc-border pt-2 pb-2">
                          <div>Số lượng</div>
                        </div>
                  {bookingData && bookingData.length > 0 && bookingData.map((item, index) => {
                  return ( 
                        <div class="row soLuong ps-5" id="soLuong">
                          {item.amount * 7} {item.type} / 7 ngày
                        </div>);})}
                      </div>
                    </div>
                    <div>
                      <div class="mb-3 mt-3">
                        <label for="comment">GHI CHÚ:</label>
                        {node && node.length > 0 && node.map((itemn, index) => {                          
                        return (                        
                        <textarea class="form-control" rows="5" id="comment" name="text" > 
                          {itemn.node}
                        </textarea>);})}
                      </div>
                    </div> 
              </div>  
      </>
    );
  }
}

export default ToaThuoc;
