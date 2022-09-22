import styled from '@emotion/styled';

export const TransHistory = styled.table`
  border-collapse: collapse;
  border: 1px solid grey;
  width: 500px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const Thead = styled.thead`
  background-color: lightblue;
`;

export const HeadTable = styled.tr`
  color: white;
`;

export const Cell = styled.th`
  border: 2px solid grey;
  height: 30px;
`;

export const TableBody = styled.tbody`
  border: 1px solid grey;
  :nth-of-type(2n) {
    background-color: lightgray;
  }
`;

export const BodyCell = styled.tr`
  border: 1px solid grey;
`;

export const BodyLines = styled.td`
  border: 1px solid grey;
  text-align: center;
  height: 30px;
`;
