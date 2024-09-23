import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (task) => {
    if (editingTask) {
      setTasks(tasks.map((t) => (t.id === editingTask.id ? task : t)));
      setEditingTask(null);
    } else {
      setTasks([...tasks, { ...task, id: uuidv4(), completed: false }]);
    }
  };

  const handleDelete = (task) => {
    if (window.confirm(`Are you sure you want to delete ${task.name}?`)) {
      setTasks(tasks.filter((t) => t.id !== task.id));
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const handleComplete = (task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t)));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskForm onSubmit={handleSubmit} task={editingTask} />
      <TaskList tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} onComplete={handleComplete} />
    </div>
  );
};

export default App;