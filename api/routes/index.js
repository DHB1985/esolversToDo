const express =require('express')
const router = express.Router()

const todos = require('../apiServices/todos/routes')

router.use('/todos', todos);

module.exports = router;
