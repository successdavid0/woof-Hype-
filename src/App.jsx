import { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import Story from './components/sections/Story';
import Mint from './components/sections/Mint';
import Collection from './components/sections/Collection';
import Community from './components/sections/Community';
import Faq from './components/sections/Faq';

function App() {
  useEffect(() => {
    const nav = document.getElementById('nav');
    if (!nav) return;
    const onScroll = () => {
      if (window.scrollY > 20) {
        nav.style.background = 'rgba(10, 10, 15, 0.85)';
        nav.style.backdropFilter = 'blur(12px)';
      } else {
        nav.style.background = 'transparent';
        nav.style.backdropFilter = 'blur(0px)';
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Story />
        <Mint />
        <Collection />
        <Community />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

export default App;
