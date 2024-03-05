export type TAuthInfo = Readonly<{
    access_token: string;
    refresh_token: string;
    scope: string;
    token_type: string;
    id_token: string;
    expires_in: number;
  }>;
  
  export function setAuthInfo(authInfo: TAuthInfo): void {
    window.localStorage.setItem("auth_info", JSON.stringify(authInfo));
  }