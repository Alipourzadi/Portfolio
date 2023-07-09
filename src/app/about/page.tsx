import About from "@/components/About";
import Hobbies from "@/components/Hobbies";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <main className="mx-auto">
        <About />
        <Hobbies />
      </main>
    </>
  );
}
