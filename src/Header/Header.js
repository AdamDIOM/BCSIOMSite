import { NavDropdown, Offcanvas, Row } from "react-bootstrap";
import "./Header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header(){
    return(
        <Row className="header">
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img className="header-logo" src="img/logo.png" alt="BCS Isle of Man Section logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Offcanvas id="basic-navbar-nav" placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title><b>BCS Isle of Man Section</b></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Nav className="">
                            <Nav.Link href="/"><b>Home</b></Nav.Link>
                            <b><NavDropdown title="About us" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/about-us">
                                    About us
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/committee">
                                    The Committee
                                </NavDropdown.Item>
                                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://www.bcs.org/membership-and-registrations/member-communities/isle-of-man-international-section/papers/">
                                    Papers (bcs.org)
                                </NavDropdown.Item>
                            </NavDropdown></b>
                            <b><NavDropdown title="What's on" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/events">
                                    BCS events
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/get-online">
                                    Coming soon...
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/iom-tech">
                                    Tech on the Isle of Man
                                </NavDropdown.Item>
                            </NavDropdown></b>
                            <Nav.Link href="https://www.bcs.org/membership-and-registrations/become-a-member/"><b>Become a member</b></Nav.Link>
                            <Nav.Link href="https://mybcs.bcs.org/" className="login-button"><b>Login to MyBCS</b></Nav.Link>
                        </Nav>

                        <Nav className="justify-content-end flex-grow-1 bottom-nav">
                            <Nav.Link className="d-lg-none" href="https://bcs.org"><b>BCS UK</b></Nav.Link>
                            <Nav.Link className="d-lg-none" href="https://www.bcs.org/membership-and-registrations/become-a-member/bcs-code-of-conduct/"><b>BCS Code of Conduct</b></Nav.Link>
                            <p className="bottom-text d-lg-none">BCS (Isle of Man) Limited, registered company number 111766C and registered charity number 997.</p>
                        </Nav>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </Row>
    )
}