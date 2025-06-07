import { Col, Row } from "react-bootstrap";
import "./Footer.css";

export default function Footer(){
    return(
            <Row className="footer">
                <Col xs={12} className="footer-buttons">
                    <Row>
                        <Col lg={3} md={6} className="footerCol ">
                            <a href="https://bcs.org" rel="noreferrer" target="_blank"><b>BCS, The Chartered Institute for IT</b></a>
                        </Col>
                        <Col lg={3} md={6} className="footerCol">
                            <a href="https://www.bcs.org/membership-and-registrations/become-a-member/bcs-code-of-conduct/" rel="noreferrer" target="_blank"><b>BCS Code of Conduct</b></a>
                        </Col>
                        <Col lg={3} md={6} className="footerCol">
                            <a href="/events"><b>BCS IOM Events</b></a>
                        </Col>
                        <Col lg={3} md={6} className="footerCol">
                            <a href="/privacy"><b>Data Privacy Notice</b></a>
                        </Col>
                    </Row>
                </Col>
                <Col xl={{span: 2, order:1}} md={{span: 6, order: 1}} xs={{span: 12, order: 2}} className="chamber-logo-container d-flex flex-wrap align-items-center mb-md-0 mb-4">
                    <a href="https://www.iomchamber.org.im/" target="_blank" rel="noreferrer">
                        <img className="chamber-logo mx-auto d-block" src="img/proud-chamber-member.png" alt="BCS IOM is a proud member of the Isle of Man Chamber of Commerce." />
                    </a>
                </Col>
                
                <Col xl={{span: 8, order: 2}} md={{span: 12, order: 3}} xs={{span: 12, order: 3}} className="footer-texts">
                    <p>BCS (Isle of Man) Limited</p>
                    <p>Isle of Man Registered Company: number 111766C</p>
                    <p>Directors: A C Drummond, A S Beesley, G Jones, K Quayle, S R R Wilson</p>
                    <p>Registered office: 57 Ard Reayrt, Laxey, Isle of Man. IM4 7QQ</p>
                    <p>Isle of Man Registered Charity: number 997 | ICO Registration Number R004117</p>
                    <p>The name BCS, and any logos are property of BCS, The Chartered Institute for IT and are used with permission.</p>
                </Col>
                <Col xl={{span: 2, order: 3}} md={{span: 6, order: 2}} xs={{order:1}} className="circle-link d-flex flex-wrap align-items-center mb-md-0 mb-sm-4">
                </Col>
            </Row>
    )
}
