import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import PageBanner from "./PageBanner";
import Questions from "./img/Questions-pana.png";
import community from "./img/Online-world.png";

const KwhToCO2Calculator = () => {
  const [kwhInput, setKwhInput] = useState("");
  const [houseSize, setHouseSize] = useState("");
  const [peopleCount, setPeopleCount] = useState(1);
  const [co2Emissions, setCO2Emissions] = useState(0);
  const [co2Credits, setCO2Credits] = useState(0);
  const [co2CreditsPerPerson, setCO2CreditsPerPerson] = useState(0);

  const conversionRate = 0.5; // You can adjust this value based on your specific calculations.

  const handleKwhInputChange = (e) => {
    const value = e.target.value;
    setKwhInput(value);
    calculateCO2Credits(value);
  };

  const handleHouseSizeChange = (e) => {
    setHouseSize(e.target.value);
    calculateCO2Credits(kwhInput);
  };

  const handlePeopleCountChange = (e) => {
    setPeopleCount(e.target.value);
    calculateCO2Credits(kwhInput);
  };

  const calculateCO2Credits = (kwh) => {
    const emissions = kwh * conversionRate;
    const houseSizeFactor = parseFloat(houseSize) || 1; // Assuming a default of 1 m^2
    const credits = 100 - emissions * houseSizeFactor;
    const creditsPerPerson = credits / peopleCount;
    setCO2Emissions(emissions);
    setCO2Credits(credits);
    setCO2CreditsPerPerson(creditsPerPerson);
  };

  return (
    <>
      <PageBanner title={"CO2 Calculator"} />
      <Container>

        <Row>
          <Col></Col>
          <Col md={10} className="mt-5 light calcul">
            <Form>
              <Form.Group>
                <Form.Label>Enter Energy Consumption (kWh)</Form.Label>
                <Form.Control
                    type="number"
                    value={kwhInput}
                    onChange={handleKwhInputChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>
                  House Size (m<sup>2</sup>)
                </Form.Label>
                <Form.Control
                    type="number"
                    value={houseSize}
                    onChange={handleHouseSizeChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Number of People</Form.Label>
                <Form.Control
                    type="number"
                    value={peopleCount}
                    onChange={handlePeopleCountChange}
                />
              </Form.Group>
            </Form>
            <div className="m-3">
              <p >
                CO<sub>2</sub> Emissions: <strong>{co2Emissions} kg</strong>
              </p>
              <p>
                CO<sub>2</sub> Credits: <strong>{co2Credits} kg</strong>
              </p>
              <p>
                CO<sub>2</sub> Credits Per Person: <strong>{co2CreditsPerPerson} kg</strong>
              </p>
              <p>
                The formula to calculate CO<sub>2</sub> emission refers to chatgpt.
              </p>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <section >
            <div className="container py-4">

              <article className="postcard light">
                <a className="postcard__img_link" href="#">
                  <img
                      className="postcard__img"
                      src={Questions}
                      alt="Image Title"
                  />
                </a>
                <div className="postcard__text">
                  <h1 className="postcard__title blue">What is Carbon Footprint?</h1>
                  <div className="postcard__subtitle small">
                      <i className="fas fa-calendar-alt mr-2"></i>Mike Berners-Lee,
                    Professor at Lancaster University in the UK and
                    Author of <span class="fst-italic">"The Carbon Footprint of Everything"</span>
                  </div>
                  <div className="postcard__bar"></div>
                  <div className="postcard__preview-txt">
                      "It is “the sum total of all the greenhouse gas emissions that had to take place in order for a product to be produced or for an activity to take place.”
                    <br />
                    <a href="https://www.nationalgeographic.com/environment/article/what-is-a-carbon-footprint-how-to-measure-yours">Source</a>

                  </div>
                </div>
              </article>
            </div>
          </section>
        </Row>

      </Container>
    </>
  );
};

export default KwhToCO2Calculator;
