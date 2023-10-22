import { Container } from "react-bootstrap";
import React from "react";
import Team from './img/Team-spirit-pana.png'

const TeamMember = () => {
  return (
    <>
      <Container>
        <h1 className="h1 text-center" id="pageHeaderTitle">
          Our Teams
        </h1>
        <section className="light">
          <div className="container py-4">
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src={Team}
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text">
                <h1 className="postcard__title blue">
                  UFO{" "}
                  <span className="fst-italic">
                    (User Friendly Organisation)
                  </span>
                </h1>
                <div className="postcard__subtitle small">
                  <i className="fas fa-calendar-alt mr-2"></i>Collabothon 2023
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  Laura Jambek - Product Manager <br />
                  Hyang Gi Jang - Frontend Developer <br />
                  Minje Lee - Frontend Developer <br />
                  Bagus Nanda - Backend Developer <br />
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
