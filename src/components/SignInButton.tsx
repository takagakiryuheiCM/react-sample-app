import React from "react";
import { Button } from "@mui/material";
import { requestCodeFlow } from "../auth/utils/requestCodeFlow";

export function SignInButton(): React.ReactElement {
  return <Button onClick={() => requestCodeFlow()}>ログイン</Button>;
}
