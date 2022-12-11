import React from "react";
import styled from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";

export const MenuContainer = styled.div`
  margin-top: 15px;
`;

export const Menu = styled.div`
  padding: 10px 15px;
  margin-bottom: 5px;
  transition: all ease 0.2s;

  &::after {
    float: right;
    content: ">";
  }

  &:active {
    color: #aaa;
  }
`;
