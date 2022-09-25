import React from 'react';
import PropTypes from 'prop-types';
import {
  TransHistory,
  Cell,
  Thead,
  HeadTable,
  TableBody,
  BodyCell,
  BodyLines,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransHistory>
      <Thead>
        <HeadTable>
          <Cell>Type</Cell>
          <Cell>Amount</Cell>
          <Cell>Currency</Cell>
        </HeadTable>
      </Thead>
      {items.map(item => (
        <TableBody key={item.id}>
          <BodyCell>
            <BodyLines>{item.type}</BodyLines>
            <BodyLines>{item.amount}</BodyLines>
            <BodyLines>{item.currency}</BodyLines>
          </BodyCell>
        </TableBody>
      ))}
    </TransHistory>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
