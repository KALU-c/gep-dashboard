import { ThemeProvider } from "@/components/theme-provider"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import Users from "./pages/Users"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
