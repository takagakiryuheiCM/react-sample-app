import { Button, Typography } from "@mui/material";
import { requestCodeFlow } from "../utils/auth/requestCodeFlow";
import { Header } from "./Header";
import { SignInButton } from "./auth/SignInButton";

export function Unauthorized(): React.ReactElement {
  return (
    <>
      <Header isLogined={false} />
      <Typography>ログインしていません。</Typography>
      <SignInButton />
    </>
  );
}
