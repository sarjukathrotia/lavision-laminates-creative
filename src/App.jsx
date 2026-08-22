import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Shared Components
import GlassNav from './components/common/GlassNav';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductCategory from './pages/ProductCategory';
import Brands from './pages/Brands';
import BrandDetail from './pages/BrandDetail';
import Gallery from './pages/Gallery';
import Virtual3D from './pages/Virtual3D';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import FindDealer from './pages/FindDealer';
import BecomeDealer from './pages/BecomeDealer';
import Showrooms from './pages/Showrooms';
import Contact from './pages/Contact';
import CatalogueDownload from './pages/CatalogueDownload';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-cream text-ink flex flex-col justify-between selection:bg-pinkP selection:text-pink">
        <GlassNav />
        <main className="flex-grow">
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
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
