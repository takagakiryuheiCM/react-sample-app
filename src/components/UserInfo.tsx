import React from "react";
import { AuthorizedContext } from "./provider/AuthProvider";
import { getUserInfo } from "../auth/utils/getUserInfo";
import { useQuery } from "@tanstack/react-query";

export function UserInfo(): React.ReactElement {
  // Contextから認可情報を取得する
  const { authInfo } = React.useContext(AuthorizedContext);

  // useQueryを使ってユーザ情報を取得するGoogle APIを実行する

  const query = useQuery({
    queryKey: [authInfo],
    queryFn: () =>
      authInfo == null
        ? Promise.reject(Error(`No AuthInfo`))
        : getUserInfo(authInfo),
  });

  if (query.isError) {
    // APIがエラーの場合
    return <div>Failed to get the email</div>;
  } else if (query.isSuccess) {
    // ユーザー情報取得に成功した場合
    return (
      <div>
        {Object.keys(query.data).map((k: string) => (
          <div>
            {k}: {query.data[k]}
          </div>
        ))}
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}
