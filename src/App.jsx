import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import ScrollToHash from './components/ScrollToHash';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/home';
import ConceptHome from './concept/ConceptHome';
import ConceptSolutions from './concept/ConceptSolutions';
import Solutions from './pages/solutions';
import Velocity from './pages/velocity';
import Updates from './pages/updates';
import MemberDashboard from './pages/MemberDashboard';

// 1. Import the new simulator page
import AdSimulator from './pages/AdSimulator';

export default function App() {
  return (
    <HashRouter>
      <ScrollToHash />
      <Routes>
        {/* STANDALONE SIMULATOR ROUTE (No main Header/Footer) */}
        <Route path="/simulator" element={<AdSimulator />} />

        {/* CORE PROTOTYPE WEBSITE ROUTES */}
        <Route
          path="/*"
          element={
            <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased w-full m-0 p-0 flex flex-col">
              <Header />
              <main className="flex-grow w-full">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/concept" element={<ConceptHome />} />
                  <Route path="/concept/solutions" element={<ConceptSolutions />} />
                  <Route path="/solutions" element={<Solutions />} />
                  <Route path="/velocity" element={<Velocity />} />
                  <Route path="/updates" element={<Updates />} />
                  <Route path="/member" element={<MemberDashboard />} />
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