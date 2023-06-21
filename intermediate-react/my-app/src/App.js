import React, { useState, useRef, forwardRef } from 'react';


import MyInput from './components/MyInput';

const App = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');
  const onInputChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const focus = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <MyInput value={value} onChange={onInputChange} ref={inputRef}
       onClick={focus}/>
    </>
  );
};

export default App;
