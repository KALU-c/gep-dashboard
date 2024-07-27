import { Outlet, Navigate } from "react-router-dom";

const ProtectedRotes = () => {
  const user = null;

  return user ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRotes