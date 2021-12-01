import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordconfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("false");
  const history = useHistory();

  async function handleSumbit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordconfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading("true");
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/user-profile");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }
  return (
    <>
      <div className="bg-login">
        <div className="about-us">
          <Button variant="outline-info" href="/about-us">
            About Us
          </Button>
        </div>
        <Container
          className="d-flex align-items-center 
      justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
              <Card.Body>
                <h6 className="font-weight-light"> Welcome! </h6>
                <h5 className="text-left mb-4 font-weight-bold">
                  Join Your Community
                </h5>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSumbit}>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                  </Form.Group>
                  <Form.Group id="password-confirm">
                    <Form.Label>Password Comfirmation</Form.Label>
                    <Form.Control
                      type="password"
                      ref={passwordconfirmRef}
                      required
                    />
                  </Form.Group>
                  <div className="w-100 text -center mt-2">
                    Already a member?
                    <Link
                      to="/login"
                      style={{
                        color: "#000",
                        textDecoration: "none",
                        fontWeight: "bold",
                      }}
                    >
                      Login here ➟
                    </Link>
                  </div>
                  <Button disable={loading} className="w-100" type="submit">
                    Sign Up
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
}
