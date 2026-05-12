import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ThermalEyePage from './pages/ThermalEyePage';
import UnilicPage from './pages/UnilicPage';

const metaByPath: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Evizen AI — AI Systems for Operationally Complex Environments',
    description:
      'Evizen AI designs and builds production-grade automation, predictive analytics, and operational intelligence systems for power, academic, and enterprise workflows.',
  },
  '/thermal-eye': {
    title: 'Thermal Eye — Predictive Maintenance for Transmission Infrastructure',
    description:
      'Thermal Eye helps power teams identify early thermal anomalies across 110kV and 220kV transmission infrastructure and support proactive maintenance workflows.',
  },
  '/unilic': {
    title: 'Unilic — Academic Operational Infrastructure',
    description:
      'Unilic brings attendance, coursework, grading, communication, and faculty workflows into one mobile-first operational platform for institutions.',
  },
};

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handleLocationChange = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  useEffect(() => {
    const meta = metaByPath[path] ?? metaByPath['/'];
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);

    if (path === '/' && window.location.hash) {
      const sectionId = window.location.hash.slice(1);
      window.setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }), 50);
      return;
    }

    window.scrollTo(0, 0);
  }, [path]);

  const page = path === '/thermal-eye' ? <ThermalEyePage /> : path === '/unilic' ? <UnilicPage /> : <HomePage />;

  return (
    <>
      <Navbar />
      {page}
      <Footer />
    </>
  );
}

export default App;
