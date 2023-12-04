const express = require("express");
const todoModel = require("./../models/todo");

const createTodoTask = async (req, res) =>{
    const todo = req.body.todo;
    try{
        const newTask = await todoModel.create({todo:todo});
        res.status(201).json(newTask);
    }
    catch(error){
        res.status(500).json({
            message: `Unable to create new task: ${error}`,
          });
    }
}

module.exports = {
    createTodoTask,
}