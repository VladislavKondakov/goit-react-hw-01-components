import PropTypes from 'prop-types';
import { Color } from './friend.styled';

export default function FriendsGeneration(props) {
    const { id, status, src, name } = props;
    return (
        
       <li className="item" id={id}>
  <Color status={status}/>
  <img className="avatar" src={src} alt="User avatar" width="48" />
  <p className="name">{name}</p>
</li>  
    )
}

FriendsGeneration.propTypes = {
    id: PropTypes.number,
    status: PropTypes.bool,
    src: PropTypes.string,
    name: PropTypes.string,
}