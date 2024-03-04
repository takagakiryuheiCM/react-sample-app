import { Button, Typography } from "@mui/material";
import { requestCodeFlow } from "../auth/utils/requestCodeFlow";
import { Header } from "./Header";
import { SignInButton } from "./SignInButton";

export function Unauthorized(): React.ReactElement {
  return (
    <>
      <Header isLogined={false} />
      <Typography>ログインしていません。</Typography>
      <SignInButton />
    </>
  );
}
