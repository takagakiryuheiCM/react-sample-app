import { Box, CircularProgress, Typography } from "@mui/material";
import { Header } from "./Header";
import { SignInButton } from "./auth/SignInButton";

export function Unauthorized(): React.ReactElement {
  return (
    <>
      <Header />
      <Box
        height="30vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography marginBottom={3}>ログインしてください</Typography>
        <SignInButton />
      </Box>
    </>
  );
}
