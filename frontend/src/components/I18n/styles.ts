import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  min-width: 150px;
  padding: 20px 10px;

  background-color: ${props => props.theme.Color2};
  border-radius: ${props => props.about};

  @media only screen and (max-width: 1075px) {
    flex-direction: row;

    border-radius: ${props => props.slot};

    min-width: 350px;
    margin: 20px 0;
  }

  @media only screen and (max-width: 784px) {
    border-radius: ${props => props.autoCorrect};
    margin: 0;
    padding: 20px;
  }
`;

export const I18nContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PaletteContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const PaletteText = styled.span`
  font-family: "Jost";
  font-size: 12pt;
  font-weight: 500;
  color: ${props => props.theme.Color4};

  @media only screen and (max-width: 614px) {
    font-size: 11pt;
  }
`;

export const PaletteItem = styled.span`
  font-family: "Jost";
  font-size: 11pt;
  font-weight: 700;
  color: ${props => props.theme.Color3};
`;

export const PaletteSelect = styled.select`
  font-family: "Jost";
  font-size: 11pt;
  font-weight: 700;
  color: ${props => props.theme.Color3};

  width: 50px;
  height: 30px;

  background-color: transparent;

  border: 1px solid ${props => props.theme.Color3};
  border-radius: 15px;
`;

export const PaletteSelectOption = styled.option``;
