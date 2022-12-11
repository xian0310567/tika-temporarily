import React from "react";
import "react-native-gesture-handler";
import { NativeBaseProvider } from "native-base";

import TabBar from "@components/Layout/TabBar";

export default function App() {
  return (
    <NativeBaseProvider>
      <TabBar />
    </NativeBaseProvider>
  );
}
