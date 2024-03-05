import { CircularProgress } from "@mui/material";
import { useCallLambdaFunc } from "../api/useCallLambdaFunc";

export const LambdaResResult = () => {
  const { data, error, isLoading } = useCallLambdaFunc();

  if (error) {
    console.log(error.message);

    return <p>error</p>;
  }
  if (isLoading || !data) {
    return <CircularProgress />;
  }

  return <>{data}</>;
};
