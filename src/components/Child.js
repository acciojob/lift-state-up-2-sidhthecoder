import React from 'react';

const Child = ({ inputValue, onInputChange }) => {
  return (
    <div className="child">
      <h2>Child Component</h2>
      <input
        type="text"
        placeholder='Write Here'
        value={inputValue}
        onChange={onInputChange}
      />
    </div>
  );
};

export default Child;
