import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskItem = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="task-item">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p><strong>Category:</strong> {task.category}</p>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
