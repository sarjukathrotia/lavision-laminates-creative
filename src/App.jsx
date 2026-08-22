import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Sparkles } from 'lucide-react';

// Shared Components
import GlassNav from './components/common/GlassNav';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Regular Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductCategory from './pages/ProductCategory';
import Brands from './pages/Brands';
import BrandDetail from './pages/BrandDetail';
import Gallery from './pages/Gallery';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import FindDealer from './pages/FindDealer';
import BecomeDealer from './pages/BecomeDealer';
import Showrooms from './pages/Showrooms';
import Contact from './pages/Contact';
import CatalogueDownload from './pages/CatalogueDownload';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Lazy Loaded 3D View (Splits Three.js, R3F, and Drei from main bundle)
const Virtual3D = lazy(() => import('./pages/Virtual3D'));

import { useLenis } from './hooks/useLenis';

function Loading3DFallback() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center space-y-4 pt-28">
      <div className="w-16 h-16 rounded-3xl bg-skyP/60 border border-sky/30 flex items-center justify-center text-sky animate-bounce shadow-md">
        <Box className="w-8 h-8 animate-spin" style={{ animationDuration: '4s' }} />
      </div>
      <div className="space-y-1">
        <span className="font-mono text-xs text-pink uppercase font-semibold tracking-wider">
          WebGL Environment
        </span>
        <h3 className="font-display text-2xl font-semibold text-ink">
          Loading 3D Material Studio...
        </h3>
        <p className="font-body text-xs text-ink/70 max-w-sm">
          Preparing high-resolution PBR surface textures & shaders.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  useLenis();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-cream text-ink flex flex-col justify-between selection:bg-pinkP selection:text-pink">
        <GlassNav />
        <main className="flex-grow">
          <Suspense fallback={<Loading3DFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:category" element={<ProductCategory />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/brands/:brand" element={<BrandDetail />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/virtual-3d" element={<Virtual3D />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/dealers" element={<FindDealer />} />
              <Route path="/dealers/find" element={<FindDealer />} />
              <Route path="/dealers/become" element={<BecomeDealer />} />
              <Route path="/showrooms" element={<Showrooms />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/catalogues" element={<CatalogueDownload />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
