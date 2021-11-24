import {FaTimes} from 'react-icons/fa';
import React from 'react'


const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder': ''}`} onClick={() => onToggle(task.id)} >
            <h3>{task.title} <FaTimes style={ faTimesStyle } onClick={()=>onDelete(task.id) } /></h3>
            <p>{task.description}</p>
        </div>
    )
}

const faTimesStyle = {
    color: 'red',
    cursor: 'pointer',
}

export default Task
