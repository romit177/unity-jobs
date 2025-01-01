// import logo from './logo.svg';
import './index.css';
import { Route, Routes,Router } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import { Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import Navabar from "./profilepage/Navabar";
import CreactProfile from "./pages/CreactProfile";
import Exprience from './profilepage/Exprience';




function App() {
  return (
    <>
   
     <Routes>
    <Route path="/" element={<Navabar/>}/>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />}/>
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/creactprofile" element={<CreactProfile />} />
    <Route path="/exprience" element={<Exprience />} />
    

    </Routes> 

  </>
  );
}

export default App;
