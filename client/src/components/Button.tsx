import React from "react";

type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  cursor?: string;
  bgColor?: string;
  size?: ButtonSize;
  textColor?: string;
  borderColor?: string;
  children?: React.ReactNode;
}

const sizeClasses: Record<ButtonSize, string> = {
  small: "px-4 py-0.5 text-sm",
  medium: "px-4 py-0.5 text-base",
  large: "px-4 py-0.5 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  children,
  className = "",
  size = "medium",
  type = "button",
  disabled = false,
  bgColor = "bg-white",
  textColor = "text-black",
  cursor = "cursor-pointer",
  borderColor = "border-black",
  ...props
}) => {
  const sizeClass = sizeClasses[size];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${bgColor} ${textColor} border ${borderColor} rounded ${sizeClass} ${className} ${
        disabled ? "opacity-75 cursor-not-allowed" : cursor
      }`}
      {...props}
    >
      {children ?? label}
    </button>
  );
};

export default Button;
