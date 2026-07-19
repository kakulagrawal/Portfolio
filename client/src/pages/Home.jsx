import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import CodingProfiles from "../components/codingProfiles/CodingProfiles";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CodingProfiles />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;