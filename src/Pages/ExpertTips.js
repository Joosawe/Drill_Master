/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from "react";
import { Button, Tooltip } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import { useHistory } from "react-router-dom";
import firebase from "../firebase";
import "./styles/drill.css";
import { bubble as Menu } from "react-burger-menu";
import { auth } from "../firebase";
import ExpertTipsList from "./StaticpageComponents/ExpertTipsList";
import Layout from "../components/layouts/layout";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "Have Fun",
    image:
      "https://cdn.theathletic.com/app/uploads/2020/12/03065833/chelsea-lampard-rotation.jpg",
    description:
      "Remember above all else that this is a game and you should learn to enjoy all aspects of it. That been said, Always give 100%. Expect that of those around you and anticipate they expect that of you. Win or lose, be proud of how you played.",
  },
  {
    id: "m2",
    title: "Ask Questions!!",
    image:
      "https://www.mcall.com/resizer/TeiZVC9_MPpfPvV7OF0EgGPAppU=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/I4AHUBX5EJFAPAXOXYTZWUA4WE.jpg",

    description:
      "This applies to everything. If you don’t know, ask. If you require clarification, get it. The more you ask and understand, the more you learn and the better you can apply the skills. While Bearing this in mind, Show respect to your coaches, referees, your opponents and teammates at all times, win or lose.",
  },
  {
    id: "m3",
    title: "Support",
    image:
      "https://cdn-media.theathletic.com/RuptQbC5tByR_RuptQbC5tByR_6DhSZKnR81ey_original_1440x960.jpg",
    description:
      "Support. Anticipate your teammates’ needs and always support your teammate with the ball. Supporting your teammate means being in a position where they can pass the ball to you. Stay far enough away so the pass effectively neutralizes the defender. Stay close enough that they can make a good pass. If you are too far to make a good pass to your teammate, then you are too far for your teammate to make a good pass to you, and you are not supporting.",
  },
  {
    id: "m3",
    title: "Use your Brain",
    image:
      "https://danabrahams.com/wp-content/uploads/2015/07/b140208-be-a-quicker-thinker-stage-one.jpg",
    description:
      "Learn to kick around your target. Don’t shoot towards your defender. Passing or dribbling the ball laterally or even backward can be a better choice if it maintains possession of the ball. Possession of the ball is key to controlling the pace and direction of the game. Also,Passing is important, so is to know when to take your shot. Don’t hesitate to fire a shot at goal if you feel an opportunity. Take your best shot and shoot in the back of the net. ",
  },
];

export default function ExpertTips() {
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
        <h1 className="cut-text">Expert Tips</h1>
        <ExpertTipsList meetups={DUMMY_DATA} />
      </Layout>
    </>
  );
}
