import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postTodo } from "../../actions/actions";

const AddTodo = () => {
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
      dispatch(postTodo(todo));
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
      {error && <p>Required</p>}
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default AddTodo;
