import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useTitle from "../../Hokes/UseTitle";

const Profile = () => {
  useTitle("Profile");

  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName);
  const photoURLRef = useRef(user.photoURL);
  const hendelSubmit = (e) => {
    e.preventDefault();
    console.log(name, photoURLRef.current.value);
  };

  const hendelNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <section>
        <Form onSubmit={hendelSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              readOnly
              defaultValue={user?.email}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              onChange={hendelNameChange}
              defaultValue={name}
              type="text"
              placeholder="Full Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              ref={photoURLRef}
              defaultValue={user.photoURL}
              type="text"
              placeholder="Photo URL"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update Profile
          </Button>
        </Form>
      </section>
    </>
  );
};

export default Profile;
