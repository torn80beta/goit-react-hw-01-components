import PropTypes from 'prop-types';
import { Fragment } from 'react';
import css from './TransactionHistory.module.css';

export function TransactionHistory({ transactions }) {
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
        {transactions.map(({ amount, currency, type, id }, index) => (
          <Fragment key={id}>
            <tr
              style={{
                backgroundColor:
                  index % 2 === 0 ? 'rgb(255, 255, 255)' : 'rgb(247, 247, 247)',
              }}
            >
              <td className={css.tableData}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </td>
              <td className={css.tableData}>{amount}</td>
              <td className={css.tableData}>{currency}</td>
            </tr>
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
