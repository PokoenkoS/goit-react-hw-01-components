import PropTypes from 'prop-types'; 
import {Item, Status, Avatar, Name} from './Friend.styled'

export const FriendListItem = ({
    id,
    avatar,
    name,
    isOnline,
}) => {
    return (
        <Item key={id}>
  <Status isOnline= {isOnline} > {isOnline}</Status>
  <Avatar  src={avatar} alt="User avatar" width="48" />
  <Name >{name}</Name>
</Item>
    )

}
FriendListItem.propTypes = {
    id:PropTypes.string,
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
}
