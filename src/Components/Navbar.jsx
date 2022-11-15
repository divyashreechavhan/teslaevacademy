import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../App.css"
import { Link } from 'react-router-dom';


function CollapsibleExample() {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" variant='darkgreen' style={{ boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}>
      <Container >
        <Navbar.Brand href="/Home">
          <img src="Images/Tesla1.png" alt="website logo" style={{ width: 150, marginTop: -7, margin: 0 }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ marginLeft: 30 }}>
            <Link className='nav-link' to="/Home">Home</Link>
            <NavDropdown title="Catagories">
            <NavDropdown.Item href="/EvProducts">Ev Products</NavDropdown.Item>
            <NavDropdown.Item href="/EvCourses">Ev Courses</NavDropdown.Item>
            <NavDropdown.Item href="/EvRetro">Ev Retro</NavDropdown.Item>
            <NavDropdown.Item href="/EvFranchise">Ev Franchise</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="EV Extras">
            <NavDropdown.Item href="/EvCoeMou">Ev COE & MOU</NavDropdown.Item>
            <NavDropdown.Item href="/EvJobs">Ev Jobs</NavDropdown.Item>
            <NavDropdown.Item href="/EvApp">Ev App</NavDropdown.Item>
            <NavDropdown.Item href="/EvOnlineTest">Ev Online Test</NavDropdown.Item>
            </NavDropdown>
            

          </Nav>
          <Nav className="me-auto1" style={{ marginLeft: 30 }}>
            <Link className='nav-link' to="/Gallery">Gallery</Link>
            <Link className='nav-link' to="/AboutUs">About Us </Link>
            <Link className='nav-link' to="/ContactUs">Contact Us</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
