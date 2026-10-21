import React from 'react';
import {
  ArrowRight,
  ArrowDown,
  Check,
  X,
  Store,
  Laptop,
  Globe2,
  Quote,
} from 'lucide-react';

/*
  CONCEPT — Costco Retail Media, refreshed.
  Design notes:
  - Header / footer / general page layout are unchanged from the prototype.
  - Flat Costco colours only. No gradients, no glass, no SaaS decoration.
  - Sections are numbered like warehouse aisle signs — the one visual
    device every member already knows.
  - Copy is written in the plain, merchant-first voice Costco actually
    uses in public. Every number is a published Costco figure, with its
    period named. Every result names a brand.
*/

const FY = 'Costco fiscal 2026, ended Aug 30, 2026';

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
    alert('Thank you. We will be in touch to set up a meeting.');
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
              It sells merchandise, or it doesn&rsquo;t run.
            </p>
            <p className="text-lg text-blue-100 mb-10 max-w-2xl leading-relaxed">
              Every other network will show you an ad business. This is a
              warehouse business. Our members pay to shop here, they come
              looking to discover something, and when an item moves here,
              it moves by the pallet.
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

          {/* By-the-numbers card — the receipt, not a dashboard */}
          <div className="lg:col-span-5 bg-white text-gray-900 p-8 lg:p-10 shadow-2xl">
            <div className="border-b-2 border-gray-900 pb-4 mb-6 flex items-baseline justify-between">
              <span className="text-xs font-extrabold uppercase tracking-widest text-costco-blue">
                Costco, by the numbers
              </span>
              <span className="text-xs font-semibold text-gray-500">FY2026</span>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-8">
              <div>
                <p className="text-4xl lg:text-5xl font-extrabold text-costco-darkBlue tracking-tight">
                  84.1M
                </p>
                <p className="text-sm font-semibold text-gray-600 mt-1">
                  Paid members
                </p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-extrabold text-costco-darkBlue tracking-tight">
                  939
                </p>
                <p className="text-sm font-semibold text-gray-600 mt-1">
                  Warehouses worldwide
                </p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-extrabold text-costco-darkBlue tracking-tight">
                  92.3%
                </p>
                <p className="text-sm font-semibold text-gray-600 mt-1">
                  Renewal rate, U.S. &amp; Canada
                </p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-extrabold text-costco-darkBlue tracking-tight">
                  $297B
                </p>
                <p className="text-sm font-semibold text-gray-600 mt-1">
                  Net sales, up 10.1%
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-8 leading-relaxed">
              Source: Costco Wholesale fiscal 2026 results, ended Aug 30,
              2026. 150.4 million total cardholders. Executive members —
              about half of paid memberships — account for roughly
              three-quarters of worldwide sales.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- 01 THE DEAL ---------- */}
      <section id="concept-deal" className="py-20 lg:py-28 w-full bg-white">
        <div className="container-custom">
          <AisleSign number="01" label="The deal" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                Built to sell merchandise.
                <br />
                Not media.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-2xl">
                Most retail media is a new profit line for the retailer.
                Ours isn&rsquo;t. The value media creates here goes back
                where it has always gone at Costco — into member value,
                starting with price. That is not a tagline. It is how the
                company talks about this business on its own earnings
                calls.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                So we are measured the way our merchants are measured: did
                it sell more product, for more members, than it would have
                without us? If we can&rsquo;t help you turn more product,
                then what&rsquo;s the point?
              </p>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <figure className="bg-gray-50 border-l-4 border-costco-red p-6">
                <Quote className="w-6 h-6 text-costco-red mb-3" />
                <blockquote className="text-lg font-bold text-gray-900 leading-snug">
                  &ldquo;We aren&rsquo;t building a media network to hide
                  margin. We are building an engine to move
                  merchandise.&rdquo;
                </blockquote>
                <figcaption className="text-sm text-gray-600 mt-3">
                  Costco Velocity launch, February 2026
                </figcaption>
              </figure>
              <figure className="bg-gray-50 border-l-4 border-costco-blue p-6">
                <Quote className="w-6 h-6 text-costco-blue mb-3" />
                <blockquote className="text-lg font-bold text-gray-900 leading-snug">
                  &ldquo;We&rsquo;re a top line sales organization. Top
                  line sales translates to more membership renewal. More
                  membership renewal is what helps us keep the lights
                  on.&rdquo;
                </blockquote>
                <figcaption className="text-sm text-gray-600 mt-3">
                  Mark Williamson, AVP Retail Media — NRF 2025
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: 'Merchants first',
                body: 'Retail media here reports into the retail business, not around it. Your merchant is in the room — usually, they are the room.',
              },
              {
                title: 'Members before media',
                body: 'Every placement is a Costco brand experience first and an ad second. If it gets in the way of the shop, it does not run.',
              },
              {
                title: 'Sales, not impressions',
                body: 'We optimise toward actual sales and real incremental growth — not clicks, not credit for sales that would have happened anyway.',
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
            You don&rsquo;t rent this audience. They already joined.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-14">
            Nobody wanders into Costco. Members pay for the card, renew it
            year after year, and show it at the door. Every transaction is
            tied to a membership — which means we know what sold, to whom,
            without guessing, and without renting anyone&rsquo;s data to
            do it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <BigStat
              value="150.4M"
              label="Total cardholders"
              sub="84.1 million paid memberships, up 3.8% in a year."
            />
            <BigStat
              value="~75%"
              label="Of sales from Executive members"
              sub="42.3 million Executive members — about half of paid memberships, three-quarters of the business."
            />
            <BigStat
              value="92.3%"
              label="Renewal, U.S. & Canada"
              sub="89.8% worldwide. Members vote with their wallet every year, and they keep voting yes."
            />
            <BigStat
              value="100%"
              label="Of transactions tied to a member"
              sub="The card is scanned on every shop. That is the measurement foundation everything else sits on."
            />
          </div>
          <p className="text-xs text-gray-500 mt-10">All figures: {FY}.</p>
        </div>
      </section>

      {/* ---------- 03 FEWER ITEMS ---------- */}
      <section className="py-20 lg:py-28 w-full bg-white">
        <div className="container-custom">
          <AisleSign number="03" label="The assortment" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                Fewer items.
                <br />
                More of each one sold.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-2xl">
                A Costco warehouse carries fewer than 4,000 items. A
                typical superstore carries ten times that. In most
                categories there is one national brand on the floor —
                next to Kirkland Signature, which members trust like a
                brand of its own.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                That is what makes a placement here different. You are not
                one of forty facings fighting for the same click. When
                you are in, you are <em>in</em> — in front of members who
                came to discover the one right item, and who buy it in
                quantities that cover months, not days. One purchase here
                is three months of usage.
              </p>
            </div>
            <div className="lg:col-span-5 bg-costco-darkBlue text-white p-8 lg:p-10">
              <p className="text-6xl lg:text-7xl font-extrabold tracking-tight mb-2">
                &lt;4,000
              </p>
              <p className="font-bold text-lg mb-6">SKUs in a warehouse</p>
              <ul className="space-y-4 text-blue-100 leading-relaxed">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  Curated by merchants, on purpose. Getting in is the
                  hardest part — and the most valuable part.
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  No endless aisle, no marketplace of lookalikes. That is
                  not a gap in our model. It is the model.
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  Members trust the curation enough to buy what they
                  discover — that trust is the media surface.
                </li>
              </ul>
              <p className="text-xs text-blue-200 mt-8">
                SKU count: Costco fiscal 2025 Form 10-K.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 04 THE 3-PACK ---------- */}
      <section className="py-20 lg:py-28 w-full bg-gray-50 border-y border-gray-200">
        <div className="container-custom">
          <AisleSign number="04" label="Ways in" />
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            A 3-pack of ways to engage members
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mb-14">
            Three ways in. Start with the warehouse — and honestly? If
            someone asks us where $100,000 works hardest, we still say:
            have you tried to get an endcap? Have you tried sampling?
            Then let media do what media does best — extend what already
            works on the floor.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 p-8 flex flex-col">
              <div className="bg-blue-100 text-costco-blue p-3.5 w-max mb-6">
                <Laptop className="w-6 h-6" />
              </div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-costco-red mb-2">
                Pack 1 of 3
              </p>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                On Costco.com
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Sponsored products in search, and Reserved Display —
                placements we think of as <strong>digital endcaps</strong>:
                highly visible, highly relevant, right at the moment of
                shopping. Digitally-enabled sales passed $33 billion in
                FY2026, up more than 20%.
              </p>
              <ul className="text-sm font-semibold text-gray-800 space-y-2 mt-auto">
                <li>Sponsored Product Ads</li>
                <li>Reserved Display — digital endcaps</li>
                <li>Optimised toward in-warehouse sales, not just clicks</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-8 flex flex-col">
              <div className="bg-blue-100 text-costco-blue p-3.5 w-max mb-6">
                <Globe2 className="w-6 h-6" />
              </div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-costco-red mb-2">
                Pack 2 of 3
              </p>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                Beyond Costco.com
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                The same members, everywhere else they watch, read and
                shop — reached with Costco audiences through the
                exchanges and platforms you already use, including
                promotion of Costco-stocked products in Google Shopping.
                Google today. ChatGPT tomorrow, perhaps.
              </p>
              <ul className="text-sm font-semibold text-gray-800 space-y-2 mt-auto">
                <li>CTV, streaming and programmatic display</li>
                <li>The Trade Desk · Google · Yahoo · Epsilon · StackAdapt</li>
                <li>Closed-loop measurement back to warehouse sales</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-costco-darkBlue p-8 flex flex-col">
              <div className="bg-costco-darkBlue text-white p-3.5 w-max mb-6">
                <Store className="w-6 h-6" />
              </div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-costco-red mb-2">
                Pack 3 of 3 — the original
              </p>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                In the warehouse. In real life.
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                939 warehouses of theatre no screen can replicate: the
                endcap, the demo, the discovery in the aisle — plus
                warehouse TV, and print members actually read.{' '}
                <em>Costco Connection</em> mails 15.4 million copies a
                month, the third-largest magazine circulation in the
                U.S.
              </p>
              <ul className="text-sm font-semibold text-gray-800 space-y-2 mt-auto">
                <li>Warehouse TV and fuel-station screens</li>
                <li>Costco Connection &amp; Multi-Vendor Mailer</li>
                <li>The floor itself: endcaps and discovery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 05 THE STACK ---------- */}
      <section className="py-20 lg:py-28 w-full bg-gray-950 text-white">
        <div className="container-custom">
          <AisleSign number="05" label="How it works" dark />
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6 max-w-3xl">
            We published our whole tech stack. Here it is.
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-12">
            In January 2026 Costco became the first U.S. retail media
            network to put its entire stack on a slide, in public. No
            black box, no proprietary magic — we own what we should own
            (our data, our member experience) and we name the partners who
            do the rest. Ask the others to show you theirs.
          </p>

          <div className="border border-gray-800">
            {[
              ['Data foundation', 'A private Google Cloud instance. Member data stays at Costco.'],
              ['Identity', 'LiveRamp + MetaRouter'],
              ['Privacy', 'Transcend — we aim to be over-compliant, not just compliant'],
              ['Audiences', 'GrowthLoop, built from actual member purchase history'],
              ['On Costco.com', 'Criteo sponsored products · Moloco Reserved Display'],
              ['Clean room', 'Habu — measure offsite media in near real time, on demand'],
              ['Beyond Costco.com', 'The Trade Desk · Google · Yahoo DSP · Epsilon · StackAdapt · Symbiosys'],
              ['In the warehouse', 'PRN / Stratacache warehouse TV · fuel pilot'],
            ].map(([layer, who], i) => (
              <div
                key={layer}
                className={`grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 px-6 py-5 ${
                  i % 2 === 0 ? 'bg-gray-900' : 'bg-gray-950'
                }`}
              >
                <p className="font-extrabold text-white">{layer}</p>
                <p className="sm:col-span-2 text-gray-300">{who}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-6">
            And one rule that is not in the table: we do not rent out
            member data. Audiences are activated for your campaign.
            They are never sold as a list.
          </p>
        </div>
      </section>

      {/* ---------- 06 PROOF ---------- */}
      <section className="py-20 lg:py-28 w-full bg-white">
        <div className="container-custom">
          <AisleSign number="06" label="Proof" />
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6 max-w-3xl">
            Results, with a name on them.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-14">
            We would rather show you one real result — named, measured
            and stated by our CFO on an earnings call — than a wall of
            anonymous percentages. When there are more we can put a name
            to, they will go here.
          </p>

          <div className="border-2 border-gray-900 p-8 lg:p-12">
            <p className="text-xs font-extrabold uppercase tracking-widest text-costco-red mb-3">
              Kimberly-Clark — Multi-Vendor Mailer + targeted digital
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
            <p className="text-sm text-gray-500 mt-8">
              As reported by Costco&rsquo;s CFO on the fiscal Q4 2025
              earnings call. Method note: we measure against sales —
              online and in the warehouse — and we separate new demand
              from sales that simply moved channels.
            </p>
          </div>

          {/* What we won't do */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-20">
            <div className="lg:col-span-5">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
                What we won&rsquo;t do is also the pitch.
              </h3>
              <p className="text-gray-600 leading-relaxed mt-4">
                Every network has a list of things it will sell you. Ours
                is shorter, on purpose. These are the lines we hold
                because the members — and the model — come first.
              </p>
            </div>
            <ul className="lg:col-span-7 space-y-4">
              {[
                'We will not rent or sell member data. Ever.',
                'We will not chase a media margin target at the expense of member value.',
                'We will not turn the warehouse into a billboard. The shop comes first.',
                'We will not report impressions and call it impact.',
                'And when an idea is good for the ad business but wrong for Costco, that is where we say: that\u2019s enough.',
              ].map((line) => (
                <li key={line} className="flex gap-3 bg-gray-50 border border-gray-200 p-5">
                  <X className="w-5 h-5 text-costco-red shrink-0 mt-0.5" />
                  <span className="font-semibold text-gray-900 leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- 07 MEET ---------- */}
      <section id="concept-contact" className="py-20 lg:py-28 w-full bg-costco-darkBlue text-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <AisleSign number="07" label="Meet with us" dark />
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              Talk to us.
              <br />
              Start with your merchant.
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              That is how everything at Costco starts — with the
              merchandise. Tell us what you sell, where you sell it, and
              what you are trying to move. We will bring the right people,
              including the merchant side, and we will tell you plainly
              if we are not the right fit.
            </p>
            <p className="text-blue-200 leading-relaxed">
              We started late in retail media. We know it. We built it the
              Costco way anyway — and the members were already here,
              waiting.
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
                    What are you trying to move?
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
              <p className="text-xs text-gray-500 text-center">
                No media kit theatre. A conversation, with the numbers on
                the table.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
