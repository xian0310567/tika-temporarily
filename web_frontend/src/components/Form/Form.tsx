import React from "react";

import styled from "styled-components";

const Form = (props: { children: React.ReactNode }) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  padding: 15px;
  /* background: #f5f5f5; */
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 0 10px #eee;
`;

export default Form;
