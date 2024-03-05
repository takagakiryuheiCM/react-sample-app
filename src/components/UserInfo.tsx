import React from "react";
import { AuthorizedContext } from "./auth/AuthProvider";
import { getUserInfo } from "../utils/auth/getUserInfo";
import { useQuery } from "@tanstack/react-query";
import { Box, CircularProgress } from "@mui/material";

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
    return <div>Failed to get the email</div>;
  } else if (query.isSuccess) {
    // ユーザー情報取得に成功した場合
    console.log(query.data);

    return (
      <div>
        {Object.keys(query.data).map((k: string) => (
          <div key={k}>
            {k}: {query.data[k]}
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <Box
        height="40vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress size={100} />
      </Box>
    );
  }
}
