import { useEffect } from "react";
import RegisterForm from "../../components/Register/RegisterForm";
import useAuthContext from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { links } from "../../constants";

const Register = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    navigate(links.home);
  });
  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default Register;
