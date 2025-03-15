"use client";
import { useEffect } from "react";

import "lenis/dist/lenis.css";
import Lenis from "lenis";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import gsap from "gsap";

import Marquee from "./components/Marquee";
import About from "./components/About";
import Purpose from "./components/Purpose";
import Services from "./components/Services";
import NFTMarquee from "./components/NFTMarquee";

import ProjectsSection from "./components/ProjectsSection";
import ProjectsGallery from "./components/ProjectsGallery";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

import NftSection from "./components/NftSection";

export default function App() {
  useEffect(() => {
    // This code runs only on the client side, inside the browser.
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Cleanup when the component unmounts
      gsap.ticker.remove(() => {
        lenis.raf(0);
      });
    };
  }, []); // Empty dependency array ensures this runs only once, after the initial render

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />

      <About />

      <Services />
      <Purpose />
      <ProjectsSection />
      <Marquee />
      <ProjectsGallery />
      <Marquee />
      <NftSection />
      <NFTMarquee />
      <ContactUs />
      <Footer />
    </main>
  );
}
