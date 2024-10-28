import React, { useEffect } from 'react';
import { useLoginWithRedirect } from '@frontegg/react';

const LoginPage = () => {
  const loginWithRedirect = useLoginWithRedirect();

  useEffect(() => {
    // Automatically redirects to Frontegg login when the page loads
    loginWithRedirect();
  }, [loginWithRedirect]);

  return (
    <div>
      <p>Redirecting to login...</p>
    </div>
  );
};

export default LoginPage;
