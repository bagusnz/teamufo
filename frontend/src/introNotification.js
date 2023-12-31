import React from "react";
import { Container } from "react-bootstrap";
import "./introNotification.css";
import community from "./img/Online-world.png";

import Todo from "./img/To-do-list-rafiki.png";

const IntroNotification = () => {
  return (
    <>
      <Container>
        <h1 className="h1 text-center" id="pageHeaderTitle">
          Our features
        </h1>
        <section className="light">
          <div className="container py-4">
            <article className="postcard infoTab light blue">
              <a className="postcard__img_link" href="#">
                <img className="postcard__img" src={Todo} alt="Image Title" />
              </a>
              <div className="postcard__text">
                <h1 className="postcard__title blue">Doing Challenges</h1>
                <div className="postcard__subtitle small">
                  <time dateTime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th
                    2020
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  CO2 reduction benefits biodiversity and contributes to a
                  healthier planet. <br />
                  Taking on these challenges showcases leadership in the fight
                  against climate change.
                  <br />
                  CO2 reduction benefits biodiversity and contributes to a
                  healthier planet.                  
                </div>
              </div>
            </article>

            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src={community}
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text">
                <h1 className="postcard__title blue">Doing Together</h1>
                <div className="postcard__subtitle small">
                  <time dateTime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th
                    2020
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  Community efforts to reduce CO2 emissions create a collective
                  impact, making a real difference in the fight against climate
                  change.
                  <br />
                  Collaboration on CO2 reduction can create local jobs and
                  stimulate economic growth, contributing to a vibrant and
                  sustainable community.
                  <br />
                  When a community reduces its carbon footprint, it becomes a
                  model for others, inspiring broader change and creating a
                  ripple effect of environmental stewardship.
                </div>
              </div>
            </article>
          </div>
        </section>
      </Container>
    </>
  );
};
export default IntroNotification;
