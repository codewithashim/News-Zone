import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import UseFirebase from "../../Hokes/UseFirebase";
import useTitle from "../../Hokes/UseTitle";

const Login = () => {
  const { hendelLogin, error } = UseFirebase();
  useTitle("Login");
  return (
    <>
      <section className="my-5">
        <div className="container border rounded p-4 shadow">
          <div className="loginDetails">
            <h2 className="text-center">Login</h2>
          </div>
          <Form onSubmit={(event) => hendelLogin(event)}>
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
                placeholder="Password"
                required
              />
            </Form.Group>
            <div>
              <p className="text-danger">{error}</p>
            </div>
            <Button variant="outline-secondary">
              <Link to="/register">Don't Have Account Register Now</Link>
            </Button>{" "}
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Login;
