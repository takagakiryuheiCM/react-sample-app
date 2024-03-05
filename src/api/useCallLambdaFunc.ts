import { useAuthorizedGetRequest } from "./useAuthorizedGetRequest"

export const useCallLambdaFunc = () => {
    const {data, error, isLoading} = useAuthorizedGetRequest({path: "https://ukx2uczb3i.execute-api.ap-northeast-1.amazonaws.com/react-sample-app"})

    return {
        data ,error, isLoading
    }
}