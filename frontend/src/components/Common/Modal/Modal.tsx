import React from "react";
import { Modal as NativeModal } from "native-base";

const Modal = (props: { children: React.ReactNode }) => {
  return <NativeModal>{props.children} </NativeModal>;
};

export default Modal;
