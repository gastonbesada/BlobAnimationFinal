import styled from "styled-components";

export default function TextSection() {
  return (
    <Wrapper>
      <Subtitle>120 HOURS OF COURSES</Subtitle>
      <Title>Learn the best tools and platforms</Title>
      <Description>
        We focus on industry leading platforms so that you can be prepared for
        your next job. Then we teach all we can about them.
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  max-width: 380px;
  display: grid;
  gap: 20px;
  text-align: center;
  margin: 0 auto;
  padding: 140px 20px;
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
  margin: 0;
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  margin: 0;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  margin: 0;
`;
