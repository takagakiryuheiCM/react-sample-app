import { Box, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Header } from "./Header";
import { UserInfo } from "./UserInfo";
import { SignOutButton } from "./auth/SignOutButton";
import { LambdaResViewr } from "./LambdaResViewr";
import { useGetUserInfo } from "../api/useGetUserInfo";

export function MainPage() {
  const { data, error, isLoading } = useGetUserInfo();

  if (error) return <div>ユーザーデータ取得に失敗しました。</div>;
  if (isLoading || !data)
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

  return (
    <>
      <Header imageUrl={data.data.picture} />
      <UserInfo userInfo={data.data} />
      <LambdaResViewr />
    </>
  );
}
