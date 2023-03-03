import PropTypes from 'prop-types'; 
import {FriendListItem} from "./FriendListItem";
import {FriendListUl} from './Friend.styled'

export const FriendList = ({friends}) =>  {
return (
    <FriendListUl>
{friends.map(friend => (
    
       <FriendListItem
       key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}/>

)
)}
</FriendListUl>
)
}
FriendList.propTypes = {
    items: PropTypes.array,
        
}