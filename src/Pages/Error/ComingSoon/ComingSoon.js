import { Container } from "react-bootstrap";
import "./ComingSoon.css";

export default function ComingSoon(){
    document.title = "Page Coming Soon | BCS Isle of Man Section"
    return(
        <Container className="content">
            <h1>This page is coming soon.</h1>
            <p>The content for this page has not yet been created. Please bear with.</p>
        </Container>
    )
}