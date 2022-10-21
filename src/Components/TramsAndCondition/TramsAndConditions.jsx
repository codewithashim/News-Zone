import React from "react";
import { Link } from "react-router-dom";

const TramsAndConditions = () => {
  return (
    <>
      <div className="container">
        <h1>Trams And Conditions</h1>
        <p>
          If you want to host your customized Terms & Conditions on your site,
          you can just download the Terms & Conditions and give them the use you
          want.
        </p>
        <p>
          Go Back To <Link to="/register">Register </Link>{" "}
        </p>
      </div>
    </>
  );
};

export default TramsAndConditions;
