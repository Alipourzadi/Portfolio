import Link from "next/link";

const socialMediaLinks = [
  {
    name: "اینستاگرام",
    link: "https://www.instagram.com/",
    color: "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 ",
  },
  {
    name: "فیسبوک",
    link: "https://www.facebook.com/",
    color: "bg-[#4267B2]",
  },
  {
    name: "توییتر",
    link: "https://twitter.com/",
    color: "bg-[#1DA1F2]",
  },
  {
    name: "یوتیوب",
    link: "https://www.youtube.com/",
    color: "bg-[#c4302b]",
  },
];

export default function SocialMedia() {
  return (
    <div className="sm:pr-24 mx-auto w-full space-y-3">
      <b className="text-base md:text-lg font-yekanExtraBold">
        همراه ما باشید!
      </b>
      <ul className="grid grid-cols-2 w-max gap-2">
        {socialMediaLinks.map((socialMedia) => {
          return (
            <Link
              key={socialMedia.name}
              className={`${socialMedia.color} hover:bg-opacity-80 hover:opacity-80  transition-colors p-2 shadow-md rounded-full`}
              href={socialMedia.link}
            >
              <li
                className={`flex justify-center items-center gap-4 text-white`}
              >
                <p className="hidden md:block font-yekanMedium text-sm">
                  {socialMedia.name}
                </p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
