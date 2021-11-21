import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import React from 'react'

function App() {

  const [tasks, setTasks] = useState([
    {   id: 1,  title: 'Task 1', description: 'Task 1 description', status: 'open'},
    {   id: 2,  title: 'Task 2', description: 'Task 2 description', status: 'open'},
    {   id: 3,  title: 'Task 3', description: 'Task 3 description', status: 'open'},
    {   id: 4,  title: 'Task 4', description: 'Task 4 description', status: 'open'},
    {   id: 5,  title: 'Task 5', description: 'Task 5 description', status: 'open'},]);


  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}  /> : "No tasks yet!"}
    </div>
  );
}

export default App;
