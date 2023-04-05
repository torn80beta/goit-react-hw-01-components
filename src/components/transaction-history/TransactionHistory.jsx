import css from './TransactionHistory.module.css';

export function TransactionHistory({
  transaction: { amount, currency, type },
  index,
}) {
  return (
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
  );
}
