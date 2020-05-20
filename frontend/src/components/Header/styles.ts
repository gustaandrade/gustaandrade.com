import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 225px;

  @media only screen and (max-width: 1075px) {
    flex-wrap: wrap;
    justify-content: space-evenly;

    height: 500px;
  }

  @media only screen and (max-width: 784px) {
    flex-wrap: wrap;
    justify-content: space-evenly;

    height: 600px;
  }

  @media only screen and (max-width: 614px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: flex-start;

    height: 600px;
  }
`;
