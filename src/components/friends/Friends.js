import React from 'react';
import PropTypes from 'prop-types';
import { FriendsList, Item, Status, Avater, Name } from './Friends.styled';

export const friends = [
  {
    avatar: 'https://cdn-icons-png.flaticon.com/512/1998/1998592.png',
    name: 'Mango',
    isOnline: true,
    id: 1812,
  },
  {
    avatar: 'https://cdn-icons-png.flaticon.com/512/616/616438.png',
    name: 'Kiwi',
    isOnline: false,
    id: 1137,
  },
  {
    avatar: 'https://cdn-icons-png.flaticon.com/512/1623/1623681.png',
    name: 'Ajax',
    isOnline: true,
    id: 1213,
  },
  {
    avatar: 'https://cdn-icons-png.flaticon.com/512/2977/2977285.png',
    name: 'Jay',
    isOnline: true,
    id: 1714,
  },
  {
    avatar: 'https://cdn-icons-png.flaticon.com/512/1998/1998749.png',
    name: 'Poly',
    isOnline: false,
    id: 1284,
  },
];

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {' '}
      {friends.map(friend => (
        <Item key={friend.id}>
          <Status isOnline={friend.isOnline}>{friend.isOnline}</Status>
          <Avater src={friend.avatar} alt="User avatar" width="48" />
          <Name>{friend.name}</Name>
        </Item>
      ))}
    </FriendsList>
  );
};

FriendList.protoTypes = {
  fiends: PropTypes.array.isRequired,
};
