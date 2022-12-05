// import logo from './logo.svg';
// import './App.css';
// import FooterComponent from "./component/footer/footer";
// import HeaderComponent from "./component/header/header";
// import ConfirmPage from "./pages/bookingfage/imformation/confirmPage";
// import BookingPage from './pages/bookingfage/bookingPage';
// import Specialist from './pages/bookingfage/specialist/specialist';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { publicRoutes } from './router/Route';

function App() {

  return ( 
  <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) =>{
            const Speci = route.component
            return <Route key={index} path={route.path} element={<Speci/>} />;
          })}
        </Routes>
      </div>
    </Router>
    
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route path='/speaci' element={<Specialist/>}/>
    //     </Routes>
    //   </div>
    // </Router>
    
    // <>
    // <HeaderComponent></HeaderComponent>
    //   <Specialist />
    //   <FooterComponent></FooterComponent>
    // </>
  );
}


export default App;