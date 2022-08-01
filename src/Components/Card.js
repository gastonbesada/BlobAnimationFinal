import styled from "styled-components";

import Cover from "./Cover";
import Row from "./Row";

export default function Card() {
  return (
    <Wrapper>
      <Cover />
      <RowWrapper>
        <Row
          number="1"
          title="Intro to Advanced React Hooks"
          subtitle="Learn how to build a website with Typescript, Hooks, Contentful and Gatsby Cloud"
        />
        <Row
          number="2"
          title="Adaptive Layout and Styled Components"
          subtitle="Make your design responsive for different devices with styled components and media query"
        />
        <Row
          number="3"
          title="Basic Hooks"
          subtitle="Use hook to trigger an animation"
        />
      </RowWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 240px auto;
  gap: 20px;
  max-width: 600px;
  width: 100%;
  height: 400px;
  padding: 20px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25),
    inset 0 0 0 0.5px rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(40px);
  margin: 0 auto;
`;

const RowWrapper = styled.div`
  display: grid;
  width: 100%;
  height: fit-content;
  gap: 8px;
`;
