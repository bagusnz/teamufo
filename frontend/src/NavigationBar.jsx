import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './NavigationBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-success bar-bottom">
      <Container>
        <Navbar.Brand href="#home" className="text-white"><FontAwesomeIcon icon={faSeedling} /> Your co2 <FontAwesomeIcon icon={faSeedling} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle"/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link href="/home" className="text-white"><span className="tab-animation">Home</span></Nav.Link>
            <Nav.Link href="/challengeCards" className="text-white"><span>Challenge</span></Nav.Link>
            <Nav.Link href="/rewardsCards" className="text-white"><span>Rewards</span></Nav.Link>
            <Nav.Link href="/card" className="text-white"><span>Card Design</span></Nav.Link>
            <NavDropdown title={ <span className="text-white my-auto">Dropdown</span>} id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
