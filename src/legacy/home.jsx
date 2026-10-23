// LEGACY 2014 pre-refresh version of this page, kept for reference. Live version: src/pages/
import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Laptop,
  Tv,
  Store,
  ArrowRight,
  TrendingUp,
  Zap,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. Hero Section - Focused on Partnership & Sales Growth */}
      <section className="bg-gradient-to-br from-costco-darkBlue via-costco-blue to-blue-950 text-white py-20 lg:py-28 relative overflow-hidden w-full">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none mb-6">
              Retail Media Like Only Costco Can Deliver.
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
              There's never been a better time to partner with Costco to reach
              members onsite, offsite, and in real life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-costco-red hover:bg-red-700 text-white font-bold text-center px-8 py-4 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                Partner With Us
              </a>
              <Link
                to="/solutions"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold text-center px-8 py-4 rounded-full backdrop-blur-md transition-all"
              >
                Explore Solutions
              </Link>
            </div>
          </div>

          {/* Outcome & Business Metrics Card */}
          <div className="lg:col-span-5 bg-white text-gray-900 rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-costco-blue">
                Grow With Everyone's Favorite Warehouse
              </span>
            </div>

            <div className="space-y-6">
              {/* Top Side-by-Side Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-4xl lg:text-5xl font-extrabold text-costco-darkBlue tracking-tight">
                    120M
                  </p>
                  <p className="text-sm font-semibold text-gray-600 mt-1">
                    Verified Profiles
                  </p>
                </div>
                <div>
                  <p className="text-4xl lg:text-5xl font-extrabold text-costco-darkBlue tracking-tight">
                    630+
                  </p>
                  <p className="text-sm font-semibold text-gray-600 mt-1">
                    Warehouses
                  </p>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Bottom 3-Column Secondary Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-3xl font-bold text-gray-900">93%</p>
                  <p className="text-xs text-gray-500 font-medium">
                    Renewal Rate
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">1:1</p>
                  <p className="text-xs text-gray-500 font-medium">
                    Sales Attribution
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">150+</p>
                  <p className="text-xs text-gray-500 font-medium">
                    Proprietary Segments
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center space-x-3">
                <TrendingUp className="w-8 h-8 text-costco-blue flex-shrink-0" />
                <p className="text-xs text-gray-600 font-medium leading-normal">
                  Closed-loop attribution directly linking media
                  exposure to warehouse and eCommerce sales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Ad Solutions Teaser */}
      <section className="py-20 lg:py-28 w-full bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
            <div className="max-w-3xl">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-costco-red mb-3">
                Omnichannel Solutions
              </h2>
              <h3 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                A 3-pack of Ways to Engage Members
              </h3>
              <p className="text-gray-600 text-lg mt-4">
                Our platform and services will help you reach and engage members online, in-warehouse, and everywhere in between.
              </p>
            </div>
            <Link
              to="/solutions"
              className="text-costco-blue font-bold flex items-center text-base hover:underline flex-shrink-0"
            >
              View Full Inventory & Specs{' '}
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="bg-blue-100 text-costco-blue p-3.5 rounded-2xl w-max mb-6">
                  <Laptop className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-extrabold text-gray-900 mb-3">
                  Onsite & App
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Capture high-intent buyers with Sponsored Search, homepage
                  feature banners, and category carousels.
                </p>
              </div>
              <Link
                to="/solutions"
                className="text-costco-blue font-bold text-sm inline-flex items-center hover:underline"
              >
                Explore Onsite Format <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="bg-blue-100 text-costco-blue p-3.5 rounded-2xl w-max mb-6">
                  <Tv className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-extrabold text-gray-900 mb-3">
                  Offsite & Programmatic
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Extend reach to verified Costco shoppers across CTV, streaming
                  apps, and programmatic display.
                </p>
              </div>
              <Link
                to="/solutions"
                className="text-costco-blue font-bold text-sm inline-flex items-center hover:underline"
              >
                Explore Offsite Format <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="bg-blue-100 text-costco-blue p-3.5 rounded-2xl w-max mb-6">
                  <Store className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-extrabold text-gray-900 mb-3">
                  In-Warehouse IRL
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Influence physical purchases via entrance digital screens,
                  sampling events, and register touchpoints.
                </p>
              </div>
              <Link
                to="/solutions"
                className="text-costco-blue font-bold text-sm inline-flex items-center hover:underline"
              >
                Explore IRL Formats <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Costco Velocity Teaser */}
      <section className="bg-gray-900 text-white py-20 lg:py-28 w-full">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Zap className="w-4 h-4" />
              <span>Next-Gen Commerce Infrastructure</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Powered by Costco Velocity
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed">
              Our privacy-safe data engine operates directly inside Google Cloud
              Platform—matching 1st-party member signals without exporting PII.
            </p>

            <Link
              to="/velocity"
              className="bg-costco-blue hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all inline-flex items-center text-sm uppercase tracking-wider"
            >
              <span>Deep-Dive Into Architecture</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="lg:col-span-5 bg-gray-800/80 border border-gray-700 p-8 rounded-3xl backdrop-blur-md shadow-2xl">
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-6">
              Velocity Core Highlights
            </h4>
            <div className="space-y-4 text-sm font-semibold">
              <div className="flex items-center space-x-3 text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Zero Data Movement GCP Architecture</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Privacy Clean Rooms for Brand CRM Match</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Closed-Loop SKU-Level Register Attribution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Case Studies Summary */}
      <section id="impact" className="py-20 lg:py-28 w-full bg-gray-50">
        <div className="container-custom">
          <div className="text-center w-full mb-16">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-costco-red mb-3">
              Proven Results
            </h2>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Measured Sales Lift for Brands
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <span className="text-xs font-bold text-costco-blue uppercase tracking-wider">
                CPG Food & Beverage
              </span>
              <h4 className="text-4xl font-extrabold text-gray-900 mt-3 mb-2">
                +34% ROAS
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Combining Onsite Sponsored Search with targeted homepage banner
                placements.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <span className="text-xs font-bold text-costco-blue uppercase tracking-wider">
                Consumer Electronics
              </span>
              <h4 className="text-4xl font-extrabold text-gray-900 mt-3 mb-2">
                5.2x Lift
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Leveraging Offsite Connected TV (CTV) to drive high-basket
                warehouse conversions.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <span className="text-xs font-bold text-costco-blue uppercase tracking-wider">
                Health & Wellness
              </span>
              <h4 className="text-4xl font-extrabold text-gray-900 mt-3 mb-2">
                +28% Incremental
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Integrating in-warehouse sampling touchpoints with digital
                search ads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className="py-20 w-full bg-gray-100">
        <div className="container-custom">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl w-full max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                Partner With Costco Retail Media
              </h2>
              <p className="text-gray-600 mt-3 text-base sm:text-lg">
                Get in touch with our team to request a media kit and discuss
                custom campaign strategies.
              </p>
            </div>

            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Request received!');
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-costco-blue"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-costco-blue"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-costco-blue"
                    placeholder="jane@brand.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                    Company / Brand Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-costco-blue"
                    placeholder="Acme Foods"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-costco-red hover:bg-red-700 text-white font-bold py-4 rounded-full shadow-lg transition-all text-sm uppercase tracking-wider flex items-center justify-center space-x-2"
              >
                <span>Submit Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
