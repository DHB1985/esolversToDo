import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../../actions/actionsTodo";
import AddTodo from "../AddTodo/AddTodo";
import EditModal from "../EditModal/EditModal";
import TodoList from "../TodoList/TodoList";

const Todo = ({ selectedFolder, nameFolder }) => {
  const dispatch = useDispatch();

  const { todos } = useSelector((state) => state.todos);

  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    console.log("pase");
    dispatch(getAllTodos(selectedFolder));
  }, [selectedFolder]);

  return (
    <div>
      <h3>ToDo List</h3>
      <h5>Folder: {nameFolder}</h5>
      <AddTodo selectedFolder={selectedFolder} />

      <TodoList
        todos={todos}
        setModalShow={setModalShow}
        selectedFolder={selectedFolder}
      />

      {modalShow && (
        <EditModal
          setModalShow={setModalShow}
          selectedFolder={selectedFolder}
        />
      )}
    </div>
  );
};

export default Todo;
