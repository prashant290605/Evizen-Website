import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Scroll to top on page load/reload
    window.scrollTo(0, 0);
    
    // Disable scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
