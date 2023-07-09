import React from "react";
import {Montserrat} from "next/font/google";
import {cn} from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ["latin"],
});

type Props = {
  title: string;
  description: string;
  img?: React.ReactNode;
};

export default function index({title, description, img}: Props) {
  return (
    <div className="bg-secondary rounded-sm px-6 py-4 shadow-sm text-3xl space-y-2">
      <div>
        <h2
          className={cn(
            montserrat.className,
            " leading-relaxed text-2xl font-semibold"
          )}
        >
          {title}
        </h2>
        {img}
      </div>
      <hr className="h-2 w-full" />
      <p className={cn(montserrat.className, "text-lg")}>{description}</p>
    </div>
  );
}
