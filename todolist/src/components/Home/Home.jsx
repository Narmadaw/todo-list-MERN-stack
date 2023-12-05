import { useState, useEffect } from "react";
import axios from "axios";
import CreateTask from "../CreateTask/CreateTask";
import TodoList from "../TodoList/TodoList";
import './Home.scss';

const Home =() =>{
    const [todoList, setTodoList] = useState([]);
  
  //fetch todo list
  const getTodoList = async () =>{
    try{
        const response = await axios.get('http://localhost:8080/todo');
        setTodoList(response.data);
    }catch(error){
        console.log(error);
    }
}
useEffect(() =>{
    getTodoList();     
}, []);

//create new task
const postNewTask = async(newTask) =>{
    try{
        const response = await axios.post('http://localhost:8080/todo', newTask);
        if(response.status === 201)
        {
            getTodoList();
        }else {
            console.error('Unexpected response status:', response.status);
        }
        
    }catch(error){
        console.log(error);
    }
}

const handleUpdateOrDelete = async(id, method) =>{
    let response;
    console.log(method)
    try{
        response = await axios[method](`http://localhost:8080/todo/${id}`);
        if(response.status === 201){
            getTodoList();
        }else{
            console.error('Unexpected response status:', response.status);
        }
    }catch(error){
        console.log(error);
    }
}

return(
    <>
    <div className="container">
        <div className="container__sub-container">
            <h1 className="container__title">Todo List</h1>
                <CreateTask onFormSubmit={postNewTask} />
                <TodoList
                    todoList={todoList}
                    onClickIcon ={handleUpdateOrDelete} />
        </div>
    </div>
    </>
    );
}
export default Home;