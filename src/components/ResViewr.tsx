import { Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import { LambdaResResult } from "./LambdaResResult";

export function ResViewr() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setIsClicked(true)}>lambdaを呼び出す!</Button>
      {isClicked && <LambdaResResult />}
    </>
  );
}
