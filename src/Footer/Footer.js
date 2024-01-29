import { Col, Row } from "react-bootstrap";
import "./Footer.css";

export default function Footer(){
    return(
            <Row className="footer">
                <Col sm={4} xs={12} className="footerCol ">
                    <a href="https://bcs.org" rel="noreferrer" target="_blank"><b>BCS UK</b></a>
                </Col>
                <Col sm={4} xs={12} className="footerCol">
                    <a href="https://www.bcs.org/membership-and-registrations/become-a-member/bcs-code-of-conduct/" rel="noreferrer" target="_blank"><b>BCS Code of Conduct</b></a>
                </Col>
                <Col sm={4} xs={12} className="footerCol">
                    <a href="https://ti.to/bcs-iom/" rel="noreferrer" target="_blank"><b>Events</b></a>
                </Col>
            </Row>
    )
}