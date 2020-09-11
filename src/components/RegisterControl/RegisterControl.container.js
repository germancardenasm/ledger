import React, { useState } from 'react';
import { connect } from 'react-redux';
import { RegisterControl } from './RegisterControl';
import { addRegister } from '../../redux/Ledger/ledger.actions';
import moment from 'moment';

const RegisterControlContainer = ({ type, title, color, addRegister }) => {
  const [state, setState] = useState({
    checkNumber: '',
    amount: '',
  });

  const onSubmitHandle = (event) => {
    event.preventDefault();
    addRegister({
      date: moment().format('YYYY-MM-DD h:mm:ss'),
      type,
      checkNumber: +state.checkNumber,
      amount: +state.amount,
    });
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

const mapDispatchToProps = (dispatch) => {
  return {
    addRegister: (register) => dispatch(addRegister(register)),
  };
};

export default connect(null, mapDispatchToProps)(RegisterControlContainer);
