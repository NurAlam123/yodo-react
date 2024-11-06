import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import { Toaster } from "react-hot-toast"
import useAuthContext from "../hooks/useAuthContext"
import PageLoadingSpinner from "../components/ui/PageLoadingSpinner"

const Root = () => {
  const { pageLoading } = useAuthContext();
  return (
    <>
      {
        !pageLoading ? (
          <div className="max-w-7xl mx-auto antialiased font-rubik">
            <Toaster />
            <Navbar />
            <Outlet />
          </div>
        ) : (
          <PageLoadingSpinner brand />
        )
      }
    </>
  )
}

export default Root