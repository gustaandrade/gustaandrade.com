import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 2rem;
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
