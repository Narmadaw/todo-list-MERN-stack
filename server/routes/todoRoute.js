const express = require('express');
const router = express.Router();

const todoController = require('./../controllers/todoController');

router.route('/').get(todoController.getTodoList).post(todoController.createTodoTask);
router.route('/:id').put(todoController.updateTodoTask).delete(todoController.deleteTodoTask);

module.exports = router;