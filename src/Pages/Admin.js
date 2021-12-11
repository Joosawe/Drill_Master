/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useEffect } from "react";
import { Button, Tooltip } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import { useHistory, Link } from "react-router-dom";
import firebase from "../firebase";
import "./styles/drill.css";
import { auth } from "../firebase";
import UploadForm from "../components/admin/UploadForm";

export default function Drills() {
  const [error, setError] = useState("");
  const { logout, uid } = useAuth();
  const history = useHistory();
  const db = firebase.database();
  const [users, setUsers] = useState([]);

  const usersref = db.ref("user");

  function removeUser(n) {
    db.ref(`user/${n}`).remove();
  }
  window.onload = function () {
    if (!window.location.hash) {
      window.location = window.location + "#loaded";
      window.location.reload();
    }
  };

  useEffect(() => {
    usersref.on("value", (users) => {
      let userArray = [];
      users.forEach((user) => {
        var userspec = user.val().Profile;
        var keys = Object.keys(userspec);
        var k = keys[0];
        let newUser = {
          firstname: userspec[k].firstname,
          lastname: userspec[k].lastname,
          currentUserID: userspec[k].currentUserID,
        };
        
        userArray.push(newUser);
      });
      console.log(userArray);
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
    <div className="">
      <useStorage file={null} />
      <div className="title">
      <h1>Admin</h1>
      <h2>Admin</h2>
      <h6>
        Add new drills or delete user data{" "}
      </h6>
    </div>
      <UploadForm />
      <div>

      <h1 className="h1">All Users</h1>
        {users.map((user) => {
          return (
            <div className="users">
              
              <p>
                {user.firstname} {user.lastname}
                <i
                  className="fas fa-trash"
                  style={{
                    color: "red",
                    cursor: "pointer",
                    margin: 4,
                  }}
                  onClick={() => removeUser(user.currentUserID)}
                ></i>
              </p>
            </div>
          );
        })}
        <div className="logout" class = "text-center">
        <Button className="w-50" variant="danger" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
      </div>
    </div>
  );
}
