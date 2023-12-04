const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task: String
})

const todoModel = mongoose.model('todos', TodoSchema)
module.exports = todoModel;