import React from "react";

import styled from "styled-components";

type ButtonState = {
  width: number;
  height: number;
};

const ButtonLib = ({ width, height }: ButtonState) => {
  const Button = styled.button`
    padding: 7px;
    border-radius: 10px;
    width: ${width}%;
    height: ${height}px;
    background: #eee;
    font-size: 14px;
    color: #4f00b0;
    font-weight: bold;
    display: inline-block;
  `;

  const Container = styled.div`
    text-align: center;
  `;

  return { Button, Container };
};
export default ButtonLib;
