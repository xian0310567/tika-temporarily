import React from "react";

import Container from "@components/Container";
import Form from "@components/Form";
import Title from "@components/Title";
import Button from "@components/Button";
import MenuList from "@components/MenuList";

import { MenuListState } from "@components/MenuList/MenuList.interface";

const menu: MenuListState = [
  { key: 1, label: "고객센터" },
  { key: 2, label: "앱 정보" },
];

const login = () => {
  return (
    <Container>
      <Form>
        <Title fontSize={16} fontWeight="normal">
          로그인하고 변화하는 나를 만나보세요
        </Title>
        <Button width={90}>회원가입 / 로그인 하기</Button>
      </Form>
      <MenuList list={menu} />
    </Container>
  );
};

export default login;
