import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from './components/About';
import Home from './components/Home';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import React from 'react';

function App() {


  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);


  // useEffect to call data from a json server 
  useEffect(() => {
    const getTasks = async () => {
      const tasksfromServer = await fetchTasks()
      setTasks(tasksfromServer)
    }

    getTasks()
  }, [])

  const  fetchTasks =  async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json()

    return data 
  }

  const  fetchTask =  async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await response.json()

    return data 
  }


  // Add Task
  const addTask = async (task) => {
    const response = await fetch(`http://localhost:5000/tasks`, 
    {method: "POST", 
    headers: {"content-type": "application/json"}, 
    body: JSON.stringify(task)
    })

    const data = await response.json()

    setTasks([...tasks, data])

    // const id = tasks.length + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
    // console.log(newTask);

  }
  
  // Delete Task
  const deleteTask = async (id) => {

    await fetch(`http://localhost:5000/tasks/${id}`, {method: "DELETE"})    
    setTasks(tasks.filter((task) => task.id !== id ))
  }

  // Toggle Task Reminder
  const toggleReminder = async (id) => {

    const taskToToggle = await fetchTask(id)
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder}

    const response = await fetch(`http://localhost:5000/tasks/${id}`, 
    {method: "PUT",
    headers: {"content-type": "application/json"}, 
    body: JSON.stringify(updatedTask)})

    const data = await response.json()

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !data.reminder} :  task))
  }

  return (
    <Router>
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      <Routes>
      <Route path="/" exact element={
              <Home
                showAddTask={showAddTask}
                addTask={addTask}
                tasks={tasks}
                Tasks={Tasks}
                toggleReminder={toggleReminder}
                deleteTask={deleteTask}
                AddTask={AddTask}
              />
            }
      />
      <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
