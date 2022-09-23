import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  list-style: none;
  text-align: center;
  margin-left: 630px;
`;

export const Item = styled.li`
  display: flex;

  align-items: center;
  width: 250px;
  height: 100px;
  margin-bottom: 10px;
  border: 1px solid black;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 15px;

  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avater = styled.img`
  margin-left: 15px;
`;

export const Name = styled.p`
  margin-left: 15px;
  font-family: sans-serif;
  font-weight: 500;
  font-size: 25px;
`;
