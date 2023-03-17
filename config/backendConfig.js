// config/backendConfig.js
import EmailPasswordNode from 'supertokens-node/recipe/emailpassword';
import SessionNode from 'supertokens-node/recipe/session';
import { appInfo } from './appInfo';

export const backendConfig = () => {
  return {
    framework: 'express',
    supertokens: {
      connectionURI: process.env.NEXT_PUBLIC_CONNECTION_URI,
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      // For demo/test purposes all you need is to use https://try.supertokens.com as connectionURI and there is no need for an apiKey.
    },
    appInfo,
    recipeList: [EmailPasswordNode.init(), SessionNode.init()],
    isInServerlessEnv: true,
  };
};
