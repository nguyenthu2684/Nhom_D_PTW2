const express = require('express');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
  
dotenv.config();

const app = express();

const port = process.env.PORT || 5000;


app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

// app.get('/', (req, res) => {
//   res.send("Hello!");
// })


//Users (Người dùng - Đăng ký người dùng, chuyển đổi role, quản lý user)
const userRoutes =require('./routes/user.route');
app.use('/api/user', userRoutes);


//SpecialistDoctor (Bác sĩ chuyên khoa,)
const specialistDoctorRoutes =require('./routes/specialist_doctor.route');
app.use('/api/specialistDoctor', specialistDoctorRoutes);

//ExaminationCard
const examinationCardRoutes =require('./routes/examinationCard.route');
app.use('/api/examinationCard', examinationCardRoutes);

//updateInformationDoctorController
const upInforDoctorRoute=require('./routes/update_information_doctor.route');
app.use('/api/upInforDoctor', upInforDoctorRoute);

//Prescription
const prescriptionRoutes =require('./routes/prescription.route');
app.use('/api/prescription', prescriptionRoutes);

//Prescription
const logRoutes =require('./routes/login.route');
app.use('/api/log', logRoutes);

//bottom
app.listen(port, function() {
  console.log('Server listening on port ', port);
});
