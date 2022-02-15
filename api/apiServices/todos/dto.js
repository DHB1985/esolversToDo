const todoDao = require("./dao");

const getTodos = () => {
  return todoDao.getTodos();
};

const createTodo = (todo) => {
  return todoDao.createTodo(todo);
};

const updateTodo = (id, data) => {
  let response = "";

  if (typeof data === "boolean") {
    response = todoDao.updateDoneTodo(id, data);
  } else {
    response = todoDao.updateTodo(id, data);
  }

  return response;
};

const deleteTodo = (id) => {
  return todoDao.deleteTodo(id);
};

const getTodoById = (id) => {
  return todoDao.getTodoById(id);
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  getTodoById,
};
