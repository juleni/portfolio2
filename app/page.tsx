import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperiences from "@/components/WorkExperiences";

export default function Home() {
  return (
    <main>
      <div
        className="bg-[rgb(36,36,36)] text-[rgb(220,220,220)] h-screen snap-y snap-mandatory 
                  overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
                  scrollbar-thumb-[#f7ab0a]/60"
      >
        <Header />

        <section id="hero" className="snap-start">
          <Hero />
        </section>

        <section id="about" className="snap-center">
          <About />
        </section>

        <section id="experiences" className="snap-center">
          <WorkExperiences />
        </section>

        <section id="skills" className="snap-start">
          <Skills />
        </section>

        <section id="projects" className="snap-start">
          <Projects />
        </section>

        <section id="contact" className="snap-start">
          <Contact />
        </section>
      </div>
    </main>
  );
}
