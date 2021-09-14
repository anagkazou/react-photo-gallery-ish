import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    const types = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
      setError("Please select an image file");
    }
  };
  return (
    <form>
      <label>
        <input type="file"   id="image" onChange={changeHandler} />
        <span>+</span>
      </label>

      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="file">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
