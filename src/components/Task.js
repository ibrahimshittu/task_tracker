const task= [
    {   id: 1,  title: 'Task 1', description: 'Task 1 description', status: 'open'},
    {   id: 2,  title: 'Task 2', description: 'Task 2 description', status: 'open'},
    {   id: 3,  title: 'Task 3', description: 'Task 3 description', status: 'open'},
    {   id: 4,  title: 'Task 4', description: 'Task 4 description', status: 'open'},
]

const Task = () => {
    return (
        <>
            {task.map((task) => (<h3>{task.title}</h3>))}
        </>
    )
}

export default Task
