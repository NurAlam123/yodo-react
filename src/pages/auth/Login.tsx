import { useEffect } from "react";
import LoginForm from "../../components/Login/LoginForm";
import useAuthContext from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { links } from "../../constants";

const Login = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    navigate(links.home);
  });

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
