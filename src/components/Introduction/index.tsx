import IntroText from "./IntroText";
import TimeLine from "./TimeLine";
import {JetBrains_Mono} from "next/font/google";
import {cn} from "@/lib/utils";

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
});

const codeString = `const person= {
  name: "Ali",
  about:"A Front-End Dev",
  teamTools: ["GitHub", "Discord", "Trello"],
  myStack: {
    frontend: {
      tools: ["React", "NextJs", "React-native"],
      languages: [
        "JavaScript",
        "TypeScript",
      ],
      noSQL: ["Maybe MongoDB"],
      deployment: ["Vercel", "Netlify"],
      cssTools: ["tailwindCSS", "and Also tailwindCSS😅"],
      stateMangements: ["Redux"],
    },
    ide: ["VSCode"],
    os: ["Windows 10", "linux Ubuntu"],
    currentFocus: "Front-End > React",
    motto: "Hoping for free internet",
    funFact: "Bug's are my friends / also my enemy...",
  },
};`;

export default function index() {
  return (
    <div className="flex flex-col items-center gap-10 mb-8 max-w-4xl">
      <div className="mx-2 sm:w-5/6  rounded-sm  bg-gradient-to-br  to-indigo-400 from-pink-400 via-yellow-600">
        <div className="p-2 rounded-sm">
          <div className="bg-secondary px-2 py-1 rounded-sm">
            <pre
              className={cn(
                "whitespace-pre-wrap text-xs sm:text-base",
                jetBrains.className
              )}
            >
              {codeString}
              <span className="animate-pulse">|</span>
            </pre>
          </div>
        </div>
      </div>
      <IntroText />
      <TimeLine />
    </div>
  );
}
