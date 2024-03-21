import axios from "axios";
import { authParams } from "../../constants/authParams";
import { TAuthInfo } from "./setAuthInfo";

export async function getAuthToken(code: string): Promise<TAuthInfo> {
  const params = {
    code,
    client_id: authParams.clientId,
    client_secret: authParams.clientSecret,
    redirect_uri: authParams.redirectUri,
    grant_type: authParams.grantType,
  };

  const res = await axios.post(
    `https://react-auth.auth.ap-northeast-1.amazoncognito.com/oauth2/token`,
    null,
    { params }
  );
  return res.data as Promise<TAuthInfo>;
}