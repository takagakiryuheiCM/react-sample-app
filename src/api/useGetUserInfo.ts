import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthorizedContext } from "../components/auth/AuthProvider";
import axios from "axios";
import { BooleanLiteral } from "typescript";

export type TUserInfo = {
    username: string;
    email: string;
    email_verified: boolean;
    sub: string;
}

export const useGetUserInfo = () => {
    // Contextから認可情報を取得する
    const { authInfo } = useContext(AuthorizedContext);

    const { data, error, isLoading } = useQuery<{ data: TUserInfo }, Error>({
        queryKey: [],
        queryFn: () =>
            authInfo == null
                ? Promise.reject(Error(`No AuthInfo`))
                : axios.get("https://react-auth.auth.ap-northeast-1.amazoncognito.com/oauth2/userInfo", {
                    headers: {
                        Authorization: `Bearer ${authInfo.access_token}`,
                    }
                })
    });

    return { data, error, isLoading }
}