import React, { useState } from 'react';
import {
  Database,
  Lock,
  LineChart,
  Shield,
  Fingerprint,
  Users,
  Activity,
  Send,
  Server,
  Cpu,
  CheckCircle2,
  ArrowRight,
  KeyRound,
  Network,
  Zap,
  ShieldCheck,
  Layers,
  HelpCircle,
} from 'lucide-react';

export default function VelocityPage() {
  const [activeTab, setActiveTab] = useState('data-platform');

  return (
    <div className="w-full bg-gray-50 text-gray-800 font-sans antialiased min-h-screen">
      {/* 1. Hero Header Section */}
      <section className="bg-gradient-to-br from-costco-darkBlue via-costco-blue to-blue-950 text-white py-20 lg:py-28 relative overflow-hidden w-full">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-400/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 mb-6">
              <Zap className="w-4 h-4 text-yellow-300" />
              <span>Next-Gen Commerce Infrastructure</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none mb-6">
              Costco Velocity Architecture
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl leading-relaxed mb-8">
              Built on Google Cloud Platform, Costco Velocity is our closed-loop
              data and adtech engine. It orchestrates deterministic 1st-party
              member signals within a privacy-safe, unified
              environment—eliminating data movement and black-box reporting.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#architecture"
                className="bg-costco-red hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 text-sm uppercase tracking-wider"
              >
                Explore The Tech Stack
              </a>
              <a
                href="#faq"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-8 py-4 rounded-full backdrop-blur-md transition-all text-sm"
              >
                Clean Room Integration
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-white">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-blue-200 mb-6">
              Velocity Standard Core
            </h3>
            <div className="space-y-5 text-sm font-semibold">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>100% Deterministic Member Signals</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Google Cloud Unified Data Layer</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>1:1 Identity Matching (No Third-Party Cookies)</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Closed-Loop Warehouse Register Attribution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Architectural Pillars */}
      <section className="py-20 lg:py-28 w-full">
        <div className="container-custom">
          <div className="text-center w-full mb-16">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-costco-red mb-3">
              Core Pillars
            </h2>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Designed for Trust, Privacy & Scale
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all">
              <div className="bg-blue-50 text-costco-blue p-4 rounded-2xl w-max mb-6">
                <Database className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-extrabold text-gray-900 mb-3">
                Unified Data Platform
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                We bring the ad technology directly into Costco’s private Google
                Cloud data environment rather than shipping sensitive member
                information out to external third-party vendors.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all">
              <div className="bg-blue-50 text-costco-blue p-4 rounded-2xl w-max mb-6">
                <Lock className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-extrabold text-gray-900 mb-3">
                Privacy Clean Rooms
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Brand partners can securely join their own 1st-party CRM data
                with Costco’s membership purchase history using differential
                privacy controls to unlock rich overlap insights without
                exposing PII.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all">
              <div className="bg-blue-50 text-costco-blue p-4 rounded-2xl w-max mb-6">
                <LineChart className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-extrabold text-gray-900 mb-3">
                Granular Closed-Loop Lift
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Receive impression-level attribution linking digital ad views
                and offsite CTV impressions directly to offline register rings
                and online Costco purchases down to the SKU level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Stack Flow Component */}
      <section
        id="architecture"
        className="bg-gray-900 text-white py-20 lg:py-28 w-full border-y border-gray-800"
      >
        <div className="container-custom">
          <div className="text-center w-full mb-16">
            <span className="bg-blue-500/20 text-blue-300 text-xs font-extrabold uppercase px-4 py-1.5 rounded-full tracking-wider">
              System Infrastructure
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-4">
              The 6-Layer Costco Velocity Flow
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Click through each layer of the Velocity pipeline to examine how
              data moves safely from raw signals to omnichannel execution.
            </p>
          </div>

          {/* Layer Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
            {[
              { id: 'data-platform', label: '1. Unified Data', icon: Server },
              { id: 'consent', label: '2. Consent & Privacy', icon: Shield },
              {
                id: 'identity',
                label: '3. Identity Resolution',
                icon: Fingerprint,
              },
              { id: 'cleanrooms', label: '4. Clean Rooms', icon: Users },
              { id: 'attribution', label: '5. Signal Capture', icon: Activity },
              { id: 'activation', label: '6. Activation', icon: Send },
            ].map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center p-4 rounded-2xl font-bold text-xs transition-all border ${
                    activeTab === tab.id
                      ? 'bg-costco-blue text-white border-blue-400 shadow-lg scale-105'
                      : 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mb-2" />
                  <span className="text-center">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Detail Card */}
          <div className="bg-gray-800 border border-gray-700 rounded-3xl p-8 lg:p-12 shadow-2xl max-w-5xl mx-auto">
            {activeTab === 'data-platform' && (
              <div className="space-y-4">
                <span className="bg-blue-900/60 text-blue-300 border border-blue-500/30 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Layer 01
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Unified Data Platform (GCP Tenant)
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Costco Velocity is hosted directly within a private Google
                  Cloud environment. Standardized schemas ingest multi-channel
                  member touchpoints in near real-time without transferring or
                  exposing raw data outside our corporate boundary.
                </p>
              </div>
            )}

            {activeTab === 'consent' && (
              <div className="space-y-4">
                <span className="bg-blue-900/60 text-blue-300 border border-blue-500/30 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Layer 02
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Consent & Preference Control
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Member privacy settings and opt-out preferences are managed
                  dynamically. Every profile passed down the pipeline adheres
                  strictly to global regulatory standards and Costco's member
                  trust commitment.
                </p>
              </div>
            )}

            {activeTab === 'identity' && (
              <div className="space-y-4">
                <span className="bg-blue-900/60 text-blue-300 border border-blue-500/30 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Layer 03
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  1:1 Deterministic Identity Graph
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Connects 120M+ cardholder accounts with individual device
                  graphs using 100% verified first-party identifiers (membership
                  IDs, verified e-commerce logins, and warehouse transaction
                  records)—eliminating probabilistic estimation.
                </p>
              </div>
            )}

            {activeTab === 'cleanrooms' && (
              <div className="space-y-4">
                <span className="bg-blue-900/60 text-blue-300 border border-blue-500/30 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Layer 04
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Audience Building & Clean Rooms
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Allows brand advertisers to query overlap metrics and build
                  targeted audience cohorts using privacy-preserving clean room
                  technologies without either party ever exchanging raw customer
                  PII.
                </p>
              </div>
            )}

            {activeTab === 'attribution' && (
              <div className="space-y-4">
                <span className="bg-blue-900/60 text-blue-300 border border-blue-500/30 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Layer 05
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Signal Capture & Closed-Loop Attribution
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Captures online ad impressions, CTV views, and physical
                  warehouse POS register rings to deliver accurate incremental
                  sales lift, ROAS metrics, and SKU-level purchasing behavior.
                </p>
              </div>
            )}

            {activeTab === 'activation' && (
              <div className="space-y-4">
                <span className="bg-blue-900/60 text-blue-300 border border-blue-500/30 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Layer 06
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Omnichannel Activation Engine
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Pushes targeted campaign segments seamlessly to digital
                  destinations on Costco.com, DSP programmatic partners, CTV
                  streaming apps, or in-warehouse digital displays.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. FAQ / Clean Room Information Section */}
      <section id="faq" className="py-20 lg:py-28 w-full">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-costco-red mb-3">
                Technical Details
              </h2>
              <h3 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <HelpCircle className="w-5 h-5 text-costco-blue mr-2.5 flex-shrink-0" />
                  How does Costco Velocity protect member privacy?
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed pl-7">
                  Velocity operates on strict differential privacy controls. No
                  raw member names, emails, or personal identification details
                  are ever exposed to advertisers. Matching occurs in secure
                  clean room environments using encrypted mathematical tokens.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <HelpCircle className="w-5 h-5 text-costco-blue mr-2.5 flex-shrink-0" />
                  How are in-warehouse sales attributed to digital campaigns?
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed pl-7">
                  Because over 99% of Costco warehouse purchases are tied
                  directly to a scanned member card at checkout, Velocity
                  matches ad impression timestamps to register transactions,
                  giving brands complete visibility into offline sales lift
                  generated by digital media.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <HelpCircle className="w-5 h-5 text-costco-blue mr-2.5 flex-shrink-0" />
                  Can we bring our own DSP or clean room technology?
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed pl-7">
                  Yes. Costco Velocity supports modular integrations with major
                  DSP partners (like Trade Desk and Google DV360) as well as
                  leading privacy clean room environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Footer Block */}
      <section className="py-16 w-full bg-costco-blue text-white text-center">
        <div className="container-custom">
          <h3 className="text-2xl sm:text-4xl font-extrabold mb-4">
            Ready to Build with Costco Velocity?
          </h3>
          <p className="text-blue-100 text-base mb-8 max-w-2xl mx-auto">
            Get in touch with our ad engineering team to arrange a technical
            deep dive or clean room demo.
          </p>
          <a
            href="/#contact"
            className="bg-costco-red hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all inline-block text-sm uppercase tracking-wider"
          >
            Contact Engineering Team
          </a>
        </div>
      </section>
    </div>
  );
}
