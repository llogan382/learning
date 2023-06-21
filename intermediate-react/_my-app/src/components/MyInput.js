import React, { useState, useRef, forwardRef } from 'React';



const MyInput = React.forwardRef((props, ref) => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');
  const onInputChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const focus = () => {
    inputRef.current?.focus();
  };
  return(

    <input ref={ref} {...props} />
  )
});

export default MyInput
