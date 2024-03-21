import React from "react";
import { TUserInfo } from "../../api/useGetUserInfo";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { UserIcon } from "../common/UserIcon";
import { SignOutButton } from "../auth/SignOutButton";

type TProps = {
  userInfo: TUserInfo;
};
export function UserInfo({ userInfo }: TProps): React.ReactElement {
  return (
    <Box
      height="60vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h4" marginBottom={5}>
        Wellcome {userInfo.name}!!
      </Typography>
      <Card sx={{ minWidth: 345 }}>
        <CardContent>
          <Box display="flex" justifyContent="center">
            <UserIcon imageUrl={userInfo.picture} bigSize />
          </Box>

          <Typography gutterBottom variant="h5" paddingTop={2}>
            {userInfo.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {userInfo.email}
          </Typography>
        </CardContent>
        <CardActions>
          <SignOutButton isBulue />
        </CardActions>
      </Card>
    </Box>
  );
}
