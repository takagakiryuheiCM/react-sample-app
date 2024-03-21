import { useAuthorizedGetRequest } from "./useAuthorizedGetRequest"

export const useCallLambdaFunc = () => {
    const { data, error, isLoading } = useAuthorizedGetRequest({ path: "react-sample-app" })

    return {
        data,
        error,
        isLoading
    }
}