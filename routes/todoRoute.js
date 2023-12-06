const express = require('express');
const router = express.Router();

const todoController = require('./../controllers/todoController');

router.route('/').get(todoController.getTodoList);
router.route('/').post(todoController.createTodoTask);
router.route('/:id').put(todoController.updateTodoTask);
router.route('/:id').delete(todoController.deleteTodoTask);

module.exports = router;