import { Profile } from './social-profile/Profile';
import user from '../data/user.json';

export const App = () => {
  return <Profile userData={user} />;
};
