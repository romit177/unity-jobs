// import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Register() {
  const [email,setemail]= useState("");
  const[password,setpassword]= useState("");
  
  const navigate= useNavigate();


  function handleSubmit() {
    console.log(email, password);
    axios
      .post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDiKk-mrBqfRj8QvsiDKPN3NESGpNCNPwc`, { email,password })
      .then((res) => {
        localStorage.setItem("token",res.data.idToken)
        navigate("/login")
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div  className="container d-flex justify-content-center align-items-center vh-100" >
    <div className="card p-4 col-md-6 col-lg-4 shadow">
    <h2 className='text-center mb-4' style={{ color: '#0A5EB0' }}>Register</h2>
    <div className="mb-4">
  <label htmlFor="exampleFormControlInput1"
   className="form-label">Email address</label>
   
  <input type="email" className="form-control" 
  onChange={(e) => setemail(e.target.value)}
  id="exampleFormControlInput1" 
  placeholder="name@example.com" />
</div>
<div className="mb-4">
  <label htmlFor="exampleFormControlInput1" 
  className="form-label">Password</label>
  <input type="password"
  value={password}
  onChange={(e) => setpassword(e.target.value)}
   className="form-control"
    id="exampleFormControlInput1" />
</div>
<button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
      </div>
</div>
  )
}

export default Register;