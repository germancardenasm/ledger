import React from 'react';
import { connect } from 'react-redux';
import styles from './BalanceIndicator.module.css';

const BalanceIndicator = ({ registers }) => {
  const balance = registers.reduce((prev, curr) => {
    let subTotal = curr.type === 'credit' ? curr.amount * -1 : curr.amount;
    subTotal = subTotal + prev;
    return subTotal;
  }, 0);

  return (
    <div className={styles.BalanceIndicator}>
      <span>Balance: </span>
      <span style={balance < 0 ? { borderColor: 'red' } : null}>{balance}</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    registers: state.ledger.registers,
  };
};

export default connect(mapStateToProps)(BalanceIndicator);
