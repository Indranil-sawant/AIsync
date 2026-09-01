import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { MouseSpotlight } from './components/common/MouseSpotlight';
import { Home } from './pages/Home';
import { initGA, trackPageView } from './utils/analytics';

// Lazy-loaded secondary routes for optimal initial chunk size
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Work = lazy(() => import('./pages/Work').then(m => ({ default: m.Work })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const TermsOfService = lazy(() => import('./pages/TermsOfService').then(m => ({ default: m.TermsOfService })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

// Scroll to top and Analytics route tracking helper
const RouteListener: React.FC = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageView(pathname + search);
  }, [pathname, search]);

  return null;
};

// Subtle fallback placeholder during route transitions
const RouteFallback: React.FC = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-bg-primary">
    <div className="w-6 h-6 border-2 border-accent-primary/20 border-t-accent-primary rounded-full animate-spin" />
  </div>
);

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <RouteListener />
      <MouseSpotlight />
      <div className="flex flex-col min-h-screen bg-bg-primary text-text-primary">
        <Header />
        <main className="flex-1">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
