import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import HomePage from './pages/HomePage';
import ThermalEyePage from './pages/ThermalEyePage';
import UnilicPage from './pages/UnilicPage';
import { useScrollReveal } from './hooks/useScrollReveal';

const metaByPath: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Evizen AI - AI Systems for Operationally Complex Environments',
    description:
      'Evizen AI designs and builds production-grade automation, predictive analytics, and operational intelligence systems for power, academic, and enterprise workflows.',
  },
  '/thermal-eye': {
    title: 'Thermal Eye - Predictive Maintenance for Transmission Infrastructure',
    description:
      'Thermal Eye helps power teams identify early thermal anomalies across 110kV and 220kV transmission infrastructure and support proactive maintenance workflows.',
  },
  '/unilic': {
    title: 'Unilic - Academic Operational Infrastructure',
    description:
      'Unilic brings attendance, coursework, grading, communication, and faculty workflows into one mobile-first operational platform for institutions.',
  },
};

const routePaths = new Set(Object.keys(metaByPath));

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function scrollToHash(hash: string) {
  const target = document.getElementById(hash.replace('#', ''));
  if (!target) return;

  const headerOffset = 64;
  const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({
    top: Math.max(top, 0),
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  });
}

function App() {
  const [path, setPath] = useState(window.location.pathname);
  useScrollReveal(path);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handleLocationChange = () => {
      setPath(window.location.pathname);
      if (window.location.pathname === '/' && window.location.hash) {
        window.setTimeout(() => scrollToHash(window.location.hash), 50);
      }
    };

    const handleDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest('a');
      if (!link || link.target || link.hasAttribute('download')) return;

      const next = new URL(link.href);
      if (next.origin !== window.location.origin || !routePaths.has(next.pathname)) return;

      event.preventDefault();

      const samePath = next.pathname === window.location.pathname;
      window.history.pushState({}, '', `${next.pathname}${next.search}${next.hash}`);
      setPath(next.pathname);

      if (next.hash && next.pathname === '/') {
        window.setTimeout(() => scrollToHash(next.hash), samePath ? 0 : 80);
      } else if (!next.hash) {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    document.addEventListener('click', handleDocumentClick);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    const meta = metaByPath[path] ?? metaByPath['/'];
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);

    if (path === '/' && window.location.hash) {
      window.setTimeout(() => scrollToHash(window.location.hash), 80);
      return;
    }

    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  }, [path]);

  const page = path === '/thermal-eye' ? <ThermalEyePage /> : path === '/unilic' ? <UnilicPage /> : <HomePage />;

  return (
    <>
      <LoadingScreen />
      <Navbar />
      <div key={path} className="page-transition">
        {page}
      </div>
      <Footer />
    </>
  );
}

export default App;

