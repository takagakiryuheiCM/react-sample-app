import { Box, CircularProgress } from "@mui/material";
import { Header } from "../../components/common/Header";
import { UserInfo } from "../../components/MainPage/UserInfo";
import { LambdaResViewr } from "../../components/MainPage/LambdaResViewr";
import { useGetUserInfo } from "../../api/useGetUserInfo";
import { SignInButton } from "../../components/auth/SignInButton";
import anonimousLogo from "../../images/anonimaus_icon.png";
import { useState } from "react";

export function MainPageContainer() {
  const { data, error, isLoading } = useGetUserInfo();
  const [isAuthoraizedLambdaCalled, setIsAuthoraizedLambdaCalled] =
    useState<boolean>(false);
  const [isNotAuthoraizedLambdaCalled, setNotIsAuthoraizedLambdaCalled] =
    useState<boolean>(false);

  if (error)
    return (
      <>
        <div>ユーザーデータ取得に失敗しました。</div>
        <SignInButton />
      </>
    );
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
      <Header imageUrl={anonimousLogo} />
      <UserInfo userInfo={data.data} />
      <LambdaResViewr
        isAuthoraizedLambdaCalled={isAuthoraizedLambdaCalled}
        isNotAuthoraizedLambdaCalled={isNotAuthoraizedLambdaCalled}
        onSetIsAuthoraizedLambdaCalled={() =>
          setIsAuthoraizedLambdaCalled(true)
        }
        onSetIsNotAuthoraizedLambdaCalled={() =>
          setNotIsAuthoraizedLambdaCalled(true)
        }
      />
    </>
  );
}
