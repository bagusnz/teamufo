import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import {ToastContainer} from "react-bootstrap";

function ToastExample() {
    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);

    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);

    return (
        <Row>
            <Col md={6} className="mb-2">
                <span className="m-2">Example Notification</span>
                <Button variant="outline-success" onClick={toggleShowA} className="m-2">
                    1
                </Button>
                <Button variant="outline-success" onClick={toggleShowB} className="m-2">
                    2
                </Button>
                <ToastContainer  position="bottom-end" className="p-3" style={{ zIndex: 1 }}>
                    <Toast show={showA} onClose={toggleShowA}>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Your CO2</strong>
                            <small>1 min ago</small>
                        </Toast.Header>
                        <Toast.Body>User1 has done all daily challenges!</Toast.Body>
                    </Toast>
                    <Toast show={showB} onClose={toggleShowB}>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Your CO2</strong>
                            <small>just now</small>
                        </Toast.Header>
                        <Toast.Body>User5 has done all daily challenges!</Toast.Body>
                    </Toast>
                </ToastContainer>

            </Col>
        </Row>
    );
}

export default ToastExample;