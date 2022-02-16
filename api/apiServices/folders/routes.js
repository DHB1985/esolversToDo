const express = require("express");
const router = express.Router();

const {
  getFolders,
  createFolder,
  deleteFolder,
} = require("./controllers");

router.get("/all", getFolders);
router.post("/", createFolder);
router.delete("/:id", deleteFolder);

module.exports = router;