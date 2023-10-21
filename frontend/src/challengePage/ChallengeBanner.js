import bgimg from "../img/v990-129a.jpg";
import React from "react";

const ChallengeBanner = () => {
  const trans = `rgba(210, 210, 210, 0.9)`;

  return (
    <div className="top-banner">
      <div
        className="top-banner"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: 400,
          color: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            border: "10px solid white",
            padding: 30,
            backgroundColor: trans,
          }}
        >
          <h1 className="top-div">Do Your Challenges</h1>
        </p>
      </div>
    </div>
  );
};

export default ChallengeBanner;
