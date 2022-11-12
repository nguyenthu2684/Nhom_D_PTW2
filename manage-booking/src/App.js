import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AdminPage from "./component/admin";
function App() {
    return (

        <>
            <Router>
                <Routes>
                    <Route path="/*" element={<AdminPage />} />
                </Routes>
            </Router>
            {/* <DoctorList /> */}
        </>
    );
}

export default App;