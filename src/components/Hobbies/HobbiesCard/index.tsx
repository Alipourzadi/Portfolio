"use client";
import React, {useState} from "react";
import {Montserrat} from "next/font/google";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

const montserrat = Montserrat({
  subsets: ["latin"],
});

type Props = {
  title: string;
  description: string;
  img?: React.ReactNode;
};

export default function HobbiesCard({title, description, img}: Props) {
  const [showMore, setShowMore] = useState<boolean>(false);
  return (
    <div className="bg-secondary rounded-sm px-6 py-4 shadow-sm text-3xl space-y-2 mx-auto text-center">
      <div>
        <h2
          className={cn(
            montserrat.className,
            "leading-relaxed text-xl md:text-2xl text-center md:text-left font-semibold"
          )}
        >
          {title}
        </h2>
        {img}
      </div>
      <hr className="h-2 w-full" />
      <p className={cn(montserrat.className, "text-sm md:text-lg text-left")}>
        {!showMore ? `${description.slice(0, 300)}...` : description}
      </p>
      <Button
        onClick={() => setShowMore((prevState) => !prevState)}
        variant={"outline"}
        className="text-2xl text-white"
      >
        {!showMore ? "more..." : "less"}
      </Button>
    </div>
  );
}
