import { CircularProgress } from "@mui/material";
import { useNotAuthorizedCallLambdaFunc } from "../../api/useNotAuthorizedCallLambdaFunc";

export const NotAuthorizedLambdaResult = () => {
  const { data, error, isLoading } = useNotAuthorizedCallLambdaFunc();

  if (error) {
    return <p>{error.message}</p>;
  }
  if (isLoading || !data) {
    return <CircularProgress />;
  }

  return <>{data}</>;
};
