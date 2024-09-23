import React, { useState } from 'react';

const TaskForm = ({ onSubmit, task = {} }) => {
  const [name, setName] = useState(task.name || '');
  const [description, setDescription] = useState(task.description || '');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !description) {
      setErrors({ name: 'Required', description: 'Required' });
    } else {
      onSubmit({ name, description });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
      </label>
      <br />
      <label>
        Task Description:
        <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
        {errors.description && <div style={{ color: 'red' }}>{errors.description}</div>}
      </label>
      <br />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;