import PropTypes from 'prop-types'; 

export const FriendListItem = ({
    id,
    avatar,
    name,
    isOnline,
}) => {
    return (
        <li key={id}>
  <span > {isOnline}</span>
  <img  src={avatar} alt="User avatar" width="48" />
  <p >{name}</p>
</li>
    )

}
FriendListItem.propTypes = {
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
}
