import axios from "../../axios";
import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./userModal.scss";
import PropTypes from 'prop-types';

class UserModal extends React.Component {
  //Khai báo
  constructor(props) {
    super(props);
    this.state = {
      idDoctor: "",
      doctorData: [],
    };
  }

  truyenId(){
    return({
      idDoctor: this.props.truyenTT,
    })
  }
  //ComDiMounts
  async componentDidMount() {
    let gdi = await axios.get("api/user/getDoctorById/"+this.truyenId().idDoctor);
    this.setState({
      doctorData: gdi,
    });
    console.log("res:", gdi);
  }
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.doctorData !== this.state.doctorData) {
    }
  }

  toggle = () => {
    this.props.toggleModalDoctor();
  };

  render() {
    let { doctorData } = this.state;
    console.log("od: ",this.props.truyenTT);
    console.log("id: ",this.truyenId().idDoctor);
    // console.log("id: ",Number.string(this.state.idDoctor));
    return (
      <>
        <div>
          {doctorData &&
            doctorData.length > 0 &&
            doctorData.map((item, index) => {
              return (
                <>
                  <div>
                    <Modal isOpen={this.props.isOpenM} toggle={() => { this.toggle(); }} className={"modalUser modal-dialog-centered"}  >
                      <ModalHeader toggle={() => { this.toggle(); }} >
                        {item.degree} {item.fullName}
                      </ModalHeader>
                      <ModalBody>
                            <div>{" "}
                            <img src={item.imageUser} alt="" className="imageUser"></img>{""}
                              {item.describeDoc}
                            </div>
                      </ModalBody>
                      <ModalFooter>
                        <Button  color="secondary" onClick={() => { this.toggle();  }} >  Đóng </Button>
                      </ModalFooter>
                    </Modal>
                  </div>
                </>
              );
            })}
        </div>
      </>
    );
  }
}
  UserModal.propTypes = {
    className: PropTypes.string,
  };
export default UserModal;
