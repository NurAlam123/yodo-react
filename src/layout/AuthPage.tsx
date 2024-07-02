import { Outlet } from "react-router-dom";

const AuthPage = () => {
  return (
    <div className="max-w-md mx-auto mt-20">
      <Outlet />
    </div>
  )
}

export default AuthPage;