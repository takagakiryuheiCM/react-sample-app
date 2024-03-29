import React from "react";
import { Button } from "@mui/material";
import { requestCodeFlow } from "../../utils/auth/requestCodeFlow";

export function SignInButton(): React.ReactElement {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      onClick={() => requestCodeFlow()}
    >
      ログイン
    </Button>
  );
}
