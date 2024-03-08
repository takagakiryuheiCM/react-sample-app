import { Box, Button } from "@mui/material";
import { AuthorizedLambdaResult } from "./AuthorizedLambdaResult";
import { NotAuthorizedLambdaResult } from "./NotLambdaResResult";

type TProps = {
  isAuthoraizedLambdaCalled: boolean;
  isNotAuthoraizedLambdaCalled: boolean;
  onSetIsAuthoraizedLambdaCalled: () => void;
  onSetIsNotAuthoraizedLambdaCalled: () => void;
};

export function LambdaResViewr({
  isAuthoraizedLambdaCalled,
  isNotAuthoraizedLambdaCalled,
  onSetIsAuthoraizedLambdaCalled,
  onSetIsNotAuthoraizedLambdaCalled,
}: TProps) {
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
          onClick={onSetIsAuthoraizedLambdaCalled}
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
          onClick={onSetIsNotAuthoraizedLambdaCalled}
          sx={{ minWidth: 250 }}
        >
          🚨 認可せずlambdaを呼び出す!
        </Button>

        {isNotAuthoraizedLambdaCalled && <NotAuthorizedLambdaResult />}
      </Box>
    </Box>
  );
}
