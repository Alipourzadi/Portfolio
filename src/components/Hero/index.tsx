import HeroAssets from "./HeroAssets";
import Line from "./HeroAssets/Line";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <div className="flex flex-col w-full h-full relative">
      <HeroImage />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-center ">
        <h1 className="text-9xl font-kalamehBold">
          <span className="animate-pulse">_</span>Hell owo rld
        </h1>
        <h2 className="text-5xl">Ali Pourzadi</h2>
        <h3 className="text-4xl">another front-end developer</h3>
      </div>
      {/* <Line /> */}
    </div>
  );
}
