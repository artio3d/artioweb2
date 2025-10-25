import React from 'react';
import Hero from './components/Hero';
import ProjectDemo from './components/ProjectDemo';
import QRSection from './components/QRSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <ProjectDemo />
      <QRSection />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;