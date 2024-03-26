import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button
        onClick={() => loginWithRedirect()}
        style={{
          color: '#E2F0F7',
          backgroundColor: 'transparent',
        }}
      >
        Log In
      </button>
    )
  );
};

export default LoginButton;
