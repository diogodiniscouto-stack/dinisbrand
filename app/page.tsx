import { Hero } from "@/components/Hero";
import { InsideToolkit } from "@/components/InsideToolkit";
import { ZeroToBrand } from "@/components/ZeroToBrand";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <InsideToolkit />
        <Newsletter />
        <ZeroToBrand />
      </main>
      <Footer />
    </>
  );
}
