import { Accordion, Container } from "react-bootstrap";
import "./AboutUs.css";

export default function AboutUs(){
    document.title = "About us | BCS Isle of Man Section"
    return(
        <Container className="content">
            <h1>About us</h1>
            <p className="subtitle">At BCS, we’re on a mission to ensure everyone’s experience with technology is positive. It’s something we’ve been committed to since 1957.</p>
            <h2>Who we are</h2>
            <p>The BCS has over 70,000 members in 150 countries, and a wider community of business leaders, educators, practitioners and policy-makers all committed to our mission. The BCS community in the Isle of Man consists of 100 members and growing.</p>
            <p>As a charity with a royal charter, the BCS agenda is to lead the IT industry through its ethical challenges, to support the people who work in the industry, and to make IT good for society. The local section of the BCS in the Isle of Man was formed as a separate company and charity in 2004, with the aim to support the local members of the BCS through events, activities and networking.</p>
            <h2>What we do</h2>
            <p>At BCS, we seek to ensure the digital journey is safe and positive for everyone, by raising standards of competence and conduct across the IT industry and tackling ethical challenges along the way. In the Isle of Man seek to do this through practical application of our knowledge and skills, to promote a professional digital agenda that is embedded into our community.</p>
            <p>Everything done at BCS is built on four strategic pillars, which make it possible for to raise standards and realise greater potential in the technology industry.</p>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h3>Membership</h3></Accordion.Header>
                    <Accordion.Body>
                        <p>Promote and support the growing and diverse community of IT and digital professionals committed to making IT good for society. Members are at the heart of our community.</p>
                        <p>Support members to gain the skills, expertise and connections they need to develop their career, shape the digital future and be recognised as trusted professionals.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h3>Inspiration</h3></Accordion.Header>
                    <Accordion.Body>
                        <p>Influence and improve computing education in all its forms to improve opportunities for young people, society and the economy.</p>
                        <p>Create a diverse talent pipeline, inspiring significantly more careers in IT and digital roles.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h3>Progression</h3></Accordion.Header>
                    <Accordion.Body>
                        <p>Provide opportunities for learning and development to support people’s career progression and raise standards of competence in our profession.</p>
                        <p>Assess and recognise talent at every level through a diverse range of qualifications, professional registrations, content and skills frameworks.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h3>Influence</h3></Accordion.Header>
                    <Accordion.Body>
                        <p>Tackle the big issues facing our digital lives, connecting industry, education and government to shape and bring about impactful change on society and our profession.</p>
                        <p>Campaign to raise trust in the IT profession and ensure IT is used effectively and ethically to solve the biggest problems of society.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            
            
            
            
            
            
        </Container>
    )
}