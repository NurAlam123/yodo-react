import clsx from "clsx";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { password_validation } from "../../utils/passwordValidation";

type propsType = {
  registerButtonHandler: (value: boolean) => void;
};

const PasswordInputField = ({ registerButtonHandler }: propsType) => {
  const [showPassword, setShowPassword] = useState(false);
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(password_validation(""));
  const [confirmError, setConfirmError] = useState(false);

  // Check for validation
  const passwordValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.currentTarget.value;
    setUserPassword(password);

    if (userConfirmPassword !== password) {
      setConfirmError(true);
      registerButtonHandler(false);
    } else {
      setConfirmError(false);
      registerButtonHandler(true);
    }

    const validation = password_validation(password);
    setPasswordError(validation);
  };

  // Check the confirm password is matched with the password
  const confirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const confirm = event.currentTarget.value;
    setUserConfirmPassword(confirm);
    if (confirm !== userPassword) {
      setConfirmError(true);
      registerButtonHandler(false);
      return;
    }
    setConfirmError(false);
    registerButtonHandler(true);
  };

  return (
    <>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-neutral-400 text-sm">
          Password
        </label>
        <div>
          {/* Password input box */}
          <div className="relative flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              name="password"
              className={clsx(
                "border p-3 rounded-md w-full",
                { "outline-red-500": passwordError.error },
                { "outline-green-500": !passwordError.error }
              )}
              onChange={passwordValidation}
              required
            />
            {/* Show password */}
            <div className="absolute right-0 me-5">
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>
          {/* Password validation box */}
          <div>
            <ul className="text-neutral-500 list-[circle] ms-6 my-4">
              <li
                className={clsx("list-item", {
                  "text-green-500": passwordError.length,
                })}
              >
                Must be 8 characters long.
              </li>
              <li
                className={clsx("list-item", {
                  "text-green-500": passwordError.uppercase,
                })}
              >
                At least one uppercase alphabet.
              </li>
              <li
                className={clsx("list-item", {
                  "text-green-500": passwordError.lowercase,
                })}
              >
                At least one lowercase alphabet.
              </li>
              <li
                className={clsx("list-item", {
                  "text-green-500": passwordError.digit,
                })}
              >
                At least one digit.
              </li>
              <li
                className={clsx("list-item", {
                  "text-green-500": passwordError.special,
                })}
              >
                At least one special characters.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Confirm password */}
      <div className="flex flex-col gap-1 mb-6">
        <label htmlFor="confirm_password" className="text-neutral-400 text-sm">
          Confirm Password
        </label>
        <div>
          <div className="relative flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              name="confirm_password"
              className={clsx(
                "border p-3 rounded-md w-full",
                { "outline-red-500": confirmError },
                { "outline-green-500": !confirmError }
              )}
              onChange={confirmPassword}
              required
            />
            {/* Show password */}
            <div className="absolute right-0 me-5">
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>
        </div>
        <p className={`text-red-500 ${confirmError ? "block" : "hidden"}`}>
          Password doesn't match.
        </p>
      </div>
    </>
  );
};

export default PasswordInputField;
