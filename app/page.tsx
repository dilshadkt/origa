import About from "./components/About";
import Banner from "./components/Banner";
import Blogs from "./components/Blogs";
import ClientLogo from "./components/ClientLogo";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Industries from "./components/Industries";
import Services from "./components/Services";
import Stat from "./components/Stat";
import Testimonial from "./components/Testimonial";
import Whatsapp from "./components/Whatsapp";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Banner />
      <Industries />
      <Features />
      <Stat />
      <ClientLogo />
      <Blogs />
      <Testimonial />
      <Contact />
      <Whatsapp />
    </>
  );
}
