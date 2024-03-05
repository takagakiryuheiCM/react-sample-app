import React from "react";
import { TUserInfo } from "../utils/auth/getUserInfo";

type TProps = {
  userInfo: TUserInfo;
};
export function UserInfo({ userInfo }: TProps): React.ReactElement {
  return <p>welcome {userInfo.name ?? "ああ"}</p>;
}
