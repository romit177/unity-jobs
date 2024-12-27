import React from 'react'
import { Container as CustomContainer } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faSignOutAlt, faLink,  faUsers,faSuitcase,faBell } from '@fortawesome/free-solid-svg-icons';



function Navabar() {
  return (
    <Navbar expand="lg" className="bg-body-primary" style={{ backgroundColor: '#4DA1A9' }}>
    <CustomContainer>
      <Navbar.Brand  style={{ fontSize: '1.5rem' }}> 
      <FontAwesomeIcon icon={faHome} className="me-2" />
      Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
         
          <Nav.Link  style={{ fontSize: '1.5rem' }}  className="me-3">
          <FontAwesomeIcon icon={faLink} className="me-2" />
          Link</Nav.Link>

          <Nav.Link  style={{ fontSize: '1.5rem' }}  className="me-3">
          <FontAwesomeIcon icon={faUsers} className="me-2" />
          Network</Nav.Link>

          <Nav.Link  style={{ fontSize: '1.5rem' }}  className="me-3">
          <FontAwesomeIcon icon={faSuitcase}  className="me-2" />
          Jobs</Nav.Link>

          <Nav.Link  style={{ fontSize: '1.5rem' }}  className="me-3">
          <FontAwesomeIcon icon={faBell} />
          Notification</Nav.Link>


          <NavDropdown title="Menu"id="basic-nav-dropdown"  style={{ fontSize: '1.5rem' }}>

            <NavDropdown.Item as={Link} to="/profile" style={{ fontSize: '1.5rem' }}>
            <FontAwesomeIcon icon={faUser} className="me-2" />
            View profile</NavDropdown.Item>

            <NavDropdown.Item  as={Link} to="/login" style={{ fontSize: '1.5rem' }}>
            <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
            Logout
            </NavDropdown.Item>

            <NavDropdown.Item href="#action/3.3"style={{ fontSize: '1.5rem' }}>Something</NavDropdown.Item>
            <NavDropdown.Divider />
           
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </CustomContainer>
  </Navbar>
  )
}

export default Navabar