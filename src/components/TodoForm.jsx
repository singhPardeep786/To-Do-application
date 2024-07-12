import React, { useState } from 'react'

const TodoForm = ({ onAddTodo }) => {

    const [inputValue, setinputValue] = useState({})

    const handleInputValue = (value) => {
        setinputValue({ id:value, content: value, checked: false })
    }
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue);
        setinputValue({ id:"", content: "", checked: false });
    }    
    
  return (
    <>
        <section className='form'>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input 
                        type="text"
                        placeholder='Enter Your Task'
                        value={inputValue.content}
                        onChange={(event)=> handleInputValue(event.target.value)}
                         />
                    </div>
                    <button>
                        Add Task
                    </button>
                </form>
            </section>
    </>
  )
}

export default TodoForm