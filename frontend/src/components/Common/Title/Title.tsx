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
    marginTop: 5,
    position: "relative",
  },
  title: {
    fontWeight: "bold",
    fontSize: 55,
  },
  dot: {
    position: "absolute",
    top: 5,
    left: 120,
    backgroundColor: "#E97777",
    width: 9,
    height: 9,
    borderRadius: 50,
  },
});

export default HeaderTitle;
