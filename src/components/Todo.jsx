import React, { useState } from 'react'
import './Todo.css'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import DateAndTime from './DateAndTime';

import { getLocalData, setLocalData } from './TodoLocalStorage.jsx'


const Todo = () => {
    
    
    
    const [task, setTask] = useState(()=> getLocalData())

    
    const handleFormSubmit = (inputValue) => {

        const {id, content, checked} = inputValue;

        //check if the input field is empty or not
        if(!content) return;

        //check if the data field is empty or not
        // if(task.includes(inputValue)) return;

        const TodoContentMatched = task.find((curtask)=> curtask.content === content)
        if(TodoContentMatched) return;

        setTask((prevtask) => [...prevtask, {id, content, checked}]);
        
    }

    const handleDeleteBtn = (value) => {
        // console.log(task);
        // console.log(value);
        const updatedTask = task.filter((curtask)=> curtask.content !=  value);
        setTask(updatedTask);
    }

    //Clear Btn functionality
    const handleClearTodoData = () => {
        setTask([]);
    }

    //add to localstorage
    setLocalData(task);

    //Check Uncheck functionality
    const handleCheckBtn = (content) => {
        const updatedTask = task.map((curtask)=> {
            if(curtask.content === content){
                return {...curtask, checked: !curtask.checked}
            }else{
                return curtask;
            }
        });
        setTask(updatedTask);
    }
    
  return (
    <>
        <section className='todo-container'>
            <header>
                <h1>Todo List</h1>
                <DateAndTime />
            </header>
            <TodoForm onAddTodo={handleFormSubmit} />
            <section className='myUnOrdList'>
                <ul>
                    {
                        task.map((curtask)=> {
                            return (
                                <TodoList 
                                key={curtask.id} 
                                curtask={curtask.content} 
                                checked={curtask.checked}
                                onDeleteBtn = {handleDeleteBtn} 
                                onhandleCheckBtn = {handleCheckBtn}
                                />
                            )
                        })
                    }
                </ul>
            </section>
            <section>
                <button className='clear-btn' onClick={handleClearTodoData}>
                    Clear all
                </button>
            </section>
        </section>
    </>
  )
}

export default Todo