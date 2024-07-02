import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuthContext from "../../hooks/useAuthContext";
import PasswordInputField from "./PasswordInputField";
import Button from "../ui/Button";
import { links } from "../../constants";
import { registrationSchema } from "../../schema/registrationSchema";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [validationSuccess, setValidationSuccess] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register } = useAuthContext();

  const registration = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const form: HTMLFormElement = event.currentTarget;
    const name: string = form.fullName.value;
    const email: string = form.email.value;
    const password: string = form.password.value;

    const rawData = {
      name,
      email,
      password
    }

    const validation = await registrationSchema.safeParseAsync(rawData);
    if (!validation.success) {
      toast(validation.error.message);
      return;
    }

    const res = await register(validation.data);
    if (!res.success) {
      toast(res.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    form.reset();
    navigate(links.home);
  }

  // Change button style and stop from submitting invalid form
  const registerButtonHandler = (value: boolean) => {
    setValidationSuccess(value);
  }


  return (
    <>
      <form
        onSubmit={registration}
        className="flex flex-col gap-2 border p-10 rounded-md shadow-sm my-4"
      >
        <h1 className="text-3xl text-sky-500 font-semibold mb-4">Register</h1>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-neutral-400 text-sm">Full Name</label>
          <input
            type="text"
            placeholder="Flint Lockwood"
            name="fullName"
            className="border p-3 rounded-md"
            onChange={(event) => {
              if (event.currentTarget.value.length < 3) setNameError(false);
              else setNameError(true)
            }}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-neutral-400 text-sm">Email</label>
          <input type="email" placeholder="example@domain.com" name="email" className="border p-3 rounded-md" required />
        </div>
        <div>
          <PasswordInputField registerButtonHandler={registerButtonHandler} />
        </div>
        {
          !loading ? (
            <Button
              type="submit"
              variant="primary"
              label="Register"
              disable={!(validationSuccess && nameError)}
            />
          ) : (
            <Button variant="loading" />
          )
        }
        <p className="text-neutral-500 mt-6">Already have an account? <Link to={links.login} className="link">Login</Link></p>
      </form>
    </>
  )
}

export default RegisterForm