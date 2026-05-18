/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StrictMode } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { VisionBento } from './components/sections/VisionBento';
import { Benchmarking } from './components/sections/Benchmarking';
import { PersonaBento } from './components/sections/PersonaBento';
import { MediaMetrics } from './components/sections/MediaMetrics';
import { ContentStrategy } from './components/sections/ContentStrategy';
import { OperationsRoadmap } from './components/sections/OperationsRoadmap';

export default function App() {
  return (
    <main className="relative w-full max-w-full overflow-x-hidden min-h-[100dvh] bg-brand-bg text-brand-text selection:bg-brand-accent/20 selection:text-brand-text">
      
      <Navbar />
      <Hero />
      <VisionBento />
      <Benchmarking />
      <PersonaBento />
      <MediaMetrics />
      <ContentStrategy />
      <OperationsRoadmap />
      
      <footer className="w-full py-12 text-center border-t border-brand-border mt-20">
        <div className="text-[10px] uppercase tracking-[2px] font-sans opacity-60">
          Ekto Grupo · Assessoria de Growth Digital
        </div>
      </footer>
    </main>
  );
}
