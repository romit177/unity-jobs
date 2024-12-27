import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreactProfile() {
  const [user, setUser] = useState({
    Firstname: '',
    Lastname: '',
    Username: '',
    Emailaddress: '',
    Gender: '',
    City: 'Surat',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Data:', user);

    
    localStorage.setItem('userData', JSON.stringify(user));

    
    navigate('/');
  };

  return (
    <form className="container col-md-6 border border-black p-5 rounded" onSubmit={handleSubmit}>
      <h2 className="text-center mb-4" style={{ color: '#0A5EB0' }}>Create Profile</h2>

      <div className="mb-3">
        <label htmlFor="Firstname" className="form-label">First name</label>
        <input
          type="text"
          name="Firstname"
          value={user.Firstname}
          onChange={handleChange}
          className="form-control"
          id="Firstname"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Lastname" className="form-label">Last name</label>
        <input
          type="text"
          name="Lastname"
          value={user.Lastname}
          onChange={handleChange}
          className="form-control"
          id="Lastname"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Username" className="form-label">Username</label>
        <input
          type="text"
          name="Username"
          value={user.Username}
          onChange={handleChange}
          className="form-control"
          id="Username"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Emailaddress" className="form-label">Email address</label>
        <input
          type="email"
          name="Emailaddress"
          value={user.Emailaddress}
          onChange={handleChange}
          className="form-control"
          id="Emailaddress"
        />
      </div>

      <div className="mb-3">
        <p>Gender</p>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="Gender"
            value="Male"
            checked={user.Gender === 'Male'}
            onChange={handleChange}
            id="Male"
          />
          <label className="form-check-label" htmlFor="Male">Male</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="Gender"
            value="Female"
            checked={user.Gender === 'Female'}
            onChange={handleChange}
            id="Female"
          />
          <label className="form-check-label" htmlFor="Female">Female</label>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="City" className="form-label">City</label>
        <select
          className="form-select"
          name="City"
          value={user.City}
          onChange={handleChange}
          id="City"
        >
          <option value="Surat">Surat</option>
          <option value="Ahmadabad">Ahmadabad</option>
          <option value="Amreli">Amreli</option>
          <option value="Vadodara">Vadodara</option>
          <option value="Gandhinagar">Gandhinagar</option>
        </select>
      </div>

      <div className="text-center">
        <button type="submit" className="btn btn-primary">Save</button>
      </div>
    </form>
  );
}

export default CreactProfile;