import {useState} from 'react';
import CreateTodoList from './components/CreateTodoList/CreateTodoList'
import './App.scss';

function App() {
  return (
    <>
    <div className='wrapper'>
      <h2 className='title'>ToDo List</h2>
      <CreateTodoList />

    </div>
    
    </>
  );
}

export default App;
