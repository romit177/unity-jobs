// import logo from './logo.svg';
// import './App.css';
import { Route, Routes,Router } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import { Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";



function App() {
  return (
    <>
   
    <Routes>
    <Route path="/" element={<ProfilePage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />}/>
    </Routes>

  </>
  );
}

export default App;
