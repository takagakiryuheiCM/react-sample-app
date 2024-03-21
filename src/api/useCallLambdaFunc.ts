import { useAuthorizedGetRequest } from "./useAuthorizedGetRequest"

type TResponse = {
    statusCode: number;
    body: string;
}
export const useCallLambdaFunc = () => {
    const { data, error, isLoading } = useAuthorizedGetRequest<TResponse>({ path: "react-sample-app" })

    return {
        data,
        error,
        isLoading
    }
}