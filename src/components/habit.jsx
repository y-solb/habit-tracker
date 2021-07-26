import React, { memo } from 'react';

const Habit = memo(({ habit, onIncrement, onDecrement, onDelete }) => {
  const handleIncrement = () => {
    onIncrement(habit);
  };

  const handleDecrement = () => {
    onDecrement(habit);
  };

  const handleDelete = () => {
    onDelete(habit);
  };

  return (
    <li className="habit">
      <div className="habit-box">
        <span className="habit-name">{habit.name}</span>
        <span className="habit-count">{habit.count}</span>
      </div>
      <div className="button-box">
        <button className="habit-button habit-increase" onClick={handleIncrement}>
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={handleDecrement}>
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete" onClick={handleDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </li>
  );
});

export default Habit;
