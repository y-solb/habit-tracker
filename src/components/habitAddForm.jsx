import React, { Component } from 'react';

class HabitAddForm extends Component {
  render() {
    return (
      <form className="add-form">
        <input type="text" className="input-box" />
        <button className="add-btn">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
