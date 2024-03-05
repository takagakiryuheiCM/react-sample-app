import React from "react";
import { AuthorizedContext } from "./AuthProvider";
import { signOut } from "../../utils/auth/signOut";
import { Button } from "@mui/material";

export function SignOutButton(): React.ReactElement {
  const { authInfo } = React.useContext(AuthorizedContext);
  return (
    <Button
      variant="text"
      color="inherit"
      sx={{ fontSize: "15px" }}
      onClick={() => {
        signOut(authInfo);
      }}
    >
      ログアウト
    </Button>
  );
}
