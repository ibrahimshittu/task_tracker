import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react';
import React from 'react'

function App() {

  const [tasks, setTasks] = useState([
    {   id: 1,  title: 'Task 1', description: 'Task 1 description', reminder: true},
    {   id: 2,  title: 'Task 2', description: 'Task 2 description', reminder: true},
    {   id: 3,  title: 'Task 3', description: 'Task 3 description', reminder: true},
    {   id: 4,  title: 'Task 4', description: 'Task 4 description', reminder: true},
    {   id: 5,  title: 'Task 5', description: 'Task 5 description', reminder: true},]);


  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ))
  }

  // Toggle Task Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} :  task))
  }

  return (
    <div className="container">
      <Header />
      <AddTask/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}  onToggle={toggleReminder} /> : "No tasks yet!"}
    </div>
  );
}

export default App;
