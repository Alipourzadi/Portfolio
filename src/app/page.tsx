import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <main className="mx-auto">
        <Hero />
        <Introduction />
      </main>
    </>
  );
}
