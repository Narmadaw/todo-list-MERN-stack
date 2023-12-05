const express = require("express");
const todoModel = require("./../models/todo");

//get all todo tasks
const getTodoList = async (_req, res) =>{
    try{
        const todoList = await todoModel.find();
        res.status(201).json(todoList);
    }catch(error){
        res.status(500).json({
            message: `Unable to create new task: ${error}`,
          });
    }
}

//add new task
const createTodoTask = async (req, res) =>{
    const {task} = req.body;
    try{
        const newTask = await todoModel.create({task:task});
        res.status(201).json(newTask);
    }
    catch(error){
        res.status(500).json({
            message: `Unable to create new task: ${error}`,
          });
    }
}

//update task as 'done'
const updateTodoTask = async (req, res) =>{
    const {id} = req.params;
    try{
        const updateTask = await todoModel.findByIdAndUpdate({_id:id}, {done:true});
        res.status(201).json(updateTask);
    }catch(error){
        res.status(500).json({
            message: `Unable to edit task: ${error}`,
          });
    }
}

//delete task
const deleteTodoTask = async(req,res) =>{
    const {id} = req.params;
    try{
        const updateTask = await todoModel.findByIdAndDelete({_id:id});
        res.status(201).json(updateTask);
    }catch(error){
        res.status(500).json({
            message: `Unable to delete task: ${error}`,
          });
    }
}

module.exports = {
    getTodoList,
    createTodoTask,
    updateTodoTask,
    deleteTodoTask
}