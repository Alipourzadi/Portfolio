import ImageSvg from "../AboutAssets/ImageSvg";

export default function Index() {
  return (
    <>
      <div className="drop-shadow  shadow-black dark:shadow-white">
        <div className="relative h-screen w-64 overflow-hidden clip-your-needful-style mx-auto bg-gradient-to-b filter saturate-150 blur-lg to-transparent via-pink-400 from-yellow-600">
          <ImageSvg />
        </div>
      </div>
      <svg
        width="0"
        height="0"
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="myCurve" clipPathUnits="objectBoundingBox">
            <path d="M 0 1 A 1 1 0 0 0 0 0 L 1 0 A 1 1 0 0 0 1 1 H 0 Z" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
