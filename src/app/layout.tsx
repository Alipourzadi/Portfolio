import Head from "next/head";
import "./globals.css";
import PageLayout from "@/components/Layout/PageLayout";

export const metadata = {
  title: "Hello World!",
  description: "A portfolio Website",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fa">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="transition-colors duration-300 font-kalameh">
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
