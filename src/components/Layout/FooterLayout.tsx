import Footer from "../Footer";

type props = {
  children: React.ReactNode;
};

export default function FooterLayout({children}: props) {
  return (
    <footer className="mx-auto text-lg  space-y-6 p-8 shadow-inner font-byekan w-full">
      {children}
    </footer>
  );
}
