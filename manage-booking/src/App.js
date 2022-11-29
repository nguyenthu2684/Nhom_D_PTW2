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