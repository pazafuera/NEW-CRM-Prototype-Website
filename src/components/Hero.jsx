import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative bg-gradient-to-r from-costco-darkBlue via-costco-blue to-blue-900 text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center space-x-2 bg-blue-800/60 border border-blue-400/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-200 mb-6">
            <ShieldCheck className="w-4 h-4 text-blue-300" />
            <span>Deterministic 1st-Party Member Data</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Reach High-Intent Costco Members at Scale.
          </h1>
          <p className="text-base sm:text-lg text-blue-100 mb-8 max-w-xl">
            Connect digital ads and offsite campaigns directly to physical
            in-warehouse register transactions. Powered by{' '}
            <strong>Costco Velocity</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-costco-red hover:bg-red-700 text-white font-semibold text-center px-6 py-3.5 rounded-lg shadow-md transition"
            >
              Request Media Kit
            </a>
            <a
              href="#velocity"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-center px-6 py-3.5 rounded-lg backdrop-blur transition"
            >
              Platform Architecture
            </a>
          </div>
        </div>

        {/* Scale Metrics */}
        <div className="bg-white text-gray-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-100">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">
            Costco Member Scale
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="border-b border-gray-100 pb-4">
              <p className="text-2xl sm:text-3xl font-extrabold text-costco-blue">
                120M+
              </p>
              <p className="text-xs sm:text-sm font-medium text-gray-600 mt-1">
                Global Cardholders
              </p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <p className="text-2xl sm:text-3xl font-extrabold text-costco-blue">
                90%+
              </p>
              <p className="text-xs sm:text-sm font-medium text-gray-600 mt-1">
                Renewal Rate
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-costco-blue">
                1:1
              </p>
              <p className="text-xs sm:text-sm font-medium text-gray-600 mt-1">
                Identity Match
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-costco-blue">
                Closed-Loop
              </p>
              <p className="text-xs sm:text-sm font-medium text-gray-600 mt-1">
                Omnichannel Attribution
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
