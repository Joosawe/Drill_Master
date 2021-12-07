
import React, { useState } from "react";
import { Button, Tooltip } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import { useHistory} from "react-router-dom";
import firebase from "../firebase";
import "./Styles/Sidebar.css";
import { bubble as Menu } from "react-burger-menu";
import { auth } from "../firebase";

export default function Sidebar() {
  const [error, setError] = useState("");
  const { logout, uid } = useAuth();
  const history = useHistory();
  const db = firebase.database();
  const [currentUser] = useState(uid);
  const usersref = db.ref("user").child(currentUser).child("Profile");
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
  return(
      <div className="sidebar">
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
        <a className="menu-item" href="/drills">
          Back to Drills
        </a>

        <div className="logout">
          <Button className="w-100" variant="danger" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </Menu>
      </div>
  )}