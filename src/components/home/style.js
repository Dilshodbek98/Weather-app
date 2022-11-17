import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 97% !important;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 80%;
`;

const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export { Main, Container, Section };
