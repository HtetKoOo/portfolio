import About from "@/components/section/about";
import Contact from "@/components/section/contact";
import Experience from "@/components/section/experience";
import  Hero  from "@/components/section/hero";
import Project from "@/components/section/project";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <Hero/>
        <About />
        <Experience />
        <Project />
        <Contact />
      </div>
    </main>
  );
}
