import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const TaskManagement = () => {
  const { tasks, filterTasks } = useContext(TaskContext);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filteredTasks = category === 'All' ? tasks : filterTasks(category);

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm />
      
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All Categories</option>
        <option value="General">General</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Other">Other</option>
      </select>
      <TaskList tasks={filteredTasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase()))} />
    </div>
  );
};

export default TaskManagement;
