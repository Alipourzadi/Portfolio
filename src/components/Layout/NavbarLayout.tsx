import React from "react";

type Props = {
  isMenuToggled: boolean;
  isScroll: boolean;
  children: React.ReactNode;
};

const NavbarLayout = ({isMenuToggled, isScroll, children}: Props) => {
  const navbarBackground = "bg-gray-500 drop-shadow";
  const flexBetween = "flex items-center justify-between w-full";
  return (
    <div
      className={`${
        !isMenuToggled && isScroll ? navbarBackground : "bg-none"
      } ${flexBetween} fixed top-0 z-50 w-full py-4 px-8`}
    >
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full `}>{children}</div>
      </div>
    </div>
  );
};

export default NavbarLayout;
