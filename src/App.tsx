import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Unauthorized } from "./components/auth/Unauthorized";
import { AuthProvider } from "./components/auth/AuthProvider";
import { MainPageContainer } from "./page/mainPage/MainPageContainer";

function App() {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <AuthProvider unauthorized={<Unauthorized />}>
          <MainPageContainer />
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
