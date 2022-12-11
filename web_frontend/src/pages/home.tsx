import React from "react";

import Container from "@components/Container";

const Home = () => {
  return (
    <Container>
      <button
        onClick={() => {
          if (window.ReactNativeWebView) {
            window.ReactNativeWebView.postMessage(JSON.stringify("안녕하세요"));
          }
        }}
      >
        aaa
      </button>
    </Container>
  );
};

export default Home;
