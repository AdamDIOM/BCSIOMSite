import { Col, Row } from "react-bootstrap";
import "./Footer.css";

export default function Footer(){
    return(
            <Row className="footer">
                <Col md={3} sm={6} xs={12} className="footerCol ">
                    <a href="https://bcs.org" rel="noreferrer" target="_blank"><b>BCS, The Chartered Institute for IT</b></a>
                </Col>
                <Col md={3} sm={6} xs={12} className="footerCol">
                    <a href="https://www.bcs.org/membership-and-registrations/become-a-member/bcs-code-of-conduct/" rel="noreferrer" target="_blank"><b>BCS Code of Conduct</b></a>
                </Col>
                <Col md={3} sm={6} xs={12} className="footerCol">
                    <a href="/events"><b>BCS IOM Events</b></a>
                </Col>
                <Col md={3} sm={6} xs={12} className="footerCol">
                    <a href="https://www.bcs.org/legal-and-privacy-notices/data-privacy-notice/"><b>BCS UK Data Privacy Notice</b></a>
                </Col>
                <Col md={2} className="d-s-none"></Col>
                <Col md={8} s={12}>
                    <p>BCS (Isle of Man) Limited | Isle of Man Registered Company: number 111766C | Directors: K H Roosen, G Jones, O Cutajar, A C Drummond, S R R Wilson | Registered office: 4 Abbots Way, Abbotswood, Ballasalla, Isle of Man. IM9 3EQ | Isle of Man Registered Charity: number 997 | The name BCS, and any logos are property of BCS, The Chartered Institute for IT and are used with permission.</p>
                </Col>
            </Row>
    )
}