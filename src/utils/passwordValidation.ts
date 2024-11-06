export const password_validation = (password: string) => {
  const defaultValidation = {
    error: true,
    length: false,
    special: false,
    digit: false,
    lowercase: false,
    uppercase: false
  }

  // Check password length
  if (password.length >= 8)
    defaultValidation.length = true;

  // Check for at least one special character
  if (/(?=.*?[#?!@$%^&*-])/.test(password))
    defaultValidation.special = true;

  // Check for at least one digit
  if (/(?=.*?[0-9])/.test(password))
    defaultValidation.digit = true;

  // Check for at least one uppercase character
  if (/(?=.*[A-Z])/.test(password))
    defaultValidation.uppercase = true;

  // Check for at least one lowercase character
  if (/(?=.*[a-z])/.test(password))
    defaultValidation.lowercase = true;

  // Remove error tag if every validation is satisfied
  if (defaultValidation.length && defaultValidation.digit && defaultValidation.lowercase && defaultValidation.uppercase && defaultValidation.special)
    defaultValidation.error = false;

  return defaultValidation;
}