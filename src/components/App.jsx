import { Profile } from './social-profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from '../data/user.json';
import data from '../data/data.json';

export const App = () => {
  return (
    <>
      <Profile userData={user} />
      <Statistics title={'Upload stats'} stats={data} />
    </>
  );
};
