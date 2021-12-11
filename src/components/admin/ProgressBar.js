import React, { useEffect } from "react";
import useStorage from "../../hooks/useStorage";
import { motion } from "framer-motion";
import { Form, Card, FormGroup } from "react-bootstrap";
import "./ProgressBar.css";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  //remove progress bar after finish uplading
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    >
      Uploading
    </motion.div>
  );
};

export default ProgressBar;
