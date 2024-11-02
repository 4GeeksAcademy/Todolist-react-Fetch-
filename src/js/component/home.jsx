import React, { useState, useEffect } from 'react';


const API = 'https://playground.4geeks.com/todo/users/Garx1212';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setTasks(data);
        } else {
         
        }
      })
      .catch(error => console.error('Error:', error));
  }, []);

  
  const updateTasksOnServer = (newTasks) => {
    fetch('https://playground.4geeks.com/todo/todos/36', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTasks),
    })
    .then(response => response.json())
    .catch(error => console.error('Error updating tasks:', error));
  };

 
  const addTask = async () => {
    if (task) {
      const newTasks = [...tasks, task];
      await setTasks(newTasks);
      await updateTasksOnServer(newTasks);
      setTask('');
    }
  };

 
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    updateTasksOnServer(newTasks);
  };



 
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="App container">
      <div className="card mt-5">
        <div className="card-body">
          <h1 className="card-title">todos</h1>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyUp={handleKeyPress}
            />
          </div>
          {tasks.length === 0 ? (
            <p className="card-text">No hay tareas, agrega una</p>
          ) : (
            <ul className="list-group">
              {tasks.map((task, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center task-item">
                  {task}
                  <button className="btn btn-danger delete-button" onClick={() => removeTask(index)}>X</button>
                </li>
              ))}
            </ul>
          )}
          <div className="footer mt-3">
            <p>{tasks.length} item{tasks.length !== 1 ? 's' : ''} left</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
