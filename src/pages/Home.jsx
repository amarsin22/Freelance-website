import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import VoiceBot from "../components/VoiceBot";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      <VoiceBot />
    </>
  );
};

export default Home;
