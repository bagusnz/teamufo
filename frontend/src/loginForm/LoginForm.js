import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import bgimg from "../img/loginGreen.jpg";
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from 'services/firebase';
import { useNavigate } from 'react-router-dom';
import { createUser } from 'services/crud/UserCRUD';
import User from 'models/UserModel';
import { generateRandomId } from 'services/helper';


function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // User signup is successful
            setErrorMessage('');
            await createUser(new User(generateRandomId(), email.split('@')[0], email, 0, 0, Date.now(), null).toObject())
            window.location.replace('/challenges')
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const handleSignIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // User sign-in is successful
            setErrorMessage('');
            console.log('Sign-in successful!');
            navigate('/');
        } catch (error) {
            alert("Login is not successfull. Please try again!")
            setErrorMessage(error.message);
        }
    };



    return (
        <Container className="loginDiv light mt-5">
            <Row style={{
                backgroundColor: "white",
                padding: 50
            }}>
                <Col md={6}>
                    <div className="loginImg">
                        <img src={bgimg} alt="Image"
                            style={{
                                resizeMode: 'cover',
                                height: '30rem'
                            }} />
                    </div>
                </Col>
                <Col md={6} className="contents">
                    <Row className="justify-content-center">
                        <Col></Col>
                        <Col md={8}>
                            <div className="mb-4">
                                <h3>Log in</h3>
                                <p className="mb-4">Log in or register to access your account and start your journey.</p>
                            </div>
                            <Form action="#" method="post">
                                <Form.Group className="first">
                                    <Form.Label htmlFor="email">E-Mail</Form.Label>
                                    <Form.Control type="email" id="email" placeholder='Your email address' onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="last mb-4">
                                    <Form.Label htmlFor="password">Password</Form.Label>
                                    <Form.Control type="password" id="password" placeholder='Your password' onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>
                                {/* <div className="d-flex mb-5 align-items-center">
                                    <InputGroup className="control control--checkbox mb-0">

                                        <InputGroup.Checkbox checked />

                                        <Form.Label className="caption">Remember me</Form.Label>
                                    </InputGroup>
                                    <span className="ml-auto">
                                        <a href="/" className="forgot-pass">Forgot Password</a>
                                    </span>
                                </div> */}
                                <Row >
                                    <Col>
                                        <Button onClick={handleSignIn} className="btn btn-block btn-success float-left mb-3" >Log In</Button>
                                    </Col>
                                    <Col></Col>
                                    <Col style={{ display: "flex", justifyContent: 'flex-end' }}>

                                            <Button onClick={handleSignup} className="btn btn-block btn-success mb-3" style={{ marginLeft: "auto" }} >Register</Button>

                                        </Col>
                                </Row>
                                {/* <span className="d-block text-left my-4 text-muted"> or login with </span>
                                <div className="social-login">
                                    <span className="mr-2"><a href="/" className="mr-2">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a></span>
                                    <span><a href="/" >
                                        <FontAwesomeIcon icon={faGoogle} className="mr-3" />
                                    </a></span>


                                </div> */}
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginForm;