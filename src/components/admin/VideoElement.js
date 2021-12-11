import React, { useState } from "react";

function VideoElement() {
  const [description, setDescription] = useState(null);
  const [title, setTitle] = useState(null);

  function getVideoDescriptionVal(val) {
    setDescription(val.target.value);
  }
  function getVideoTitleVal(val) {
    setTitle(val.target.value);
  }
  function titleVal() {
    return title;
  }
  function descriptionVal() {
    return description;
  }
  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <input
            className="col-12 form-control"
            onChange={getVideoTitleVal}
            type="text"
            placeholder="post Title"
          />
        </div>
        <div className="form-group">
          <textarea
            className="col-12 form-control"
            onChange={getVideoDescriptionVal}
            type="text"
            placeholder="post description"
          />
        </div>
        <h1>{descriptionVal()}</h1>
        <h2>{titleVal()}</h2>
      </form>
    </div>
  );
}
export default VideoElement;
