import React from "react";
import "../../styles/globals.css";
import type { AppProps } from "next/app";

declare global {
  interface Window {
    ReactNativeWebView: {
      postMessage(msg: string): void;
    };
  }
}

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    window.ReactNativeWebView = window.ReactNativeWebView;
  }, []);

  return <Component {...pageProps} />;
}
