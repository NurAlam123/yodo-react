import { FaArrowRight } from "react-icons/fa";
import Button from "../ui/Button";
import { Link, useLocation } from "react-router-dom";
import { links } from "../../constants";
import useAuthContext from "../../hooks/useAuthContext";
import BrandName from "../ui/BrandName";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  const location = useLocation();

  const { user } = useAuthContext();

  return (
    <nav className="p-2 flex justify-between items-center mb-10">
      <BrandName noLink={(location.pathname === links.home)} />
      <div>
        {/* <div className="text-2xl">
          <FaSun />
          <FaMoon />
        </div> */}
        {
          user ? <UserDropdown /> :
            location.pathname !== links.login ?
              location.pathname !== links.register ? (
                <Link to={links.login}>
                  <Button variant="primary" label="Login" Icon={FaArrowRight} />
                </Link>
              ) : null : null
        }
      </div>
    </nav>
  )
}

export default Navbar