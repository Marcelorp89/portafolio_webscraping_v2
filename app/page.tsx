import Image from "next/image";
import Hero from "@/components/Hero";
import Proyectos from "@/components/Proyects";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <Proyectos />
      <About />
      
    </main>
  );
}
