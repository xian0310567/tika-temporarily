import React from "react";
import styled from "styled-components";

const Logo = ({ style }: { style?: Object }) => {
  return (
    <div style={style}>
      <Container>
        <Text>TIKA</Text>
        <Dot />
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

const Text = styled.h1`
  font-size: 50px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #e97777;
  position: absolute;
  top: 0;
  left: 105px;
`;

export default Logo;
