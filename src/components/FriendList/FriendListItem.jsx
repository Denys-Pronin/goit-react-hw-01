import css from "./FriendList.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.friend}>
      <img className={css.img} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.online : css.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};
export default FriendListItem;
