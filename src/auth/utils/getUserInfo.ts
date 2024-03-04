import axios from "axios";
import { TAuthInfo } from "./setAuthInfo";

export async function getUserInfo(
    authInfo: TAuthInfo
  ): Promise<Record<string, string>> {
    const res = await axios.get("https://www.googleapis.com/oauth2/v1/userinfo", {
      params: {
        access_token: authInfo.access_token,
      },
    });
    return res.data;
  }