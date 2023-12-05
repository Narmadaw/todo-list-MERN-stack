import DeleteIcon from './../../assets/images/icon-delete.svg'
import './TodoList.scss';

const TodoList = ({todoList, onClickIcon}) =>{
  
    return(
        <>
       
        <ul className='todo-list'>
            {todoList.map((item,index) =>{
                return (
                    <li className={`todo-list__item ${item.done ? 'todo-list__item--done' : ''}` }
                        key={index}>
                            <div>
                                <input type='checkbox' name="todo-list__check" onClick={() => onClickIcon(item._id, 'put')}  />
                                {item.task}
                            </div>
                            <img className='todo-list__delete-icon' src={DeleteIcon} alt='delete icon' onClick={() => onClickIcon(item._id, 'delete')} />
                    </li>
                    
                );
            })}
        </ul>
        </>
    );
}
export default TodoList;