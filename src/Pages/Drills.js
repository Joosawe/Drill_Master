/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/drill.css";
import Title from "../components/Title";
import DrillsGrid from "../components/DrillsGrid";
import Modal from "../components/Modal";
import Sidebar from "../components/Sidebar";

export default function Drills() {
  const [selectedLink, setSelectedLink] = useState(null);


  return (
    <div className="drills">
      <Sidebar/>
      <Title />
      <DrillsGrid setSelectedLink={setSelectedLink} />
      {selectedLink && (
        <Modal selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
      )}
      <div className="log">
        <Link to="/log">
          <Button>Log your Drills</Button>
        </Link>
      </div>
    </div>
  );
}
