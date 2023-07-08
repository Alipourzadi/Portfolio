type Props = {
  isMenuToggeld: boolean;
  menuToggledHandler: () => void;
};

const MenuButton = ({isMenuToggeld, menuToggledHandler}: Props) => {
  const genericHamburgerLine = `h-0.5 w-4 my-1 rounded-full ${
    isMenuToggeld ? "bg-white" : "bg-gray-300"
  } transition ease transform duration-300 `;

  return (
    <button
      className="z-50 rounded-full bg-blue-500 px-3 py-2 text-white drop-shadow-md"
      onClick={menuToggledHandler}
    >
      <div className="group">
        <div
          className={`${genericHamburgerLine} ${
            isMenuToggeld
              ? "translate-y-1.5 rotate-45 opacity-100 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isMenuToggeld ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isMenuToggeld
              ? "-translate-y-1.5 -rotate-45 opacity-100 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </div>
    </button>
  );
};

export default MenuButton;
