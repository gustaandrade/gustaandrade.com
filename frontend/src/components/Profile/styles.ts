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

  min-width: 500px;
  padding-top: 20px;

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

export const SocialArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  width: 90%;

  margin-top: 10px;
`;

export const SocialColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 0 8px;
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

export const ProfileUsername = styled.span`
  font-family: "Jost";
  font-size: 16pt;
  font-weight: 700;
  color: ${props => props.theme.Color3};
`;

export const ProfileOccupation = styled.span`
  font-family: "Open Sans";
  font-size: 11pt;
  font-weight: 500;
  color: ${props => props.theme.Color4};
`;

export const SocialIcon = styled.svg`
  width: 30px;
  height: 30px;

  margin: 0 5px;

  fill: ${props => props.theme.Color3};
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;

  font-family: "Jost";
  font-size: 12pt;
  font-weight: 700;
  color: ${props => props.theme.Color4};

  text-decoration: none;

  margin: 2.5px 0;
`;
