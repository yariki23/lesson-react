import React, { Component } from 'react';
import moment from 'moment';
import Transaction from './Transaction.jsx';

class TransactionsLists extends Component {
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

export default TransactionsLists;

//algo
// Передать каждую li (map)
// отрисовать данные в jsx
// вывести на экран
