import React, { useEffect, useState } from "react";
import "./LeaderBoard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageBanner from "../PageBanner";
import { readTopUsersWithCarbonCredits } from "services/crud/UserCRUD";
import Ranking from "../img/ranking.png";
import ToastExample from "../ToastExample";

const LeaderBoard = () => {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    async function fetchTopUsers() {
      const topUsersData = await readTopUsersWithCarbonCredits();
      setTopUsers(topUsersData);
    }

    fetchTopUsers();
  }, []);

  return (
    <>
      <PageBanner title={"Leader Board"} />

      <Container className="mt-5">

        <ToastExample/>
        <Row>
          <Col></Col>
          <Col>
            <div className="mainDiv">
              <div className="headerDiv">
                <h4>Ranking</h4>
              </div>
              <div id="leaderboard">
                <div className="ribbon"></div>
                <table>
                  <tbody>
                  {topUsers.map((us, ind) => (
                    <tr>
                      <td className="number">{ind+1}</td>
                      <td className="name">{us.username}</td>
                      { ind == 0 ? 
                        <td className="points">
                          {us.carbon_credits}{" "}
                          <img
                            className="gold-medal"
                            src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true"
                            alt="gold medal"
                          />
                        </td> : 
                        <td className="points">{us.carbon_credits}</td>}
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Row>
        <section >
          <div className="container py-4">

            <article className="postcard light">
              <a className="postcard__img_link" href="#">
                <img
                    className="postcard__img"
                    src={Ranking}
                    alt="Image Title"
                />
              </a>
              <div className="postcard__text">
                <h1 className="postcard__title blue">Check Weekly Ranking</h1>
                <div className="postcard__subtitle small">

                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  Have a look at who has the most points each week
                </div>
              </div>
            </article>
          </div>
        </section>
      </Row>
    </>
  );
};
export default LeaderBoard;
