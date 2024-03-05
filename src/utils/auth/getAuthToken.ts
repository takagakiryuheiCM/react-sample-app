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
      access_type: authParams.accessType,
    };
    const res = await axios.post(
      `https://www.googleapis.com/oauth2/v4/token`,
      params
    );
    return res.data as Promise<TAuthInfo>;
  }