import React from "react";

import useVerificateAuthData from "./useVerificateAuthData";

export type VerificateAuth = {
  id: number;
};

const useVerificateAuth = () => {
  const VerificateAuth = () => {
    const AuthContext = React.createContext("");

    const { VerificateAuthData } = useVerificateAuthData();
    VerificateAuthData();

    return { AuthContext };
  };

  return { VerificateAuth };
};

export default useVerificateAuth;
