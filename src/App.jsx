import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/home';
import Solutions from './pages/solutions';
import Velocity from './pages/velocity';
import Updates from './pages/updates'; 

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased w-full m-0 p-0 overflow-x-hidden flex flex-col">
        <Header />

        {/* Full-width container to let outer section backgrounds expand */}
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/velocity" element={<Velocity />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/mockups" element={<Mockups />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
