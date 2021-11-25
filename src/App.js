import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState, useEffect } from 'react';
import React from 'react'

function App() {


  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);


  // useEffect to call data from a json server 
  useEffect(() => {
    const  fetchTask =  async () => {
      const response = await fetch("http://localhost:5000/tasks");
      const data = await response.json()

      console.log(data)
    }

    fetchTask()
  }, [])


  // Add Task
  const addTask = (task) => {
    const id = tasks.length + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    console.log(newTask);
  }
  
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
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      { showAddTask && <AddTask onAdd={addTask}  /> }
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}  onToggle={toggleReminder} /> : "No tasks yet!"}
    </div>
  );
}

export default App;
