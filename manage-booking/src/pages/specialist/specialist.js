import axios from "../../axios";
import React from "react";
import "./specialist.scss";
// import { Image } from "react-bootstrap";
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
              return (
                    <div class="row chuyenKhoa">
                      <div class="col-md-3">
                        <img className="imagpecia"src= {item.imageSpeci} width="100" height="80" alt="#" ></img>
                        
                      </div>
                      <div class="col-md-9">
                          <a href={`http://localhost:3000/booking/${item.idSpecialist}`} class="tenChuyenKhoa" > {item.name} </a>
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
