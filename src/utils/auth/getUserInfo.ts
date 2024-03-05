import axios from "axios";
import { TAuthInfo } from "./setAuthInfo";

export type TUserInfo = {
  id: string;
  name: string;
  email:string;
  family_name: string;
  given_name: string;
  hd: string;
  locale: string;
  picture: string;
  verified_email: boolean
}

export async function getUserInfo(
    authInfo: TAuthInfo
  ): Promise<TUserInfo> {
    const res = await axios.get("https://www.googleapis.com/oauth2/v1/userinfo", {
      params: {
        access_token: authInfo.access_token,
      },
    });
    return res.data;
  }