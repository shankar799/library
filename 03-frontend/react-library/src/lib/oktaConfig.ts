export const oktaConfig = {
  clientId: "0oae1e7qvwxPcVNLf5d7",
  issuer: "https://dev-76349874.okta.com/oauth2/default",
  redirectUri: "http://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
