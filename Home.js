import React from 'react';
import TaskList from '../components/TaskList';
import '../styles.css';

const Home = () => {
  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskList />
    </div>
  );
};

export default Home;
