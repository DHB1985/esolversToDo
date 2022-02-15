const todoDao = require("./dao");

const getTodos = () => {
  return todoDao.getTodos();
};

const createTodo = (todo) => {
  return todoDao.createTodo(todo);
};

const updateTodo = (id, data) => {
  return todoDao.updateTodo(id, data);
};

const updateDoneTodo = (id, done) => {
  return todoDao.updateDoneTodo(id, done);
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
  updateDoneTodo,
  deleteTodo,
  getTodoById,
};
