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
      <h1 className="text-6xl text-center">Do you want to know About me?</h1>
      <hr className="w-full h-1" />
      <p className={cn(montserrat.className, "text-xl")}>
        My hobbies are watching movie,playing football,and reading book,...
      </p>
      <Button size={"lg"} className="text-lg" onClick={smoothScrollHandler}>
        See more..
      </Button>
    </>
  );
}
