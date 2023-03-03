import styled from '@emotion/styled';

export const FriendListUl = styled.ul`

`;

export const Item = styled.li`
display: flex;
align-items: center;
border-radius: 10px;
gap: 20px;
width: 575px;
margin: 0 auto;
padding: 10px;
font-size: 30px;
margin-top: 10px;
box-shadow: 4px 3px 15px rgb(216, 52, 52);

`;

const changeColor = props =>{
    switch (props.isOnline) {
        case false :
    return  '#FF0000';
    case true :
    return  '#00FF00';
    default :
    return '#000'
    }
}

export const Status = styled.span`

    background-color: ${changeColor};
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 100%;




`;

export const Avatar = styled.img`

`;

export const Name = styled.p`

`;