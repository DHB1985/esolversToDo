const express =require('express')
const router = express.Router()

const todos = require('../apiServices/todos/routes')
const folders = require('../apiServices/folders/routes')

router.use('/todos', todos);
router.use('/folders', folders)

module.exports = router;
