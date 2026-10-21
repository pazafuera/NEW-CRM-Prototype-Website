import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Laptop,
  Globe2,
  Store,
  BarChart3,
  ArrowRight,
  ArrowUpRight,
  X,
  Search,
  LayoutTemplate,
  Monitor,
  Layout,
  ShoppingBag,
  Truck,
  Smartphone,
  Briefcase,
  LayoutDashboard,
  Tv,
  Share2,
  Mail,
  Bell,
  MonitorSpeaker,
  Fuel,
  BookOpen,
  Send,
  Plug,
  ChevronDown,
} from 'lucide-react';

/*
  CONCEPT — Solutions, streamlined to match the concept home page.
  - Every placement from the current page is here. Nothing dropped.
  - High-level first: one plain sentence per format. Detail lives in a
    side drawer, one click away — not a full media kit.
  - Placeholder stats and copy-pasted targeting lines from the current
    page are removed. Specs are stated plainly: how to buy, what it's
    measured against, how reporting arrives.
  - A Questions section answers what advertisers ask first.
*/

const GROUPS = [
  {
    id: 'onsite',
    number: '01',
    label: 'On Costco.com',
    icon: Laptop,
    intro:
      'Members shopping Costco.com and the Costco app — high intent, close to the buy.',
  },
  {
    id: 'offsite',
    number: '02',
    label: 'Beyond Costco.com',
    icon: Globe2,
    intro:
      'The same members, across the web, streaming and social — every result measured back to Costco sales.',
  },
  {
    id: 'warehouse',
    number: '03',
    label: 'In the warehouse',
    icon: Store,
    intro:
      '650+ U.S. warehouses, the fuel station, and the mail members look forward to.',
  },
  {
    id: 'measurement',
    number: '04',
    label: 'Measurement',
    icon: BarChart3,
    intro:
      'Because every transaction is membership-linked, campaigns are measured against real sales — online and in the warehouse.',
  },
];

