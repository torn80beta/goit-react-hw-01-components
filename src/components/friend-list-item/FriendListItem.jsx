import css from './FriendListItem.module.css';

export function FriendListItem({ friends: { avatar, name, isOnline } }) {
  return (
    <li className={css.item}>
      <span className={css.status}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
