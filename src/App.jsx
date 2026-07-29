import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Publication from "./components/Publication";

import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ScrollProgress from "./components/ScrollProgress";
function App() {
  return (
    <>
    <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Publication />
      
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;