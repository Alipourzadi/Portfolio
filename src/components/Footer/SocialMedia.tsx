import Link from "next/link";

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Alipourzadi",
    color: "bg-black dark:bg-secondary",
  },
  {
    name: "Threads",
    link: "https://www.threads.net/@ali_pourzdi",
    color: "bg-black dark:bg-secondary",
  },
];

export default function SocialMedia() {
  return (
    <div className=" mx-auto w-full space-y-3 flex flex-col items-center text-xl">
      <b className="pb-4  font-yekanExtraBold">Contact-Me </b>
      <ul className="grid grid-cols-1 w-fit gap-2 text-center">
        {socialMediaLinks.map((socialMedia) => {
          return (
            <Link
              key={socialMedia.name}
              className={`${socialMedia.color} hover:bg-opacity-80 hover:opacity-80  transition-colors px-6 py-1 shadow-md rounded-full`}
              href={socialMedia.link}
            >
              <li
                className={`flex justify-center items-center gap-4 text-white`}
              >
                <p className="block font-yekanMedium text-lg">
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
