import React from "react";

const Button = ({
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded transition-all duration-200 focus:outline-none";

  const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-800 active:bg-gray-900",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400",
    outline: "border-2 border-black text-black hover:bg-black hover:text-white",
    ghost: "text-black hover:bg-gray-100 active:bg-gray-200",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg font-semibold",
  };

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  const classes = `
    ${baseStyles}
    ${variantStyles[variant] || ""}
    ${sizeStyles[size] || ""}
    ${disabledStyles}
    ${className}
  `.trim();

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
