import { useQuery } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"

export const useNotAuthorizedCallLambdaFunc = () => {
  const { data, error, isLoading } = useQuery<undefined, AxiosError>(
    {
      queryKey: ["key"], queryFn: () => axios.get(`${process.env.REACT_APP_HOST_URL}/react-sample-app`, {
      }).then((r) => {
        console.log(r);
        return r.data
      }).catch((e) => {
        throw new Error(e)
      })
    }
  )
  return {
    data,
    error,
    isLoading
  }
}
