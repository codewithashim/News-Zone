import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import "./RightSidNav.css";
import ListGroup from "react-bootstrap/ListGroup";
import Crasoal from "./Crasoal/Crasoal";
import { Link } from "react-router-dom";

const RightSidNav = () => {
  return (
    <>
      <main>
        <ButtonGroup vertical>
          <Button className="mb-2" variant="outline-primary">
            <FaGoogle></FaGoogle> Login With Google
          </Button>
          <Button variant="outline-dark">
            <FaGithub></FaGithub> Login With Github
          </Button>
        </ButtonGroup>
        <div className="findeUS mt-4">
          <h5 className="text-muted">Find Us</h5>
          <div className="socical">
            <ListGroup>
              <ListGroup.Item className="mb-2">
                <Link>
                  <FaFacebook></FaFacebook> Facebook
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="mb-2">
                <Link>
                  <FaTwitter></FaTwitter> Twitter
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="mb-2">
                <Link>
                  <FaWhatsapp></FaWhatsapp> Whatsapp
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="mb-2">
                <Link>
                  <FaInstagram></FaInstagram> Instagram
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="mb-2">
                <Link>
                  <FaGoogle></FaGoogle> Google
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="mb-2">
                <Link>
                  <FaYoutube></FaYoutube> Youtube
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className="newBranding mt-4">
          <Crasoal></Crasoal>
        </div>
      </main>
    </>
  );
};

export default RightSidNav;
