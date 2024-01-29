import { Col, Container, Row } from "react-bootstrap";
import "./Committee.css";
import React, { useEffect, useState } from "react";

export default function Committee(){
    document.title = "The Committee | BCS Isle of Man Section"
    const [committee, setCommittee] = useState({committee:[{"name":"sample","role":"sample","qualifications":"sample","imgname":"sample"}]})

    async function getCommittee() {
        await fetch("https://raw.githubusercontent.com/AdamDIOM/BCSIOMSite/main/public/data/committee.json")
        .then((response) => response.json())
        .then((data) => setCommittee(data))
    }
    useEffect(() => {
        getCommittee();
    }, [])

    function CommitteeMember(props) {
        return (
            <Col xs={12} md={6} lg={4} key={props.key} className="text-center">
                {
                (props.member.imgname !== "")
                ? <img src={"/img/committee/" + props.member.imgname + ".png"} alt={"headshot of " + props.member.imgname} className="committee-headshot"/>
                : <p></p>
                }
                
                <h2>{props.member.role}</h2>
                <p><b>{props.member.name}</b> {props.member.qualifications}</p>
            </Col>
        )
    }

    return(
        <React.Fragment>
            <Container className="content">
                <Row className="Intro">
                    <Col xs={12}>
                        <h1>BCS Isle of Man Committee</h1>
                        <p>Here are the members of the Isle of Man international section committee.</p>
                    </Col>
                </Row>
                <Row className="committee-members">
                    {
                        committee.committee.map(member => {
                            console.log(member)
                            return <CommitteeMember key={"key-" + member.name} member={member} />
                        })
                    }
                </Row>
            </Container>
        </React.Fragment>
    )
}