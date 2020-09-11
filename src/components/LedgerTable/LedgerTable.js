import React from 'react';
import { connect } from 'react-redux';
import styles from './LedgerTable.module.css';

const LedgerTable = ({ registers }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.scrollDown}>
        <thead>
          <tr>
            <th className={styles.date}>Date:</th>
            <th className={styles.type}>Type:</th>
            <th className={styles.check}>Check:</th>
            <th className={styles.amount}>Amount:</th>
          </tr>
        </thead>
        <tbody>
          {registers.map(({ date, type, checkNumber, amount }, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              <td className={styles.date}>{date}</td>
              <td className={styles.type}>{type}</td>
              <td className={styles.check}>{checkNumber}</td>
              <td className={styles.amount}>${amount}</td>
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
