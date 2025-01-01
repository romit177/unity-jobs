
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function ProfilePage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user, setUser] = useState(null);
  const [educationList, setEducationList] = useState([]);

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    const storedEducation = JSON.parse(localStorage.getItem("education")) || [];
    setEducationList(storedEducation);
  }, []);

  if (!user) {
    return <p>Loading profile...</p>;
  }

  
  return (


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
          
          <p className='name5'  onClick={handleShow} ><i class="fa-solid fa-pen-to-square"></i></p> 
          
       
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upadate Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Firstname"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Lastname"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>username</Form.Label>
              <Form.Control
                type="text"
                placeholder="username"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                autoFocus
              />
            </Form.Group>
          
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
          
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
 
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
    
        <p className='add'><i class=" fa-solid fa-pen-to-square"></i></p>
        <p className='add2'><i class="fa-solid fa-plus"></i></p>
       
        
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
  <h2>Education</h2>
  {educationList && educationList.length > 0 ? (
    <ul>
      {educationList.map((edu, index) => (
        <li key={index} className="education-item">
          <h3>{edu.school || "Unknown School"}</h3>
          <p>
            {edu.degree || "Unknown Degree"} in {edu.study || "Unknown Field"}
          </p>
          <p>
            {new Date(edu.startDate).toLocaleDateString()} -{" "}
            {edu.endDate ? new Date(edu.endDate).toLocaleDateString() : "Present"}
          </p>
          {edu.description && <p>{edu.description}</p>}
        </li>
      ))}
    </ul>
  ) : (
    <p>No education added yet.</p>
  )}
  <Link to="/add-education">
    <button className="btn btn-primary">Add Education</button>
  </Link>
</div>
  
 </div>
</div>
  )
}

export default ProfilePage;