import React, { InputHTMLAttributes } from "react";

type InputSize = "small" | "medium" | "large";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: InputSize;
  className?: string;
}

const sizeClasses: Record<InputSize, string> = {
  small: "px-2 py-0.5 text-sm",
  medium: "px-3 py-0.5 text-base",
  large: "px-4 py-0.5 text-lg",
};

const Input: React.FC<InputProps> = ({
  inputSize = "medium",
  className = "",
  ...props
}) => {
  const sizeClass = sizeClasses[inputSize];

  return (
    <input
      className={`border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${sizeClass} ${className}`}
      {...props}
    />
  );
};

export default Input;
