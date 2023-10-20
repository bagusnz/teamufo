import React, {useState} from "react";
import {Button, Card, CardBody, Col, Container, Row} from "reactstrap";

const ChallengeCardContainer = () => {
    const [foodwaste, setFoodwaste] = useState(false);
        return (
            <section className="section section-lg pt-lg-0 mt--200">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="12">
                        <Row className="row-grid">
                            <Col lg="4">
                                <Card className="card-lift--hover shadow border-0">
                                    <CardBody className="py-5">
                                        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                            <i className="ni ni-check-bold"/>
                                        </div>
                                        <h6 className="text-primary text-uppercase">
                                            Reduce food waste
                                        </h6>
                                        <p className="description mt-3">
                                            Erklärung:
                                        </p>
                                        <Button
                                            className="mt-4"
                                            color="primary"
                                            href="#pablo"
                                            onClick={() => {setFoodwaste(!foodwaste)}}
                                        >
                                            {foodwaste ? "Done" : "to do"}
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card className="card-lift--hover shadow border-0">
                                    <CardBody className="py-5">
                                        <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                                            <i className="ni ni-istanbul"/>
                                        </div>
                                        <h6 className="text-success text-uppercase">
                                            One Vegetarian Meal per Day
                                        </h6>
                                        <p className="description mt-3">
                                            Erklärung:
                                        </p>
                                        <Button
                                            className="mt-4"
                                            color="success"
                                            href="#pablo"
                                            onClick={()=>{}}
                                        >
                                            to do
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card className="card-lift--hover shadow border-0">
                                    <CardBody className="py-5">
                                        <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                            <i className="ni ni-planet"/>
                                        </div>
                                        <h6 className="text-warning text-uppercase">
                                            Taking a Public Transportation
                                        </h6>
                                        <p className="description mt-3">
                                            Erklärung:
                                        </p>
                                        <Button
                                            className="mt-4"
                                            color="warning"
                                            href="#pablo"
                                            onClick={()=>{}}
                                        >
                                            to do
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="row-grid">
                            <Col lg="4">
                                <Card className="card-lift--hover shadow border-0">
                                    <CardBody className="py-5">
                                        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                            <i className="ni ni-check-bold"/>
                                        </div>
                                        <h6 className="text-primary text-uppercase">
                                            Buy regional products instead of imported ones
                                        </h6>
                                        <p className="description mt-3">
                                            Erklärung:
                                        </p>
                                        <Button
                                            className="mt-4"
                                            color="primary"
                                            href="#pablo"
                                            onClick={()=>{}}
                                        >
                                            to do
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card className="card-lift--hover shadow border-0">
                                    <CardBody className="py-5">
                                        <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                                            <i className="ni ni-istanbul"/>
                                        </div>
                                        <h6 className="text-success text-uppercase">
                                            Turning off your electric devices
                                        </h6>
                                        <p className="description mt-3">
                                            Erklärung:
                                        </p>
                                        <Button
                                            className="mt-4"
                                            color="success"
                                            href="#pablo"
                                            onClick={()=>{}}
                                        >
                                            to do
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
);
}

export default ChallengeCardContainer;