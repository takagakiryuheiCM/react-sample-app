import { Box, Button } from "@mui/material";
import { useState } from "react";
import { AuthorizedLambdaResult } from "./AuthorizedLambdaResult";
import { NotAuthorizedLambdaResult } from "./NotLambdaResResult";

export function LambdaResViewr() {
  const [isAuthoraizedLambdaCalled, setIsAuthoraizedLambdaCalled] =
    useState<boolean>(false);
  const [isNotAuthoraizedLambdaCalled, setNotIsAuthoraizedLambdaCalled] =
    useState<boolean>(false);
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        marginBottom={3}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        maxWidth={250}
      >
        <Button
          variant="contained"
          onClick={() => setIsAuthoraizedLambdaCalled(true)}
          sx={{ minWidth: 250 }}
        >
          lambdaを呼び出す!
        </Button>
        {isAuthoraizedLambdaCalled && <AuthorizedLambdaResult />}
      </Box>

      <Box
        marginBottom={3}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        maxWidth={250}
      >
        <Button
          variant="contained"
          color="error"
          onClick={() => setNotIsAuthoraizedLambdaCalled(true)}
          sx={{ minWidth: 250 }}
        >
          🚨 認可せずlambdaを呼び出す!
        </Button>

        {isNotAuthoraizedLambdaCalled && <NotAuthorizedLambdaResult />}
      </Box>
    </Box>
  );
}
