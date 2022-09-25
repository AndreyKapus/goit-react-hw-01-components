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

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsList>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsList>
        <StatsList>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsList>
        <StatsList>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
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
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
