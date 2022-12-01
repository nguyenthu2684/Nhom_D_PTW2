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
      dataDoctor: [],
    };
  }
  //ComDiMounts
  async componentDidMount() {
    let id = this.props.truyenTT;
    console.log(id);
    let res = await axios.get("/api/user/getUserItrById/" + id);
    this.setState({
      dataDoctor: res,
    });
    console.log("res:", res);
  }
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.dataDoctor !== this.state.dataDoctor) {
    }
  }

  toggle = () => {
    this.props.toggleModal();
  };

  render() {
    let { dataDoctor } = this.state;
    console.log(this.state);
    return (
      <>
        <div>
          {dataDoctor &&
            dataDoctor.length > 0 &&
            dataDoctor.map((item, index) => {
              return (
                <>
                  <div>
                    <Modal isOpen={this.props.isOpen} toggle={() => { this.toggle(); }} className={"modalUser modal-dialog-centered"}  >
                      <ModalHeader toggle={() => { this.toggle(); }} >
                        {item.degree} {item.fullName}
                      </ModalHeader>
                      <ModalBody>
                            <div><img src={item.imageUser} className="imageUser"></img></div>
                            <div>
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
