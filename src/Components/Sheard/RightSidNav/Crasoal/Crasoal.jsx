import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Brand1 from "../../../../Assets/Brand1.png";
import Brand2 from "../../../../Assets/Brand2.png";

const Crasoal = () => {
  return (
    <>
      <section>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={Brand1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={Brand2} alt="Second slide" />
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Crasoal;
