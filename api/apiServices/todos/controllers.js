const dto = require("./dto");

const getTodos = async (req, res, next) => {
  try {
    const todos = await dto.getTodos();

    return res.json(todos);
  } catch (error) {
    next(error);
  }
};

const createTodo = async (req, res, next) => {
  try {
    const { description } = req.body;

    const todo = { description: description, done: false };

    const response = await dto.createTodo(todo);

    return res.json(response);
  } catch (error) {
    next(error);
  }
};

const updateTodo = async (req, res, next) => {
  try {
    const { info } = req.body;
    const { id } = req.params;
    const response = await dto.updateTodo(id, info);

    return res.json(response);
  } catch (error) {
    next(error);
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await dto.deleteTodo(id);

    return res.json(response);
  } catch (error) {
    next(error);
  }
};

const getTodoById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const response = await dto.getTodoById(id);

    return res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  getTodoById,
};
