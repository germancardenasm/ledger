import React from 'react';
import styles from './RegisterInputForm.module.css';

export const RegisterInputForm = ({
  title,
  color,
  onSubmitHandle,
  onChangeHandler,
  state,
}) => {
  return (
    <div className={styles.RegisterInputForm} style={{ borderColor: color }}>
      <h3>{title}: </h3>
      <form onSubmit={onSubmitHandle}>
        <div className={styles.row}>
          <label htmlFor="checkNumber">Check Number: </label>
          <input
            required
            type="number"
            id="checkNumber"
            name="checkNumber"
            onChange={onChangeHandler}
            value={state.checkNumber}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="amount">Amount: </label>
          <input
            required
            type="number"
            id="amount"
            name="amount"
            step=".01"
            onChange={onChangeHandler}
            value={state.amount}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
