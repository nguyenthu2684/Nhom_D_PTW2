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
      idCard:'',
      fullName: "",
      birthDay: "",
      dateEx: "",
      doctor: "",


      userData: [],
      docData: [],


    };
  }

  headelOnChangeInput = (event, id) =>{
    this.state[id] = event.target.value;

    let copyState = {...this.state};
    copyState[id]=event.target.value;

    this.setState({
      ...copyState
    },)
    
  }

  truyenId(){
    return({
      idDoctor: this.props.nameBS,
    })
  }

  //ComDiMounts
  async componentDidMount() {
    let id = 7
    let get = await axios.get("/api/user/"+ id);
    let bok = await axios.get("/api/user/getDoctorById/"+ this.truyenId().idDoctor);
    this.setState({
      userData: get,
      docData: bok,
      // dortorData: creBS,
    });
  }
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.userData !== this.state.userData) {
    }
  }

  toggle = () => {
    this.props.toggleModalBooking();
  };

  headelAddCard = (req, res) =>{
    this.setState({
      fullName: req,
      dateEx: res,
    })  
    console.log('check data ', req, res);
    this.createCard()  
  }

  createCard = () =>
  {
    // let res= axios.get('/api/examinationCard/addExaminationCard/');
    // if(data && data ===0){
    //   return res;
    // }
    let data = this.state
    console.log('check data', data);
    fetch(axios.post('/api/examinationCard/addExaminationCard/'),{
      body: JSON.stringify(data)
    }).then((result) =>{result.json().then((ser)=>{console.warn("re", ser)})})
    // return axios.post('/api/examinationCard/addExaminationCard/', {this.state.fullName,  this.state.dateEx});
  }


  render() {
    let{userData} = this.state;
    let{docData} = this.state;
    // let{dortorData} = this.state.dortorData;
    console.log(userData);
    return (
      <>
          <div>
            <Modal isOpen={this.props.isOpenModalDK} toggle={() => { this.toggle(); }}
              className={"modalBooking modal-dialog-centered"}
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
                    <Input id="dateex" name="dateex" type="text" value={this.props.dayEx} readonly
                    />
                  </FormGroup>
                  <FormGroup>
                  {docData && docData.length > 0 && docData.map((item, index) => {
                        return (<>
                    <Label for="doctor">Bác sĩ</Label>
                    <Input
                      id="doctor" name="doctor" value={item.degree + " "+ item.fullName} readonly
                    />
                    </>); })}
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
                  {userData && userData.length > 0 && userData.map((item, index) => {
                        return (<>
                  <Button onClick={() => { this.headelAddCard(item.idUser,this.props.dayEx) }}>Gửi</Button>
                  </>); })}
                </Form>
              </ModalBody>
              <ModalFooter>
                {/* <Button color="primary" onClick={() => {this.toggle()}}>
                    Do Something
                </Button>{' '} */}
                <Button color="secondary" toggle={() => { this.toggle(); }} >  
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
