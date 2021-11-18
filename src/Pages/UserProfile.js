import React, { useState } from "react";
import { Form, Card, Button, FormGroup, Container } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import { useHistory } from "react-router-dom";
import firebase from "../firebase";

const db = firebase.database();

export default function UserProfile() {
  const { currentUser } = useAuth();
  const [interest, setInterest] = useState("Park");
  const [neighborhood, setNeighborhood] = useState("Cambrige");
  const [explaination, setExplaination] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const { uid } = useAuth();
  const [currentUserID] = useState(uid);
  let history = useHistory();

  return (
    <>
      <Container
        className="d-flex align-items-center 
      justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Welcome</h2>

              <h6 className="text-center mb-4">{currentUser.email} </h6>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();

                  const users = db.ref("user");

                  const newUser = users.push();
                  newUser.set({
                    currentUserID,
                    neighborhood,
                    interest,
                    explaination,
                    firstname,
                    lastname,
                  });
                  history.push("/drills");
                }}
              >
                <FormGroup id="firstName">
                  <Form.Label for="Text">Firstname</Form.Label>
                  <Form.Control
                    placeholder="Enter Firstname"
                    required
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    class="form-control"
                    id="exampleFormControlTextarea1"
                  ></Form.Control>
                </FormGroup>
                <FormGroup id="lastname">
                  <Form.Label for="Text">Lastname</Form.Label>
                  <Form.Control
                    placeholder="Enter Lastname"
                    required
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    class="form-control"
                    id="exampleFormControlTextarea1"
                  ></Form.Control>
                </FormGroup>
                <Form.Group id="Neighborhood">
                  <Form.Label>Select your Position</Form.Label>
                  <select
                    option
                    onChange={(e) => setNeighborhood(e.target.value)}
                    class="form-control"
                    id="Neighborhood"
                  >
                    <option
                      required
                      option
                      onChange={(e) => setNeighborhood(e.target.value)}
                    >
                      Goalkeeper
                    </option>
                    <option
                      option
                      onChange={(e) => setNeighborhood(e.target.value)}
                    >
                     Defender
                    </option>
                    <option
                      option
                      onChange={(e) => setNeighborhood(e.target.value)}
                    >
                     Midfielder
                    </option>
                    <option
                      option
                      onChange={(e) => setNeighborhood(e.target.value)}
                    >
                     Attacker
                    </option>
                    
                  </select>
                </Form.Group>
                <Form.Group id="Budget">
                  <Form.Label>Community Interest</Form.Label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    class="form-control"
                    id="Neighborhood"
                  >
                    <option onChange={(e) => setInterest(e.target.value)}>
                      
                      Parks
                    </option>
                    <option onChange={(e) => setInterest(e.target.value)}>
                      Trees
                    </option>
                    <option onChange={(e) => setInterest(e.target.value)}>
                      Road Work
                    </option>
                    <option onChange={(e) => setInterest(e.target.value)}>
                      Community Centers
                    </option>
                    <option onChange={(e) => setInterest(e.target.value)}>
                      Transportation
                    </option>
                    <option onChange={(e) => setInterest(e.target.value)}>
                      Technological Advances
                    </option>
                  </select>
                  <small id="emailHelp" class="form-text text-muted">
                    We understand there are many of you with multiple interest,
                    we limit users options to "1" to provide a voice for all our
                    users.{" "}
                  </small>
                </Form.Group>
                <FormGroup>
                  <label for="Text">What is your goal?</label>
                  <textarea
                    placeholder="ex: I want to be the first name on the team sheet this coming season"
                    required
                    value={explaination}
                    onChange={(e) => setExplaination(e.target.value)}
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </FormGroup>
                <div className="w-100 text-center mt-2">
                  <Button className="w-100" type="submit">
                    Complete profile
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}
