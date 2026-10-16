import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CareerJourney from "./components/CareerJourney";
import CurrentLearning from "./components/CurrentLearning";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Terminal from "./components/Terminal";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Loader from "./components/Loader";

export default function App() {
  return (
    <>
      <Loader />
      <Navbar />

      <main>
        <Hero />
        <About />
        <CareerJourney />
        <CurrentLearning />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Resume />
        <Contact />
      </main>

      <Footer />
      <Terminal />
      <BackToTop />
    </>
  );
}
