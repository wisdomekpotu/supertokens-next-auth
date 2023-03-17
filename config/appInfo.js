// config/appInfo.js
export const websiteDomain = process.env.NEXT_PUBLIC_APP_DOMAIN;

export const appInfo = {
  appName: 'SuperTokens Demo App',
  websiteDomain,
  apiDomain: websiteDomain,
  apiBasePath: '/api/auth',
  websiteBasePath: '/auth',
};
