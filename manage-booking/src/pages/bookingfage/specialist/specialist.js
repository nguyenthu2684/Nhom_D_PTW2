// import axios from "axios";
import axios from "../../../axios";
import React from "react";
import "./specialist.scss";
// import imag from '../../../asset/img/';
class Specialist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingData: [],
    };
  }
  async componentDidMount() {
    let res = await axios.get("/api/specialist/getAll");
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
          {bookingData &&
            bookingData.length > 0 &&
            bookingData.map((item, index) => {  
              {/* let photo = require({imag}).default;*/}
              {/* let imga = require(`../../../asset/img/${item.image}.svg`).ReactComponent; */}
              console.log(item.image);
              return (
                    <div class="row chuyenKhoa">
                      <div class="col-md-3">
                        {/* <img src = {`../../../asset/img/${item.image}`} width="80" height="80" alt="#" ></img> */}
                        {/* <img src = {`/static/media/${item.image}`} width="80" height="80" alt="#" ></img> */}
                        <img className="img" src={item.iamage} ></img>                        
                        
                      </div>
                      <div class="col-md-9">
                          <a href="#" class="tenChuyenKhoa"> {item.name} </a>
                      </div>
                    </div>
              );
            })}          
        </div>        
      </>
    );
  }
}

export default Specialist;
