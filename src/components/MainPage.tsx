import { Box, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUserInfo } from "../utils/auth/getUserInfo";
import { Header } from "./Header";
import { UserInfo } from "./UserInfo";
import { AuthorizedContext } from "./auth/AuthProvider";
import { SignOutButton } from "./auth/SignOutButton";
import { ResViewr } from "./ResViewr";

export function MainPage() {
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
    return <div>データ取得に失敗しました。</div>;
  } else if (query.isSuccess) {
    return (
      <>
        <Header imageUrl={query.data.picture} />
        <UserInfo userInfo={query.data} />
        <SignOutButton />
        <ResViewr />
      </>
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
