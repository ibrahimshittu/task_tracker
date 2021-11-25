import React from 'react'

const Home = ({ showAddTask, addTask, tasks, Tasks, toggleReminder, deleteTask, AddTask }) => {
    return (
        <div>
            { showAddTask && <AddTask onAdd={addTask}  /> }
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}  onToggle={toggleReminder} /> : "No tasks yet!"}
        </div>
    )
}

export default Home
