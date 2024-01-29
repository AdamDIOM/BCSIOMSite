import { Container } from "react-bootstrap";
import "./404.css";

export default function Error404(){
    document.title = "Error 404 | BCS Isle of Man Section"
    return(
        <Container className="content">
            <h1>404 Page not found.</h1>
        </Container>
    )
}