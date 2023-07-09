import React from "react";

type Props = {
  isMenuToggled: boolean;
  isScroll: boolean;
  children: React.ReactNode;
};

const NavbarLayout = ({isMenuToggled, isScroll, children}: Props) => {
  const navbarBackground = "backdrop-blur shadow-md  h-[12%] ";
  const flexBetween = "flex items-center justify-between w-full h-[10%] ";
  return (
    <div
      className={`${
        !isMenuToggled && isScroll ? navbarBackground : "bg-none"
      } ${flexBetween} fixed  transition-all duration-300 top-0 z-50 w-full py-4 px-8`}
    >
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full `}>{children}</div>
      </div>
    </div>
  );
};

export default NavbarLayout;
