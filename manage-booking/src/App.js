// import logo from './logo.svg';
// import './App.css';
import FooterComponent from "./component/footer/footer";
import HeaderComponent from "./component/header/header";
import BookingPage from "./pages/bookingfage/bookingPage";

function App() {

  return (

    <>
    <HeaderComponent></HeaderComponent>
      <BookingPage />
      <FooterComponent></FooterComponent>
    </>
  );
}


export default App;