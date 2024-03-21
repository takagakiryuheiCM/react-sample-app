import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { SignOutButton } from "../auth/SignOutButton";

import { UserIcon } from "./UserIcon";
import { HeaderSignInButton } from "../auth/HeaderSignInButton";

type TProps = {
  imageUrl?: string;
};
export const Header = ({ imageUrl }: TProps) => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#40BA8D" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Home
        </Typography>
        {!!imageUrl ? (
          <>
            <UserIcon imageUrl={imageUrl} />
            <SignOutButton />
          </>
        ) : (
          <HeaderSignInButton />
        )}
      </Toolbar>
    </AppBar>
  );
};
