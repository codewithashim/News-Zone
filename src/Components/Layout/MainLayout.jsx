import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import LeftSidNav from "../Sheard/LeftSidNav/LeftSidNav";
import RightSideNav from "../Sheard/RightSidNav/RightSidNav";
import Header from "../Sheard/Header/Header";

const MainLayout = () => {
  return (
    <section>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="2" className="d-none d-lg-block">
            <LeftSidNav></LeftSidNav>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3" >
            <RightSideNav></RightSideNav>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MainLayout;
