import React, { Component } from 'react';
import HabitAddForm from './habitAddForm';
import Habit from './habit';

class Habits extends Component {
  render() {
    return (
      <div>
        <HabitAddForm onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="reset-btn" onClick={this.props.onReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Habits;
