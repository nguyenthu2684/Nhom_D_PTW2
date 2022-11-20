// import logo from './logo.svg';
// import './App.css';
import FooterComponent from "./component/footer/footer";
import HeaderComponent from "./component/header/header";
// import Specialist from "./pages/bookingfage/specialist/specialist";
// import BookingPage from "./pages/bookingfage/bookingPage";
import ConfirmPage from "./pages/bookingfage/imformation/confirmPage";
function App() {

  return (

    <>
    <HeaderComponent></HeaderComponent>
      <ConfirmPage />
      <FooterComponent></FooterComponent>
    </>
  );
}


export default App;