import React, { useState } from 'react';
import { connect } from 'react-redux';
import { RegisterInputForm } from './RegisterInputForm';
import { addRegister } from '../../redux/Ledger/ledger.actions';
import moment from 'moment';

const RegisterInputFormContainer = ({ type, title, color, addRegister }) => {
  const [state, setState] = useState({
    checkNumber: '',
    amount: '',
  });

  const onSubmitHandle = (event) => {
    event.preventDefault();

    //Empty or Negative numbers are not accepted
    if (
      state.checkNumber < 0 ||
      state.amount < 0 ||
      state.checkNumber === '' ||
      state.amount === ''
    )
      return;

    //Dispatch the event to add a register
    addRegister({
      date: moment().format('YYYY-MM-DD h:mm:ss'),
      type,
      checkNumber: +state.checkNumber,
      amount: +state.amount,
    });
  };

  const onChangeInputHandler = (event) => {
    //Update the state with numbers typed by user
    const { id, value } = event.target;
    setState({
      ...state,
      [id]: value,
    });
  };

  return (
    <RegisterInputForm
      title={title}
      color={color}
      onSubmitHandle={onSubmitHandle}
      onChangeHandler={onChangeInputHandler}
      state={state}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addRegister: (register) => dispatch(addRegister(register)),
  };
};

export default connect(null, mapDispatchToProps)(RegisterInputFormContainer);
