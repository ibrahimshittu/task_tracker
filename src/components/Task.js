import {FaTimes} from 'react-icons/fa';
import React from 'react'


const Task = ({ task, onDelete }) => {
    return (
        <div className="task">
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
