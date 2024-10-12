import { Col, Container, Row } from "react-bootstrap";
import "./Events.css";
import React, { useEffect, useState } from "react";

export default function Events(){
    document.title = "Events | BCS Isle of Man Section"


    const [data, setData] = useState([
        {
            "title": "Loading...",
            "eventlink": "",
            "date": "",
            "past": false
          }
    ]);
    const [pastData, setPastData] = useState([
        {
            "title": "Loading...",
            "eventlink": "",
            "date": "",
            "past": false
          }
    ]);

    useEffect(() => {

        function splitData(input){
            var currentEvents = []
            var pastEvents = []
            input.forEach(element => {
                console.log(element.past);
                element.past ? pastEvents.push(element) : currentEvents.push(element);
            });
            setData(currentEvents);
            setPastData(pastEvents);
        }

        // function sortList(received){
        //     received.sort((a, b) => b.start_month.toString().padStart(2, '0').localeCompare(a.start_month.toString().padStart(2, '0')));
        //     received.sort((a, b) => b.start_year.toString().localeCompare(a.start_year.toString()));
        //     console.log(received[0]);
        //     var newList = [];
        //     console.log(newList);
        //     for(var i = 0; i < received.length; i++){
        //         if(newList.includes(received[i])) continue;
        //         newList.push(received[i]);
        //         for(var j = i+1; j < received.length; j++){
        //             if(received[i].company === received[j].company) newList.push(received[j]);
        //         }
        //     }
        //     return newList;
        // }
    
        function fetchData() {
            fetch(`https://script.google.com/macros/s/AKfycbwDfrNhozeOGVCRoKMkknLe3NjW2sSJ4Wvfmek0nZ0SFJL7NqWQksuOFjpX7gMhsDW7rg/exec`) 
            .then(response => response.json())
            .then(response => splitData(response))
            .catch(error => console.error('Error fetching data:', error));
    
            
    
            //setData(newList);
        }
        fetchData()
      }, []);

    return(
        <React.Fragment>
            <Container className="content">
                <Row className="Intro">
                    <Col xs={12}>
                        <h1>Upcoming Events</h1>
                    </Col>
                </Row>
                {/* <tito-events account="bcs-iom"></tito-events> */}
                <Row>
                    
                    {data.length >= 1 ? (
                        <React.Fragment>
                        <p>Check out the details of our upcoming BCS Isle of Man events below.</p>

                        {data.map((item, index, list) => (
                            <Col xs={12} lg={6} className="event-block px-3 py-1">
                                <a href={item.eventlink} className="text-decoration-none">
                                    <div className="event-block-inner px-3 py-2 rounded">
                                        <h2 className="text-center">{item.title}</h2>
                                        <b>{new Date(item.date).toLocaleDateString()}</b>
                                    </div>
                                </a>
                            </Col>
                        ))}
                        </React.Fragment>

                        ) : (
                            <p>There are currently no planned events upcoming. Check back later to see if we have any more events!</p>
                        )
                    }
                </Row>
                {pastData.length >= 1 && !(pastData.length === 1 && pastData[0].title === "Loading...") ? (
                    <React.Fragment>
                        <Row className="Intro">
                            <Col xs={12}>
                                <h1>Past Events</h1>
                                <p>Want to check out some details to our past events? They're all listed here!</p>
                            </Col>
                        </Row>
                        <Row>
                            {pastData.map((item, index, list) => (
                                <Col xs={12} lg={6} className="event-block px-3 py-1">
                                    <a href={item.eventlink} className="text-decoration-none">
                                        <div className="event-block-inner px-3 py-2 rounded">
                                            <h2 className="text-center">{item.title}</h2>
                                            <b>{new Date(item.date).toLocaleDateString()}</b>
                                        </div>
                                    </a>
                                </Col>
                            ))}
                        </Row>
                    </React.Fragment>
                ) : (
                    <React.Fragment></React.Fragment>
                )
            }
            </Container>
        </React.Fragment>
    )
}