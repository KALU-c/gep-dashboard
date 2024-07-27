import { Outlet, Navigate } from "react-router-dom";

const ProtectedRotes = () => {
  const user = true;

  return user ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRotes