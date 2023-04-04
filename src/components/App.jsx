import { Profile } from './social-profile/Profile';
import user from '../data/user.json';
// const data = { user };

export const App = () => {
  return <Profile userData={user} />;
  // <div
  //   style={{
  //     height: '100vh',
  //     display: 'flex',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     fontSize: 40,
  //     color: '#010101'
  //   }}
  // >
  //   React homework template
  // </div>
};
