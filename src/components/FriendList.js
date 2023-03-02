import PropTypes from 'prop-types'; 

import {FriendListItem} from "./FriendListItem"

export const FriendList = ({friends}) =>  {
return (
    <ul >
{friends.map(friend => (
    
       <FriendListItem
       key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}/>

    
)
)}
</ul>
)
}
FriendList.propTypes = {
    items: PropTypes.array,
        
}