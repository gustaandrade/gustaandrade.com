import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  height: 330px;
`;

export const ProfileArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 500px;
  padding: 10px 0 30px 0;

  background-color: ${props => props.theme.Color2};
  border-radius: ${props => props.about};
`;

export const AvatarArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  width: 90%;
`;

export const DescriptionArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LanguageArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  width: 75%;

  margin-top: 1rem;
`;

export const AvatarImage = styled.img`
  width: 100px;
`;

export const ProfileName = styled.span`
  font-family: "Jost";
  font-size: 18pt;
  font-weight: 700;
  color: ${props => props.theme.Color4};
`;

export const ProfileOccupation = styled.span`
  font-family: "Open Sans";
  font-size: 12pt;
  font-weight: 500;
  color: ${props => props.theme.Color4};
`;

export const ProfileSpecialties = styled.span`
  font-family: "Open Sans";
  font-size: 11pt;
  font-weight: 300;
  color: ${props => props.theme.Color4};
`;

export const LanguageIcon = styled.svg`
  width: 48px;
  height: 48px;

  fill: ${props => props.theme.Color3};
`;
