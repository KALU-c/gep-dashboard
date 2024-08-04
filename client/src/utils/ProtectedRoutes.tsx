import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const { admin } = useContext(AuthContext)

  return admin ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes