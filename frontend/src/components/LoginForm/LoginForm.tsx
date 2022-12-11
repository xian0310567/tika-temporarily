import React from "react";
import { Input, Button } from "native-base";
import { Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import styled from "./lib/LoginForm.style";

const LoginForm = () => {
  return (
    <View style={styled.container}>
      <Text style={styled.inputTitle}>이메일 주소</Text>
      <Input
        size="md"
        variant={"unstyled"}
        style={styled.input}
        placeholder="id@example.com"
        InputLeftElement={
          <Ionicons
            name="mail"
            size={24}
            style={styled.inputIcon}
            color="black"
          />
        }
      ></Input>
      <Text style={styled.inputTitle}>비밀번호</Text>
      <Input
        size="md"
        variant={"unstyled"}
        style={styled.input}
        type={"password"}
        placeholder="********"
        InputLeftElement={
          <FontAwesome
            name="lock"
            size={24}
            style={styled.inputIcon}
            color="black"
          />
        }
      ></Input>
      <Button background={"black"} borderRadius={"full"} size="lg">
        로그인
      </Button>
    </View>
  );
};

export default LoginForm;
