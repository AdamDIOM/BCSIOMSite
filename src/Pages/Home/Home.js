import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";

export default function Footer(){
    return(
        <Container>
            <Row className="Intro">
                <Col xs={12}>
                    <h1>BCS Isle of Man International Section</h1>
                   <p>We’re a community of IT professionals who serve BCS members and inform the IT community in the Isle of Man.</p>
                </Col>
            </Row>
            <Row>
                <Col md={{span:4, order:1}} xs={{span:12, order:2}} className="d-flex align-self-center justify-content-md-end justify-content-center">
                    <div className="chair-headshot">
                        <img src="/img/committee/Kurt.png" alt="Kurt Roosen, Chair, BCS Isle of Man" />
                    </div>
                </Col>
                <Col md={{span:8, order:1}} xs={{span:12, order:2}} className="align-self-center">
                <p><b>Welcome to our section!</b></p>
                <p>We were established as a BCS international section in July 2004 to support our thriving e-business sector.</p>
                <p>If you live on, or are a regular visitor to, the Isle of Man, why not come along to one of our events to meet other IT professionals and hear about the latest technology and business developments on the island.</p>
                <p>We welcome members and non-members alike, and we’re always interested in new ideas and suggestions for future events. If you’d like to present at our next event or contribute in any other way, then please do get in touch.</p>
                <p><b>Kurt Roosen, Chair</b></p>
                </Col>
            </Row>
        </Container>
    )
}