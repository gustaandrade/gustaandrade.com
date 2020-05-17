import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProfileArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  min-width: 400px;
  padding-top: 20px;

  background-color: ${props => props.theme.Color2};
  border-radius: ${props => props.about};
`;

export const LanguageArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  width: 75%;

  margin-top: 1rem;
`;

export const ProfileSpecialties = styled.span`
  font-family: "Jost";
  font-size: 11pt;
  font-weight: 500;
  color: ${props => props.theme.Color4};
`;

export const LanguageIcon = styled.svg`
  width: 48px;
  height: 48px;

  fill: ${props => props.theme.Color3};
`;
