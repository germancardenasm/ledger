import React, { useState } from 'react';
import { RegisterControl } from './RegisterControl';

export default ({ type, title, color }) => {
  const [state, setState] = useState({
    checkNumber: '',
    amount: '',
  });

  const onSubmitHandle = (event) => {
    event.preventDefault();
    console.log('submit');
  };

  const onChangeHandler = (event) => {
    const { id, value } = event.target;
    setState({
      ...state,
      [id]: value,
    });
  };

  return (
    <RegisterControl
      title={title}
      color={color}
      onSubmitHandle={onSubmitHandle}
      onChangeHandler={onChangeHandler}
      state={state}
    />
  );
};
