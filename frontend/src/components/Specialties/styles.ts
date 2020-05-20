import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 400px;
  padding: 0 0 20px 0;

  background-color: ${props => props.theme.Color2};
  border-radius: ${props => props.about};

  @media only screen and (max-width: 1075px) {
    border-radius: ${props => props.slot};
    margin: 20px 0;
  }

  @media only screen and (max-width: 784px) {
    margin: 20px 0;
    padding: 20px;
  }
`;

export const LanguageArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  width: 75%;

  margin-top: 1rem;
`;

export const IconArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SpecialtiesText = styled.span`
  font-family: "Jost";
  font-size: 12pt;
  font-weight: 500;
  color: ${props => props.theme.Color4};

  @media only screen and (max-width: 614px) {
    font-size: 11pt;
  }
`;

export const LanguageIcon = styled.svg`
  width: 48px;
  height: 48px;

  fill: ${props => props.theme.Color3};
`;

export const LanguageDescription = styled.span`
  font-family: "Open Sans";
  font-size: 8pt;
  font-weight: 500;
  color: ${props => props.theme.Color4};

  padding: 2px 0;
`;
