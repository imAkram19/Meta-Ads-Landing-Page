import { useState, useEffect } from 'react';
import { Button } from './ui/button';

function StickyOfferBar() {
  const [timeLeft, setTimeLeft] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [shouldPulse, setShouldPulse] = useState(false);
  const [shouldJerk, setShouldJerk] = useState(false);
  const [timerEnded, setTimerEnded] = useState(false);

  useEffect(() => {
    const getDeadline = () => {
      const stored = localStorage.getItem('offerDeadline');
      if (stored) {
        const storedDeadline = parseInt(stored);
        const now = Date.now();
        // If stored deadline is in the past, reset it
        if (storedDeadline <= now) {
          const deadline = Date.now() + 30 * 60 * 1000;
          localStorage.setItem('offerDeadline', deadline.toString());
          return deadline;
        }
        return storedDeadline;
      }
      const deadline = Date.now() + 30 * 60 * 1000; // 30 minutes from now
      localStorage.setItem('offerDeadline', deadline.toString());
      return deadline;
    };

    const calculateTimeLeft = () => {
      const deadline = getDeadline();
      const now = Date.now();
      const difference = deadline - now;

      if (difference <= 0) {
        setTimeLeft('00:00');
        setTimerEnded(true);
        return;
      }

      // Calculate minutes and seconds from milliseconds
      const minutes = Math.floor(difference / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      const formattedMinutes = minutes.toString().padStart(2, '0');
      const formattedSeconds = seconds.toString().padStart(2, '0');

      setTimeLeft(`${formattedMinutes}:${formattedSeconds}`);
      setMinutes(formattedMinutes);
      setSeconds(formattedSeconds);
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Show the sticky bar after 1.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Trigger animation after component is visible
      const animationTimer = setTimeout(() => {
        setShouldAnimate(true);
      }, 50);

      // Start pulsing after 2 seconds
      const pulseTimer = setTimeout(() => {
        setShouldPulse(true);
      }, 2500);

      return () => {
        clearTimeout(animationTimer);
        clearTimeout(pulseTimer);
      };
    }
  }, [isVisible]);

  useEffect(() => {
    if (shouldPulse) {
      // Trigger jerk animation after pulse starts, then every 3 seconds
      const jerkOnce = setTimeout(() => {
        setShouldJerk(true);
        setTimeout(() => setShouldJerk(false), 800); // Reset after animation completes
      }, 3000);

      const jerkInterval = setInterval(() => {
        setShouldJerk(true);
        setTimeout(() => setShouldJerk(false), 800);
      }, 3000);

      return () => {
        clearTimeout(jerkOnce);
        clearInterval(jerkInterval);
      };
    }
  }, [shouldPulse]);

  return (
    <>
      <div className={`fixed bottom-4 left-4 right-4 z-[100] md:hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-2xl transition-all duration-700 ease-out ${!isVisible ? 'translate-y-[200%] opacity-0' : shouldAnimate ? 'translate-y-0 opacity-100' : 'translate-y-[200%] opacity-0'} ${shouldPulse ? 'animate-scale-pulse' : ''}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl pointer-events-none" />
        <div className="flex items-center justify-between px-4 py-3 gap-2 relative z-10">
          <div className="flex flex-col flex-1">
            {!timerEnded ? (
              <>
                <span className="text-[10px] uppercase tracking-wider font-bold text-white/50">
                  Limited Offer Ends In:
                </span>
                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-red-500/20 px-2 py-0.5 rounded border border-red-500/30">
                    <span className="text-red-500 text-sm font-mono font-bold">{timeLeft}</span>
                  </div>
                  <span className="text-white/30 line-through font-semibold text-xs ml-4">₹8,999</span>
                  <span className="text-2xl font-black text-white italic">₹399/-</span>
                </div>
              </>
            ) : (
              <>
                <span className="text-[10px] font-semibold text-white/70">Offer Expired</span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-white">₹8,999/-</span>
                </div>
              </>
            )}
          </div>

          <Button
            size="sm"
            className={`bg-[#ff4d4d] hover:bg-[#ff3333] text-white font-bold px-4 py-2 text-xs uppercase tracking-tighter whitespace-nowrap shadow-lg shadow-red-500/20 border-b-2 border-red-700 active:border-b-0 active:translate-y-[1px] transition-all ${shouldJerk ? 'animate-random-jerk' : ''}`}
            asChild
          >
            <a
              href="https://wa.me/919059053439?text=Hi!%20I%20want%20to%20Buy%20Now%20at%20the%20discounted%20price%20of%20₹399."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5"
              onClick={() => {
                if (typeof fbq !== 'undefined') {
                  fbq('track', 'InitiateCheckout');
                }
              }}
            >
              <span>Buy Now</span>
            </a>
          </Button>
        </div>
      </div>

      {/* Desktop Version */}
      <div className={`md:flex hidden fixed bottom-6 right-6 z-[100] w-[450px] backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] rounded-3xl transition-all duration-700 ease-out ${!isVisible ? 'translate-x-[120%] opacity-0' : shouldAnimate ? 'translate-x-0 opacity-100' : 'translate-x-[120%] opacity-0'} ${shouldPulse ? 'animate-scale-pulse' : ''}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent rounded-3xl pointer-events-none" />
        <div className="flex items-center justify-between px-6 py-4 gap-6 relative z-10 w-full">
          <div className="flex flex-col">
            {!timerEnded ? (
              <>
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/50 mb-1">
                  Flash Sale Ends In:
                </span>
                <div className="flex items-center gap-3">
                  <div className="flex items-center bg-red-500/20 px-3 py-1 rounded-lg border border-red-500/30">
                    <span className="text-red-500 text-2xl font-mono font-black">{timeLeft}</span>
                  </div>
                  <span className="text-white/20 line-through font-bold text-lg ml-6">₹8,999</span>
                  <span className="text-4xl font-black text-white italic tracking-tighter">₹399/-</span>
                </div>
              </>
            ) : (
              <>
                <span className="text-xs font-semibold text-white/70">Offer Expired</span>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-white">₹8,999/-</span>
                </div>
              </>
            )}
          </div>

          <Button
            size="lg"
            className={`bg-[#ff4d4d] hover:bg-[#ff3333] text-white font-black px-8 py-6 text-lg uppercase italic tracking-tighter whitespace-nowrap shadow-2xl shadow-red-500/40 border-b-4 border-red-700 active:border-b-0 active:translate-y-[2px] transition-all group ${shouldJerk ? 'animate-random-jerk' : ''}`}
            asChild
          >
            <a
              href="https://wa.me/919059053439?text=Hi!%20I%20want%20to%20Buy%20Now%20at%20the%20discounted%20price%20of%20₹399."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
              onClick={() => {
                if (typeof fbq !== 'undefined') {
                  fbq('track', 'InitiateCheckout');
                }
              }}
            >
              <span>Buy Now</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}

export default StickyOfferBar;

