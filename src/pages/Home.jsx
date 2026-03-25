import { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
  useEffect(() => {
    const savedScrollY = sessionStorage.getItem("homeScrollY");

    if (savedScrollY) {
      window.scrollTo(0, Number(savedScrollY));
      sessionStorage.removeItem("homeScrollY");
    }
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default Home;