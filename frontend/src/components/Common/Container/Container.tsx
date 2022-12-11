import React from "react";
import { View, StyleSheet } from "react-native";

function Container(props: { children: React.ReactNode }) {
  return <View style={styled.container}>{props.children}</View>;
}

const styled = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});

export default Container;
