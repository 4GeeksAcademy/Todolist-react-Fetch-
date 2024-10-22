import React, { useState } from 'react';

'./App.css';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task) {
      const newTasks = [...tasks, task];
      setTasks(newTasks);
      setTask('');
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
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
          <h1 className="card-title">Todos</h1>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyUp={handleKeyPress}
            
            />
            <div className="input-group-append">
              
            </div>
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
