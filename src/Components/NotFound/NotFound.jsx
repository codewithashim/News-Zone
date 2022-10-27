import React from "react";
import useTitle from "../../Hokes/UseTitle";

const NotFound = () => {
  useTitle("Not Found");
  return (
    <>
      <section>
        <h1>From NotFound</h1>
      </section>
    </>
  );
};

export default NotFound;
