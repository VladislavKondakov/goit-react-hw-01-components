import PropTypes from 'prop-types';
import { Color } from './friend.styled';
import { UlCenter } from './friend.styled';

export default function FriendsGeneration({ friends }) {
  return (
    <UlCenter>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li className="item" key={id}>
          <Color status={isOnline} />
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </UlCenter>
  );
}

FriendsGeneration.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
