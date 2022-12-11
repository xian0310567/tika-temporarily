import { Text, StyleSheet, View } from "react-native";

const HeaderTitle = () => {
  return (
    <View style={styled.container}>
      <Text style={styled.title}>TIKA</Text>
      <View style={styled.dot} />
    </View>
  );
};

const styled = StyleSheet.create({
  container: {
    position: "relative",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    marginLeft: 15,
  },
  dot: {
    position: "absolute",
    right: -5,
    backgroundColor: "#E97777",
    width: 6,
    height: 6,
    borderRadius: 50,
  },
});

export default HeaderTitle;
