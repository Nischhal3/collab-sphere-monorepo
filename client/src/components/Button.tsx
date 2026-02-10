import React from "react";

type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color?: string;
  cursor?: string;
  size?: ButtonSize;
  textColor?: string;
  borderColor?: string;
}

const sizeClasses: Record<ButtonSize, string> = {
  small: "px-4 py-0.5 text-sm",
  medium: "px-4 py-0.5 text-base",
  large: "px-4 py-0.5 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className = "",
  size = "medium",
  disabled = false,
  color = "bg-white",
  textColor = "text-black",
  cursor = "cursor-pointer",
  borderColor = "border-black",
  ...props
}) => {
  const sizeClass = sizeClasses[size];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${color} ${cursor} ${textColor} border ${borderColor} rounded ${sizeClass} ${className} ${
        disabled ? "opacity-75 cursor-not-allowed" : ""
      }`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
