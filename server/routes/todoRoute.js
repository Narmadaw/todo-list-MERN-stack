const express = require('express');
const router = express.Router();

const todoController = require('./../controllers/todoController');

router.route('/').post(todoController.createTodoTask);

module.exports = router;