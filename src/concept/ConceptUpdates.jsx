import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

/*
  CONCEPT — What's New, rebuilt in the concept style.
  Kept deliberately simple: short developments, one sentence each,
  and a short look ahead. To add an item, add an object to the top
  of the relevant array.
*/

const RELEASES = [
  {
    date: 'August 2026',
    tag: 'Onsite & App',
    title: 'A new onsite ad server: the AI-powered Shelf',
    description:
      'Reserved and performance placements become dynamic, personalised showcases — featured products matched to each member\u2019s purchase habits, with closed-loop measurement to warehouse sales.',
    url: 'https://www.linkedin.com/pulse/onsite-reserved-display-ai-powered-shelf-costco-retail-media-bzywc/?trackingId=iDN8F0wTSiefaSIXEZ4vyQ%3D%3D',
  },
  {
    date: 'July 2026',
    tag: 'Offsite · Video & CTV',
    title: 'YouTube and Google Display, connected to Velocity',
    description:
      'Video exposures across YouTube and Google Display (DV360) now connect to Costco Velocity — deterministic member audiences, household frequency control, and SKU-level sales attribution.',
    url: 'https://www.linkedin.com/pulse/from-view-velocity-closing-loop-youtube-google-display-avlhc/?trackingId=SwZm1ooPQ2e2DG%2F9EQioYg%3D%3D',
  },
  {
    date: 'June 2026',
    tag: 'Offsite',
    title: 'Extending the treasure hunt: Performance Shopping Ads',
    description:
      'Costco\u2019s curated catalogue meets high-intent shoppers on external search — feeds synced to real-time inventory and pricing, measured on incremental online and warehouse sales.',
    url: 'https://www.linkedin.com/pulse/extending-treasure-hunt-introducing-offsite-performance-xzq0c/?trackingId=mz29SfDII%2BRnDEhdV%2BoY0Q%3D%3D',
  },
];

const ROADMAP = [
  {
    quarter: 'Q3 2026',
    status: 'In progress',
    title: 'Connected TV self-service',
    description:
      'Configure, flight, and measure streaming TV campaigns directly in the Velocity console, with real-time register lift reporting.',
  },
  {
    quarter: 'Q4 2026',
    status: 'Planned',
    title: 'Fuel station screens, programmatic',
    description:
      'Real-time programmatic bidding across the fuel station screen network during peak fuel hours.',
  },
  {
    quarter: 'Q1 2027',
    status: 'Under consideration',
    title: 'AI-powered creative optimisation',
    description:
      'Automatic reformatting of creative for the Costco app and warehouse screens.',
  },
];

export default function ConceptUpdates() {
  return (
    <div className="w-full bg-white font-sans">
      {/* ---------- HERO ---------- */}
      <section className="bg-costco-darkBlue text-white py-20 lg:py-24 w-full">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95] mb-6">
            What&rsquo;s New
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl leading-relaxed">
            New developments in Costco Retail Media and the Velocity
            platform — and a short look at what&rsquo;s ahead.
          </p>
        </div>
      </section>

      {/* ---------- RELEASES ---------- */}
      <section className="py-16 lg:py-20 w-full bg-white">
        <div className="container-custom">
          <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-costco-red mb-10">
            Latest developments
          </h2>
          <div className="max-w-4xl">
            {RELEASES.map((r, i) => (
              <article
                key={r.title}
                className={`py-8 ${i > 0 ? 'border-t border-gray-200' : 'pt-0'}`}
              >
                <p className="text-xs font-extrabold uppercase tracking-widest text-gray-400 mb-2">
                  {r.date} · {r.tag}
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug mb-3">
                  {r.title}
                </h3>
                <p className="text-gray-700 leading-relaxed max-w-3xl mb-4">
                  {r.description}
                </p>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-costco-blue font-bold inline-flex items-center gap-1.5 hover:underline"
                >
                  Read the announcement <ArrowUpRight className="w-4 h-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ROADMAP ---------- */}
      <section className="py-16 lg:py-20 w-full bg-gray-50 border-y border-gray-200">
        <div className="container-custom">
          <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-costco-red mb-4">
            Looking ahead
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mb-10">
            Where the platform goes next. Direction, not dates carved
            in stone.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {ROADMAP.map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 p-7">
                <p className="text-xs font-extrabold uppercase tracking-widest text-gray-400 mb-3">
                  {item.quarter} · {item.status}
                </p>
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="py-14 lg:py-20 w-full bg-white">
        <div className="container-custom flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-lg text-gray-700 max-w-2xl">
            Questions about a release, or the roadmap? The team is glad
            to walk through what it means for your brand.
          </p>
          <Link
            to="/concept"
            className="bg-costco-red hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all inline-flex items-center gap-2 shrink-0"
          >
            Talk to the Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
