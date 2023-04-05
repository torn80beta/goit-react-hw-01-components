import { TransactionHistory } from '../transaction-history/TransactionHistory';
import css from './TransactionTable.module.css';
import PropTypes, { shape } from 'prop-types';

export function TransactionTable({ transactions }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction, index) => (
          <TransactionHistory
            transaction={transaction}
            key={transaction.id}
            index={index}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(
    shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
