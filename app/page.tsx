import { Hero } from "@/components/Hero";
import { InsideToolkit } from "@/components/InsideToolkit";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Newsletter />
        <InsideToolkit />
      </main>
      <Footer />
    </>
  );
}
