import { Profile } from './social-profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './friend-list/FriendList';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';

export const App = () => {
  return (
    <>
      <Profile userData={user} />
      <Statistics title={'Upload stats'} stats={data} />
      <FriendList friends={friends} />
    </>
  );
};
