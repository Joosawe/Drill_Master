import React, { useState } from "react";
import { Form, Card, Button, FormGroup, Container } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import { useHistory } from "react-router-dom";
import firebase from "../firebase";

const db = firebase.database();

export default function UserProfile() {
  const { currentUser } = useAuth();
  const [interest, setInterest] = useState("Stamina");
  const [position, setPosition] = useState("GoalKeeper");
  const [motivation, setMotivation] = useState(" ");
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

                  const users = db
                    .ref("user")
                    .child(currentUserID)
                    .child("Profile");

                  const newUser = users.push();
                  newUser.set({
                    currentUserID,
                    position,
                    interest,
                    motivation,
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
                <Form.Group id="position">
                  <Form.Label>Select your Position</Form.Label>
                  <select
                    option
                    onChange={(e) => setPosition(e.target.value)}
                    class="form-control"
                    id="position"
                  >
                    <option
                      required
                      option
                      onChange={(e) => setPosition(e.target.value)}
                    >
                      Goalkeeper
                    </option>
                    <option
                      option
                      onChange={(e) => setPosition(e.target.value)}
                    >
                      Right Full-back (or Wingback)
                    </option>
                    <option
                      option
                      onChange={(e) => setPosition(e.target.value)}
                    >
                      Left Full-back (or Wingback)
                    </option>
                    <option
                      option
                      onChange={(e) => setPosition(e.target.value)}
                    >
                      Center-back
                    </option>
                    <option
                      option
                      onChange={(e) => setPosition(e.target.value)}
                    >
                      Center back (or sweeper)
                    </option>
                    <option
                      option
                      onChange={(e) => setPosition(e.target.value)}
                    >
                      Defensive Midfielder
                    </option>
                    <option
                      option
                      onChange={(e) => setPosition(e.target.value)}
                    >
                      Right Midfielder (or Winger)
                    </option>
                    <option
                      option
                      onChange={(e) => setPosition(e.target.value)}
                    >
                      Center Midfielder
                    </option>
                    <option
                      option
                      onChange={(e) => setPosition(e.target.value)}
                    >
                      Center Forward (or Striker)
                    </option>
                    <option
                      option
                      onChange={(e) => setPosition(e.target.value)}
                    >
                      Attacking Midfielder (or Center Forward)
                    </option>
                    <option
                      option
                      onChange={(e) => setPosition(e.target.value)}
                    >
                      Left Midfielder (or Winger)
                    </option>
                  </select>
                </Form.Group>
                <Form.Group id="Budget">
                  <Form.Label>Improvement Areas</Form.Label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    class="form-control"
                    id="Neighborhood"
                  >
                    <option onChange={(e) => setInterest(e.target.value)}>
                      Pace
                    </option>
                    <option onChange={(e) => setInterest(e.target.value)}>
                      Agility
                    </option>
                    <option onChange={(e) => setInterest(e.target.value)}>
                      Stamina
                    </option>
                    <option onChange={(e) => setInterest(e.target.value)}>
                      Dribbling
                    </option>
                    <option onChange={(e) => setInterest(e.target.value)}>
                      Passing
                    </option>
                    <option onChange={(e) => setInterest(e.target.value)}>
                      Trapping
                    </option>
                  </select>
                  <small id="emailHelp" class="form-text text-muted">
                    We understand there might be multiple areas you want to work
                    on, you can choose another area after this one is completed.
                  </small>
                </Form.Group>
                <FormGroup>
                  <label for="Text">Motiviation</label>
                  <textarea
                    placeholder="Place a quote that will remind you why you work so hard"
                    required
                    value={motivation}
                    onChange={(e) => setMotivation(e.target.value)}
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
