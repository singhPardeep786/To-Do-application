import React from 'react'
import { FiCheck } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";

const TodoList = ({ curtask, checked, onDeleteBtn, onhandleCheckBtn }) => {
  return (
    <>
        <li className='todo-item'>
            <span className={checked ? "checkList" : "notCheckList"}>{curtask}</span>
            <button className='check-btn' onClick={()=> onhandleCheckBtn(curtask)}>
                <FiCheck />
            </button>
            <button className='delete-btn' onClick={()=>onDeleteBtn(curtask)}>
                <MdDeleteForever />
            </button>
        </li>
    </>
  )
}

export default TodoList