import React from "react";
import { AuthorizedContext } from "./provider/AuthProvider";
import { signOut } from "../auth/utils/signOut";
import { Button } from "@mui/material";

export function SignOutButton(): React.ReactElement {
  const { authInfo } = React.useContext(AuthorizedContext);
  return (
    <Button
      onClick={() => {
        signOut(authInfo);
      }}
    >
      Sign Out
    </Button>
  );
}
