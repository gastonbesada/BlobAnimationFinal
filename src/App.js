import styled from "styled-components";

import Background from "./Components/Background";
import Wave from "./Components/Wave";
import TextSection from "./Components/TextSection";
import Card from "./Components/Card";
import BlobAnimation from "./Components/BlobAnimation";

export default function App() {
  return (
    <Wrapper>
      <Background />
      <WaveWrapper>
        <Wave />
        <BlobAnimation />
      </WaveWrapper>
      <TextSection />
      <CardWrapper>
        <Card />
      </CardWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const WaveWrapper = styled.div`
  position: relative;
  top: 200px;
`;

const CardWrapper = styled.div`
  padding: 0 20px;
`;
