import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = {
  children: React.ReactNode;
};

export default function PageLayout({children}: Props) {
  return (
    <>
      <NavBar isScroll={false} />
      <main className="flex flex-col min-h-screen mx-auto max-w-7xl ">
        {children}
      </main>
      <Footer />
    </>
  );
}
