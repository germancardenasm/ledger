import React from 'react';
import { connect } from 'react-redux';
import { RegisterControl, BalanceIndicator, LedgerTable } from './components';
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
      <main className="App-ledger-table">
        <h2>Ledger</h2>
        <BalanceIndicator />
        <LedgerTable />
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
