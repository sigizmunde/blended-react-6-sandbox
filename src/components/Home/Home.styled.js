import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  width: 90%;
  border-collapse: collapse;
  border-radius: 16px;
  overflow: hidden;
  th,
  td {
    padding: 15px;
    text-align: center;
  }
  tr:nth-child(2n) {
    background-color: #eee0dd;
  }
`;

export const Thead = styled.thead`
  background-color: #445544;
  color: white;
  text-transform: uppercase;
`;

export const Button = styled.button`
  padding: 5px;
  background-color: darkred;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;

export const Status = styled.span`
  display: inline-block;
  padding: 8px;
  color: ${p => (p.children === 'online' ? 'green' : 'darkred')};
  font-weight: 500;
  cursor: pointer;
`;
