import {Montserrat} from "next/font/google";
import {cn} from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function Intro() {
  return (
    <div className="max-w-3xl text-2xl font-kalmehThin sm:text-4xl px-6">
      <h2 className="font-kalamehBold text-5xl">Hello 👋🏽</h2>
      <p className={cn(montserrat.className, "text-lg")}>
        My name is Ali pourzadi and I am (guess what?!) a front end developer
        which learn to code on my own (on youtube and also udemy(much more
        youtube)), I like to solve problems which can be done by a computer.I
        like to code and as i said bug are my firends and my enemy at the same
        time.I like TypeScript but i can live with javaScript , React is my main
        framework for fornt end development and I do tailwindCSS.
      </p>
    </div>
  );
}
