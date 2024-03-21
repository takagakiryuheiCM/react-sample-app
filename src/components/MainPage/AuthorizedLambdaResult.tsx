import { CircularProgress } from "@mui/material";
import { useCallLambdaFunc } from "../../api/useCallLambdaFunc";

export const AuthorizedLambdaResult = () => {
  const { data, error, isLoading } = useCallLambdaFunc();
  if (error) {
    return <p>{error.message}</p>;
  }
  if (isLoading || !data) {
    return <CircularProgress />;
  }

  return <>{data.body}🎉</>;
};
