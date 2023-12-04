import {useState, useEffect} from 'react';
import axios from 'axios';
import './CreateTodoList.scss';

const CreateTodoList = () =>{
    const [todo, setTodo] = useState("");

    const handleTodo = (event) =>{
        setTodo(event.target.value);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            const response = await axios.post('http://localhost:8080/todo', {todo:todo});
            console.log(response);
        }catch(error){
            console.log(error);
        }
    }

    return(
        <>
        <div className='form-wrapper'>
            <form onSubmit={handleSubmit}>
                <div className='form'>
                    <input  
                        type='text' 
                        name='todo' 
                        placeholder='+ Add a task'
                        value={todo}
                        onChange={handleTodo}
                        className= "form__input" />
                    <button className='form__cta-add-button' type='submit'>ADD</button>
                </div>
            </form>
        </div>
        </>
    );
}
export default CreateTodoList;