import axios from "../../axios";
import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

// import "./BookingModal.scss";
import PropTypes from "prop-types";

class BookingModal extends React.Component {
  //Khai báo
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      birthDay: "",
      dateEx: "",
      doctor: "",

      userData: [],


    };
  }

  headelOnChangeInput = (event, id) =>{
    this.state[id] = event.target.value;

    let copyState = {...this.state};
    copyState[id]=event.target.value;

    this.setState({
      ...copyState
    }, () => {console.log('sps: ', copyState)})
    
  }

  //ComDiMounts
  async componentDidMount() {
    // let res = await axios.post("/api/examinationCard/addExaminationCard");
    let cre = await axios.get("/api/user/7");
    this.setState({
      userData: cre,
    });
    console.log("res:", cre);
  }
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.dataDoctor !== this.state.dataDoctor) {
    }
  }

  toggle = () => {
    this.props.toggleModal();
  };

  headelAddCard = () =>{

  }
  render() {
    let{userData} = this.state;
    console.log(userData);
    return (
      <>
          <div>
            <Modal isOpen={true} toggle={() => { this.toggle(); }}
              className={"modalUser modal-dialog-centered"}
            >
              <ModalHeader
                toggle={() => {
                  this.toggle();
                }}
              ></ModalHeader>
              <ModalBody>
                <Form>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                      {userData && userData.length > 0 && userData.map((item, index) => {
                        return (<>
                        <Label for="name">Tên người khám: </Label>
                        <Input  id="name" name="name" value={item.fullName} readonly />
                        </>); })}
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                      {userData && userData.length > 0 && userData.map((item, index) => {
                        return (<>
                        <Label for="birthday">Ngày sinh</Label>
                        <Input
                          id="birthday" name="birthday" type="text" value={item.birthday.slice(0,10)} readonly
                        />
                        </>); })}
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Label for="dateex">Ngày giờ khám bệnh</Label>
                    <Input id="dateex" name="dateex" value={this.props.dayEx} readonly
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="doctor">Bác sĩ</Label>
                    <Input
                      id="doctor" name="doctor" value="" readonly
                    />
                  </FormGroup>
                  <Row>
                    <Col md={8}>
                      <FormGroup>
                        <Label for="reason">Lý do khám</Label>
                        <Input id="reason" name="reason" type="text" onChange={(event)=>{this.headelOnChangeInput(event, "reason")}}/>
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="room">Phòng</Label>
                        <Input id="room" name="room" value="5"/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup check>
                    <Input id="exampleCheck" name="check" type="checkbox" checked />
                    <Label type="check" for="exampleCheck" >
                      Bạn có chắc thông tin của bạn là chính xác
                    </Label>
                  </FormGroup>
                  <Button onClick={() => { this.headelAddCard() }}>Gửi</Button>
                </Form>
              </ModalBody>
              <ModalFooter>
                {/* <Button color="primary" onClick={() => {this.toggle()}}>
                    Do Something
                </Button>{' '} */}
                <Button color="secondary" onClick={() => { this.toggle(); }} >  
                Đóng
                </Button>
              </ModalFooter>
            </Modal>
          </div>
      </>
    );
  }
}
BookingModal.propTypes = {
  className: PropTypes.string,
};
export default BookingModal;
