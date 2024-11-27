import { useState } from 'react';
import {tasksdata } from '../data/task';
import './app.css';

function App() {
  const [tasks, settasks] = useState(tasksdata);

  const currentTasks= tasks.filter(task => task.state === 'backlog' || task.state === 'in_progress').length;
  const completedTasks = tasks.filter(task => task.state === 'completed').length;

  return (
    <>
      <div className="header">
        <h1>Task Manager</h1>
      </div>
      <div className="task-section">
        <div className="task-list">
          <h2>Current Tasks ({currentTasks})</h2>
          {renderTaskList(tasks, 'backlog')}
          {renderTaskList(tasks, 'in_progress')}
        </div>
        <div className="task-list">
          <hr/>
          <h2>Completed Tasks ({completedTasks})</h2>
          {renderTaskList(tasks, 'completed')}
        </div>
      </div>
    </>
  );
}

function renderTaskList(taskList, state) {
  const filteredTasks = taskList.filter(task => task.state === state);
  return (
    <div>
      {filteredTasks.map(task => (
        <div key={task.id} className="task-item">
          <div className="task-header">
            <div className="task-title">{task.title}</div>
            <span className={`tag ${task.state}`}>{task.state}</span>
          </div>
          <div>Priority: {task.priority}</div>
          <div>Est.time: {task.estimatedTime}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
