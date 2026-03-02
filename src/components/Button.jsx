import { cn } from "../lib/utils/utils"
const Button = ({
  children,
  className = "",
  variant = "default",
  size = "md",
  ...props
}) => {
  // Base styles for all buttons
  const baseStyles =
    "cursor-pointer inline-flex items-center justify-center transition-all duration-300 relative overflow-hidden";

  // Style variants mapping to index.css component classes
  const variants = {
    default: "btn-primary",
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-secondary bg-transparent",
  };

  // Size variants
  const sizes = {
    xs: "px-2 py-1 text-[10px]",
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-10 py-3 text-lg",
    icon: "p-2",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