const PLACEMENTS = [
  // --- On Costco.com ---
  {
    id: 'sponsored-product-ads',
    group: 'onsite',
    icon: Search,
    title: 'Sponsored Product Ads',
    short:
      'Your product at the top of search results and category pages on Costco.com and in the app.',
    about:
      'When a member searches Costco.com, they are ready to buy. Sponsored Product Ads put your item in the premium positions in search and category grids — on the website and in the app.',
    points: [
      'Top-of-search and in-grid placements on Costco.com and the app',
      'Bidding informed by real member purchase signals',
      'Inventory-aware: placements pause when an item is out of stock',
    ],
    buy: 'Managed or self-serve',
    measured: 'Online sales, at SKU level',
    reporting: 'Dashboard',
  },
  {
    id: 'sponsored-display',
    group: 'onsite',
    icon: LayoutTemplate,
    title: 'Sponsored Display',
    short:
      'Display placements inside the Costco.com shopping journey, targeted with real purchase history.',
    about:
      'Display that reaches members while they browse Costco.com — targeted using actual purchase history and category behaviour, and measured against sales on and off the site.',
    points: [
      'Placements within browsing and category pages',
      'Targeting from member purchase history and browsing behaviour',
      'Measured against warehouse and online sales, not just clicks',
    ],
    buy: 'Managed or self-serve',
    measured: 'Warehouse and online sales',
    reporting: 'Dashboard',
  },
  {
    id: 'reserved-display',
    group: 'onsite',
    icon: Monitor,
    title: 'Reserved Display',
    short:
      'Premium reserved placements on the homepage and category pages. Our digital endcaps.',
    about:
      'Reserved Display is the digital endcap: guaranteed, high-visibility placements on the Costco.com homepage and category hubs, reserved in advance for the moments that matter — launches, seasonal peaks, and mailer events.',
    points: [
      'Guaranteed premium positions, reserved in advance',
      'Targeted to the member profiles you choose',
      'Ideal alongside seasonal moments and Multi-Vendor Mailer events',
    ],
    buy: 'Managed',
    measured: 'Warehouse and online sales',
    reporting: 'Dashboard',
  },
  {
    id: 'native-placements',
    group: 'onsite',
    icon: Layout,
    title: 'Native Placements',
    short:
      'Placements that look and feel like Costco merchandising — because members trust how Costco presents items.',
    about:
      'Native Placements are built in Costco\u2019s own merchandising style and placed inside homepage and category features. They earn attention the way items do in the warehouse: by fitting the discovery members came for.',
    points: [
      'Designed to match Costco editorial and merchandising content',
      'Curated homepage and category features',
      'Routes members to brand collections and product pages',
    ],
    buy: 'Managed',
    measured: 'Warehouse and online sales',
    reporting: 'Campaign report',
  },
  {
    id: 'brand-showcases',
    group: 'onsite',
    icon: ShoppingBag,
    title: 'Brand Showcases',
    short:
      'A dedicated home for your brand on Costco.com — your portfolio in one place.',
    about:
      'A Brand Showcase is your storefront inside Costco.com: your full portfolio in one destination, built for cross-category discovery and bigger baskets. Other campaigns — display, email, offsite — can all route members here.',
    points: [
      'A dedicated, interactive brand page hosted on Costco.com',
      'Cross-category discovery across your portfolio',
      'A landing destination for your other Costco campaigns',
    ],
    buy: 'Managed',
    measured: 'Warehouse and online sales',
    reporting: 'Campaign report',
  },
  {
    id: 'same-day-ads',
    group: 'onsite',
    icon: Truck,
    title: 'Same-Day Delivery Ads',
    short:
      'Placements inside Costco\u2019s same-day delivery experience, matched to local warehouse stock.',
    about:
      'Reach members building a same-day basket — the everyday-essentials trip. Placements appear in search and category aisles in the same-day experience, matched to what is actually in stock at the member\u2019s warehouse.',
    points: [
      'Sponsored placements in same-day search and categories',
      'Matched to real-time local warehouse availability',
      'Built for immediate conversion and share of basket',
    ],
    buy: 'Managed',
    measured: 'Same-day sales',
    reporting: 'Campaign report',
  },
  {
    id: 'app-placements',
    group: 'onsite',
    icon: Smartphone,
    title: 'App Placements',
    short:
      'Placements in the Costco app — where members build lists, check savings, and plan trips.',
    about:
      'The Costco app is the trip-planning tool: lists, warehouse savings, the digital membership card. App Placements reach members there, before and during the warehouse trip.',
    points: [
      'Prominent positions in the Costco iOS and Android apps',
      'Reach members while they build shopping lists',
      'Connects with digital Warehouse Savings offers',
    ],
    buy: 'Managed',
    measured: 'Warehouse and online sales',
    reporting: 'Campaign report',
  },

  // --- Beyond Costco.com ---
  {
    id: 'managed-programmatic',
    group: 'offsite',
    icon: Briefcase,
    title: 'Managed Programmatic',
    short:
      'Our team plans and runs your offsite campaign, powered by Costco audiences.',
    about:
      'Hand us the brief and we handle the rest: audiences built from Costco purchase history, premium display and video inventory, and reporting that ties exposure back to verified warehouse and online sales.',
    points: [
      'Costco audiences built from actual purchase history',
      'Premium display and video, planned and run by our team',
      'Sales reporting that closes the loop to the register',
    ],
    buy: 'Managed',
    measured: 'Warehouse and online sales',
    reporting: 'Dashboard',
  },
  {
    id: 'self-serve-programmatic',
    group: 'offsite',
    icon: LayoutDashboard,
    title: 'Self-Serve Programmatic',
    short:
      'Your team, your platform, Costco audiences — with closed-loop sales reporting.',
    about:
      'Activate Costco member audiences inside the buying platforms your team already uses. You keep full control of the campaign; Costco provides the audiences and the deterministic sales measurement.',
    points: [
      'Costco audiences available in leading buying platforms',
      'Full control for your in-house or agency trading team',
      'Member data stays at Costco — audiences are activated, never handed over',
    ],
    buy: 'Self-serve',
    measured: 'Warehouse and online sales',
    reporting: 'Dashboard',
  },
  {
    id: 'ctv',
    group: 'offsite',
    icon: Tv,
    title: 'Connected TV',
    short:
      'Streaming TV delivered to Costco member households — measured against real sales.',
    about:
      'Big-screen storytelling, addressed to actual Costco households instead of probabilistic guesses. Frequency is controlled, the experience stays premium, and impact is measured in warehouse and online sales.',
    points: [
      'Premium streaming networks and apps',
      'Household targeting based on Costco membership',
      'Measured against warehouse visits and sales',
    ],
    buy: 'Managed or self-serve',
    measured: 'Warehouse and online sales',
    reporting: 'Dashboard',
  },
  {
    id: 'social',
    group: 'offsite',
    icon: Share2,
    title: 'Social',
    short:
      'Social campaigns layered with verified Costco purchase history.',
    about:
      'Run social with a signal social platforms don\u2019t have: what members actually buy at Costco. Campaigns drive members to Costco.com product pages and are measured for sales impact.',
    points: [
      'Purchase-history audiences across major social platforms',
      'Co-branded creative that carries Costco\u2019s trust',
      'Traffic routed to Costco.com product pages',
    ],
    buy: 'Managed',
    measured: 'Engagement and sales reporting',
    reporting: 'Dashboard',
  },
  {
    id: 'shopping-ads',
    group: 'offsite',
    icon: ShoppingBag,
    title: 'Shopping Ads',
    short:
      'Your Costco-stocked products, promoted in Google Shopping and product search.',
    about:
      'When shoppers search for products beyond Costco.com, Shopping Ads put the items you sell at Costco in front of them — and route the click to Costco.com, where the sale is measured.',
    points: [
      'Promotes products stocked at Costco, in Google Shopping',
      'New traffic routed directly to Costco.com',
      'Optimised toward the SKUs that convert',
    ],
    buy: 'Managed or self-serve',
    measured: 'Online sales',
    reporting: 'Dashboard',
  },
  {
    id: 'email',
    group: 'offsite',
    icon: Mail,
    title: 'Email',
    short:
      'Placements in Costco\u2019s member emails — a channel members open, because Costco email means discovery and savings.',
    about:
      'Costco email is an event: members expect new items and savings in it. Email placements put your brand in that message, targeted by category affinity and past purchases, and drive traffic online and into the warehouse.',
    points: [
      'An opted-in member audience, Executive and Gold Star',
      'Targeted by category affinity and purchase history',
      'Drives online traffic and in-warehouse sales',
    ],
    buy: 'Managed',
    measured: 'Warehouse and online sales',
    reporting: 'Campaign report',
  },
  {
    id: 'push',
    group: 'offsite',
    icon: Bell,
    title: 'Push Notifications',
    short:
      'Timely, selective messages to Costco app members — new items and seasonal moments.',
    about:
      'Push is used sparingly and on purpose: a new item worth knowing about, a seasonal moment, a prompt to build the list before a trip. That restraint is why it works when it arrives.',
    points: [
      'Sent selectively to engaged app members',
      'Timed to behaviour, proximity and season',
      'Built for list-building and trip planning',
    ],
    buy: 'Managed',
    measured: 'Warehouse and online sales',
    reporting: 'Dashboard',
  },

  // --- In the warehouse ---
  {
    id: 'warehouse-screens',
    group: 'warehouse',
    icon: MonitorSpeaker,
    title: 'Warehouse Screens',
    short:
      'Digital screens in the warehouse, supporting what\u2019s on the floor in that moment.',
    about:
      'Screens at high-traffic points in the warehouse carry messaging that supports the shop in progress — the endcap down the aisle, the demo on the floor, the seasonal moment. Messaging can be localised and day-parted by warehouse.',
    points: [
      'High-traffic screen positions in the warehouse',
      'Localised and day-parted by warehouse or region',
      'Works alongside endcaps and product demonstrations',
    ],
    buy: 'Managed',
    measured: 'Warehouse sales',
    reporting: 'Dashboard',
  },
  {
    id: 'fuel-screens',
    group: 'warehouse',
    icon: Fuel,
    title: 'Fuel Station Screens',
    short:
      'Full-motion screens at the pump — minutes of attention, right before members walk in.',
    about:
      'Fuel is one of the most-visited stops at Costco, and members spend minutes at the pump. Fuel screens reach them with full-motion video at the exact moment the warehouse trip is about to start.',
    points: [
      'Minutes of dwell time at the pump',
      'Full-motion video and audio',
      'Aligned to the local warehouse\u2019s inventory and promotions',
    ],
    buy: 'Managed',
    measured: 'Warehouse sales',
    reporting: 'Dashboard',
  },
  {
    id: 'connection',
    group: 'warehouse',
    icon: BookOpen,
    title: 'Costco Connection',
    short:
      'Costco\u2019s magazine — brand storytelling in print and online, delivered to member homes.',
    about:
      'The Connection is read, kept, and passed around households — one of the largest-circulation magazines in the country. Print placements pair with an online edition that links readers straight to buy.',
    points: [
      'Delivered to member homes, in print and online',
      'Long household life and deep reader engagement',
      'Online edition links directly to Costco.com',
    ],
    buy: 'Managed',
    measured: 'Standard media reporting',
    reporting: 'Campaign report',
  },
  {
    id: 'direct-mail',
    group: 'warehouse',
    icon: Send,
    title: 'Direct Mail & Mailers',
    short:
      'Your brand in Costco\u2019s mailers and savings books — delivered to verified member households.',
    about:
      'Costco\u2019s mail is anticipated, not junked: the savings books and mailers members plan trips around. Inserts reach verified member households, and redemptions are tracked at the register.',
    points: [
      'Inserts in savings books and member mailers',
      'Delivered to verified member households',
      'Redemption tracked at the register',
    ],
    buy: 'Managed',
    measured: 'Warehouse and online sales',
    reporting: 'Dashboard',
  },

  // --- Measurement ---
  {
    id: 'conversion-api',
    group: 'measurement',
    icon: Plug,
    title: 'Conversion API',
    short:
      'Costco conversion data, sent back to your platforms — so optimisation works on real sales.',
    about:
      'A secure, server-to-server connection that transmits Costco sales conversions — online and offline — back to your measurement and buying platforms, so your own optimisation works on real outcomes, not proxies.',
    points: [
      'Server-to-server transmission of conversion data',
      'Online and in-warehouse sales included',
      'Powers optimisation inside your own platforms',
    ],
    buy: 'Managed setup',
    measured: 'Warehouse and online sales',
    reporting: 'Dashboard',
  },
];

