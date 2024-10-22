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

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1 className='text-light'>Todos</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyUp={handleKeyPress}
          placeholder="No hay tareas, agrega alguna?"
        />
      </div>
      <ul>
        {tasks.map((task, index) => (
             <li key={index} onMouseEnter={(e) => e.target.classList.add('hover')} onMouseLeave={(e) => e.target.classList.remove('hover')}>
             {task}
             <span className="remove-btn btn btn-denger" onClick={() => removeTask(index)}>✖</span>
         </li>
        ))}
      </ul>
      <div className="footer">
        <p className='text-light'>{tasks.length} item{tasks.length !== 1 ? 's' : ''} left</p>
      </div>
    </div>
  );
};

export default App;
