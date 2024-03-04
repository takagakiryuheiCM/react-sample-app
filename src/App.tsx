import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/Header";
import { Unauthorized } from "./components/Unauthorized";
import { AuthProvider } from "./components/provider/AuthProvider";
import { SignOutButton } from "./components/SignOutButton";
import { Test } from "./components/Test";
import { UserInfo } from "./components/UserInfo";

function App() {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <AuthProvider unauthorized={<Unauthorized />}>
          <>
            <Header />
            <UserInfo />
            <SignOutButton />
          </>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
