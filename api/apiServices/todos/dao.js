const { Todo, Folder } = require("../../services/db");

const getTodos = async (folderId) => {
  const response = await Folder.findOne({
    where: { id: folderId },
    include: { model: Todo, attributes: ["id", "description", "done"] },
  });
  return response;
};

const createTodo = async (todo, folderId) => {
  const todoCreated = await Todo.create(todo);
  const folder = await Folder.findByPk(folderId);
  const response = await folder.addTodo(todoCreated.dataValues.id);
  return todoCreated;
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
