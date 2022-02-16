import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, getTodoById, putTodo } from "../../actions/actionsTodo";

import styles from "./todoList.module.css";

const TodoList = ({ todos, setModalShow, selectedFolder }) => {
  const dispatch = useDispatch();

  const handleCheckTodo = (event) => {
    dispatch(putTodo(event.target.name, event.target.checked, selectedFolder));
  };

  const handleEdit = (event) => {
    dispatch(getTodoById(event.target.value));
    setModalShow(true);
  };

  const handleDelete = (event) => {
    dispatch(deleteTodo(event.target.value, selectedFolder));
  };

  return (
    <div>
      {todos &&
        todos.map((todo) => {
          return (
            <div key={todo.id} className={styles.todoList}>
              <input
                type="checkbox"
                value={todo.done}
                name={todo.id}
                checked={todo.done}
                onChange={(event) => handleCheckTodo(event)}
              />
              <p>{todo.description}</p>
              <button value={todo.id} onClick={(event) => handleEdit(event)}>
                Editar
              </button>
              <button value={todo.id} onClick={(event) => handleDelete(event)}>
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
