import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './friend-list/FriendList';
import { TransactionTable } from './transaction-table/TransactionTable';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
export const App = () => {
  return (
    <>
      <Profile userData={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionTable transactions={transactions} />
    </>
  );
};
