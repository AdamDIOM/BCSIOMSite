import { Container } from "react-bootstrap";
import "./Privacy.css";
import React from "react";

export default function Privacy(){
    return(
        <React.Fragment>
            <Container className="content">
                <h1>Privacy Notice</h1>
                <h2>Cookies Notice</h2>
                <p>We do not use any cookies within this site</p>
            </Container>
        </React.Fragment>
    )
}