import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import UseFirebase from "../../Hokes/UseFirebase";
import useTitle from "../../Hokes/UseTitle";

const Register = () => {
  const { hendelRegister } = UseFirebase();
  const [accepted, setAccepted] = useState(false);
  useTitle("Register");
  const handelAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <>
      <section className="my-5">
        <div className="container container border rounded p-4 shadow">
          <Form onSubmit={(event) => hendelRegister(event)}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                required
                placeholder="Enter full-name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Profile Photo</Form.Label>
              <Form.Control
                type="text"
                name="photoURL"
                required
                placeholder="Enter photoURL"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                required
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                required
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="outline-dark" className="m-2">
              <Link to="/login">Alrady have an account login now</Link>
            </Button>{" "}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                onClick={handelAccepted}
                label={
                  <>
                    I agree to the <Link to="/trams">Terms & Conditions</Link>
                  </>
                }
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="m-2"
              disabled={!accepted}
            >
              Register Now
            </Button>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Register;
