// LEGACY 2014 pre-refresh version of this page, kept for reference. Live version: src/pages/
import React, { useState } from 'react';
import {
  Sparkles,
  Calendar,
  ArrowUpRight,
  Tag,
  CheckCircle2,
  Clock,
  Compass,
  Rocket,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

// ============================================================================
// EASY MONTHLY EDITING CONFIGURATION
// To add a new update or roadmap item, simply add an object to the top of these arrays!
// ============================================================================

const RELEASES_DATA = [
  {
    id: 'rel-onsite-ai-shelf',
    date: 'August 2026',
    tag: 'Onsite & App',
    title: 'Launching a New Onsite Ad Server: The AI-powered Shelf',
    type: 'Major Release',
    description:
      'Transforming high-impact reserved and performance advertisements into dynamic, personalized showcases that match featured products to individual member purchase habits.',
    highlights: [
      'Guaranteed high-visibility placement across premium homepage and category hero positions',
      'AI-driven SKU curation tailored to individual member purchase propensity',
      'Unified tech stack with self-service, automated bid & keyword automation, and outcome-based optimization',
      'Full closed-loop measurement linking banner clicks to online and warehouse sales',
    ],
    blogUrl:
      'https://www.linkedin.com/pulse/onsite-reserved-display-ai-powered-shelf-costco-retail-media-bzywc/?trackingId=iDN8F0wTSiefaSIXEZ4vyQ%3D%3D',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
  },
  {
    id: 'rel-youtube-dv360-loop',
    date: 'July 2026',
    tag: 'Offsite, Video, CTV, Social',
    title: 'Costco Retail Media partners with YouTube & Google Display (DV360)',
    type: 'Feature Update',
    description:
      'Connecting video exposures across YouTube and Google Display Ads directly to Costco Velocity to enable deterministic targeting and sales attribution.',
    highlights: [
      'Deterministic 1:1 audience matching made available within DV360 or Google Ads accounts',
      'Video ad reach extension across YouTube, YouTube Shorts, YouTube TV, and DV360',
      ' SKU-level closed-loop measurement for online and offline transactions',
      'Frequency capping across offsite video channels to optimize member experience',
    ],
    blogUrl:
      'https://www.linkedin.com/pulse/from-view-velocity-closing-loop-youtube-google-display-avlhc/?trackingId=SwZm1ooPQ2e2DG%2F9EQioYg%3D%3D',
    badgeColor: 'bg-green-100 text-green-800 border-green-200',
  },
  {
    id: 'rel-offsite-performance-shopping',
    date: 'June 2026',
    tag: 'Offsite',
    title: 'Extending the Treasure Hunt: Offsite Performance Shopping Ads',
    type: 'New Channel',
    description:
      'Bringing Costco’s curated product catalog to high-intent shoppers searching across external search engines and publisher commerce networks.',
    highlights: [
      'Dynamic feed sync reflecting real-time warehouse and online inventory',
      'Automated price and availability updates across Google Shopping and offsite ad networks',
      'Reaches active category searchers off-platform and directs them to Costco channels',
      'Closed-loop ROAS measurement tracking incremental online and warehouse sales lift',
    ],
    blogUrl:
      'https://www.linkedin.com/pulse/extending-treasure-hunt-introducing-offsite-performance-xzq0c/?trackingId=mz29SfDII%2BRnDEhdV%2BoY0Q%3D%3D',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
  },
];

const ROADMAP_DATA = [
  {
    quarter: 'Q3 2026',
    status: 'In Progress',
    statusColor: 'bg-amber-100 text-amber-800 border-amber-300',
    title: 'Connected TV (CTV) Closed-Loop Self-Service Portal',
    description:
      'Allowing brand partners to configure, flight, and measure streaming TV ads directly within the Costco Velocity console with real-time register lift reporting.',
    tags: ['CTV', 'Velocity Clean Room', 'Self-Serve'],
  },
  {
    quarter: 'Q4 2026',
    status: 'Planned',
    statusColor: 'bg-blue-100 text-blue-800 border-blue-300',
    title: 'Fuel Station Digital Screen Programmatic Bidding',
    description:
      'Enabling real-time programmatic bidding across our 800+ gas station pump screen network during peak fuel hours.',
    tags: ['IRL Display', 'Programmatic', 'Fuel Network'],
  },
  {
    quarter: 'Q1 2027',
    status: 'Under Consideration',
    statusColor: 'bg-gray-100 text-gray-700 border-gray-300',
    title: 'AI-Powered Creative Asset Optimization',
    description:
      'Generative creative formatting tool to automatically re-spec desktop banners for Costco Mobile App and warehouse digital kiosks.',
    tags: ['AI Tools', 'Creative Automation'],
  },
];

export default function Updates() {
  const [activeTab, setActiveTab] = useState('changelog');

  return (
    <div className="w-full bg-gray-50 text-gray-800 min-h-screen">
      {/* 1. Header Hero Section (Full-Bleed Gradient) */}
      <section className="w-full bg-gradient-to-br from-costco-darkBlue via-costco-blue to-blue-950 text-white py-16 lg:py-20 border-b border-blue-900">
        <div className="container-custom text-center">
          <span className="bg-white/10 text-blue-200 border border-white/20 text-xs font-extrabold uppercase px-4 py-1.5 rounded-full tracking-wider inline-flex items-center">
            <Sparkles className="w-3.5 h-3.5 mr-1.5 text-blue-300" />
            Product Updates & Roadmap
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-4">
            Keep up with the Costco Velocity Platform
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Stay up to date with monthly Costco Retail Media platform releases,
            tech improvements, and upcoming roadmap initiatives.
          </p>
        </div>
      </section>

      {/* 2. Main Content Section */}
      <section className="w-full py-12 lg:py-16 bg-gray-50">
        <div className="container-custom">
          {/* Centered Navigation Toggle Bar (Positioned Between Header & Notes) */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-200/80 p-1.5 rounded-full inline-flex space-x-1 border border-gray-300 shadow-inner">
              <button
                onClick={() => setActiveTab('changelog')}
                className={`flex items-center px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeTab === 'changelog'
                    ? 'bg-white text-gray-900 shadow-md scale-105'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Product Releases
              </button>
              <button
                onClick={() => setActiveTab('roadmap')}
                className={`flex items-center px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeTab === 'roadmap'
                    ? 'bg-white text-gray-900 shadow-md scale-105'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Product Roadmap
              </button>
            </div>
          </div>

          {/* =================================================================== */}
          {/* TAB 1: PRODUCT RELEASES (CHANGELOG)                               */}
          {/* =================================================================== */}
          {activeTab === 'changelog' && (
            <div className="max-w-4xl mx-auto space-y-12">
              {RELEASES_DATA.map((release) => (
                <div
                  key={release.id}
                  className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  {/* Release Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-6 mb-6">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        <Calendar className="w-3.5 h-3.5 mr-1.5" />
                        {release.date}
                      </span>
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full border ${release.badgeColor}`}
                      >
                        {release.type}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-400">
                      {release.tag}
                    </span>
                  </div>

                  {/* Release Title & Description */}
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                    {release.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm mb-6">
                    {release.description}
                  </p>

                  {/* Key Highlights List */}
                  <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                      Key Enhancements
                    </h4>
                    <ul className="space-y-2.5 text-sm font-semibold text-gray-700">
                      {release.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mr-2.5 flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Optional Blog Announcement Link */}
                  {release.blogUrl && (
                    <div className="pt-2 flex items-center justify-between">
                      <a
                        href={release.blogUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-bold text-costco-blue hover:underline"
                      >
                        Read full announcement
                        <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* =================================================================== */}
          {/* TAB 2: PRODUCT ROADMAP                                             */}
          {/* =================================================================== */}
          {activeTab === 'roadmap' && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-costco-blue/5 border border-costco-blue/20 rounded-2xl p-6 mb-8 text-center">
                <p className="text-xs font-bold text-costco-darkBlue uppercase tracking-wider mb-1">
                  Forward-Looking Statement
                </p>
                <p className="text-xs text-gray-600">
                  Our roadmap priorities are updated monthly based on advertiser
                  feedback and platform innovation. Dates and specs are subject
                  to change.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {ROADMAP_DATA.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-md transition-shadow"
                  >
                    <div className="space-y-2 max-w-2xl">
                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-extrabold uppercase text-costco-blue">
                          {item.quarter}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${item.statusColor}`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-extrabold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-600 text-[10px] font-semibold px-2.5 py-1 rounded-md"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <a
                        href="#contact"
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold px-4 py-2.5 rounded-xl inline-flex items-center transition-colors"
                      >
                        Request Early Access{' '}
                        <ChevronRight className="w-3.5 h-3.5 ml-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
