import {useState} from 'react';
import './CreateTask.scss';

const CreateTask = ({onFormSubmit}) =>{
    const [task, setTask] = useState("");
    const [error, setError] = useState(null)

    const handleTask = (event) =>{
        setTask(event.target.value);
    }

    //create new todo task
    const handleSubmit = async (event) =>{
        event.preventDefault();
        if (task.trim() !== "") {
            const newTask = {
                task: task
            };
            onFormSubmit(newTask);
            setTask('');
            setError(null);
        } else {
            setError("Task cannot be empty.");
        }
    }
    return(
        <>
        
            <form onSubmit={handleSubmit} className='todo-form'>
                <div className='form'>
                    <input  
                        type='text' 
                        name='task' 
                        placeholder='+ Add a task'
                        value={task}
                        onChange={handleTask}
                        className={`form__input ${error ? 'form__input--invalid' : ''}`} />
                    <button className='form__cta-add-button' type='submit'>ADD</button>
                </div>
                <div className='error-pannel'>
                    {error &&(<p className='error-pannel__text'>{error}</p>)}
                </div>
            </form>
        
        </>
    );
}
export default CreateTask;