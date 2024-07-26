import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "@/components/theme-provider"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Users from "./pages/Users"
import Login from "./pages/Login"
import Register from "./pages/Register"

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/users" element={<Users />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
