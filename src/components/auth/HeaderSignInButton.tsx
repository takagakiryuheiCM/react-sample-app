import React from "react";
import { Button } from "@mui/material";
import { requestCodeFlow } from "../../utils/auth/requestCodeFlow";

export function HeaderSignInButton(): React.ReactElement {
  return (
    <Button
      variant="text"
      color="inherit"
      onClick={() => requestCodeFlow()}
      sx={{ fontSize: "15px" }}
    >
      ログイン
    </Button>
  );
}
