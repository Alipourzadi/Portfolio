import Footer from "../Footer";

type props = {
  children: React.ReactNode;
};

export default function FooterLayout({children}: props) {
  return (
    <footer
      className="flex flex-col justify-center items-center space-y-6 p-8 shadow-inner font-byekan w-full"
      style={{direction: "rtl"}}
    >
      {children}
    </footer>
  );
}
