export const authParams = {
  clientId: process.env.REACT_APP_CLIENT_ID as string,
  clientSecret: process.env.REACT_APP_CLIENT_SEACRET as string,
  scope: "aws.cognito.signin.user.admin openid profile email phone",
  responseType: "code",
  redirectUri: process.env.REACT_APP_REDIRECT_URL as string,
  grantType: "authorization_code",
} as const;