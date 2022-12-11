import React from "react";

import ButtonLib from "./ButtonLib";

type ButtonState = {
  children: React.ReactNode;
  width?: number;
  height?: number;
};

const ButtonComponent = ({
  children,
  width = 100,
  height = 45,
}: ButtonState) => {
  const { Button, Container } = ButtonLib({ width, height });

  return (
    <Container>
      <Button>{children}</Button>
    </Container>
  );
};

export default ButtonComponent;
