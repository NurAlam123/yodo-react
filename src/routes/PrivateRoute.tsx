import { Navigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext"
import { links } from "../constants";
import PageLoadingSpinner from "../components/ui/PageLoadingSpinner";

const PrivateRoute = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const { user, pageLoading } = useAuthContext();
  if (pageLoading) return <PageLoadingSpinner />
  if (user) return children;
  return <Navigate to={links.login} />
}

export default PrivateRoute