import Image from "next/image";
import Link from "next/link";
import SocialMedia from "./SocialMedia";
// import NewsLetter from "./NewsLetter";
import {footerLinks} from "@/Shared/Types";
import CopyRight from "./CopyRight";

const links: footerLinks = [
  {
    heading: "Pages",
    links: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "About",
        link: "/about",
      },
    ],
  },
];

export default function FooterLinks() {
  return (
    <div className="flex justify-between w-full gap-y-4 space-x-3 sm:space-x-0 text-xl">
      {links.map((item, index) => {
        return (
          <div
            className="mx-auto w-full space-y-3 flex flex-col items-center"
            key={index}
          >
            <b className="pb-4  font-yekanExtraBold">{item?.heading}</b>
            <ul className="space-y-1">
              {item.links.map(({link, name}, index) => (
                <li key={index}>
                  <Link
                    className="hover:underline hover:text-primary font-yekanMedium "
                    href={link}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
      <SocialMedia />
    </div>
  );
}
