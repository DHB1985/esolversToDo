import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../../actions/actions";
import AddTodo from "../AddTodo/AddTodo";
import EditModal from "../EditModal/EditModal";
import TodoList from "../TodoList/TodoList";

const Todo = () => {
  const dispatch = useDispatch();

  const { todos } = useSelector((state) => state);

  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div>
      <TodoList todos={todos} setModalShow={setModalShow} />

      <AddTodo />

      {modalShow && <EditModal setModalShow={setModalShow} />}
    
    </div>
  );
};

export default Todo;
