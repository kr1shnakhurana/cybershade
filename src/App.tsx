import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TransitionSection from './components/TransitionSection';
import Transitionsec from './components/transition';
import About from './components/About';
import Footer from './components/Footer';
import Features from './components/features';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-black text-white">
      {isLoading ? (
        <Preloader onLoadComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <TransitionSection />
          <About />
          <Transitionsec />
          <Features />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
