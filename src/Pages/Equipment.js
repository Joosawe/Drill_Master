import React, { useState } from "react";
import { Button, Tooltip } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import { useHistory } from "react-router-dom";
import firebase from "../firebase";
import "./styles/drill.css";
import { bubble as Menu } from "react-burger-menu";
import { auth } from "../firebase";
import Layout from "../components/layouts/layout";
import ExpertTipsList from "./StaticpageComponents/ExpertTipsList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "Ball, cones, cleats",
    image:
      "https://previews.123rf.com/images/koonsiri/koonsiri1903/koonsiri190300030/119291790-ladder-drills-goal-soccer-ball-marker-cones-sports-shoes-and-bottle-water-on-green-artificial-turf-f.jpg",
    description:
      " This is all the necessary equipments for a workout. If you have a field with a goalpost? Great. Anything else is extra. For games you need Shin pads, and goalkeeper gloves if you are a goalkeeper",
  },
];

export default function Drills() {
  const [error, setError] = useState("");
  const { logout, uid } = useAuth();
  const history = useHistory();
  const db = firebase.database();
  const [currentUser] = useState(uid);
  const usersref = db.ref("user");
  var useruid = auth.currentUser.uid;

  usersref.on("value", gotData, errData);

  window.onload = function () {
    if (!window.location.hash) {
      window.location = window.location + "#Welcome";
      window.location.reload();
    }
  };

  function gotData(data) {
    var alluserspec = document.querySelectorAll(".alluserspec");
    for (var i = 0; i < alluserspec.length; i++) {
      alluserspec[i].remove();
    }

    // console.log(data.val());
    var userspec = data.val();
    var keys = Object.keys(userspec);

    for (var j = 0; j < keys.length; j++) {
      var k = keys[j];
      var firstname = userspec[k].firstname;
      var lastname = userspec[k].lastname;
      var position = userspec[k].position;
      var interest = userspec[k].interest;
      var motivation = userspec[k].motivation;
      var currentUserID = userspec[k].currentUserID;
      console.log("current user id", currentUserID);
      console.log("database current uid", useruid);
      if (currentUserID === useruid) {
        try {
          document.getElementById("firstname").innerHTML = firstname;
          document.getElementById("lastname").innerHTML = lastname;
          document.getElementById("position").innerHTML = position;
          document.getElementById("interest").innerHTML = interest;
          document.getElementById("motivation").innerHTML = motivation;
        } catch {
          console.log("cannot retrieve data");
        }
      }
    }
  }

  function errData(err) {
    console.log("Error");
    console.log(err);
  }

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <Menu>
        <h4 className="text-center mb-4">Welcome</h4>
        <h2 className="text-center mb-4">
          <p className="Name">
            <h1 id="firstname"></h1>
            <h1 id="lastname"></h1>
          </p>
        </h2>
        <h6 className="reference">Your Position:</h6>
        <h5 id="position"></h5>
        <h6 className="reference">Focus Area of Improvement:</h6>
        <h5 id="interest"></h5>
        <h6 className="reference">Motivational Quote:</h6>
        <h5 id="motivation"></h5>

        <a className="menu-item" href="/expertTips">
          Expert Tips
        </a>

        <a className="menu-item" href="/Nutrition">
          Nutrition
        </a>

        <a className="menu-item" href="/Equipment">
          Equipment
        </a>
        <a className="menu-item" href="/contactus">
          Contact us
        </a>

        <div className="logout">
          <Button className="w-100" variant="danger" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </Menu>
      <Layout>
        <h1 className="cut-text">Equipments</h1>
        <div>
          A soccer player feels comfortable wearing soccer equipment in the
          field. Performing well and keeping safe while playing soccer depends
          mostly on soccer gear you should use. The equipment a soccer player
          wear on the ground helps him to go ahead performing well. So, don’t
          appear on the field without wearing your protective soccer equipment.
        </div>
        <ExpertTipsList meetups={DUMMY_DATA} />
      </Layout>
    </>
  );
}
