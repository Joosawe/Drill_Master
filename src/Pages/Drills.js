import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import { useHistory } from "react-router-dom";
import firebase from "../firebase";

export default function Drills() {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

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
      <div className="drills_header">Drills</div>
      <div className="logout">
        <Button className="w-100" variant="danger" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}
