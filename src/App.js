import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {

  const [tasks, setTask] = useState([
    {   id: 1,  title: 'Task 1', description: 'Task 1 description', status: 'open'},
    {   id: 2,  title: 'Task 2', description: 'Task 2 description', status: 'open'},
    {   id: 3,  title: 'Task 3', description: 'Task 3 description', status: 'open'},
    {   id: 4,  title: 'Task 4', description: 'Task 4 description', status: 'open'},
    {   id: 5,  title: 'Task 5', description: 'Task 5 description', status: 'open'},]);


  const deleteTask = (id) => {
    console.log('deleted', id)
  }
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
