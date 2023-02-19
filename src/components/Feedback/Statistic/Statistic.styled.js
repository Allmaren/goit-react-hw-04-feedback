import styled from 'styled-components';

export const List = styled.ul`
  margin: 0 0 15px 0;
`;

export const Item = styled.li`
  list-style: none;
  font-size: 20px;
  font-weight: bold;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
  color: ${({ item }) =>
    (item === 'good' && 'rgb(62 166 56)') ||
    (item === 'neutral' && '#78137f') ||
    (item === 'bad' && '#e51212')};
`;

export const Result = styled.p`
  text-decoration: underline;
  font-size: 20px;
  font-weight: bold;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
