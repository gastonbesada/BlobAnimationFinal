import styled from "styled-components";

import Illustration from "../Images/illustration.svg";
import Logo from "../Images/logo.png";
import Avatar from "../Images/profile.jpeg";

export default function Cover() {
  return (
    <Wrapper>
      <Image src={Illustration} alt="illustration" />
      <Title>Advanced React Hooks</Title>
      <Subtitle>20 videos - 3 hours</Subtitle>
      <Circle className="logo" src={Logo} alt="logo" />
      <Circle className="avatar" src={Avatar} alt="avatar" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  border-radius: 10px;
  padding: 20px;

  .logo {
    top: 20px;
    right: 20px;
  }

  .avatar {
    top: 62px;
    right: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  color: #ffffff;
`;

const Subtitle = styled.p`
  font-size: 15px;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
`;

const Circle = styled.img`
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
