import {BookOpenIcon, HomeIcon} from "@heroicons/react/24/outline";
import Links from "./Links";

type Props = {
  menuToggledHandler: () => void;
};

export const navbarItems = [
  {
    name: "Home",
    path: "/",
    icon: <HomeIcon className="h-6 w-6 text-primary" />,
  },
  {
    name: "About",
    path: "/about",
    icon: <BookOpenIcon className="h-6 w-6 text-primary" />,
  },
];

export default function HambergetMenu({menuToggledHandler}: Props) {
  return (
    <div className="relative">
      <div
        className="fixed z-40 min-h-screen w-screen "
        onClick={menuToggledHandler}
      ></div>
      <div
        className={`fixed left-0 z-40 flex animate-accordion-up transition-all  min-h-screen w-[180px] bg-white dark:bg-secondary  text-primary drop-shadow-md backdrop:bg-black/60`}
      >
        <div className="flex-1 flex-col my-[50%] overflow-auto px-2 pt-10">
          <div className=" flex-1 flex-col space-y-4  px-2 py-3">
            <Links itemsLinks={navbarItems} />
          </div>
        </div>
      </div>
    </div>
  );
}
