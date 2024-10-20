"use client";
import Hero from "./components/Hero";
import Image from "next/image";
import Contact from "./components/Contact";
import Project from "./components/Project";
import About from "./components/About";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
