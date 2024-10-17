import React, { useState } from 'react';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>todos</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="What needs to be done?"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button className="delete-button" onClick={() => removeTask(index)}>X</button>
          </li>
        ))}
      </ul>
      <div className="footer">
        <p>{tasks.length} item{tasks.length !== 1 ? 's' : ''} left</p>
      </div>
    </div>
  );
};

export default App;
