import React, { createContext, useState, useEffect } from 'react';


export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
   
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('Tasks saved to local storage:', tasks); 
  }, [tasks]);

  const addTask = (task) => {
    setTasks(prevTasks => [...prevTasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(prevTasks =>
      prevTasks.map(task => task.id === updatedTask.id ? updatedTask : task)
    );
  };

  const deleteTask = (id) => {
    setTasks(prevTasks =>
      prevTasks.filter(task => task.id !== id)
    );
  };

  const filterTasks = (category) => {
    return tasks.filter(task => task.category === category);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, filterTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
