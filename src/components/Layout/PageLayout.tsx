"use client";

import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {useIsScrollingY} from "@/hooks/useScroll";

type Props = {
  children: React.ReactNode;
};

export default function PageLayout({children}: Props) {
  const isScroll = useIsScrollingY();
  return (
    <>
      <NavBar isScroll={isScroll} />
      <main className="flex flex-col min-h-screen mx-auto max-w-7xl">
        {children}
      </main>
      <Footer />
    </>
  );
}
