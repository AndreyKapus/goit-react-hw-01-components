import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Title,
  StatsList,
  Items,
  Label,
  Parcentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Title>Upload stats</Title>}
      <StatsList>
        {stats.map(stat => (
          <Items key={stat.id}>
            <Label>{stat.label}</Label>
            <Parcentage>{stat.percentage}%</Parcentage>
          </Items>
        ))}
      </StatsList>
    </Container>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
