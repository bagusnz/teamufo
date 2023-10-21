import {Container} from "react-bootstrap";
import Todo from "./img/To-do-list-rafiki.png";
import community from "./img/Online-world.png";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TeamMember = () => {
    const trans = `rgba(210, 210, 210, 0.9)`;
    return (
        <>
            <Container >
                <section className="light">
                    <div className="container py-4">
                        <h1 className="h1 text-center" id="pageHeaderTitle">Our Teams</h1>

                        <article className="postcard light blue">
                            <a className="postcard__img_link" href="#">
                                <img className="postcard__img" src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80"  alt="Image Title" />
                            </a>
                            <div className="postcard__text">
                                <h1 className="postcard__title blue">UFO <span className="fst-italic">(User Friendly Organisation)</span></h1>
                                <div className="postcard__subtitle small">
                                        <i className="fas fa-calendar-alt mr-2"></i>Collabothon 2023
                                </div>
                                <div className="postcard__bar"></div>
                                <div className="postcard__preview-txt">
                                    Laura Jambek - Product Manager <br/>
                                    Hyang Gi Jang - Frontend Developer <br/>
                                    Minje Lee - Frontend Developer <br/>
                                    Bagus Nanda - Backend Developer <br/>
                                    Hetal Patel - Business Expert

                                </div>
                            </div>
                        </article>

                    </div>
                </section>
            </Container>
        </>
    );
};
export default TeamMember;