import React, { useState, useEffect } from "react";
import { Button, Tooltip } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import { useHistory } from "react-router-dom";
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
  console.log(currentUser);
  const usersref = db.ref("user");
  const [users, setUsers] = useState([]);

  window.onload = function () {
    if (!window.location.hash) {
      window.location = window.location + "#Welcome";
      window.location.reload();
    }
  };

  useEffect(() => {
    usersref.on("value", (users) => {
      let userArray = [];
      users.forEach((user) => {
        var userspec = user.val().Profile;
        var keys = Object.keys(userspec);
        console.log(keys);
        var k = keys[0];
        let newUser = {
          firstname: userspec[k].firstname,
          lastname: userspec[k].lastname,
          currentUserID: userspec[k].currentUserID,
          motivation: userspec[k].motivation,
          interest: userspec[k].interest,
          position: userspec[k].position,
        };
        if (newUser.currentUserID === currentUser) {
          userArray.push(newUser);
        }
      });
      setUsers(userArray);
    });
  }, []);

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
    <div className="sidebar">
      <Menu>
        <h4 className="text-center mb-4">Welcome</h4>
        <h2 className="text-center mb-4">
          <div>
            {users.map((user) => {
              return (
                <div>
                  <p>
                    {user.firstname} {user.lastname}
                  </p>

                  <h6 className="reference">Your Position:</h6>
                  <h5 >{user.position}</h5>
                  <h6 className="reference">Focus Area of Improvement:</h6>
                  <h5 >{user.interest}</h5>
                  <h6 className="reference">Motivational Quote:</h6>
                  <h5 >{user.motivation}</h5>
                </div>
              );
            })}
          </div>
        </h2>
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
  );
}
