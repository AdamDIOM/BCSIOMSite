import { Col, Container, Row } from "react-bootstrap";
import "./Committee.css";
import React, { useEffect, useState } from "react";

export default function Committee(){
    document.title = "The Committee | BCS Isle of Man Section"
    const [committee, setCommittee] = useState([{"name":"name","role":"sample","qualifications":"sample","imgid":"sample","linkedin":"sample"}])
    const [loading, setLoading] = useState(true)

    const getCommittee = async() => {
        await fetch("https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLj0L5z9_BWxdJbW5jhtmSr75ANOYa5guo1MeXwNV5dzyTFCnO6a-gmlAPNhWz_5nzg65TfybFeqFtwWpZuULilxtCGk_tCL2DqVSFn7hIv-x0qYZFg4-FBPcXxIKLoqUA_I4dFKUUFq-pa_TE6E8_3eisafjGQY6jw41lwe4d1EiAnljU5PLQbS-6hgiexsXZhrS0PTEHfppSkF0mJ7gkxPFD0RF10rmN6VHVesHC0DhwHXmABeixaNwmZC9nIHLdQQ95mvIU6_2TSuoCssjtqIqpBSFA&lib=MQv3XoP1cugRDhwiCx8aDz8_gJC8hqBcP")
        .then((response) => response.json())
        .then((data) => setCommittee(data))
        setLoading(false)
    }
    useEffect(() => {
        getCommittee();
    }, [])

    function CommitteeMember({member}) {
        return (
            <Col xs={12} md={6} lg={4} className="text-center committee-member">
                <img src={(member.imgid !== "") ? `https://lh3.googleusercontent.com/d/${member.imgid}` : "/img/NoPic.png"} alt={"headshot of " + member.name} className="committee-headshot"/>
                {(member.role !== "")
                ? <h2 className="role-title">{member.role}</h2>
                : <p className="role-title"><b>Committee member</b></p>
                }
                <p className="name-quals"><span><b>{member.name}</b> {member.qualifications} </span>
                {(member.linkedin !== undefined && member.linkedin !== "") ?
                    <a href={`https://linkedin.com/in/${member.linkedin}/`} target="_blank" rel="noreferrer">
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
                { loading ? (
                    <>
                        <div className="d-flex justify-content-center align-items-center w-100 h-100">
                            <h2>Loading...</h2>
                        </div>  
                        <div className="d-flex justify-content-center align-items-center w-100 h-100">
                            <div className="spinner-border" role="status"></div>
                        </div>             
                    </>      
                ) : (
                    <>
                        <Row className="committee-members">
                            {
                                committee.map(member => {
                                    return <CommitteeMember key={member.name} member={member} />
                                })
                            }
                        </Row>
                        <Row>
                            <p className="vacancy-disclaimer">To be considered for any above vacancies, you must be a BCS member and a resident of the Isle of Man; please get in touch with <a href="mailto:groups@bcs.uk">groups@bcs.uk</a> to submit your application for consideration, providing a cover letter and CV.</p>
                        </Row>
                </>
                )}
            </Container>
        </React.Fragment>
    )
}
