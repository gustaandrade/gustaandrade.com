import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: -30px;
  right: -30px;

  width: 180px;
  height: 120px;

  padding-right: 10px;

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

  font-size: 24pt;
`;
