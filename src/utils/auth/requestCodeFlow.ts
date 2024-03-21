import { authParams } from "../../constants/authParams";

// ログイン画面に遷移する関数
export function requestCodeFlow(): void {
  const params = {
    client_id: authParams.clientId,
    redirect_uri: authParams.redirectUri,
    scope: authParams.scope,
    response_type: authParams.responseType,
  };
  const query = new URLSearchParams(params).toString();
  window.location.href = `https://react-auth.auth.ap-northeast-1.amazoncognito.com/oauth2/authorize?${query}`;
}