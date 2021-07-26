import React from 'react';
import HabitAddForm from './habitAddForm';
import Habit from './habit';

const Habits = ({ habits, onIncrement, onDecrement, onDelete, onAdd, onReset }) => {
  return (
    <div className="habits-box">
      <HabitAddForm onAdd={onAdd} />
      <ul>
        {habits.map((habit) => (
          <Habit key={habit.id} habit={habit} onIncrement={onIncrement} onDecrement={onDecrement} onDelete={onDelete} />
        ))}
      </ul>
      <button className="reset-btn grey-btn" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default Habits;
