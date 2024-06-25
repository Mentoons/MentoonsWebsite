import React from 'react'
import '../pagecss/Todo.css'
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
const Todo = ({task}) => {
  return (
    <div className='todo-main-box'>
        <p>{task}</p>
        <div className='todo-icons'>
        <FiEdit />
        <MdOutlineDeleteOutline />
        </div>
    </div>
  )
}

export default Todo