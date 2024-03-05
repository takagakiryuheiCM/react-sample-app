import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Unauthorized } from "./components/Unauthorized";
import { AuthProvider } from "./components/auth/AuthProvider";
import { MainPage } from "./components/MainPage";

function App() {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <AuthProvider unauthorized={<Unauthorized />}>
          <MainPage />
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
