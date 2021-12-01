import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./styles/login.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/drills");
    } catch {
      setError("Failed to log in");
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
                <h6 className="font-weight-light"> Welcome Back! </h6>
                <h5 className="text-left mb-4 font-weight-bold">
                  Rejoin Your Community
                </h5>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                  </Form.Group>

                  <div className="mb-0 w-100 text-left mt- font-weight-light ">
                    Forgot Your Password?
                    <Link
                      to="/forgot-password"
                      style={{
                        color: "#000",
                        textDecoration: "none",
                        fontWeight: "bold",
                      }}
                    >
                      Create a new one here ➟{" "}
                    </Link>
                  </div>

                  <Button disabled={loading} className="w-100" type="submit">
                    Log In
                  </Button>
                </Form>
              </Card.Body>
              <div className="w-100 text-center mt-2">
                Need an account?{" "}
                <Link
                  to="/signup"
                  style={{
                    color: "#000",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Sign Up
                </Link>
              </div>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
}
