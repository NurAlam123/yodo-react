import clsx from 'clsx';
import LoadingSpinner from './LoadingSpinner';

type props = {
  variant: "primary" | "loading" | "danger",
  label?: string,
  type?: "button" | "submit" | "reset",
  Icon?: React.ElementType,
  disable?: boolean,
  handler?: () => void
}

const Button = ({ variant, label, Icon, handler, disable = false, type = "button" }: props) => {
  return (
    <button className={clsx(
      ' px-6 py-3 rounded-md font-semibold transition-colors duration-500 flex gap-2 items-center justify-center',
      {
        'bg-sky-500 text-white hover:bg-sky-600': variant === "primary" && !disable
      },
      {
        'bg-neutral-400 text-white cursor-not-allowed': variant !== 'loading' && disable
      },
      {
        "bg-sky-500 text-white cursor-default": variant === 'loading'
      },
      {
        "bg-red-500 hover:bg-red-700 text-white": variant === "danger"
      }
    )}
      type={type}
      disabled={disable}
      onClick={handler}
    >
      {label}
      {variant === 'loading' && <LoadingSpinner />}
      {Icon && <Icon />}
    </button>
  )
}

export default Button