import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const { admin, setAdmin } = useContext(AuthContext);

  const localAdminInfo = JSON.parse(localStorage.getItem("admin")!);
  if (localAdminInfo) {
    setAdmin(true);
  }

  return admin ? <Outlet /> : <Navigate to="/register" />;
};

export default ProtectedRoutes;
