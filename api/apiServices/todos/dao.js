const { Todo } = require("../../services/db");

const getTodos = async () => {
  return await Todo.findAll();
};

const createTodo = async (todo) => {
  return await Todo.create(todo);
};

const updateTodo = async (id, description) => {
  return await Todo.update({ description: description }, { where: { id: id } });
};

const updateDoneTodo = async (id, done) => {
  return await Todo.update({ done: done }, { where: { id: id } });
};

const deleteTodo = async (id) => {
  return await Todo.destroy({ where: { id: id } });
};

const getTodoById = async (id) => {
  return await Todo.findByPk(id);
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  updateDoneTodo,
  deleteTodo,
  getTodoById,
};
