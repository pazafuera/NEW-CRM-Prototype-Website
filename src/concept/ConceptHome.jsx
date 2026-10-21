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

export default function ConceptHome() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you. The Costco Retail Media team will be in touch to set up a meeting.');
  };

  return (
    <div className="w-full bg-white">
      {/* Concept marker */}
      <div className="bg-gray-950 text-white text-center text-xs font-bold tracking-[0.2em] uppercase py-2 px-4">
        Concept — a refreshed direction for Costco Retail Media
      </div>

      {/* ---------- HERO (same layout as the current home page) ---------- */}
      <section className="bg-costco-darkBlue text-white py-20 lg:py-28 w-full">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-blue-200 mb-6">
              Costco Retail Media — Powered by Costco Velocity
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95] mb-6">
              Retail media,
              <br />
              the Costco way.
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-white mb-4">
              Built to sell merchandise.
            </p>
            <p className="text-lg text-blue-100 mb-10 max-w-2xl leading-relaxed">
              Costco members pay to shop here. They come to discover
              something new, and they buy in quantities that last for
              months. Costco Retail Media puts your brand inside that
              relationship — on Costco.com, beyond it, and in the
              warehouse — and measures success the way Costco does: in
              sales.
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
            <div className="border-b-2 border-gray-900 pb-4 mb-6 flex items-baseline justify-between">
              <span className="text-xs font-extrabold uppercase tracking-widest text-costco-blue">
                Costco in the U.S.
              </span>
              <span className="text-xs font-semibold text-gray-500">FY2026</span>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-8">
              <div>
                <p className="text-4xl lg:text-5xl font-extrabold text-costco-darkBlue tracking-tight">
                  647
                </p>
                <p className="text-sm font-semibold text-gray-600 mt-1">
                  Warehouses in the U.S. &amp; Puerto Rico
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
                  &lt;4,000
                </p>
                <p className="text-sm font-semibold text-gray-600 mt-1">
                  Items in a warehouse — curated, on purpose
                </p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-extrabold text-costco-darkBlue tracking-tight">
                  100%
                </p>
                <p className="text-sm font-semibold text-gray-600 mt-1">
                  Of shoppers are members — the card is the relationship
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 01 THE DEAL ---------- */}
      <section id="concept-deal" className="py-20 lg:py-28 w-full bg-white">
        <div className="container-custom">
          <AisleSign number="01" label="The idea" />
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6 max-w-3xl">
            Media that earns its place, the same way items do.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-6">
            Everything in a Costco warehouse earned its space by selling.
            Our media works the same way. Costco Retail Media exists to
            help members find items they will love — and to help the
            brands that sell here sell more of them, in the warehouse and
            online.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-14">
            The value media creates flows back into the membership —
            into the prices and the experience that keep members
            renewing year after year. That flywheel is the business:
            members who trust Costco, brands that grow with Costco, and
            media that serves both.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Merchandise first',
                body: 'We are retailers first. Media plans start with the item, the member and the sales goal — and our team works alongside Costco\u2019s merchandising organization to build them.',
              },
              {
                title: 'Members first, always',
                body: 'Every placement is a Costco brand experience. Relevant, helpful, and worthy of the discovery members came for.',
              },
              {
                title: 'Measured in sales',
                body: 'Campaigns are optimised and reported against actual sales — online and in the warehouse — with a focus on real, incremental growth.',
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
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6 max-w-3xl">
            Members pay to shop here. That says everything.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-6">
            A Costco membership is a choice people make with their own
            money, and renewal is the strongest signal of loyalty in
            retail — members renew because the relationship keeps
            delivering value. That relationship is also getting younger:
            Millennials are the majority of new signups, Gen Z is the
            fastest-growing new member segment, and half of new signups
            are under 40.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-14">
            Because the relationship between Costco and its members is
            unlike any other in retail, our retail media solutions are
            unlike any other too — built on membership, measured in
            sales, and designed to add to the shop rather than interrupt
            it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <BigStat
              value="92.3%"
              label="Renewal rate, U.S. & Canada"
              sub="Members vote with their wallet every year — and they keep choosing Costco."
            />
            <BigStat
              value="50%"
              label="Of new signups are under 40"
              sub="A membership base that renews across generations."
            />
            <BigStat
              value="#1"
              label="Millennials lead new signups"
              sub="The majority of new members joining Costco today."
            />
            <BigStat
              value="Fastest"
              label="Gen Z is the fastest-growing new member segment"
              sub="The next generation of members is arriving now."
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
              <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-2xl">
                Ask a member why they love Costco and they will describe
                discovery: the treasure hunt, the unexpected find, the
                item they didn&rsquo;t come for and can&rsquo;t stop
                talking about. A tightly curated assortment makes that
                possible — with fewer than 4,000 items in a warehouse,
                every item is findable, and every find feels earned.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                Curation is also efficiency. Each item in the building
                carries far more sales than in a typical store, which
                keeps costs low and value high — and makes a placement
                here efficient too. Your brand isn&rsquo;t one of
                thousands competing for the same moment. It&rsquo;s one
                of a few, in front of members who are looking to discover
                it.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                Costco Retail Media extends the hunt. We help members
                discover your item before they ever step into the
                warehouse — so the trip starts with your brand already
                on their list, and the discovery continues in the aisle.
              </p>
            </div>
            <div className="lg:col-span-5 bg-costco-darkBlue text-white p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-7 h-7" />
                <p className="font-extrabold text-lg">Why discovery works here</p>
              </div>
              <ul className="space-y-5 text-blue-50 leading-relaxed">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>
                    <strong>Curated assortment.</strong> Fewer than 4,000
                    items, chosen by Costco merchants. Getting in is
                    selective — and valuable.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>
                    <strong>Efficient by design.</strong> High sales per
                    item across the warehouse, and media that works the
                    same way.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>
                    <strong>Growth in every trip.</strong> Members arrive
                    ready to find something new — one purchase here
                    covers months of usage.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>
                    <strong>Discovery, extended.</strong> Reach members at
                    home, on the go, and in the aisle — one connected
                    treasure hunt.
                  </span>
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
              to="/solutions"
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
                647 U.S. warehouses of discovery — screens, print
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

      {/* ---------- 06 PROOF ---------- */}
      <section className="py-20 lg:py-28 w-full bg-white">
        <div className="container-custom">
          <AisleSign number="06" label="Proof" />
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-14 max-w-3xl">
            It works. Here&rsquo;s the evidence.
          </h2>

          <div className="border-2 border-gray-900 p-8 lg:p-12">
            <p className="text-xs font-extrabold uppercase tracking-widest text-costco-red mb-3">
              Kimberly-Clark
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-10">
              A campaign combining Costco&rsquo;s Multi-Vendor Mailer
              with targeted digital media delivered:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              <div>
                <p className="text-5xl lg:text-6xl font-extrabold text-costco-darkBlue tracking-tight">
                  14:1
                </p>
                <p className="font-bold text-gray-900 mt-1">Return on ad spend</p>
              </div>
              <div>
                <p className="text-5xl lg:text-6xl font-extrabold text-costco-darkBlue tracking-tight">
                  +45%
                </p>
                <p className="font-bold text-gray-900 mt-1">
                  Digital sales of promoted items
                </p>
              </div>
              <div>
                <p className="text-5xl lg:text-6xl font-extrabold text-costco-darkBlue tracking-tight">
                  +22%
                </p>
                <p className="font-bold text-gray-900 mt-1">
                  Product-page traffic
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
            Sources &amp; notes: Warehouse count (647 in the United
            States and Puerto Rico) and membership renewal rate (92.3%,
            U.S. and Canada) — Costco Wholesale Corporation fiscal 2026
            operating results, year ended August 30, 2026. Assortment
            size (fewer than 4,000 active SKUs per warehouse) — Costco
            Wholesale fiscal 2025 Form 10-K. New member demographics —
            Costco company reporting. Kimberly-Clark campaign results —
            as reported by Costco Wholesale Corporation, fiscal 2025.
            This page is a design concept for discussion.
          </p>
        </div>
      </section>
    </div>
  );
}
