import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AdminPage from "./component/admin";
import HomePage from "./pages/home/index";
import DetailPost from "./pages/DetailPost";
function App() {
    return (

        <>
            <Router>
                <Routes>
                    <Route path="/*" element={<AdminPage />} />
                    <Route exact path="/home" element={<HomePage />} />
                    <Route path="/posts/:id" element={<DetailPost/>}/>
                   
                </Routes>
            </Router>

            {/* <DoctorList /> */}
        </>
    );
}

export default App;