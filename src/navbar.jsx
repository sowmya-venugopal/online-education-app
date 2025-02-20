
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './navbar.css';
function Pagenavbar(){
  return (
    <>
    <Navbar expand="lg" fixed='top' style={{background:"rgb(30, 129, 0)"}}>
      <Container>
        <Navbar.Brand href="#home" className='text-white'>Edu App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" exact className='text-white'>Home</Nav.Link>
            <Nav.Link  as={Link} to="/aboutUs" className='text-white'>About Us</Nav.Link>
            <Nav.Link as={Link} to="/courses" className='text-white'>Courses</Nav.Link>
            <Nav.Link as={Link} to="/images" className='text-white'>Images</Nav.Link>
            <Nav.Link as={Link} to="/services" className='text-white'>Services</Nav.Link>
            <Nav.Link as={Link} to="/contact" className='text-white'>contact</Nav.Link>
            <Nav.Link as={Link} to="/loginpage" className='text-white'>Login</Nav.Link>
            <Nav.Link as={Link} to="/registerpage" className='text-white'>Sign Up</Nav.Link>
            

            
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Pagenavbar;


