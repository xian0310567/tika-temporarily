import React from "react";
import styled from "styled-components";

type ContainerState = {
  children: React.ReactNode;
};

const ContainerComponent = ({ children }: ContainerState) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  padding: 15px;
`;

export default ContainerComponent;
