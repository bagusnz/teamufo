import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./values.css";
import Sustainability from './img/sustainability.jpg';
import responsibility from './img/responsibility.jpg';
import community from './img/community.jpg';


const Values = () => {
    const trans = `rgba(230, 230, 230, 0.5)`;
    return (
        <>
            <Container >
                <div >
                    <Row >
                    <Col></Col>
                    <Col><h1 className="valueText" id="pageHeaderTitle">Our values</h1></Col>

                    <Col></Col>
                </Row>
                    <Row className="align-items-center divShadow">

                        <Col md={6} lg={4} className="column">
                            <Card className="gr-2 mr-3"
                                  style={{
                                      backgroundImage: `url(${community})`,
                                      backgroundSize: "cover",
                                      backgroundRepeat: "no-repeat",
                                      display: "flex",
                                      flexDirection: "column",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      boxShadow: 'inset 0 0 0 100vmax rgba(255, 255, 255, 0.5)'
                                  }}>
                                <div className="txt">
                                    <h1>
                                        <strong>Community</strong>
                                    </h1>
                                    <p style={{
                                            backgroundColor: trans,
                                        padding: 10,
                                        transition: 0.5
                                        }}>
                                        "Uniting for a Sustainable Future,
                                        Together We Reduce CO2 Emissions and Preserve our Planet for Generations to Come."
                                    </p>
                                </div>
                                {/* <a href="/">more</a> */}
                                <div className="ico-card">
                                    <i className="fa fa-codepen"></i>
                                </div>
                            </Card>
                        </Col>
                        <Col md={6} lg={4} className="column mr-1 ml-1">
                            <Card className="gr-2"
                                style={{
                                backgroundImage: `url(${Sustainability})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                    boxShadow: 'inset 0 0 0 100vmax rgba(255, 255, 255, 0.5)'
                            }}>
                                <div className="txt">
                                    <h1 >
                                        <strong>Sustainability</strong>
                                    </h1>
                                    <p style={{
                                        backgroundColor: trans,
                                        padding: 10,
                                        transition: 0.5
                                    }}>"Inspiring a Sustainable Future, Together We Reduce CO2 Emissions for a Healthier Planet and Better Tomorrow."
                                    </p>
                                </div>
                                {/* <a href="/">more</a> */}
                                <div className="ico-card">
                                    <i className="fa fa-codepen"></i>
                                </div>
                            </Card>
                        </Col>
                        <Col md={6} lg={4} className="column">
                            <Card className="gr-2"
                                  style={{
                                      backgroundImage: `url(${responsibility})`,
                                      backgroundSize: "cover",
                                      backgroundRepeat: "no-repeat",
                                      display: "flex",
                                      flexDirection: "column",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      boxShadow: 'inset 0 0 0 100vmax rgba(255, 255, 255, 0.5)'
                                  }}>
                                <div className="txt">
                                    <h1>
                                        <strong>Responsibility</strong>
                                    </h1>
                                    <p style={{
                                        backgroundColor: trans,
                                        padding: 10,
                                        transition: 0.5
                                    }}>
                                        "Embracing Responsibility for Our Future: Reducing CO2 Emissions, Protecting the Earth, and Ensuring a Sustainable Tomorrow."
                                        
                                    </p>
                                </div>
                                {/* <a href="/">more</a> */}
                                <div className="ico-card">
                                    <i className="fa fa-codepen"></i>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>

            </Container>
        </>
    );
};
export default Values;