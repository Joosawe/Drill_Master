import React, { useState } from "react";
import { Form, Card, Button, FormGroup } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import { useHistory, Link } from "react-router-dom";
import firebase from "../firebase";
import Stopwatch from "../components/Stopwatch";
import "./styles/log.css";
import { auth } from "../firebase";

const db = firebase.database();
var today = new Date(),
  todayDate =
    today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();

export default function UserProfile() {
  const { currentUser } = useAuth();
  const [satisfactoryQuestion, setSatisfactoryQuestion] = useState("5");
  const [additionalComment, setAdditionalComment] = useState("");
  const [date, setDate] = useState(todayDate.toString());
  const [videoName, setVideoName] = useState("");
  const [trial, setTrial] = useState("");
  const [trialTwo, setTrialTwo] = useState("");
  const [trialThree, setTrialThree] = useState("");
  const { uid } = useAuth();
  const [currentUserID] = useState(uid);
  const history = useHistory();
  // const db = firebase.database();
  // const [currentUsernow] = useState(uid);
  // const usersref = db.ref("user").child(currentUsernow).child("log");
  // var useruid = auth.currentUser.uid;

  // usersref.on("value", gotData, errData);

  // window.onload = function () {
  //   if (!window.location.hash) {
  //     window.location = window.location + "#Welcome";
  //     window.location.reload();
  //   }
  // };

  // function gotData(data) {
  //   var alluserspec = document.querySelectorAll(".alluserspec");
  //   for (var i = 0; i < alluserspec.length; i++) {
  //     alluserspec[i].remove();
  //   }

  //   // console.log(data.val());
  //   var userspec = data.val();
  //   var keys = Object.keys(userspec);

  //   for (var j = 0; j < keys.length; j++) {
  //     var k = keys[j];
  //     var date = userspec[k].date;
  //     var trial = userspec[k].trial;
  //     var trialTwo = userspec[k].trialTwo;
  //     var trialThree = userspec[k].trialThree;
  //     var videoName = userspec[k].videoName;
  //     console.log("current user id", currentUserID);
  //     console.log("database current uid", useruid);
  //     if (currentUserID === useruid) {
  //       try {
  //         document.getElementById("date").innerHTML = date;
  //         document.getElementById("trial").innerHTML = trial;
  //         document.getElementById("trialTwo").innerHTML = trialTwo;
  //         document.getElementById("trialThree").innerHTML = trialThree;
  //         document.getElementById("videoName").innerHTML = videoName;
  //       } catch {
  //         console.log("cannot retrieve data");
  //       }
  //     }
  //   }
  // }
  // function errData(err) {
  //   console.log("Error");
  //   console.log(err);
  // }


  return (
    <>

      <div className="stopWatch">
        <Stopwatch />
      </div>
        {/* <h1 className="videoName2"></h1>
        <h2 id="date"></h2>
        <h5 className="text-center mb-4">
          <p className="Name">
            <h1 id="trial"></h1>
            <h1 id="trialTwo"></h1>
            <h1 id="trialThree"></h1>
          </p>
        </h5> */}
      <div className="card-log-time">
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Video Assesment</h2>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();

                  const users = db
                    .ref("user")
                    .child(currentUserID)
                    .child("log");

                  const newUser = users.push();
                  newUser.set({
                    additionalComment,
                    satisfactoryQuestion,
                    date,
                    trial,
                    trialTwo,
                    trialThree,
                    videoName,
                  });
                  history.push("/drills");
                }}
              >
                <FormGroup>
                  <Form.Label for="Text">Name of the Video</Form.Label>
                  <Form.Control
                    placeholder="Enter Video Name"
                    required
                    value={videoName}
                    onChange={(e) => setVideoName(e.target.value)}
                    class="form-control"
                  ></Form.Control>
                </FormGroup>
                <FormGroup id="Date">
                  <Form.Label for="Text">Date</Form.Label>
                  <Form.Control
                    placeholder="Enter Date"
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    class="form-control"
                  ></Form.Control>
                </FormGroup>
                <FormGroup id="trial">
                  <Form.Label for="Text">Trial 1</Form.Label>
                  <Form.Control
                    placeholder="Log your Time"
                    required
                    value={trial}
                    onChange={(e) => setTrial(e.target.value)}
                    class="form-control timepicker"
                    id="input_starttime"
                  ></Form.Control>
                </FormGroup>
                <FormGroup id="trialTwo">
                  <Form.Label for="Text">Trial 2</Form.Label>
                  <Form.Control
                    placeholder="Log your Time"
                    required
                    value={trialTwo}
                    onChange={(e) => setTrialTwo(e.target.value)}
                    class="form-control"
                  ></Form.Control>
                </FormGroup>
                <FormGroup id="trialThree">
                  <Form.Label for="Text">Trial 3</Form.Label>
                  <Form.Control
                    placeholder="Log your Time"
                    required
                    value={trialThree}
                    onChange={(e) => setTrialThree(e.target.value)}
                    class="form-control"
                  ></Form.Control>
                </FormGroup>
                <Form.Group id="Satisfactory Question">
                  <Form.Label>
                    On a scale of 1-5 how would you rate this Drill? (1=terrible
                    5=Great)
                  </Form.Label>
                  <select
                    value={satisfactoryQuestion}
                    onChange={(e) => setSatisfactoryQuestion(e.target.value)}
                    class="form-control"
                    id="satisfactoryQuestion"
                  >
                    <option
                      onChange={(e) => setSatisfactoryQuestion(e.target.value)}
                    >
                      1
                    </option>
                    <option
                      onChange={(e) => setSatisfactoryQuestion(e.target.value)}
                    >
                      2
                    </option>
                    <option
                      onChange={(e) => setSatisfactoryQuestion(e.target.value)}
                    >
                      3
                    </option>
                    <option
                      onChange={(e) => setSatisfactoryQuestion(e.target.value)}
                    >
                      4
                    </option>
                    <option
                      onChange={(e) => setSatisfactoryQuestion(e.target.value)}
                    >
                      5
                    </option>
                  </select>
                </Form.Group>
                <FormGroup>
                  <label for="Text">Additional Comments</label>
                  <textarea
                    placeholder="additional Comments"
                    required
                    value={additionalComment}
                    onChange={(e) => setAdditionalComment(e.target.value)}
                    class="form-control"
                    rows="2"
                  ></textarea>
                </FormGroup>
                <div className="w-100 text-center mt-2">
                  <Button className="w-100" type="submit">
                    Log Drill
                  </Button>
                  <Link to="/Drills">
                    <Button className="w-100">Return to Drills</Button>
                  </Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
