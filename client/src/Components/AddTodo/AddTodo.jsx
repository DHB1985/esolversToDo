import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postTodo } from "../../actions/actionsTodo";

const AddTodo = ({selectedFolder}) => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const data = event.target.value;
    setTodo(data);
    if (data.length === 0) setError(true);
    else setError(false);
  };

  const handleSubmit = () => {
    if (!error && todo.length !== 0) {
      setError(false);
      dispatch(postTodo(todo, selectedFolder));
      setTodo("");
    } else setError(true);
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(event) => handleChange(event)}
      />
      <button onClick={handleSubmit}>Add</button>
      {error && <p>Required</p>}
    </div>
  );
};

export default AddTodo;
