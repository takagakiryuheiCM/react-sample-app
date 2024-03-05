import React from "react";
import { AuthorizedContext } from "../components/auth/AuthProvider";
import {useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useAuthorizedGetRequest = ({path}: {path: string}) => {
    const { authInfo } = React.useContext(AuthorizedContext);
    const headers = {
        'Authorization': `Bearer ${authInfo?.id_token}`
    }
    const {data, error, isLoading} = useQuery(
    { queryKey: [path], queryFn: () => axios.get(path, {
        headers: headers ?? undefined
          }).then(r =>  r.data).catch((e) => {
             throw new Error(e.error)
          })}
    )

    return {
      data,
      error,
      isLoading
    }
}


