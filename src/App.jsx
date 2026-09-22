import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import FounderProfile from './pages/FounderProfile';
import LetsTalk from './pages/LetsTalk';
import TermsAndConditions from './pages/TermsAndConditions';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-brand-600 selection:text-white">
      <ScrollToTop />
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/founder-profile" element={<FounderProfile />} />
          <Route path="/lets-talk" element={<LetsTalk />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
