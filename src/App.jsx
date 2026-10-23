import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import ScrollToHash from './components/ScrollToHash';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/home';
import Solutions from './pages/solutions';
import Velocity from './pages/velocity';
import Updates from './pages/updates';
import Partners from './pages/partners';

// Legacy (pre-refresh) pages, kept for reference under /legacy
import LegacyHome from './legacy/home';
import LegacySolutions from './legacy/solutions';
import LegacyVelocity from './legacy/velocity';
import LegacyUpdates from './legacy/updates';
import LegacyMemberDashboard from './legacy/MemberDashboard';
import LegacyAdSimulator from './legacy/AdSimulator';

export default function App() {
  return (
    <HashRouter>
      <ScrollToHash />
      <Routes>
        {/* STANDALONE LEGACY SIMULATOR ROUTE (No main Header/Footer) */}
        <Route path="/legacy/simulator" element={<LegacyAdSimulator />} />

        {/* CORE WEBSITE ROUTES */}
        <Route
          path="/*"
          element={
            <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased w-full m-0 p-0 flex flex-col">
              <Header />
              <main className="flex-grow w-full">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/solutions" element={<Solutions />} />
                  <Route path="/velocity" element={<Velocity />} />
                  <Route path="/updates" element={<Updates />} />
                  <Route path="/partners" element={<Partners />} />
                  {/* Legacy backup */}
                  <Route path="/legacy" element={<LegacyHome />} />
                  <Route path="/legacy/solutions" element={<LegacySolutions />} />
                  <Route path="/legacy/velocity" element={<LegacyVelocity />} />
                  <Route path="/legacy/updates" element={<LegacyUpdates />} />
                  <Route path="/legacy/member" element={<LegacyMemberDashboard />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </HashRouter>
  );
}