const FAQS = [
  {
    q: 'Do we need to sell at Costco to advertise?',
    a: 'Most programs are built for brands sold in the warehouse or on Costco.com, and that\u2019s where results are strongest — the media and the merchandise work together. Select placements also work for services and other categories members value. Tell us what you sell and we\u2019ll tell you plainly where you fit.',
  },
  {
    q: 'How do we buy — managed or self-serve?',
    a: 'Both. Many formats are managed by our team, who know the warehouses, the calendar and the members. Programmatic audiences can also be activated self-serve, in the platforms your team already uses. Most brands start managed and add self-serve as they scale.',
  },
  {
    q: 'How will we know it worked?',
    a: 'Every Costco transaction is membership-linked, so campaigns are measured closed-loop against actual sales — online and in the warehouse — at SKU level where applicable. Reporting focuses on sales and incremental growth, delivered through a dashboard or campaign reports depending on the format.',
  },
  {
    q: 'How are audiences built?',
    a: 'From real member purchase history: what members buy, in which categories, and how often — supplemented by demographic and geographic signals. Member data stays at Costco. Audiences are activated for your campaign; they are never sold or handed over as lists.',
  },
  {
    q: 'What do you need from us, and how quickly can we launch?',
    a: 'Creative built to the format\u2019s specs — your rep provides them, and every format on this page lists what to expect. Digital formats move fastest; warehouse and print placements run on production calendars, so seasonal moments reward early planning. Your rep will give you exact dates for the formats you choose.',
  },
  {
    q: 'What does it cost?',
    a: 'Pricing depends on the format, timing and scale — there\u2019s no public rate card, because most plans are built around a sales goal, not a fixed package. A first conversation costs nothing: tell us the goal and the budget range you\u2019re working with, and we\u2019ll scope what it can do at Costco.',
  },
];

