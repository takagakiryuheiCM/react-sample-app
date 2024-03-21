
import { deleteAuthInfo } from "./deleteAuthInfo";

export async function signOut(): Promise<void> {

  deleteAuthInfo();
  window.location.href = "/";

  return;
}