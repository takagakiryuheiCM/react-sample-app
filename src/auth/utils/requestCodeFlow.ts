import { authParams } from "../constants/authParams";

// ログイン画面に遷移する関数
export function requestCodeFlow(): void {
    const params = {
      client_id: authParams.clientId,
      redirect_uri: authParams.redirectUri,
      scope: authParams.scope,
      response_type: authParams.responseType,
      approval_prompt: authParams.approvalPrompt,
      access_type: authParams.accessType,
    };
    const query = new URLSearchParams(params).toString();
    window.location.href = `https://accounts.google.com/o/oauth2/auth?${query}`;
  }