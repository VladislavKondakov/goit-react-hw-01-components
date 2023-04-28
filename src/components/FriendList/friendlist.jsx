import PropTypes from 'prop-types';
import { ContainerUser } from './friendlist.styled.jsx'
import { UlGap } from './friendlist.styled.jsx';

export default function Painting(props) {
  const { url, name, tag, location, followers, views, likes } = props;
  return (
     <ContainerUser>
  <div className="description">
    <img
      src={url}
      alt="User avatar" 
      className="avatar"
        />   
    <p className="name">{name}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>

  <UlGap>
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
 </UlGap>
    </ContainerUser>
  )
}
Painting.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }