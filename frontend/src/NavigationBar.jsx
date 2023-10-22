import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavigationBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "services/userContext";
import { auth } from "services/firebase";
import { signOut } from "firebase/auth";

const NavigationBar = () => {
  const user = useUser()
  const navigate = useNavigate()

  async function signUserOut() {
    try {
        await signOut(auth);
        // User has been signed out
        console.log('User signed out');
        navigate('/')
    } catch (error) {
        console.error('Error signing out:', error);
        throw error; // Optionally rethrow the error for error handling
    }
}

  return (
    <Navbar expand="lg" className="bg-success bar-bottom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white">
          <FontAwesomeIcon icon={faSeedling} /> Your CO2{" "}
          <FontAwesomeIcon icon={faSeedling} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggle"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title={<span className="text-white my-auto">Challenges</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/challenges">
                Daily Challenges
              </NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} to="/quiz">Quizzes</NavDropdown.Item> */}
              <NavDropdown.Item as={Link} to="/ranking">Ranking</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/rewards" className="text-white">
              <span className="tab-animation">Rewards</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/calculator" className="text-white">
              <span className="tab-animation">
                kWh to CO<sub>2</sub>
              </span>
            </Nav.Link>
            
            {/* <Nav.Link as={Link} to="/profile" className="text-white">
              <span className="tab-animation">Profile</span>
            </Nav.Link> */}
            
            {/* <NavDropdown
              title={<span className="text-white my-auto">Dropdown</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}

            {/* <Nav.Link as={Link} to="/notify" className="text-white loginSpan">
              <span className="tab-animation">Notification</span>
            </Nav.Link> */}
          </Nav>

          <Nav className="ml-auto"> {/* Use ml-auto to push items to the right */}
            {!user && <Nav.Link as={Link} to="/login" className="text-white loginSpan">
              <span className="tab-animation">Login</span>
            </Nav.Link>}
            {user && <Nav.Link as={Link} to="/logout" onClick={signUserOut} className="text-white loginSpan">
              <span className="tab-animation">Logout</span>
            </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
