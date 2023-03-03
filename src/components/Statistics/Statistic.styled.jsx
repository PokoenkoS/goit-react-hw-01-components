import styled from '@emotion/styled'

export const StatisticsSection = styled.section`
margin-top: 30px;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 0px 0px 10px black;
`;

export const StatList = styled.ul`
display: flex;
`;

export const Item = styled.li`
width: 110px;
height: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Label = styled.span`
text-align: center;
font-size: 20px;
font-weight:400;
color: black; 
`;

export const Percentage = styled.span`
display:block;
font-size: 25px;
font-weight:800;
color: black;
`;