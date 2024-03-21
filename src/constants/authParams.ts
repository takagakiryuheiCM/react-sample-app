export const authParams = {
    clientId: process.env.REACT_APP_CLIENT_ID as string,
    clientSecret: process.env.REACT_APP_CLIENT_SEACRET as string,
    scope: "openid profile email",
    responseType: "code",
    approvalPrompt: "force",
    accessType: "offline",
    redirectUri: process.env.REACT_APP_REDIRECT_URL as string,
    grantType: "authorization_code",
  } as const;