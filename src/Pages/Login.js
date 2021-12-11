import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./styles/signup.css";

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
      if (emailRef.current.value === "admin@gmail.com") {
        history.push("/admin");
      } else {
        history.push("/drills");
      }
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <>
      <div>
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
          <div style={{ maxWidth: "400px" }}>
            <Card>
              <Card.Body>
                <h6 className="font-weight-light"> Welcome Back! </h6>
                <div className="text-left mb-4 font-weight-bold">
                  Rejoin Your Community
                </div>
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
                  <Button disabled={loading} className="w-100" type="submit">
                    Log In
                  </Button>
                  <div>
                Need an account?
                <Link to = "/signup">
                  <button className="w-100">Sign Up</button>
                </Link>
              </div>
                  

                </Form>
              </Card.Body>
              <div>
                    Forgot Your Password?
                    <Link to =  "/forgot-password">
                      <button className="w-100">Get new password</button>
                    </Link>
                  </div>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
}
