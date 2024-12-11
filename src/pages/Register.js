import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Register() {
  const [email,setemail]= useState("");
  const[password,setpassword]= useState("");

  const navigate= useNavigate();

  function handleSumbit() {
    console.log(email, password);
    axios
      .post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDiKk-mrBqfRj8QvsiDKPN3NESGpNCNPwc`, { email,password })
      .then((res) => {
        navigate("/login")
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className='container  p-5 col-md-4'>
    <h2>Register</h2>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email"
    value={email}
    onChange={(e) => setemail(e.target.value)}
   className="form-control"
    id="exampleFormControlInput1" />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
  <input type="password"
  value={password}
  onChange={(e) => setpassword(e.target.value)}
   className="form-control"
    id="exampleFormControlInput1" />
</div>
 <button className="btn btn-primary" onClick={handleSumbit}>
        Submit
      </button>
 </div>
  )
}

export default Register;