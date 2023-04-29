import PropTypes from 'prop-types';
import { ContainerUser } from './friendlist.styled.jsx'
import { UlGap } from './friendlist.styled.jsx';
import { LiUser } from './friendlist.styled.jsx';
import { ImgUser } from './friendlist.styled.jsx';
import { ContainerPosition } from './friendlist.styled.jsx';

export default function Painting(props) {
  const { url, name, tag, location, followers, views, likes } = props;
  return (
    <ContainerUser>
     <ContainerPosition>
  <div className="description">
    <ImgUser
      src={url}
      alt="User avatar" 
      className="avatar"
        />   
    <p className="name">{name}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>

  <UlGap>
    <LiUser>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </LiUser>
    <LiUser>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </LiUser>
    <LiUser>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </LiUser>
        </UlGap>
        </ContainerPosition>
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