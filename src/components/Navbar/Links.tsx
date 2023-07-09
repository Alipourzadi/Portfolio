import Link from "next/link";
import {Montserrat} from "next/font/google";
import {cn} from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ["latin"],
});

type Props = {
  itemsLinks: {
    name: string;
    path: string;
    icon?: React.ReactNode;
  }[];
};

const Links = ({itemsLinks}: Props) => {
  return (
    <>
      {itemsLinks.map((item, idx) => (
        <Link
          key={idx}
          className={cn(
            montserrat.className,
            "flex items-center gap-2 text-lg font-kalamehBold text-secondary-foreground  transition duration-500 hover:text-blue-500"
          )}
          href={item.path}
        >
          {item?.icon}
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default Links;
