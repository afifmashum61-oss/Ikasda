import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full rounded-xl border border-slate-300 px-4 py-3 text-xs outline-none focus:border-edoo-primary focus:ring-1 focus:ring-edoo-primary transition-all ${
            error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
          } ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-[11px] font-semibold text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;