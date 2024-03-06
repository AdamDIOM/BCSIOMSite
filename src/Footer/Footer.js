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
                    <p>Directors: K H Roosen, G Jones, O Cutajar, A C Drummond, S R R Wilson</p>
                    <p>Registered office: 4 Abbots Way, Abbotswood, Ballasalla, Isle of Man. IM9 3EQ</p>
                    <p>Isle of Man Registered Charity: number 997 | ICO Registration Number R004117</p>
                    <p>The name BCS, and any logos are property of BCS, The Chartered Institute for IT and are used with permission.</p>
                </Col>
                <Col xl={{span: 2, order: 3}} md={{span: 6, order: 2}} xs={{order:1}} className="circle-link d-flex flex-wrap align-items-center mb-md-0 mb-sm-4">
                    <div className="centre">
                        <p><b><h4>Connect to our Circle Community</h4></b></p>
                        <a href="https://bcs-offshore.circle.so" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="circle-button">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                            </svg>
                        </a>
                    </div>
                    
                </Col>
            </Row>
    )
}