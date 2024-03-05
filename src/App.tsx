import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/Header";
import { Unauthorized } from "./components/Unauthorized";
import { AuthProvider } from "./components/auth/AuthProvider";
import { SignOutButton } from "./components/auth/SignOutButton";
import { UserInfo } from "./components/UserInfo";

function App() {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <AuthProvider unauthorized={<Unauthorized />}>
          <>
            <Header isLogined />
            <UserInfo />
            <SignOutButton />
          </>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
