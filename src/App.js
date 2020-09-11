import React from 'react';
import { connect } from 'react-redux';
import { RegisterControl, BalanceIndicator } from './components';
import './App.css';

const App = ({ registers }) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Perficient National Bank</h1>
      </header>
      <section className="App-controls">
        <RegisterControl type="debit" color="green" title="Add Deposit" />
        <RegisterControl type="credit" color="red" title="Subtract Debit" />
      </section>
      <main className="App-register-table">
        <h2>Ledger</h2>
        <BalanceIndicator />
        <table>
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
                <th>{amount}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    registers: state.ledger.registers,
  };
};

export default connect(mapStateToProps)(App);
