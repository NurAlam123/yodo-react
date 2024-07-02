import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuthContext can only be used inside an AuthProvider");
  return context;
}

export default useAuthContext;