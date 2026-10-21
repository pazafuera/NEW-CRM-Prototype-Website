import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowDown,
  Check,
  Store,
  Laptop,
  Globe2,
  MousePointerClick,
  Database,
  BarChart3,
  Sparkles,
} from 'lucide-react';

/*
  CONCEPT v2 — Costco Retail Media, refreshed.
  Direction applied (Oct 21, 2026):
  - U.S. business: figures are U.S. figures.
  - Talk about what Costco does. Positive framing throughout.
  - Concepts, not quotations. No named competitors, no comparisons.
  - All source notes live in the small print at the bottom of the page.
  - Header / footer / general layout unchanged from the prototype.
*/

function AisleSign({ number, label, dark = false }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div
        className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 border-4 font-extrabold text-2xl sm:text-3xl tracking-tight shrink-0 ${
          dark
            ? 'border-white text-white bg-transparent'
            : 'border-costco-darkBlue text-costco-darkBlue bg-white'
        }`}
        aria-hidden="true"
      >
        {number}
      </div>
      <span
        className={`text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] ${
          dark ? 'text-blue-200' : 'text-costco-red'
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function BigStat({ value, label, sub }) {
  return (
    <div className="border-t-4 border-costco-red pt-4">
      <p className="text-4xl lg:text-5xl font-extrabold text-costco-darkBlue tracking-tight">
        {value}
      </p>
      <p className="text-sm font-bold text-gray-900 mt-1">{label}</p>
      {sub ? <p className="text-sm text-gray-600 mt-1 leading-relaxed">{sub}</p> : null}
    </div>
  );
}

/* Flat in-page illustration: a warehouse aisle — pallets, racking, a member with a cart. */
function WarehouseArt() {
  return (
    <svg viewBox="0 0 560 420" className="w-full h-auto" role="img" aria-label="Illustration of a Costco warehouse aisle">
      <rect width="560" height="420" fill="#F4F6F8" />
      {/* ceiling + lights */}
      <rect width="560" height="54" fill="#003B6D" />
      {[70, 210, 350, 480].map((x) => (
        <g key={x}>
          <rect x={x} y="54" width="6" height="26" fill="#9db8cc" />
          <rect x={x - 22} y="80" width="50" height="12" rx="6" fill="#ffd34d" />
        </g>
      ))}
      {/* aisle sign */}
      <g>
        <rect x="238" y="98" width="84" height="64" fill="#ffffff" stroke="#003B6D" strokeWidth="5" />
        <text x="280" y="146" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="38" fill="#003B6D">01</text>
      </g>
      {/* left racking with pallet boxes */}
      <g>
        <rect x="30" y="150" width="14" height="230" fill="#E31837" />
        <rect x="196" y="150" width="14" height="230" fill="#E31837" />
        <rect x="30" y="212" width="180" height="10" fill="#E31837" />
        <rect x="30" y="292" width="180" height="10" fill="#E31837" />
        <rect x="52" y="164" width="58" height="44" fill="#d9a45b" />
        <rect x="118" y="164" width="58" height="44" fill="#c68f3e" />
        <rect x="52" y="244" width="58" height="44" fill="#c68f3e" />
        <rect x="118" y="244" width="58" height="44" fill="#d9a45b" />
        <rect x="46" y="330" width="150" height="16" fill="#8a5a2b" />
        <rect x="56" y="306" width="130" height="24" fill="#e3b96f" />
      </g>
      {/* right pallet stack */}
      <g>
        <rect x="392" y="238" width="140" height="20" fill="#8a5a2b" />
        <rect x="402" y="186" width="120" height="52" fill="#d9a45b" />
        <rect x="402" y="258" width="120" height="52" fill="#c68f3e" />
        <rect x="392" y="310" width="140" height="20" fill="#8a5a2b" />
        {/* price sign */}
        <rect x="416" y="118" width="92" height="52" fill="#ffffff" stroke="#111" strokeWidth="3" />
        <text x="462" y="153" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="26" fill="#111">14.99</text>
      </g>
      {/* floor */}
      <rect y="380" width="560" height="40" fill="#d7dde3" />
      {/* member + cart */}
      <g>
        <circle cx="292" cy="252" r="17" fill="#f2c09a" />
        <path d="M292 235 q4 -14 17 -10 q-2 12 -10 14 q-8 2 -7 -4" fill="#5b3a1e" />
        <rect x="276" y="269" width="32" height="58" rx="8" fill="#0060A9" />
        <rect x="284" y="327" width="9" height="42" fill="#33404d" />
        <rect x="296" y="327" width="9" height="42" fill="#33404d" />
        <rect x="300" y="282" width="42" height="7" rx="3" fill="#0060A9" transform="rotate(18 300 282)" />
        {/* flat cart */}
        <g stroke="#7c8a96" strokeWidth="4" fill="none">
          <path d="M342 292 h74 l-10 44 h-58 z" fill="#e8edf1" />
          <path d="M348 306 h62 M352 320 h54" strokeWidth="3" />
        </g>
        <rect x="362" y="262" width="34" height="30" fill="#E31837" />
        <circle cx="356" cy="352" r="8" fill="#33404d" />
        <circle cx="404" cy="352" r="8" fill="#33404d" />
      </g>
    </svg>
  );
}

/* Flat in-page illustration: the membership card — the relationship, in your wallet. */
function MembershipArt() {
  return (
    <svg viewBox="0 0 560 420" className="w-full h-auto" role="img" aria-label="Illustration of a Costco membership card">
      <rect width="560" height="420" fill="#ffffff" />
      <circle cx="472" cy="66" r="90" fill="#F4F6F8" />
      <circle cx="60" cy="368" r="110" fill="#F4F6F8" />
      {/* back card */}
      <g transform="rotate(7 300 215)">
        <rect x="128" y="92" width="330" height="208" rx="16" fill="#111827" />
        <rect x="128" y="126" width="330" height="34" fill="#c9a227" />
        <text x="152" y="205" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="24" fill="#ffffff">EXECUTIVE MEMBER</text>
        <text x="152" y="238" fontFamily="Arial, sans-serif" fontSize="14" fill="#9ca3af">THE CARD THAT RENEWS</text>
      </g>
      {/* front card */}
      <g transform="rotate(-5 260 220)">
        <rect x="86" y="118" width="330" height="208" rx="16" fill="#ffffff" stroke="#d1d5db" strokeWidth="2" />
        <rect x="86" y="118" width="330" height="56" rx="16" fill="#0060A9" />
        <rect x="86" y="150" width="330" height="24" fill="#0060A9" />
        <text x="110" y="156" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="27" fill="#ffffff">Costco</text>
        <text x="238" y="156" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="15" fill="#bcd7ee">MEMBER CARD</text>
        <rect x="110" y="196" width="46" height="34" rx="5" fill="#e5c15c" />
        <circle cx="352" cy="238" r="30" fill="#F4F6F8" stroke="#d1d5db" strokeWidth="2" />
        <circle cx="352" cy="228" r="11" fill="#9db8cc" />
        <path d="M332 258 q20 -18 40 0" stroke="#9db8cc" strokeWidth="7" fill="none" />
        <text x="110" y="262" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="17" fill="#111827">A. MEMBER</text>
        <text x="110" y="288" fontFamily="Arial, sans-serif" fontSize="13" fill="#6b7280">MEMBER SINCE 2016 · RENEWS EVERY YEAR</text>
        <rect x="86" y="304" width="330" height="8" fill="#E31837" />
      </g>
    </svg>
  );
}

export default function ConceptHome() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you. The Costco Retail Media team will be in touch to set up a meeting.');
  };

  return (
    <div className="w-full bg-white">
      {/* ---------- HERO (same layout as the current home page) ---------- */}
      <section className="bg-costco-darkBlue text-white py-20 lg:py-28 w-full">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95] mb-6">
              Retail media,
              <br />
              the Costco way.
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-white mb-10">
              Built to drive velocity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#concept-contact"
                className="bg-costco-red hover:bg-red-700 text-white font-bold text-center px-8 py-4 rounded-full shadow-lg transition-all"
              >
                Meet With Us
              </a>
              <a
                href="#concept-deal"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white/60 font-semibold text-center px-8 py-4 rounded-full transition-all inline-flex items-center justify-center gap-2"
              >
                How It Works <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* By-the-numbers card — U.S. figures */}
          <div className="lg:col-span-5 bg-white text-gray-900 p-8 lg:p-10 shadow-2xl">
            <div className="grid grid-cols-2 gap-x-6 gap-y-8">
              <div>
                <p className="text-4xl lg:text-5xl font-extrabold text-costco-darkBlue tracking-tight">
                  650+
                </p>
                <p className="text-sm font-semibold text-gray-600 mt-1">
                  U.S. warehouses
                </p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-extrabold text-costco-darkBlue tracking-tight">
                  92.3%
                </p>
                <p className="text-sm font-semibold text-gray-600 mt-1">
                  Membership renewal, U.S. &amp; Canada
                </p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-extrabold text-costco-darkBlue tracking-tight">
                  90M+
                </p>
                <p className="text-sm font-semibold text-gray-600 mt-1">
                  U.S. cardholders
                </p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-extrabold text-costco-darkBlue tracking-tight">
                  100%
                </p>
                <p className="text-sm font-semibold text-gray-600 mt-1">
                  Membership-linked transactions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 01 THE IDEA ---------- */}
      <section id="concept-deal" className="py-20 lg:py-28 w-full bg-white">
        <div className="container-custom">
          <AisleSign number="01" label="The idea" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14">
            <div className="lg:col-span-6">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                Merchandise and members. Both first.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Costco there is no trade-off between the two. Great
                merchandise is why members join and renew — and members
                are why great merchandise sells here like nowhere else.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Costco Retail Media serves both at once: it helps members
                discover items they will love, and helps brands sell more
                of them. The value it creates flows back into the
                membership — the prices and experience that keep members
                coming back.
              </p>
            </div>
            <div className="lg:col-span-6 border border-gray-200">
              <WarehouseArt />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Built with merchandising',
                body: 'Plans start with the item and the sales goal, built alongside Costco\u2019s merchants.',
              },
              {
                title: 'A Costco experience',
                body: 'Every placement adds to the shop members came for — relevant, helpful, discoverable.',
              },
              {
                title: 'Measured in sales',
                body: 'Optimised and reported against actual sales, online and in the warehouse.',
              },
            ].map((item) => (
              <div key={item.title} className="border-t-4 border-costco-darkBlue pt-5">
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 02 THE MEMBERS ---------- */}
      <section className="py-20 lg:py-28 w-full bg-gray-50 border-y border-gray-200">
        <div className="container-custom">
          <AisleSign number="02" label="The members" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14">
            <div className="lg:col-span-6 border border-gray-200 bg-white order-2 lg:order-1">
              <MembershipArt />
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                Members pay to shop here. That says everything.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Membership is a choice people make with their own money —
                and renewal is the strongest signal of loyalty in retail.
                Members renew because the relationship keeps delivering.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                That relationship is unique, so our retail media is too:
                built on membership, welcomed by members, and getting
                younger every year.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <BigStat
              value="Millennials"
              label="The majority of new signups"
              sub="The generation now forming households is joining Costco in force."
            />
            <BigStat
              value="Gen Z"
              label="The fastest-growing new member segment"
              sub="The next generation of members is arriving now."
            />
            <BigStat
              value="50%"
              label="Of new signups are under 40"
              sub="A membership base that renews — and refreshes — across generations."
            />
          </div>
        </div>
      </section>

      {/* ---------- 03 DISCOVERY & EFFICIENCY ---------- */}
      <section className="py-20 lg:py-28 w-full bg-white">
        <div className="container-custom">
          <AisleSign number="03" label="Discovery" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                The treasure hunt starts before the trip.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                Members come to Costco to discover: the treasure hunt,
                the unexpected find. A curated assortment makes it
                possible — and efficient. Every item earns its place and
                sells in volume, so a placement here is one of a few, in
                front of members who are looking to find it.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mt-6">
                We start the hunt early — helping members discover your
                item before they ever step into the warehouse.
              </p>
            </div>
            <div className="lg:col-span-5 bg-costco-darkBlue text-white p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-7 h-7" />
                <p className="font-extrabold text-lg">Why it works</p>
              </div>
              <ul className="space-y-4 text-blue-50 leading-relaxed">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span><strong>Curated.</strong> Fewer than 4,000 items per warehouse.</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span><strong>Efficient.</strong> High sales per item — and per placement.</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span><strong>Growing.</strong> One purchase here covers months of usage.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 04 WAYS IN ---------- */}
      <section className="py-20 lg:py-28 w-full bg-gray-50 border-y border-gray-200">
        <div className="container-custom">
          <AisleSign number="04" label="Ways in" />
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-14 gap-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
                A 3-pack of ways to engage members
              </h2>
              <p className="text-lg text-gray-700">
                Online, everywhere members go, and in the warehouse
                itself. Explore the full range of formats and specs on
                our Solutions page.
              </p>
            </div>
            <Link
              to="/concept/solutions"
              className="bg-costco-blue hover:bg-costco-darkBlue text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all inline-flex items-center gap-2 shrink-0"
            >
              Explore Solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 p-8">
              <div className="bg-blue-100 text-costco-blue p-3.5 w-max mb-6">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                On Costco.com
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Reach members while they shop Costco.com and the Costco
                app — placements that work like digital endcaps: highly
                visible, highly relevant, right at the moment of
                shopping.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8">
              <div className="bg-blue-100 text-costco-blue p-3.5 w-max mb-6">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                Beyond Costco.com
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Extend your campaign to the same members across the
                places they watch, read and shop — with every result
                measured back to Costco sales.
              </p>
            </div>

            <div className="bg-white border-2 border-costco-darkBlue p-8">
              <div className="bg-costco-darkBlue text-white p-3.5 w-max mb-6">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                In the warehouse. In real life.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                650+ U.S. warehouses of discovery — screens, print
                members love to read, and the floor itself, where the
                treasure hunt happens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 05 COSTCO VELOCITY ---------- */}
      <section className="py-20 lg:py-28 w-full bg-gray-950 text-white">
        <div className="container-custom">
          <AisleSign number="05" label="Costco Velocity" dark />
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6 max-w-3xl">
            Powered by Costco Velocity.
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-14">
            Velocity is the engine underneath Costco Retail Media — named
            for what it is built to create: sales velocity for the items
            Costco sells. It connects every member transaction to every
            campaign, so brands can find the right members, and prove
            what their media actually sold.
          </p>

          {/* Visual: how Velocity works, and why it matters */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-14">
            <div className="lg:col-span-3 bg-gray-900 border border-gray-800 p-7 flex flex-col">
              <Database className="w-8 h-8 text-blue-300 mb-4" />
              <h3 className="font-extrabold text-lg mb-2">Every sale is a member sale</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                The membership card connects every transaction — in the
                warehouse and online — to a member. That is a complete,
                first-party view of what members actually buy.
              </p>
            </div>
            <div className="hidden lg:flex items-center justify-center lg:col-span-1">
              <ArrowRight className="w-8 h-8 text-costco-red" />
            </div>
            <div className="lg:col-span-4 bg-costco-darkBlue border border-blue-900 p-7 flex flex-col">
              <MousePointerClick className="w-8 h-8 text-white mb-4" />
              <h3 className="font-extrabold text-lg mb-2">Velocity puts it to work</h3>
              <p className="text-blue-100 leading-relaxed text-sm">
                Build audiences from real purchase history. Reach those
                members on Costco.com, across the web, and in the
                warehouse. Member data stays at Costco — audiences are
                created for your campaign, inside Costco&rsquo;s walls.
              </p>
            </div>
            <div className="hidden lg:flex items-center justify-center lg:col-span-1">
              <ArrowRight className="w-8 h-8 text-costco-red" />
            </div>
            <div className="lg:col-span-3 bg-gray-900 border border-gray-800 p-7 flex flex-col">
              <BarChart3 className="w-8 h-8 text-blue-300 mb-4" />
              <h3 className="font-extrabold text-lg mb-2">Measured in sales</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                The loop closes at the register. See the sales your
                campaign drove — online and in the warehouse — and what
                was truly incremental.
              </p>
            </div>
          </div>

          <Link
            to="/velocity"
            className="bg-costco-blue hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all inline-flex items-center gap-2 text-sm uppercase tracking-wider"
          >
            Explore Costco Velocity <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ---------- 06 DIGITAL ---------- */}
      <section className="py-20 lg:py-28 w-full bg-white">
        <div className="container-custom">
          <AisleSign number="06" label="Digital" />
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-14">
            The warehouse is famous. Digital is growing, too.
          </h2>

          <div className="border-2 border-gray-900 p-8 lg:p-12">
            {/* Stats row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-12">
              <div>
                <p className="text-5xl lg:text-6xl font-extrabold text-costco-darkBlue tracking-tight">
                  $33B+
                </p>
                <p className="font-bold text-gray-900 mt-1">
                  Digitally enabled sales in FY26
                </p>
              </div>
              <div>
                <p className="text-5xl lg:text-6xl font-extrabold text-costco-red tracking-tight">
                  30%
                </p>
                <p className="font-bold text-gray-900 mt-1">
                  Digital traffic increase in FY26
                </p>
              </div>
              <div>
                <p className="text-5xl lg:text-6xl font-extrabold text-costco-red tracking-tight">
                  20.9%
                </p>
                <p className="font-bold text-gray-900 mt-1">
                  Digital sales growth in FY26
                </p>
              </div>
            </div>

            {/* Engagement note */}
            <div className="border-t border-gray-200 mt-12 pt-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="flex items-baseline gap-4">
                <p className="text-5xl lg:text-6xl font-extrabold text-costco-darkBlue tracking-tight shrink-0">
                  40%
                </p>
                <p className="font-bold text-gray-900 leading-snug">
                  Of members actively shop online
                </p>
              </div>
              <div className="flex items-baseline gap-4">
                <p className="text-5xl lg:text-6xl font-extrabold text-costco-darkBlue tracking-tight shrink-0">
                  XX%
                </p>
                <p className="font-bold text-gray-900 leading-snug">
                  Are digitally engaged — including warehouse members who
                  receive emails, visit Costco.com, and use a digital
                  membership card
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 07 MEET ---------- */}
      <section id="concept-contact" className="py-20 lg:py-28 w-full bg-costco-darkBlue text-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <AisleSign number="07" label="Meet with us" dark />
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              Talk to Costco Retail Media.
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              Tell us what you sell and what you are trying to grow.
              Our team will bring a plan built on your goals — and the
              numbers to go with it.
            </p>
            <p className="text-blue-200 leading-relaxed">
              One conversation is all it takes to see why brands that
              sell at Costco are building their plans around Costco
              Retail Media.
            </p>
          </div>

          <div className="lg:col-span-7 bg-white text-gray-900 p-8 lg:p-10 shadow-2xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                  Do you sell at Costco today?
                </label>
                <select className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-costco-blue">
                  <option>Yes — warehouse, Costco.com, or both</option>
                  <option>Not yet — we want to</option>
                  <option>We sell a service / non-endemic category</option>
                  <option>I&rsquo;m an agency, asking for a client</option>
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-costco-blue"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-costco-blue"
                    placeholder="jane@brand.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                    Company / Brand
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-costco-blue"
                    placeholder="Acme Foods"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                    What are you looking to grow?
                  </label>
                  <select className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-costco-blue">
                    <option>A current item — sell more of it</option>
                    <option>A new item — launch it</option>
                    <option>A seasonal / in-and-out item</option>
                    <option>Not sure yet — advise us</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-costco-red hover:bg-red-700 text-white font-bold py-4 rounded-full shadow-md transition text-sm uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Request a Meeting</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ---------- SMALL PRINT ---------- */}
      <section className="py-10 w-full bg-white">
        <div className="container-custom">
          <p className="text-[11px] leading-relaxed text-gray-400 max-w-5xl">
            Sources &amp; notes: U.S. warehouse count (650+), U.S.
            cardholders (90M+) and new member demographics — Costco
            company reporting. Membership renewal rate (92.3%, U.S. and
            Canada) — Costco Wholesale Corporation fiscal 2026
            operating results, year ended August 30, 2026. Assortment
            size (fewer than 4,000 active SKUs per warehouse) — Costco
            Wholesale fiscal 2025 Form 10-K. Digital figures (digitally
            enabled sales, digital traffic and sales growth, member
            online shopping and digital engagement) — Costco internal,
            fiscal 2026.
          </p>
        </div>
      </section>
    </div>
  );
}
