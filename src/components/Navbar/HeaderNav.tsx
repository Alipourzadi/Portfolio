import {useState} from "react";
import NavLinks from "./NavLinks";
import MenuButton from "./MenuButton";
import useMediaQuery from "../../hooks/useMediaQuery";
import NavbarLayout from "../Layout/NavbarLayout";
import NavActions from "./NavActions";
import ThemeIcon from "./ThemeIcon";
import {navbarItems} from "@/lib/NavbarItems";
import HambergetMenu from "./HambergetMenu";

type Props = {
  isScroll: boolean;
};

const HeaderNav = ({isScroll}: Props) => {
  const [menuIsToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");

  return (
    <nav>
      <NavbarLayout isScroll={isScroll} isMenuToggled={menuIsToggled}>
        {isAboveMediumScreen ? (
          <>
            <NavLinks itemsLinks={navbarItems} />
          </>
        ) : (
          <MenuButton
            isMenuToggeld={menuIsToggled}
            menuToggledHandler={() =>
              setIsMenuToggled((prevState) => !prevState)
            }
          />
        )}
        <div className="flex items-center gap-2">
          <ThemeIcon />
          {/* <NavActions /> */}
        </div>
      </NavbarLayout>
      {!isAboveMediumScreen && menuIsToggled && (
        <HambergetMenu
          menuToggledHandler={() => setIsMenuToggled((pervState) => !pervState)}
        />
      )}
    </nav>
  );
};

export default HeaderNav;
