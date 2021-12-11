import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import "./styles/signup.css"

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your Email for password reset link");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>
     <div className="bg-login">
      <Container
        className="d-flex align-items-center 
      justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Password Reset</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                  Reset Password
                </Button>
              </Form>
              <div >
                Need an account?{" "}
                <Link
                  to="/signup"
                  style={{
                    color: "#000",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  <button className="w-100"> 
                  Sign Up ➟
                  </button>
                </Link>
              </div>
              <div >
                Have an account?
                <Link
                  to="/login"
                  style={{
                    color: "#000",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                ><button className="w-100"> 
                Login ➟
                </button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
      </div>
    </>
  );
}
