import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskForm = () => {
  const { addTask, updateTask } = useContext(TaskContext);
  const [task, setTask] = useState({ title: '', description: '', category: 'General' });
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      updateTask({ ...task, id: editId });
    } else {
      addTask({ ...task, id: Date.now() });
    }
    setTask({ title: '', description: '', category: 'General' });
    setEditId(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Category</label>
        <select
          value={task.category}
          onChange={(e) => setTask({ ...task, category: e.target.value })}
        >
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;
