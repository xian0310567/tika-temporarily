import React from "react";
import { WebView } from "react-native-webview";
import { SafeAreaView, Alert } from "react-native";

function Second() {
  const runFirst = `
      window.isNativeApp = true;
      true;
    `;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{
          uri: "http://localhost:3000/login",
        }}
        injectedJavaScript={runFirst}
        onMessage={(event) => {
          const {
            nativeEvent: { data },
          } = event;
          Alert.alert(data);
        }}
      />
    </SafeAreaView>
  );
}

export default Second;
