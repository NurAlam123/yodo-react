import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { links } from "../../constants";
import useAuthContext from "../../hooks/useAuthContext";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { login } = useAuthContext();

  const loginUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const form: HTMLFormElement = event.currentTarget;
    const email: string = form.email.value;
    const password: string = form.password.value;

    const res = await login(email, password);
    if (!res.success) {
      setError(res.message);
      setLoading(false);
      return;
    }
    // Reset error, loading and form
    setError('');
    setLoading(false);
    form.reset();
    // Redirect to home page
    navigate(links.home);
  }

  return (
    <form
      onSubmit={loginUser}
      className="flex flex-col gap-2 border p-10 rounded-md shadow-sm my-4"
    >
      <h1 className="text-3xl text-sky-500 font-semibold mb-4">Login</h1>

      <input type="email" placeholder="example@domain.com" className={`border p-3 rounded-md ${error && 'border-red-500'}`} name="email" required />

      <div className="relative flex items-center">
        <input type={showPassword ? "text" : "password"} placeholder="********" name="password" className={`border p-3 rounded-md w-full ${error && 'border-red-500'}`} required />
        <div className="absolute right-0 me-5">
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {
              !showPassword ? <FaEye /> : <FaEyeSlash />
            }
          </button>
        </div>
      </div>
      {/* Remember me check box */}
      {/* <div className="flex gap-3 my-4 items-center">
        <input type="checkbox" name="remember" className="w-5 h-5" />
        <label htmlFor="remember" className="text-neutral-700">Remember me</label>
      </div> */}
      {
        error && <p className="text-red-500">{error}</p>
      }
      {
        !loading ? (
          <Button
            type="submit"
            variant="primary"
            label="Login" />
        ) : (
          <Button variant="loading" />
        )
      }
      <p className="text-neutral-500 mt-6">Don't have an account? <Link to={links.register} className="link">Register</Link></p>
    </form>
  )
}

export default LoginForm