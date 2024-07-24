import { Dashboard } from "@/components/Dashboard"
import Navbar from "@/components/Navbar"

const Home = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      <Dashboard />
    </div>
  )
}
export default Home