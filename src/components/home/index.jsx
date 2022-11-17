import React from "react";
import { Container, Main, Section } from "./style";
import Hero from "../hero";
import Content from "../content";

const HomeComponent = () => {
  return (
    <Main>
      <Container>
        <Section>
          <Hero />
          <Content />
        </Section>
      </Container>
    </Main>
  );
};

export default HomeComponent;
