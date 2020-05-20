import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  background-color: ${props => props.theme.Color1};
`;

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: any) => props.theme.Color1};
  }
`;
