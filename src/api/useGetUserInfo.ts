import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthorizedContext } from "../components/auth/AuthProvider";
import axios from "axios";

export type TUserInfo = {
    id: string;
    name: string;
    email: string;
    family_name: string;
    given_name: string;
    hd: string;
    locale: string;
    picture: string;
    verified_email: boolean
}

export const useGetUserInfo = () => {
    // Contextから認可情報を取得する
    const { authInfo } = useContext(AuthorizedContext);

    // useQueryを使ってユーザ情報を取得するGoogle APIを実行する
    const { data, error, isLoading } = useQuery<{ data: TUserInfo }, Error>({
        queryKey: [authInfo],
        queryFn: () =>
            authInfo == null
                ? Promise.reject(Error(`No AuthInfo`))
                : axios.get("https://www.googleapis.com/oauth2/v1/userinfo", {
                    params: {
                        access_token: authInfo.access_token,
                    },
                })
    });

    return { data, error, isLoading }
}