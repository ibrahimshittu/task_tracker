import {useState} from 'react';



const Task = () => {

    const [task, setTask] = useState([
    {   id: 1,  title: 'Task 1', description: 'Task 1 description', status: 'open'},
    {   id: 2,  title: 'Task 2', description: 'Task 2 description', status: 'open'},
    {   id: 3,  title: 'Task 3', description: 'Task 3 description', status: 'open'},
    {   id: 4,  title: 'Task 4', description: 'Task 4 description', status: 'open'},
    {   id: 5,  title: 'Task 5', description: 'Task 5 description', status: 'open'},]);
    return (
        <>
            {task.map((task) => (<h3 key={task.id}>{task.title}</h3>))}
        </>
    )
}

export default Task
