import React from 'react';

const TaskItem = ({ task, onDelete, onEdit, onComplete }) => {
  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={onComplete} />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
      </span>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;