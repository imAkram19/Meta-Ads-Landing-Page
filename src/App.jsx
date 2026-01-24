import React, { useEffect, useRef } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import MetaHero from './components/sections/meta-ads/MetaHero'
import ProblemAwareness from './components/sections/meta-ads/ProblemAwareness'
import Solution from './components/sections/meta-ads/Solution'
import Curriculum from './components/sections/meta-ads/Curriculum'
import Deliverables from './components/sections/meta-ads/Deliverables'
import Audience from './components/sections/meta-ads/Audience'
import Authority from './components/sections/meta-ads/Authority'
import Pricing from './components/sections/meta-ads/Pricing'
import ExclusiveBonuses from './components/sections/meta-ads/ExclusiveBonuses'
import FAQ from './components/sections/meta-ads/FAQ'
import FinalCTA from './components/sections/meta-ads/FinalCTA'
import Footer from './components/sections/Footer'
import Squares from './components/ui/Squares'
import StickyOfferBar from './components/StickyOfferBar'
import { useLenis } from './lib/useLenis'

function App() {
  const backgroundRef = useRef(null);

  // Initialize Lenis smooth scroll
  useLenis();

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5; // Slower than foreground
        const yPos = -(scrolled * parallaxSpeed);
        backgroundRef.current.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full relative bg-black text-white">
      <div className="fixed inset-0 w-full pointer-events-none z-[5] overflow-hidden">
        <div ref={backgroundRef} className="absolute inset-0 w-full h-[400vh]">
          {/* Blue Glow Background at Top */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "radial-gradient(ellipse 80% 20% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
            }}
          />

          {/* Animated Squares Background */}
          <div className="absolute inset-0 z-[5]">
            <Squares
              speed={0}
              squareSize={70}
              direction=''
              borderColor='#222'
              hoverFillColor='#333'
            />
          </div>
        </div>
      </div>

      {/* Content Container with relative positioning */}
      <div className="relative z-10 min-h-screen">

        {/* Hero Section - Meta Ads Banner */}
        <MetaHero />

        {/* Problem Awareness Section - Grid Layout */}
        <ProblemAwareness />

        {/* Solution Section */}
        <Solution />

        {/* Exclusive Bonuses Section */}
        <ExclusiveBonuses />

        {/* Core Learning Section */}
        <Curriculum />

        {/* Deliverables Section */}
        <Deliverables />

        {/* Audience Section */}
        <Audience />

        {/* Authority Section */}
        <Authority />

        {/* Pricing Section */}
        <Pricing />



        {/* FAQ Section */}
        <FAQ />

        {/* Final CTA Section */}
        <FinalCTA />

        {/* Footer */}
        <Footer />

      </div>

      {/* Sticky Offer Bar - Mobile Only */}
      {/* <StickyOfferBar /> */}
      <Analytics />
      <SpeedInsights />
    </div>
  )
}

export default App
