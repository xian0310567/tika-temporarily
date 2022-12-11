import React from "react";
import { View, Text, FlatList } from "react-native";

import styled from "./lib/Todo.style";

type Post = {
  id: number;
  title: string;
  date: string;
  color: string;
};

const posts: Post[] = [
  {
    id: 1,
    title: "밥먹기",
    date: "2022-02-26",
    color: "#ddd",
  },
  {
    id: 2,
    title: "끝내주게 숨쉬기",
    date: "2022-02-27",
    color: "#qqqqqq",
  },
];

const Item = (props: { title: string }) => {
  return (
    <View style={styled.todo}>
      <Text>{props.title}</Text>
    </View>
  );
};

const Todo = () => {
  const renderItem = ({ item }: { item: Post }) => {
    return <Item title={item.title}></Item>;
  };

  return (
    <View style={styled.todoContainer}>
      <FlatList data={posts} renderItem={renderItem} />
    </View>
  );
};

export default Todo;
