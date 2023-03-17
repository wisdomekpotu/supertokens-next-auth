// pages/_app.js
import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import SuperTokensReact, { SuperTokensWrapper } from 'supertokens-auth-react';
import { frontendConfig } from '../config/frontendConfig';
if (typeof window !== 'undefined') {
  // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
  SuperTokensReact.init(frontendConfig());
}
function MyApp({ Component, pageProps }) {
  return (
    <SuperTokensWrapper>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </SuperTokensWrapper>
  );
}
export default MyApp;
