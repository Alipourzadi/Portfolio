import Link from "next/link";

type Props = {
  itemsLinks: {
    name: string;
    path: string;
  }[];
};

const Links = ({itemsLinks}: Props) => {
  return (
    <>
      {itemsLinks.map((item, idx) => (
        <Link
          key={idx}
          className="flex items-center gap-2 text-base transition duration-500 hover:text-blue-500"
          href={item.path}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default Links;
