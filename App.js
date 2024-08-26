import React from 'react';
import TaskManagement from './pages/TaskManagement';
import { TaskProvider } from './context/TaskContext';
import './styles.css';

const App = () => {
  return (
    <TaskProvider>
      <TaskManagement />
    </TaskProvider>
  );
};

export default App;
