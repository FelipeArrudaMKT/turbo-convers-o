/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import Offer from './components/Offer';
import Differentials from './components/Differentials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth">
      <Hero />
      <Benefits />
      <HowItWorks />
      <Differentials />
      <Offer />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
