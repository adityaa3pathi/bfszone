import React from "react";

const sizes = {
    textxs: "text-[12px] font-normal not-italic",
    texts: "text-[14px] font-normal not-italic",
    textmd: "text-[16px] font-normal not-italic",
    textlg: "text-[18px] font-normal not-italic",
    textxl: "text-[22px] font-normal not-italic",
    text2xl: "text-[28px] font-normal not-italic md:text-[26px] sm:text-[24px]",
    text3xl: "text-[36px] font-normal not-italic md:text-[34px] sm:text-[32px]",
    text4xl: "text-[46px] font-normal not-italic md:text-[42px] sm:text-[36px]",
    text5xl: "text-[56px] font-normal not-italic md:text-[48px] sm:text-[42px]",
    text6xl: "text-[72px] font-normal not-italic md:text-[48px]",
    text7xl: "text-[108px] font-normal not-italic md:text-[48px]",
  };
  
  export type TextProps = Partial<{
    className: string;
    as: any;
    size: keyof typeof sizes;
  }> &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >;
  
  const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
    children,
    className = "",
    as,
    size = "texts",
    ...restProps
  }) => {
    const Component = as || "p";
  
    return (
      <Component
        className={`text-gray-100 font-opensans ${className} ${sizes[size]}`}
        {...restProps}
      >
        {children}
      </Component>
    );
  };
  
  export { Text };