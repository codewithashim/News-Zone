import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import LeftSidNav from "../LeftSidNav/LeftSidNav";
import logo from "../../../Assets/AR-NewsPortal.png";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import Button from "react-bootstrap/esm/Button";
import UseFirebase from "../../../Hokes/UseFirebase";

const Header = () => {
  const { user } = useContext(AuthContext);
  const { hendelLogout } = UseFirebase();

  return (
    <div className="mb-2">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} alt="Ar New Portal" width={"50rem"} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  All News
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                {user?.uid ? (
                  <>
                    <span className="mx-3">{user?.email}</span>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => hendelLogout()}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <FaUserAlt></FaUserAlt>
                )}
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
            <div className="d-lg-none">
              <LeftSidNav></LeftSidNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
