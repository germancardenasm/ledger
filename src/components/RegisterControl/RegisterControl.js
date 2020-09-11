import React from 'react';
import styles from './RegisterControl.module.css';

export const RegisterControl = ({
  title,
  color,
  onSubmitHandle,
  onChangeHandler,
  state,
}) => {
  return (
    <div className={styles.RegisterControl} style={{ borderColor: color }}>
      <h3>{title}: </h3>
      <form onSubmit={onSubmitHandle}>
        <div className={styles.row}>
          <label htmlFor="checkNumber">Check Number: </label>
          <input
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
            type="number"
            id="amount"
            name="amount"
            onChange={onChangeHandler}
            value={state.amount}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
