import HtmlSvg from "./HeroAssets/HtmlSvg";
import JavaScriptSvg from "./HeroAssets/JavaScriptSvg";
import TailwindSvg from "./HeroAssets/TailwindSvg";
import ReactSvg from "./HeroAssets/ReactSvg";
import HeroImage from "./HeroImage";
import HeroTitle from "./HeroTitle";
import TypescriptSvg from "./HeroAssets/TypescriptSvg";
import CssSvg from "./HeroAssets/CssSvg";

export default function Hero() {
  return (
    <div className="flex flex-col w-full h-full relative">
      <HeroImage />
      <HeroTitle />
      <span className="absolute hidden md:block md:left-0 top-[43%] md:top-1/2  drop-shadow-lg animate-float blur-md hover:blur-none">
        <ReactSvg />
      </span>
      <span className="absolute  hidden md:block  md:right-0 top-[43%] md:top-1/2  drop-shadow-lg animate-float  blur-md hover:blur-none">
        <CssSvg />
      </span>
      <span className="absolute md:right-0  hidden md:block  top-1/4 rotate-3 drop-shadow-lg animate-float  blur-md hover:blur-none">
        <JavaScriptSvg />
      </span>
      <span className="absolute md:left-0  hidden md:block top-1/4 -rotate-3 drop-shadow-lg animate-float  blur-md hover:blur-none">
        <TypescriptSvg />
      </span>
      <span className="absolute  hidden md:block  right-20 top-3/4 rotate-12  drop-shadow-lg animate-float  blur-md hover:blur-none">
        <HtmlSvg />
      </span>
      <span className="absolute left-20 top-3/4  hidden md:block   drop-shadow-lg animate-float  blur-md hover:blur-none">
        <TailwindSvg />
      </span>
    </div>
  );
}
