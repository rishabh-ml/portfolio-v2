import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { TechStack } from "@/components/sections/tech-stack";
import { Projects } from "@/components/sections/projects";
import { OSSContributions } from "@/components/sections/oss-contributions";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <OSSContributions />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
