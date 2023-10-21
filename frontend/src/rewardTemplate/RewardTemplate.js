import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './rewardVertical.css'
import React from "react";
import bgimg from '../img/v990-129a.jpg';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
const trans = `rgba(210, 210, 210, 0.9)`;

const RewardTemplate = () => {
    return (
        <>
            <div className="top-banner">
                <div
                    className="top-banner"
                    style={{
                        backgroundImage: `url(${bgimg})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: 400,
                        color: 'black',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',


                    }}
                >
                    <p style={{border: '10px solid white', padding: 30, backgroundColor: trans}}><h1 className="top-div">
                        Get Your Rewards</h1></p>
                </div>
            </div>
            <div>
                <div className="container mt-5 mb-3">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card p-3 mb-2">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="icon"><i className="bx bxl-mailchimp"></i></div>
                                        <div className="ms-2 c-details">
                                            <h6 className="mb-0">Mailchimp</h6> <span>1 days ago</span>
                                        </div>
                                    </div>
                                    <div className="badge"><span>Design</span></div>
                                </div>
                                <div className="mt-5">
                                    <h3 className="heading">Senior Product
                                        Designer-Singapore</h3>
                                    <div className="mt-5">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: 50}}
                                                 aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="mt-3"><span className="text1">32 Applied <span
                                            className="text2">of 50 capacity</span></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-3 mb-2">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                        <div className="ms-2 c-details">
                                            <h6 className="mb-0">Dribbble</h6> <span>4 days ago</span>
                                        </div>
                                    </div>
                                    <div className="badge"><span>Product</span></div>
                                </div>
                                <div className="mt-5">
                                    <h3 className="heading">Junior Product
                                        Designer-Singapore</h3>
                                    <div className="mt-5">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: 50}}
                                                 aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="mt-3"><span className="text1">42 Applied <span
                                            className="text2">of 70 capacity</span></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-3 mb-2">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="icon"><i className="bx bxl-reddit"></i></div>
                                        <div className="ms-2 c-details">
                                            <h6 className="mb-0">Reddit</h6> <span>2 days ago</span>
                                        </div>
                                    </div>
                                    <div className="badge"><span>Design</span></div>
                                </div>
                                <div className="mt-5">
                                    <h3 className="heading">Software Architect
                                        Java - USA</h3>
                                    <div className="mt-5">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: 50}}
                                                 aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="mt-3"><span className="text1">52 Applied <span
                                            className="text2">of 100 capacity</span></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};
export default RewardTemplate;