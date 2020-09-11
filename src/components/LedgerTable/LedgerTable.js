import React from 'react';
import { connect } from 'react-redux';
import styles from './LedgerTable.module.css';

const LedgerTable = ({ registers }) => {
  return (
    <div className={styles.tableContainer}>
      <table class={styles.scrollDown}>
        <thead>
          <tr>
            <th>Date:</th>
            <th>Type:</th>
            <th>Check:</th>
            <th>Amount:</th>
          </tr>
        </thead>
        <tbody>
          {registers.map(({ date, type, checkNumber, amount }, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              <th>{date}</th>
              <th>{type}</th>
              <th>{checkNumber}</th>
              <th>${amount}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    registers: state.ledger.registers,
  };
};

export default connect(mapStateToProps)(LedgerTable);
