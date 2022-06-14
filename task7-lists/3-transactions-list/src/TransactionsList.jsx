import React, { Component } from 'react';
import Transaction from './Transaction.jsx';

class TransactionsList extends Component {
  render() {
    const transactions = this.props.transactions;

    return (
      <ul className="transactions">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </ul>
    );
  }
}

export default TransactionsList;

//algo
// Передать каждую li (map)
// отрисовать данные в jsx
// вывести на экран
