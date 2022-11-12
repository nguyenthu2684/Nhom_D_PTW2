
import React from "react";
// import Header from "../../component/Header";
import "./toaThuocPage.scss";
class ToaThuoc extends React.Component {
    render() {
        
        const thuoc = [
            {name: '(Itoprid) Ibutop 50 50mg', medicine: 'Sáng uống 1.00, Trưa uống 1.00, Chiều uống 1.00', instructions: 'Uống trước ăn', amount: 3, type:'Viên'},
            {name: '(Betahistin) Be-Stedy 24 24mg', medicine: 'Sáng uống 1.00,  Chiều uống 1.00', instructions: 'Uống sau ăn', amount: 2, type:'Viên'},
            {name: '(L-Cystine 500mg) BLUEMINT', medicine: 'Sáng uống 1.00, Chiều uống 1.00', instructions: 'Uống sau ăn', amount: 2, type:'Viên'},
          ];        
          const results = [];
          thuoc.forEach((employee, index) => {
            results.push(
              <div key={index}> 
                <p><b>{employee.name}</b></p>
                <p>{employee.medicine}</p> 
                <p><b>Ghi chú: </b>{employee.instructions}</p>       
                <hr />
              </div>,
            );
          });

          const sl = [];
          let day = 7;
          
          thuoc.forEach((employee, index) => {
            sl.push(               
              <div class="mt-3" key={index}>    
              <br></br>                                      
                <p>{employee.amount * day}   / {employee.type}</p>     
                <br></br> 
                <hr />
              </div>,
            );
          });
        return (<>

        <div class="container">
            <div class="row nhapMaToa">
              <div class="col-md-2">
                <label for="maToa" class="form-label-ma-toa"> MÃ TOA THUỐC: </label>
              </div>
              <div class="col-md-3">
                <input type="text" class="form-control-ma-toa"  placeholder="Nhập mã toa thuốc"  />
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
                {/* {thuoc.map((employee, index) => {
                    return (<div key={index}><p>{employee.name}</p><p>{employee.medicine}</p> <p><b>Ghi chú: </b>{employee.instructions}</p><hr /></div>);
                })} */}
                {results}
            </div>
              </div>
              <div class="col-md-4">
                <div class="row bang-thuoc-border pt-2 pb-2">
                  <div>Số lượng</div>
                </div>
                <div class="row soLuong" id="soLuong">{sl}</div>
              </div>
            </div>
            <div>
              <div class="mb-3 mt-3">
                <label for="comment">GHI CHÚ:</label>
                <textarea class="form-control" rows="5" id="comment" name="text"> Số Thuốc cho 7 ngày, tái khám khi hết thuốc hoặc có triệu chứng trở nặng.</textarea>
              </div>
            </div>
            {/* <button type="submit" class="btn btn-primary">Submit</button> */}
          </div>  
            </>            
        );
      }
    }
    
 export default ToaThuoc;
