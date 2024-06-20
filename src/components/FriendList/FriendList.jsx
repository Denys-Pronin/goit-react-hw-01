import css from "./FriendList.module.css";

// const FriendListItem = ({ avatar, name, isOnline }) => {
//   return (
//     <div>
//       <img src={avatar} alt={name} width="48" />
//       <p>{name}</p>
//       <p className={isOnline}>{isOnline ? "Online" : "Offline"}</p>
//     </div>
//   );
// };

const FriendList = ({ avatar, name, isOnline }) => {
  console.log(avatar);
  return (
    <ul>
      {/* Кількість li залежить від кількості об'єктів в масиві */}
      <li>
        {/* <FriendListItem avatar={avatar} name={name} isOnline={isOnline} /> */}
      </li>
    </ul>
  );
};

export default FriendList;
