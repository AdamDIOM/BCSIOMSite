import { Accordion, Button, Col, Container, Row } from "react-bootstrap";
import "./Events.css";
import React from "react";

export default function Events(){
    return(
        <React.Fragment>
            <Container className="content">
                <Row className="Intro">
                    <Col xs={12}>
                        <h1>Upcoming Events</h1>
                        <p>Check out the details of our upcoming BCS Isle of Man events below.</p>
                    </Col>
                </Row>
                <tito-events account="bcs-iom"></tito-events>
            </Container>
        </React.Fragment>
    )
}