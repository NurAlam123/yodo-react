import { useState } from "react"
import { FaRegUser, FaSignOutAlt } from "react-icons/fa"
import useAuthContext from "../../hooks/useAuthContext";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { links } from "../../constants";

const UserDropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  const { user, logout } = useAuthContext();

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdown(!dropdown)
  }

  const logoutHandler = async () => {
    logout();
    navigate(links.login);
  }

  return (
    <div className="relative">
      <div
        className="border-2 w-fit p-3 rounded-full cursor-pointer hover:bg-sky-600 hover:border-sky-700 group transition-colors duration-500 ease-linear"
        onClick={toggleDropdown}
      >
        <FaRegUser className="size-8 text-sky-600 group-hover:text-white transition-colors duration-500 ease-linear" />
      </div>
      {/* Dropdown */}
      {
        dropdown && (
          <div className="relative">
            <div className="flex flex-col border p-4 gap-3 rounded-md shadow-sm mt-5 absolute min-w-64 top-1/2 left-1/2 -translate-x-1/2">
              <p>{user?.displayName}</p>
              <p className="text-sm">{user?.email}</p>
              <Button variant="danger" label="Logout" Icon={FaSignOutAlt} handler={logoutHandler} />
            </div>
          </div>
        )
      }
    </div>
  )
}

export default UserDropdown