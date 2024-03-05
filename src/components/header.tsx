import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { requestCodeFlow } from "../utils/auth/requestCodeFlow";
import { signOut } from "../utils/auth/signOut";
import { SignOutButton } from "./auth/SignOutButton";
import { SignInButton } from "./auth/SignInButton";

export const Header = ({ isLogined }: { isLogined: boolean }) => {
  return (
    <AppBar position="static">
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
        {isLogined ? <SignOutButton /> : <SignInButton />}
      </Toolbar>
    </AppBar>
  );
};
