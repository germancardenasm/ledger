import React from 'react';
import { connect } from 'react-redux';
import './App.css';

const App = ({ registers }) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Perficient National Bank</h1>
      </header>
      <section className="App-controls">
        <p>Ledger controls</p>
      </section>
      <main className="App-register-table">
        <p>Ledger content</p>
        <table>
          <tr>
            <th>Date:</th>
            <th>Type:</th>
            <th>Check:</th>
            <th>Amount:</th>
          </tr>
          {registers.map(({ date, type, checkNumber, amount }, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              <th>{date}</th>
              <th>{type}</th>
              <th>{checkNumber}</th>
              <th>{amount}</th>
            </tr>
          ))}
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
