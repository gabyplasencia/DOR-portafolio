import React from 'react';
import HeaderNav from "./components/HeaderNav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {

  return (
    <>
        <HeaderNav />
        <main role="main">
          <Hero />
          <Projects />
          <ContactForm />
        </main>
        <Footer />
    </>
  )
}

export default App