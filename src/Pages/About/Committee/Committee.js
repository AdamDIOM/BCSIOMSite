import { Col, Container, Row } from "react-bootstrap";
import "./Committee.css";
import React, { useEffect, useState } from "react";

export default function Committee(){
    document.title = "The Committee | BCS Isle of Man Section"
    const [committee, setCommittee] = useState({committee:[{"name":"sample","role":"sample","qualifications":"sample","imgname":"sample","linkedin":"sample"}]})

    async function getCommittee() {
        await fetch("https://raw.githubusercontent.com/AdamDIOM/BCSIOMSite/main/public/data/committee.json")
        .then((response) => response.json())
        .then((data) => setCommittee(data))
    }
    useEffect(() => {
        getCommittee();
    }, [])

    function CommitteeMember(props) {
        console.log(props.member)
        return (
            <Col xs={12} md={6} lg={4} key={props.key} className="text-center committee-member">
                <img src={`/img/committee/${(props.member.imgname !== "") ? props.member.imgname : "NoPic"}.png`} alt={"headshot of " + props.member.imgname} className="committee-headshot"/>
                {(props.member.role !== "")
                ? <h2 className="role-title">{props.member.role}</h2>
                : <p classname="role-title"><b>Committee member</b></p>
                }
                <p className="name-quals"><b>{props.member.name}</b> {props.member.qualifications}
                {(props.member.linkedin !== undefined && props.member.linkedin !== "") ?
                    <a href={`https://linkedin.com/in/${props.member.linkedin}/`} target="_blank" rel="noreferrer">
                        <img src="/img/linkedin-logo.png" alt="linkedin logo" className="linkedin-logo" />
                    </a>
                : <React.Fragment />}
                </p>
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
                            return <CommitteeMember key={"key-" + member.name} member={member} />
                        })
                    }
                </Row>
                <Row>
                    <p className="vacancy-disclaimer">To be considered for any above vacancies, you must be a BCS member and a resident of the Isle of Man; please get in touch with <a href="mailto:groups@bcs.uk">groups@bcs.uk</a> to submit your application for consideration, providing a cover letter and CV.</p>
                </Row>
            </Container>
        </React.Fragment>
    )
}