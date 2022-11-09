import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    // Если пользователь вошел, то показываем конпку "выйти"
    isAuthenticated && (
      <button onClick={() => logout()}>
        Log Out
      </button>
    )

  );
};

export default LoginButton;
