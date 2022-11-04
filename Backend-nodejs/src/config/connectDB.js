const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('bookingdoctor', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});


let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Kết nối đã được thiết lập thành công.');
      } catch (error) {
        console.error('Kết nối thiết lập thất bại:', error);
      }
}
module.exports = connectDB;