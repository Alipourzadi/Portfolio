import Links from "./Links";

type Props = {
  itemsLinks: {
    name: string;
    path: string;
  }[];
};

const NavLinks = ({itemsLinks}: Props) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center justify-between gap-4 text-sm">
        <Links itemsLinks={itemsLinks} />
      </div>
    </div>
  );
};

export default NavLinks;
