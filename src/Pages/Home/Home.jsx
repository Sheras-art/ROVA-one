import { useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navBar/navBar";
import CTA from "../CTA/CTA";
import FAQ from "../FAQ/FAQ";
import Features from "../Features/Features";
import Health from "../Health/Health";
import Hero from "../Hero/Hero";
import Reviews from "../Reviews/Reviews";
import Technology from "../Technology/Technology";

function Home() {
  const [activeSection, setActiveSection] = useState("");

  // ======== Accessing where user navigation in the document  =========//

  // 1. Create a ref to store references to all section elements
  const sectionsRefs = useRef({});

  const setRef = (id) => (element) => {
    if (element) {
      sectionsRefs.current[id] = element;
    } else {
      delete sectionsRefs.current[id];
    }
  };

  useEffect(() => {
    // 2. Configure the observer
    const options = {
      root: null,
      rootMargin: "-20% 0px -20% 0px", // Triggers when section hits the middle 60% of screen
      threshold: 0.2,
    };

    // 3. Create Observer

    const Observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    }, options);

    // 4. Start observing every section current stored in our refs

    Object.values(sectionsRefs.current).forEach((section) => {
      if (section) Observer.observe(section);
    });

    // 5. CLEANUP: Stop observing when component unmounts

    return () => {
      Observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />

      <section id="hero" ref={setRef("#hero")}><Hero /></section>
      <section id="features" ref={setRef("features")}><Features /></section>
      <section id="technology" ref={setRef("technology")}><Technology /></section>
      <section id="health" ref={setRef("health")}><Health /></section>
      <section id="reviews" ref={setRef("reviews")}><Reviews /></section>
      <section id="faq" ref={setRef("faq")}><FAQ /></section>
      <section id="cta" ref={setRef("cta")}><CTA /></section>
      
      <Footer />    
    </>
  );
}

export default Home;
