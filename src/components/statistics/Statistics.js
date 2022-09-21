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

export const statisticData = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      <Title>Upload stats</Title>
      <StatsList>
        {stats.map(stat => (
          <Items key={statisticData.id}>
            <Label>{stat.label}</Label>
            <Parcentage>{stat.percentage}%</Parcentage>
          </Items>
        ))}
      </StatsList>
    </Container>
  );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