function AisleSign({ number, label }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div
        className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 border-4 border-costco-darkBlue text-costco-darkBlue bg-white font-extrabold text-2xl sm:text-3xl tracking-tight shrink-0"
        aria-hidden="true"
      >
        {number}
      </div>
      <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-costco-red">
        {label}
      </span>
    </div>
  );
}

export default function ConceptSolutions() {
  const [selected, setSelected] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selected]);

  return (
    <div className="w-full bg-white font-sans">
      {/* ---------- HERO ---------- */}
      <section className="bg-costco-darkBlue text-white py-20 lg:py-24 w-full">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95] mb-6">
            Solutions
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-white mb-4">
            Everything we offer, on one page.
          </p>
          <p className="text-lg text-blue-100 max-w-3xl leading-relaxed">
            The high level is here. The detail is one click away, in each
            format&rsquo;s drawer — what it is, how you buy it, and what
            it&rsquo;s measured against. When you&rsquo;re ready for
            specs, pricing and dates, that&rsquo;s a conversation with
            our team.
          </p>
        </div>
      </section>

      {/* ---------- ANCHOR NAV ---------- */}
      <nav className="sticky top-[116px] z-30 bg-white border-b border-gray-200">
        <div className="container-custom flex gap-2 overflow-x-auto py-3">
          {GROUPS.map((g) => (
            <a
              key={g.id}
              href={`#sol-${g.id}`}
              className="whitespace-nowrap text-sm font-bold text-gray-700 hover:text-costco-blue border border-gray-300 hover:border-costco-blue rounded-full px-4 py-2 transition-colors"
            >
              {g.label}
            </a>
          ))}
          <a
            href="#sol-questions"
            className="whitespace-nowrap text-sm font-bold text-white bg-costco-blue rounded-full px-4 py-2"
          >
            Advertiser questions
          </a>
        </div>
      </nav>

      {/* ---------- GROUPS ---------- */}
      {GROUPS.map((group, gi) => (
        <section
          key={group.id}
          id={`sol-${group.id}`}
          className={`py-16 lg:py-24 w-full scroll-mt-40 ${
            gi % 2 === 1 ? 'bg-gray-50 border-y border-gray-200' : 'bg-white'
          }`}
        >
          <div className="container-custom">
            <AisleSign number={group.number} label={group.label} />
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-12">
              {group.intro}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PLACEMENTS.filter((p) => p.group === group.id).map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.id}
                    className="bg-white border border-gray-200 p-7 flex flex-col hover:border-costco-blue hover:shadow-lg transition-all"
                  >
                    <div className="bg-blue-100 text-costco-blue p-3 w-max mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-extrabold text-gray-900 leading-tight mb-2">
                      {p.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{p.short}</p>
                    <div className="mt-auto flex items-center justify-between gap-3">
                      <span className="text-xs font-bold uppercase tracking-wide text-gray-500">
                        {p.buy}
                      </span>
                      <button
                        onClick={() => setSelected(p)}
                        className="text-costco-blue font-bold text-sm inline-flex items-center gap-1.5 hover:underline"
                      >
                        Details <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* ---------- QUESTIONS ---------- */}
      <section id="sol-questions" className="py-16 lg:py-24 w-full bg-white scroll-mt-40">
        <div className="container-custom">
          <AisleSign number="05" label="Questions" />
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            What advertisers ask us first.
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mb-12">
            Straight answers, the way we&rsquo;d give them in a meeting.
          </p>
          <div className="max-w-4xl">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="border-t border-gray-300">
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-lg sm:text-xl font-extrabold text-gray-900">
                      {f.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-costco-blue shrink-0 transition-transform ${
                        open ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {open && (
                    <p className="text-gray-700 leading-relaxed pb-7 pr-10 max-w-3xl">
                      {f.a}
                    </p>
                  )}
                </div>
              );
            })}
            <div className="border-t border-gray-300" />
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="py-16 lg:py-24 w-full bg-costco-darkBlue text-white">
        <div className="container-custom flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
              Talk to Costco Retail Media.
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl">
              Pick the formats that fit your goal — or just bring the
              goal. We&rsquo;ll build the plan with you.
            </p>
          </div>
          <Link
            to="/concept"
            className="bg-costco-red hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all inline-flex items-center gap-2 shrink-0"
          >
            Request a Meeting <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ---------- SMALL PRINT ---------- */}
      <section className="py-10 w-full bg-white">
        <div className="container-custom">
          <p className="text-[11px] leading-relaxed text-gray-400 max-w-5xl">
            Notes: Format availability, specifications, pricing and
            launch dates vary and are confirmed by the Costco Retail
            Media team. Measurement descriptions reflect each
            format&rsquo;s standard reporting. Warehouse count — Costco
            company reporting.
          </p>
        </div>
      </section>

      {/* ---------- DETAIL DRAWER ---------- */}
      {selected && (
        <div className="fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-gray-950/60"
            onClick={() => setSelected(null)}
          />
          <aside className="absolute right-0 top-0 h-full w-full sm:w-[520px] bg-white shadow-2xl overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-7 py-5 flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-widest text-costco-red">
                {GROUPS.find((g) => g.id === selected.group)?.label}
              </span>
              <button
                onClick={() => setSelected(null)}
                className="p-2 text-gray-600 hover:text-gray-900"
                aria-label="Close details"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="px-7 py-7">
              <h2 className="text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                {selected.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">{selected.about}</p>

              <h3 className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400 mb-4">
                Good to know
              </h3>
              <ul className="space-y-3 mb-10">
                {selected.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-gray-800 leading-relaxed">
                    <span className="w-2 h-2 bg-costco-red shrink-0 mt-2.5" />
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="border border-gray-200 divide-y divide-gray-200 mb-10">
                {[
                  ['How to buy', selected.buy],
                  ['Measured against', selected.measured],
                  ['Reporting', selected.reporting],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-2 gap-4 px-5 py-4">
                    <p className="text-xs font-extrabold uppercase tracking-wide text-gray-500">
                      {k}
                    </p>
                    <p className="font-bold text-gray-900 text-sm">{v}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/concept"
                className="w-full bg-costco-red hover:bg-red-700 text-white font-bold py-4 rounded-full transition text-sm uppercase tracking-wider flex items-center justify-center gap-2"
              >
                Ask about this format <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-gray-500 text-center mt-4">
                Specs, pricing and available dates come from the team —
                that&rsquo;s the meeting.
              </p>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
