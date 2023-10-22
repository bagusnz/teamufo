import React from "react";
import Office from "./img/office.png";
import Team from "./img/team.png";
import Design from "./img/Design.png";
import Profile from "./img/6690826.jpg";
import {Container} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'Technology.css'
import bgimg from "./img/v990-129a.jpg";

const Technology = () => {

    return (
        <Container>
            <h1 className="h1 text-center" id="pageHeaderTitle">
                Our Technologies
            </h1>

            <Row>
                <Col sm={12} md={6} lg={4} className="mb-4 light">
                    <Card className="text-dark tech-has-bg click-col" style={{ backgroundImage: `url(${Design})`,boxShadow: 'inset 0 0 0 100vmax rgba(255, 255, 255, 0.7)' }}>
                        <Card.Img src="https://source.unsplash.com/600x900/?tech,street" alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?" className="d-none" />
                        <div className="tech-img-overlay d-flex flex-column">
                            <Card.Body>
                                <h1 className="tech-meta mb-2 text-black">Backend</h1>
                                <h6 className="tech-title mt-0">
                                    Firestore <br/>
                                    Identity Platform <br/>
                                    Cloud Storage <br/>
                                    App Engine
                                </h6>
                                <small><i className="far fa-clock"></i> Collabothon 2023</small>
                            </Card.Body>
                            <Card.Footer>
                                <div className="media">
                                    <img
                                        className="mr-3 rounded-circle"
                                        src={Profile}
                                        alt="Generic placeholder image"
                                        style={{ maxWidth: '50px' }}
                                    />
                                    <div className="media-body">
                                        <h6 className="my-0 text-dark d-block">Bagus Nanda</h6>
                                        <small>Backend</small>
                                    </div>
                                </div>
                            </Card.Footer>
                        </div>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4} className="mb-4 light">
                    <Card className="text-dark tech-has-bg click-col" style={{ backgroundImage: `url(${Team})`,boxShadow: 'inset 0 0 0 100vmax rgba(255, 255, 255, 0.7)' }}>
                        <Card.Img src="https://source.unsplash.com/600x900/?tech,street" alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?" className="d-none" />
                        <div className="tech-img-overlay d-flex flex-column">
                            <Card.Body>
                                <h1 className="tech-meta mb-2 text-black">Frontend</h1>
                                <h4 className="tech-title mt-0">
                                   React <br />
                                   Bootstrap
                                    </h4>
                                <small><i className="far fa-clock"></i> Collabothon 2023</small>
                            </Card.Body>
                            <Card.Footer>
                                <div className="media">
                                    <img
                                        className="mr-3 rounded-circle"
                                        src={Profile}
                                        alt="Generic placeholder image"
                                        style={{ maxWidth: '50px' }}
                                    />
                                    <div className="media-body">
                                        <h6 className="my-0 text-dark d-block">Hyang Gi Jang, Minje Lee</h6>
                                        <small>Frontend</small>
                                    </div>
                                </div>
                            </Card.Footer>
                        </div>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4} className="mb-4 light">
                    <Card className="text-dark tech-has-bg click-col" style={{ backgroundImage: `url(${Office})`,boxShadow: 'inset 0 0 0 100vmax rgba(255, 255, 255, 0.7)' }}>
                        <Card.Img src="https://source.unsplash.com/600x900/?tech,street" alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?" className="d-none" />
                        <div className="tech-img-overlay d-flex flex-column">
                            <Card.Body>
                                <h1 className="tech-meta mb-2 text-black">Resources</h1>
                                <h4 className="tech-title mt-0">
                                    Freepik<br/>
                                    Google
                                </h4>
                                <small><i className="far fa-clock"></i> Collabothon 2023</small>
                            </Card.Body>
                            <Card.Footer>
                                <div className="media">
                                    <img
                                        className="mr-3 rounded-circle"
                                        src={Profile}
                                        alt="Generic placeholder image"
                                        style={{ maxWidth: '50px' }}
                                    />
                                    <div className="media-body">
                                        <h6 className="my-0 text-dark d-block">Laura Jambek, Hetal Patel</h6>
                                        <small>Management</small>
                                    </div>
                                </div>
                            </Card.Footer>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Technology;
