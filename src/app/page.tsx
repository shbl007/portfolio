import { Navbar } from "@/components/sections/Navbar";
import { HeroSection04 } from "@/components/ui/hero-04";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div id="home">
        <HeroSection04 />
      </div>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
