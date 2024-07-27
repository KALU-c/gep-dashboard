import { Dashboard } from "@/components/Dashboard"
import Navbar from "@/components/Navbar"
import { fetchUsers } from "@/services/api-client"
import { useQuery } from "@tanstack/react-query"

const Home = () => {
  const { data: userData } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers
  });


  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      <Dashboard users={userData} />
    </div>
  )
}
export default Home