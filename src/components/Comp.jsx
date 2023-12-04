import React, { useState } from 'react';
import Main from './Main';
import Result from './Result';

const Comp = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputGiven, setInputGiven] = useState(false);

  const handleInputChange = (value) => {
    setInputValue(value);
    setInputGiven(true);
  };

  return (
    <div>
      {inputGiven ? (
        <Result inputValue={inputValue} />
      ) : (
        <Main onInputChange={handleInputChange} />
      )}
    </div>
  );
};

export default Comp;