import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

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
    <Container>
      <Row>
        <Col md={6}>
          <h2>KWh to CO2 Credit Calculator</h2>
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
              <Form.Label>House Size (m^2)</Form.Label>
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
          <div>
            <p>CO2 Emissions: {co2Emissions} kg</p>
            <p>CO2 Credits: {co2Credits} kg</p>
            <p>CO2 Credits Per Person: {co2CreditsPerPerson} kg</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default KwhToCO2Calculator;
