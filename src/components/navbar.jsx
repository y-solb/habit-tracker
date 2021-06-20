import React, { memo } from 'react';

const Navbar = memo(({ totalCount }) => {
  return (
    <nav className="navbar">
      <span className="navbar-title">Habit Tracker</span>
      <span className="habit-count">{totalCount}</span>
    </nav>
  );
});

export default Navbar;
