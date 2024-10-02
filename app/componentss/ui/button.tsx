import React from "react";

const shapes = {
  round: "rounded-lg",
} as const;
const variants = {
  fill: {
    blue_gray_700: "bg-blue_gray-700 text-white-a700",
    indigo_A200: "bg-indigo-a200 text-white-a700",
    blue_gray_800: "bg-blue_gray-800 text-gray-100",
    yellow_900: "bg-yellow-900 text-white-a700",
    pink_100: "#a35076",
  },
  outline: {
    blue_gray_400: "border-blue_gray-400 border border-solid text-gray-100",
  },
} as const;
const sizes = {
  xl: "h-[64px] px-8 text-[16px]",
  xs: "h-[34px] px-2 text-[12px]",
  lg: "h-[56px] px-[34px] text-[18px]",
  sm: "h-[42px] px-[34px] text-[12px]",
  md: "h-[54px] px-[34px] text-[14px]",
} as const;
type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "pink_100",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${
        shape && shapes[shape]
      } ${size && sizes[size]} ${
        variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };