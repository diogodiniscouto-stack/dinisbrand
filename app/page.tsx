import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustedSystem } from "@/components/TrustedSystem";
import { StarterKit } from "@/components/StarterKit";
import { ZeroToBrand } from "@/components/ZeroToBrand";
import { Mentorship } from "@/components/Mentorship";
import { About } from "@/components/About";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedSystem />
        <StarterKit />
        <ZeroToBrand />
        <Mentorship />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
