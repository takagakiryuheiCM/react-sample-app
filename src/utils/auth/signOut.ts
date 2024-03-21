import axios from "axios";
import { TAuthInfo } from "./setAuthInfo";
import { deleteAuthInfo } from "./deleteAuthInfo";

export async function signOut(authInfo: TAuthInfo | undefined): Promise<void> {
    try {
      if (authInfo !== undefined) {
        const res = await axios.get(
          `https://accounts.google.com/o/oauth2/revoke`,
          {
            params: {
              token: authInfo.access_token,
            },
          }
        );
        if (res.status !== 200) {
          return Promise.reject(Error(`Failed to sign out`));
        }
      }
    } finally {
      deleteAuthInfo();
      window.location.href = "/";
    }
    return;
  }