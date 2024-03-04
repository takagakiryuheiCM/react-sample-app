import { TAuthInfo } from "./setAuthInfo";

export function getAuthInfo(): TAuthInfo | null {
    const item = window.localStorage.getItem("auth_info");
    if (item !== null) {
      return JSON.parse(item) as TAuthInfo;
    } else {
      return null;
    }
  }