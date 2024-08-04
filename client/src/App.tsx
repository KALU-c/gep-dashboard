import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/theme-provider";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Login from "./pages/Login";
// import Register from "./pages/Register";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { SignupForm } from "./pages/SignupForm";

const queryClient = new QueryClient();

function App() {
  const [admin, setAdmin] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AuthContext.Provider value={{ admin ,setAdmin }}>
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignupForm />} />
          </Routes>
        </AuthContext.Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
