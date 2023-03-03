import PropTypes from 'prop-types'; 
import { ProfileDiv, Description, Information, Avatar, Stats, StatsLi, Label, Quantity } from './Profile.styled';


export const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats,
 }) => {
    return (
<ProfileDiv >
  <Description >
    <Avatar
      src={avatar}
      alt="User avatar"
     
    />
    <Information>{username}</Information>
    <Information >@{tag}</Information>
    <Information >{location}</Information>
  </Description>

  <Stats >
    <StatsLi>
      <Label>Followers</Label>
      <Quantity >{stats.followers}</Quantity>
    </StatsLi>
    <StatsLi>
      <Label >Views</Label>
      <Quantity >{stats.views}</Quantity>
    </StatsLi>
    <StatsLi>
      <Label >Likes</Label>
      <Quantity >{stats.likes}</Quantity>
    </StatsLi>
  </Stats>
</ProfileDiv>
    )
}

 Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    avatar:PropTypes.string.isRequired,
    stats:PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number
    }),
}