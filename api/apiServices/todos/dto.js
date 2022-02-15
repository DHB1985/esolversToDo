const todoDao = require("./dao");

const getTodos = () => {
  return todoDao.getTodos();
};

const createTodo = (todo) => {
  return todoDao.createTodo(todo);
};

const updateTodo = (id, info) => {
  let response = "";

  if (typeof info === "boolean") {
    response = todoDao.updateDoneTodo(id, info);
  } else {
    response = todoDao.updateTodo(id, info);
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
