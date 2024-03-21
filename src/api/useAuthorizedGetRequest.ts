import React from "react";
import { AuthorizedContext } from "../components/auth/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useAuthorizedGetRequest = <TResponse>({ path }: { path: string }) => {
  const { authInfo } = React.useContext(AuthorizedContext);
  const headers = {
    Authorization: `${authInfo?.id_token}`,
  }
  const { data, error, isLoading } = useQuery<TResponse, Error>(
    {
      queryKey: [path], queryFn: () => axios.get(`${process.env.REACT_APP_HOST_URL}/${path}`, {
        headers: headers ?? undefined
      }).then(r => r.data).catch((e) => {
        throw new Error(e.error)
      })
    }
  )

  return {
    data,
    error,
    isLoading
  }
}


