import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Shared Architectural Components
import ArchitecturalNav from './components/common/ArchitecturalNav';
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

// Lazy Loaded 3D Studio View
const Virtual3D = lazy(() => import('./pages/Virtual3D'));

import { useLenis } from './hooks/useLenis';

function LoadingStudioFallback() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center space-y-4 pt-36 bg-paper text-ink">
      <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
        WEBGL STUDIO ENVIRONMENT
      </p>
      <h3 className="font-serif text-3xl font-light text-ink">
        Loading 3D Material Studio...
      </h3>
      <p className="font-body text-xs text-graphite font-light max-w-sm">
        Calibrating physical surface reflections & normal textures.
      </p>
    </div>
  );
}

export default function App() {
  useLenis();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-paper text-ink flex flex-col justify-between selection:bg-ink selection:text-paper">
        <ArchitecturalNav />
        <main className="flex-grow">
          <Suspense fallback={<LoadingStudioFallback />}>
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
