import {
  navbarItems,
  toggeldMenuLink,
  toggeldMenuSessions,
} from "@/lib/NavbarItems";
import Links from "./Links";

type Props = {
  menuToggledHandler: () => void;
};

export default function HambergetMenu({menuToggledHandler}: Props) {
  return (
    <div className="relative">
      <div
        className="fixed z-40 min-h-screen w-screen  bg-gray-500 opacity-25"
        onClick={menuToggledHandler}
      ></div>
      <div
        className={`fixed right-0 z-40 flex h-screen w-[180px]  flex-col bg-gray-200  text-gray-600 drop-shadow-md backdrop:bg-black/60`}
      >
        <div className="flex-1 items-center justify-center overflow-auto px-2 pt-10">
          <div className="flex flex-col gap-5 px-2 py-3">
            <Links itemsLinks={toggeldMenuLink} />
          </div>
          <hr className="h-[2px] w-full bg-gray-400" />
          {/* Menu Items */}
          <div className=" flex flex-col gap-5 px-2 py-3">
            <Links itemsLinks={navbarItems} />
          </div>
          <hr className="h-[2px] w-full bg-gray-400" />
          <div className=" flex flex-col gap-4 px-2 py-3 font-yekanExtraBold">
            <Links itemsLinks={toggeldMenuSessions} />
          </div>
        </div>
      </div>
    </div>
  );
}
