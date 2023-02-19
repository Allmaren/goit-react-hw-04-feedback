import styled from 'styled-components';

export const BtnVote = styled.button`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 10px 25px;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: #fff;
  color: chocolate;

  transition: transform 250ms linear;
  &:hover {
    transform: scale(1.2);
    background-color: coral;
    color: darkslategray;
  }
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
`;
