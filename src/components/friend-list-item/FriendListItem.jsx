import css from './FriendListItem.module.css';
import { getRandomHexColor } from '../utils/GetRandomColor';

export function FriendListItem({ friends: { avatar, name, isOnline } }) {
  const onlineStatus = () => {
    if (!isOnline) {
      return `rgb(240, 63, 63)`;
    } else {
      return `rgb(14, 218, 41)`;
    }
  };
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={{
          backgroundColor: onlineStatus(),
        }}
      >
        {isOnline}
      </span>
      <img
        className={css.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
        style={{ backgroundColor: getRandomHexColor() }}
      />
      <p className={css.name}>{name}</p>
    </li>
  );
}
