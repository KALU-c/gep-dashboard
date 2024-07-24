import { useNavigate } from "react-router-dom"

const useCustomNavigate = () => {
  const navigate = useNavigate();

  const goToDashboardPage = () => navigate("/");
  const goToUsersPage = () => navigate("/users");
  
  return { goToDashboardPage, goToUsersPage } 
}
export default useCustomNavigate