import React, { useState, useRef, forwardRef } from 'react';

const MyInput = forwardRef((props, ref) => {

  return (
    <>
      <input value={props.value} onChange={props.onInputChange} ref={props.inputRef} />
      <button onClick={props.focus}>Focus</button>
    </>
  );
});

export default MyInput;
