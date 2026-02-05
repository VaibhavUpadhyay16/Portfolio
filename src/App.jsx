import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import LearningJourney from './components/LearningJourney';
// import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import { useCursorTrail, useMagneticButton } from './hooks/useEffects';

function App() {
  // useCursorTrail();
  // useMagneticButton();

  // useEffect(() => {
  
  //   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  //     anchor.addEventListener('click', function (e) {
  //       e.preventDefault();
  //       const target = document.querySelector(this.getAttribute('href'));
  //       if (target) {
  //         target.scrollIntoView({
  //           behavior: 'smooth',
  //           block: 'start',
  //         });
  //       }
  //     });
  //   });
  // }, []);

  return (
    <div className="w-full overflow-x-hidden">
     

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <LearningJourney />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
