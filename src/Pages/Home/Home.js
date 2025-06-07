import { Button, Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import React from "react";

export default function Home(){
    return(
        <React.Fragment>
            <Container className="content">
                <Row className="Intro">
                    <Col xs={12}>
                        <h1>BCS Isle of Man International Section</h1>
                    <p>We’re a community of IT professionals who serve BCS members and inform the IT community in the Isle of Man.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span:4, order:1}} xs={{span:12, order:2}} className="d-flex align-self-center justify-content-md-end justify-content-center">
                        <div className="chair-headshot">
                            <img src="/img/committee/Ken.png" alt="Ken Quayle, Chair, BCS Isle of Man" />
                        </div>
                    </Col>
                    <Col md={{span:8, order:1}} xs={{span:12, order:2}} className="align-self-center">
                    <p><b>Welcome to our section!</b></p>
                    <p>We were established as a BCS international section in July 2004 to support our thriving e-business sector.</p>
                    <p>If you live on, or are a regular visitor to, the Isle of Man, why not come along to one of our events to meet other IT professionals and hear about the latest technology and business developments on the island.</p>
                    <p>We welcome members and non-members alike, and we’re always interested in new ideas and suggestions for future events. If you’d like to present at our next event or contribute in any other way, then please do get in touch.</p>
                    <p><b>Ken Quayle, Chair</b></p>
                    </Col>
                </Row>
            </Container>
            <Row className="row-highlight">
                <Col md={2}></Col>
                <Col md={6} className="text-left">
                    <h1>Start your membership journey</h1>
                    <p>We'll be with you at every step in your amazing career.</p>
                </Col>
                <Col md={4} className="d-flex flex-wrap align-items-center">
                    <Button variant="dark" size="lg" className="mx-auto mx-md-0 d-block join-button" href="https://www.bcs.org/membership-and-registrations/become-a-member/" target="_blank" rel="noreferrer">Join us</Button>
                </Col>
                
            </Row>
            {/* <Container className="mt-4">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Get involved</Accordion.Header>
                        <Accordion.Body>
                            <a href="https://www.linkedin.com/groups/1898942/" target="_blank" rel="noreferrer"><p><Button>Join our LinkedIn community group</Button></p></a>
                            <a href="https://ti.to/bcs-iom/" target="_blank" rel="noreferrer"><p><Button>Attend an upcoming event</Button></p></a>
                            <a href="https://www.bcs.org/membership-and-registrations/become-a-member/" target="_blank" rel="noreferrer"><p><Button>Become a BCS member</Button></p></a>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container> */}
        </React.Fragment>
    )
}
