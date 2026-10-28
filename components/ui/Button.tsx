import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-xl transition-all focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-edoo-primary text-white hover:bg-edoo-dark shadow-sm",
    secondary: "bg-amber-600 text-white hover:bg-amber-700 shadow-sm",
    danger: "bg-red-600 text-white hover:bg-red-700",
    outline: "border-2 border-slate-900 bg-white text-slate-900 hover:bg-slate-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-xs uppercase tracking-wider",
    lg: "px-8 py-4 text-sm uppercase tracking-wider",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-spinner animate-spin"></i> Memproses...
        </span>
      ) : (
        children
      )}
    </button>
  );
}