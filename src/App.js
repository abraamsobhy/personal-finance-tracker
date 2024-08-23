import React, { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Summary from './components/Summary';
import Insights from './components/Insights';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="App">
      <h1>Personal Finance Tracker</h1>
      <TransactionForm addTransaction={addTransaction} />
      <Summary transactions={transactions} />
      <TransactionList transactions={transactions} />
      <Insights transactions={transactions} />
    </div>
  );
};

export default App;
