import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <p>{inputValue}</p>
      <Child inputValue={inputValue} onInputChange={handleInputChange} />
    </div>
  );
};

export default Parent;