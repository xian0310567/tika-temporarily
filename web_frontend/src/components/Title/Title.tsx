import React from "react";

import styled from "styled-components";

const Title = (props: {
  children: React.ReactNode;
  fontSize: number;
  fontWeight: "bold" | "normal" | "lighter";
}) => {
  const Text = styled.span`
    font-size: ${props.fontSize}px;
    font-weight: ${props.fontWeight};
    color: #333;
  `;

  return (
    <Container>
      <Text>{props.children}</Text>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  display: block;
  margin-bottom: 10px;
`;

export default Title;
