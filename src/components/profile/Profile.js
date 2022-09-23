import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Description,
  Avatar,
  Username,
  Tag,
  Location,
  Stats,
  StatsList,
  Label,
  Quantity,
} from './Profile.styled';

export const user = {
  username: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Description>
        <Avatar src={user.avatar} alt="User avatar" />
        <Username>{user.username}</Username>
        <Tag>@{user.tag}</Tag>
        <Location>{user.location}</Location>
      </Description>

      <Stats>
        <StatsList>
          <Label>Followers</Label>
          <Quantity>{user.stats.followers}</Quantity>
        </StatsList>
        <StatsList>
          <Label>Views</Label>
          <Quantity>{user.stats.views}</Quantity>
        </StatsList>
        <StatsList>
          <Label>Likes</Label>
          <Quantity>{user.stats.likes}</Quantity>
        </StatsList>
      </Stats>
    </Container>
  );
};
export default Profile;

Profile.propTypes = {
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
