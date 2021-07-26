import React, { memo, useRef } from 'react';

const HabitAddForm = memo(({ onAdd }) => {
  const inputRef = useRef();
  const formRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && onAdd(name);
    // this.inputRef.current.value = '';
    formRef.current.reset();
  };

  return (
    <form className="add-form" onSubmit={onSubmit} ref={formRef}>
      <input type="text" className="input-box" ref={inputRef} />
      <button className="add-btn grey-btn">Add</button>
    </form>
  );
});

export default HabitAddForm;
