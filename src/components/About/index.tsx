import React from "react";
import AboutAssets from "./AboutAssets";
import AboutTitle from "./AboutTitle";

export default function index() {
  return (
    <div className="">
      <div className="absolute -left-10 -z-50 overflow-hidden">
        <AboutAssets />
      </div>
      <div className="h-screen flex flex-col  justify-center items-center z-50 gap-3 w-3/4 mx-auto ">
        <AboutTitle />
      </div>
    </div>
  );
}
