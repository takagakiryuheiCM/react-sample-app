import { Typography } from "@mui/material";
import { Header } from "./Header";
import { SignInButton } from "./auth/SignInButton";

export function Unauthorized(): React.ReactElement {
  return (
    <>
      <Header />
      <Typography>ログインしていません。</Typography>
      <SignInButton />
    </>
  );
}
