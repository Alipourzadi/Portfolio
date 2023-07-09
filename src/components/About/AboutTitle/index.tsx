"use client";
import {Button} from "@/components/ui/button";
import {Montserrat} from "next/font/google";
import {cn} from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function index() {
  const smoothScrollHandler = () => {
    const windowHeight = window.innerHeight * 0.75;
    scrollTo({
      top: windowHeight,
      behavior: "smooth",
    });
  };
  return (
    <>
      <h1 className="lg:text-6xl text-4xl text-center">
        Do you want to know About me?
      </h1>
      <hr className="w-full h-1" />
      <p className={cn(montserrat.className, "lg:text-xl text-base")}>
        My hobbies are watching movie,playing football,and reading book,...
      </p>
      <Button size={"lg"} className="text-xl" onClick={smoothScrollHandler}>
        See more..
      </Button>
    </>
  );
}
