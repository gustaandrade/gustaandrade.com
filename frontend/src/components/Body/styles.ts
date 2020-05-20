import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin: 0 10px 25px 10px;

  @media only screen and (max-width: 614px) {
    margin: 0 20px 25px 20px;
  }
`;

export const PillsArea = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: stretch;
`;

export const RecentProjects = styled.p`
  font-family: "Jost";
  font-size: 14pt;
  font-weight: 700;
  color: ${props => props.theme.Color4};
`;
