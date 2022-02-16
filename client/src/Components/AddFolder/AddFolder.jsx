import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postFolder } from '../../actions/actionsFolders';

const AddFolder = () => {
    const dispatch = useDispatch();

    const [folder, setFolder] = useState("");
    const [error, setError] = useState(false);
  
    const handleChange = (event) => {
      const data = event.target.value;
      setFolder(data);
      if (data.length === 0) setError(true);
      else setError(false);
    };
  
    const handleSubmit = () => {
      if (!error && folder.length !== 0) {
        setError(false);
        dispatch(postFolder(folder));
        setFolder("");
      } else setError(true);
    };
  
  return (
    <div>
    <input
      type="text"
      value={folder}
      onChange={(event) => handleChange(event)}
    />
    <button onClick={handleSubmit}>Add</button>
    {error && <p>Required</p>}
  </div>
  )
}

export default AddFolder;