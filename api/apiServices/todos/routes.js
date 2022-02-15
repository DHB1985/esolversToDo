const express = require("express");
const router = express.Router();

const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  getTodoById,
} = require("./controllers");

router.get("/all", getTodos);
router.post("/", createTodo);
router.put("/:id", updateTodo);
//router.put("/", updateTodo);
router.delete("/:id", deleteTodo);
router.get("/:id", getTodoById);

module.exports = router;
