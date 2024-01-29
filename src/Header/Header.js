import { NavDropdown, Row } from "react-bootstrap";
import "./Header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header(){
    return(
        <Row className="header">
            <Navbar expand="md">
                <Container>
                    <Navbar.Brand href="#">
                        <img className="header-logo" src="img/logo.png" alt="BCS Isle of Man Section logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="h-100">
                        <Nav className="me-auto">
                            <Nav.Link href="/"><b>Home</b></Nav.Link>
                            <b><NavDropdown title="About Us" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/about-us">
                                    About us
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/committee">
                                    The Committee
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/papers">
                                    Papers
                                </NavDropdown.Item>
                            </NavDropdown></b>
                            <b><NavDropdown title="What's on" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/events">
                                    BCS events
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/get-online">
                                    Get Online Centre
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/iom-tech">
                                    Tech on the Isle of Man
                                </NavDropdown.Item>
                            </NavDropdown></b>
                            <Nav.Link href="https://www.bcs.org/membership-and-registrations/become-a-member/"><b>Become a member</b></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Row>
    )
}