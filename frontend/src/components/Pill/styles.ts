import styled from "styled-components";

export const Container = styled.div`
  background-color: ${props => props.theme.Color2};
  border-radius: 20px;

  padding: 15px;
  margin: 10px 5px;

  width: 30%;

  @media only screen and (max-width: 1300px) {
    width: 44%;
  }

  @media only screen and (max-width: 710px) {
    width: 100%;
  }
`;

export const TitleArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  width: 100%;
`;

export const PillImage = styled.svg`
  width: 30px;
  height: 30px;

  margin: 0 10px;

  fill: ${props => props.theme.Color3};
`;

export const PillTitle = styled.a`
  font-family: "Jost";
  font-size: 14pt;
  font-weight: 700;
  color: ${props => props.theme.Color4};

  text-decoration: none;
`;

export const PillDescription = styled.div`
  font-family: "Open Sans";
  font-size: 12pt;
  font-weight: 500;
  color: ${props => props.theme.Color4};
`;
