import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import bgimg from "../img/loginGreen.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
function LoginForm() {
    return (
            <Container className="loginDiv mt-5">
                <Row style={{
                    backgroundColor: "white",
                    padding: 50,
                    boxShadow: '5px 5px 5px gray'
                }}>
                    <Col md={6} style={{
                        margin:'auto'
                    }}>
                        <div className="loginImg">
                            <img src={bgimg} alt="Image"
                                 style={{
                                     resizeMode: 'cover',
                                     height: 400,
                                     width: 550
                                 }}/>
                        </div>
                    </Col>
                    <Col md={6} className="contents">
                        <Row className="justify-content-center">
                            <Col md={8}>
                                <div className="mb-4">
                                    <h3>Sign In</h3>
                                    <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
                                </div>
                                <Form action="#" method="post">
                                    <Form.Group className="first">
                                        <Form.Label htmlFor="username">Username</Form.Label>
                                        <Form.Control type="text" id="username" />
                                    </Form.Group>
                                    <Form.Group className="last mb-4">
                                        <Form.Label htmlFor="password">Password</Form.Label>
                                        <Form.Control type="password" id="password" />
                                    </Form.Group>
                                    <div className="d-flex mb-5 align-items-center">
                                        <InputGroup className="control control--checkbox mb-0">

                                                <InputGroup.Checkbox checked />

                                            <Form.Label className="caption">Remember me</Form.Label>
                                        </InputGroup>
                                        <span className="ml-auto">
                      <a href="/" className="forgot-pass">Forgot Password</a>
                    </span>
                                    </div>
                                    <Button type="submit" className="btn btn-block btn-primary">Log In</Button>
                                    <span className="d-block text-left my-4 text-muted"> or login with </span>
                                    <div className="social-login">
                                        <span className="mr-2"><a href="/" className="mr-2">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a></span>
                                        <span><a href="/" >
                                            <FontAwesomeIcon icon={faGoogle} className="mr-3"/>
                                        </a></span>


                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
    );
}

export default LoginForm;