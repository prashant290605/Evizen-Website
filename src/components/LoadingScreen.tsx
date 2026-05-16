import { useEffect, useState } from 'react';
import BrandLogo from './BrandLogo';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hold = window.setTimeout(() => {
      setLeaving(true);
      window.setTimeout(() => setVisible(false), reduceMotion ? 0 : 240);
    }, reduceMotion ? 80 : 620);

    return () => window.clearTimeout(hold);
  }, []);

  if (!visible) return null;

  return (
    <div className={`loading-polish ${leaving ? 'is-leaving' : ''}`} role="status" aria-label="Loading Evizen AI">
      <div>
        <BrandLogo className="h-10 w-auto" />
        <span />
      </div>
    </div>
  );
}
