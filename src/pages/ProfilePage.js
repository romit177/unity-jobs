
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <p>Loading profile...</p>;
  }
  return (

  //   <div className="container col-md-6 border border-black p-5 rounded">
  //   <h2 className="text-center mb-4" style={{ color: '#0A5EB0' }}>Profile</h2>
  //   <p><strong>First Name:</strong> {user.Firstname}</p>
  //   <p><strong>Last Name:</strong> {user.Lastname}</p>
  //   <p><strong>Username:</strong> {user.Username}</p>
  //   <p><strong>Email:</strong> {user.Emailaddress}</p>
  //   <p><strong>Gender:</strong> {user.Gender}</p>
  //   <p><strong>City:</strong> {user.City}</p>
  // </div>
<div className='body1'>
  <div className='heder  border border-black'>
  <div className='heder1 ' style={{ backgroundColor: '#4DA1A9' }}> 
 
        <img src="https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-man-avatar-isolated-png-image_9935819.png" alt='profile' />
          <div className='nam px-5 mx-5 '>
            <h3> {user.Firstname} {user.Lastname}</h3>
            <h6 >Full-stack Developer at Info-Tech Research Group</h6>
            <p >{user.City},Gujarat,india</p>
            <p><strong>Email:</strong> {user.Emailaddress}</p>
            <p><strong>Username:</strong> {user.Username}</p>
          </div>
          <div className='butn px-5 mx-5'>
            <button type="button" className="btn btn-primary btn-rounded me-3 border-black">Open to</button>
            <button type="button" className="btn btn-outline-primary border-primary me-3">Add Profile Section</button>
            <button type="button" className="btn btn-outline-primary  me-3">Enhance Profile</button>
            <button type="button" className="btn btn-outline-secondary border-black">Resource</button>
          </div> 

          <h5 className='name4'>JBS IT INSTITUTE</h5>
          <p className='name5'><i class="fa-solid fa-pen-to-square"></i></p> 
 </div>
  
  <div className='boxes'>
  <div className="box5 mt-2 rounded-3 ">
        <h4 className="ms-5 mt-3">Analytics</h4>
            <p className="views ms-4">
                <i class="fa-solid fa-eye mx-2 ms-4"></i>private to you
            </p>
          <div className="main box2 d-flex">
                <div className="viewsprofile">
                    <h6 className="ms-5">
                        <i class="fa-solid fa-users"></i> 10k profile views
                    </h6>
                    <p className="p1 ms-5">
                       Discover who's viewed your <br /> profile.
                    </p>
                  </div>
            
            <div className="viewsprofile">
                  <h6 className="ms-5">
                      <i class="fa-solid fa-chart-simple pe-2"></i>1,111 post
                          impressions
                      </h6>
                      <p className="p2 ms-5">
                        check out who's engaging with <br /> your posts.
                      </p>
              </div>
            </div>
          </div>

  </div> 
  <button className="my-4 justify-content-center w-100 rounded-2 ">
                show all 5 resources <i class="fa-solid fa-arrow-right"></i>
              </button>

          <div className="box7">
        <h2 className="ms-5 mt-3" >Experience</h2>
        <div className="btn4">
        <button className="edit-button" ><i class="fa-solid fa-pen-to-square"></i></button>
        
        <button className="add-button"  > <i class="fa-solid fa-plus"></i></button>
       
        </div>
        <div className="experience-item">
          <img
            src="https://yt3.googleusercontent.com/TqLqJrvIUOyeyROP5AVYoE6f9ufJjiWLSFxa6piENwAl7TGaKu-YLdBqJNHCa9I1_yrenLkARkc=s900-c-k-c0x00ffffff-no-rj" // Placeholder image
            alt="Company Logo"
            className="company-logo"
          />
          <div className="experience-details">
            <h3>Full Stack Developer</h3>
            <p>JBS IT INSTITUTE · Internship</p>
          </div>
        </div>
      </div>
      <div className="education-section">
        <h2 className="ms-5 mt-3">
          Education 
        </h2>
        <div className="education-item">
          <p className="ms-5 mt-3">Show your qualifications and be up to 2X more likely to receive a recruiter InMail</p>
          <Link className='nav=link-active' to ="/exprience">
          <button className="btn btn-primary btn-rounded me-3 border-black ms-5  ">Add education</button>
          </Link>
        </div>
      </div>
      <div className="skills-section ">
        <h2  className="ms-5 mt-3">
          Skills 
        </h2>
        <p  className="ms-5 mt-3">
          Communicate your fit for new opportunities – 50% of hirers use skills
          data to fill their roles
        </p>
        <button className="btn btn-primary btn-rounded me-3 border-black ms-5">➕ Add skills</button>
      </div>
 </div>
</div>
  )
}

export default ProfilePage;