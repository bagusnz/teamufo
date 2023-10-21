import React from "react";
import bgimg from "./img/v990-129a.jpg";

const PageBanner = ({ title }) => {
  const trans = `rgba(210, 210, 210, 0.9)`;

  return (
    <div className="top-banner">
      <div
        className="top-banner"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: 350,
          color: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            border: "10px solid white",
            padding: 30,
            backgroundColor: trans,
          }}
        >
          <h1 className="top-div">{title}</h1>
        </span>
      </div>
    </div>
  );
};

export default PageBanner;
