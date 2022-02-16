const todoDao = require("./dao");

const getTodos = (folderId) => {
  const response = todoDao.getTodos(folderId).then((value) =>
    value.todos.map((element) => {
      return { id: element.id, description: element.description, done: element.done };
    })
  );
  return response;
};

const createTodo = (todo, folderId) => {
  return todoDao.createTodo(todo, folderId);
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
