import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putTodo, resetDataUpdate } from "../../actions/actions";

const EditModal = ({ setModalShow }) => {
  const dispatch = useDispatch();

  const { todoEdit } = useSelector((state) => state);

  const todoToEditStruct = {
    id: "",
    description: "",
    done: "",
  };

  const [todoToEdit, setTodoToEdit] = useState(todoToEditStruct);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTodoToEdit({
      id: todoEdit.id,
      description: todoEdit.description,
      done: todoEdit.done,
    });
  }, [todoEdit]);

  const handleChange = (event) => {
    const updateData = { ...todoToEdit, description: event.target.value };
    setTodoToEdit(updateData);
    if (updateData.description.length === 0) setError(true);
    else setError(false);
  };

  const handleSaveChange = () => {
    if (!error && todoToEdit.description.length !== 0) {
      setError(false);
      dispatch(putTodo(todoToEdit.id, todoToEdit.description));
      setModalShow(false);
      dispatch(resetDataUpdate());
    } else setError(true);
  };

  const handleCancel = () => {
    setTodoToEdit(todoToEditStruct);
    setModalShow(false);
    dispatch(resetDataUpdate());
  };

  return (
    <div>
      <h2>Editing task {todoEdit.description}</h2>
      <input
        type="text"
        value={todoToEdit.description}
        onChange={(event) => handleChange(event)}
      />
      {error && <p>Required</p>}
      <button onClick={handleSaveChange}>Save</button>
      <button onClick={handleCancel}>Canlcel</button>
    </div>
  );
};

export default EditModal;
