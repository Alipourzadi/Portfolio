import {LinkIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import {Montserrat} from "next/font/google";
import {cn} from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ["latin"],
});

type Props = {
  title: string;
  technology: string;
  description: string;
  link: string;
};

export default function Index({title, technology, description, link}: Props) {
  return (
    <li className={montserrat.className}>
      <div className="date bg-secondary text-secondary-foreground before:bg-gradient-to-br before:from-secondary before:to-transparent flex justify-between items-center gap-8">
        {title}
        <Link href={link}>
          <LinkIcon className="h-6 w-6 text-gray-500" />
        </Link>
      </div>
      <div className="title font-bold">{technology}</div>
      <div className="descr">{description}</div>
    </li>
  );
}
