import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setIsLoading(false), 800); // Wait for fade animation
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 transition-opacity duration-800 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative">
        {/* Main logo container with dynamic formation effect */}
        <div className="relative w-48 h-48 flex items-center justify-center">
          {/* Circular path tracer - creates the buffering effect */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer circle guide (invisible) */}
            <circle
              cx="100"
              cy="100"
              r="85"
              fill="none"
              stroke="rgba(59, 130, 246, 0.1)"
              strokeWidth="1"
              className="animate-pulse"
            />
            
            {/* Animated arc that traces around - primary tracer */}
            <circle
              cx="100"
              cy="100"
              r="85"
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="534"
              strokeDashoffset="534"
              className="animate-trace-circle"
              style={{
                transformOrigin: 'center',
              }}
            />

            {/* Secondary tracer - opposite direction */}
            <circle
              cx="100"
              cy="100"
              r="75"
              fill="none"
              stroke="url(#gradient2)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="471"
              strokeDashoffset="471"
              className="animate-trace-circle-reverse"
              style={{
                transformOrigin: 'center',
              }}
            />

            {/* Inner dynamic pointer */}
            <circle
              cx="100"
              cy="100"
              r="65"
              fill="none"
              stroke="url(#gradient3)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="408"
              strokeDashoffset="408"
              className="animate-trace-pointer"
              style={{
                transformOrigin: 'center',
              }}
            />

            {/* Gradient definitions */}
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center logo with breathing effect */}
          <div className="relative z-10 animate-logo-breathe">
            <img
              src="/Evizen ai-06.png"
              alt="Evizen AI"
              className="w-32 h-32 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Orbiting particles */}
          <div className="absolute inset-0 animate-orbit-slow">
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-500 rounded-full blur-sm -translate-x-1/2"></div>
          </div>
          <div className="absolute inset-0 animate-orbit-medium">
            <div className="absolute top-1/2 right-0 w-2 h-2 bg-purple-500 rounded-full blur-sm -translate-y-1/2"></div>
          </div>
          <div className="absolute inset-0 animate-orbit-fast">
            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-cyan-500 rounded-full blur-sm -translate-x-1/2"></div>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-radial from-blue-400/20 via-transparent to-transparent blur-3xl animate-pulse-slow"></div>
        </div>

        {/* Loading text */}
        <div className="mt-8 text-center">
          <p className="text-slate-600 text-sm font-light tracking-[0.3em] uppercase animate-fade-in-out">
            Loading
          </p>
        </div>
      </div>

      <style>{`
        @keyframes trace-circle {
          0% {
            stroke-dashoffset: 534;
            transform: rotate(0deg);
          }
          50% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -534;
            transform: rotate(360deg);
          }
        }

        @keyframes trace-circle-reverse {
          0% {
            stroke-dashoffset: 471;
            transform: rotate(360deg);
          }
          50% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -471;
            transform: rotate(0deg);
          }
        }

        @keyframes trace-pointer {
          0% {
            stroke-dashoffset: 408;
            transform: rotate(0deg);
          }
          50% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -408;
            transform: rotate(360deg);
          }
        }

        @keyframes logo-breathe {
          0%, 100% {
            transform: scale(1);
            opacity: 0.95;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
        }

        @keyframes orbit-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes orbit-medium {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes orbit-fast {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fade-in-out {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-trace-circle {
          animation: trace-circle 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .animate-trace-circle-reverse {
          animation: trace-circle-reverse 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .animate-trace-pointer {
          animation: trace-pointer 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .animate-logo-breathe {
          animation: logo-breathe 3s ease-in-out infinite;
        }

        .animate-orbit-slow {
          animation: orbit-slow 4s linear infinite;
        }

        .animate-orbit-medium {
          animation: orbit-medium 3s linear infinite;
        }

        .animate-orbit-fast {
          animation: orbit-fast 2s linear infinite;
        }

        .animate-fade-in-out {
          animation: fade-in-out 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
