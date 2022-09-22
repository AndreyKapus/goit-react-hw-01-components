import styled from '@emotion/styled';

export const Container = styled.div`
  width: 300px;
  heigth: 500px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
`;

export const Description = styled.div`
  margin-top: 0px;
`;

export const Avatar = styled.img`
  width: 200px;
  heigth: 200px;
  border-radius: 50%;
`;

export const Username = styled.p`
  font-family: sans-serif;
  font-size: 30px;
  margin-bottom: 0px;
`;

export const Tag = styled.p`
  font-family: sans-serif;
  font-size: 20px;
  color: gray;
  margin-bottom: 0px
  margin-top: 20px;
`;

export const Location = styled.p`
  font-family: sans-serif;
  font-size: 20px;
  color: gray;
`;

export const Stats = styled.ul`
  padding-left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-bottom: 0px;
`;

export const StatsList = styled.li`
  padding: 20px;
  border: 1px solid black;
  background-color: Gainsboro;
  width: 60px;
  height: 60px;
  text-align: center;
`;

export const Label = styled.span`
  display: block;
  font-family: sans-serif;
  font-size: 15px;
  color: gray;
`;

export const Quantity = styled.span`
  font-family: sans-serif;
  font-size: 20px;
  color: red;
`;
