import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import "./Styles/UploadForm.css";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["video/mp4", "video/MOV"];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select a video file (mp4 or mov)");
    }
  };

  return (
    <form>
      Attach Complete Drill Form
      <div className="upload">
        <label>
          <input type="file" onChange={handleChange} />
          <span>+</span>
        </label>{" "}
      </div>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
