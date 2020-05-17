import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 150px;
  height: 75px;

  background-color: ${props => props.theme.Color2};
  border-radius: ${props => props.className};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: 0;

  margin: 0 2px 10px;

  font-size: 24pt;
`;
