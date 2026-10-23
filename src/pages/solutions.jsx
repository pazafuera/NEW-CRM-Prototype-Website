import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Laptop,
  Globe2,
  Store,
  BarChart3,
  Users,
  ArrowRight,
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
  Gauge,
  ShieldCheck,
  ChevronDown,
  UtensilsCrossed,
  Play,
} from 'lucide-react';

/*
  Solutions v2.
  - Hero borrows the prototype's promise: solutions built to reach
    members wherever they are.
  - Sections: Onsite / Offsite / Warehouse & In Real Life / Audience /
    Measurement / Advertiser FAQs. No numbering.
  - In-page navigation uses scroll buttons — plain # anchors break
    this app's hash routing.
  - Detail is a centered modal with a built-in mockup of the ad unit
    (drawn in code, Target-style) instead of a side drawer.
*/

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const GROUPS = [
  {
    id: 'onsite',
    label: 'Onsite',
    title: 'On Costco.com and in the app',
    icon: Laptop,
    intro:
      'Costco.com and the Costco app — where members search, browse, build lists and buy. High intent, close to the sale.',
  },
  {
    id: 'offsite',
    label: 'Offsite',
    title: 'Wherever members go next',
    icon: Globe2,
    intro:
      'Everywhere else members watch, read, scroll and shop — reached with Costco audiences, and measured back to Costco sales.',
  },
  {
    id: 'warehouse',
    label: 'Warehouse & In Real Life',
    title: 'In the warehouse, in real life',
    icon: Store,
    intro:
      'The floor itself: screens, fuel, print, mail — and sampling, the original Costco medium. Nothing reaches a member like the warehouse does.',
  },
  {
    id: 'audience',
    label: 'Audience',
    title: 'Audiences built on what members actually buy.',
    icon: Users,
    intro:
      'Every format on this page can be aimed with Costco audiences — built from real purchases, because every transaction is membership-linked.',
  },
  {
    id: 'measurement',
    label: 'Measurement',
    title: 'Measured in sales. All of them.',
    icon: BarChart3,
    intro:
      'The membership card is scanned on every transaction, so exposure can be tied to what actually sold — online and in the warehouse, down to the SKU where it applies.',
  },
];

const PLACEMENTS = [
  // --- Onsite ---
  {
    id: 'sponsored-product-ads', group: 'onsite', icon: Search, mock: 'search',
    title: 'Sponsored Product Ads',
    short: 'Your product at the top of search results and category pages on Costco.com and in the app.',
    about: 'When a member searches Costco.com, they are ready to buy. Sponsored Product Ads put your item in the premium positions in search and category grids — on the website and in the app.',
    points: ['Top-of-search and in-grid placements on Costco.com and the app', 'Bidding informed by real member purchase signals', 'Inventory-aware: placements pause when an item is out of stock'],
    buy: 'Managed or self-serve', measured: 'Online sales, at SKU level', reporting: 'Dashboard',
  },
  {
    id: 'sponsored-display', group: 'onsite', icon: LayoutTemplate, mock: 'display',
    title: 'Sponsored Display',
    short: 'Display placements inside the Costco.com shopping journey, targeted with real purchase history.',
    about: 'Display that reaches members while they browse Costco.com — targeted using actual purchase history and category behaviour, and measured against sales on and off the site.',
    points: ['Placements within browsing and category pages', 'Targeting from member purchase history and browsing behaviour', 'Measured against warehouse and online sales, not just clicks'],
    buy: 'Managed or self-serve', measured: 'Warehouse and online sales', reporting: 'Dashboard',
  },
  {
    id: 'reserved-display', group: 'onsite', icon: Monitor, mock: 'hero',
    title: 'Reserved Display',
    short: 'Premium reserved placements on the homepage and category pages. Our digital endcaps.',
    about: 'Reserved Display is the digital endcap: guaranteed, high-visibility placements on the Costco.com homepage and category hubs, reserved in advance for the moments that matter — launches, seasonal peaks, and mailer events.',
    points: ['Guaranteed premium positions, reserved in advance', 'Targeted to the member profiles you choose', 'Ideal alongside seasonal moments and Multi-Vendor Mailer events'],
    buy: 'Managed', measured: 'Warehouse and online sales', reporting: 'Dashboard',
  },
  {
    id: 'native-placements', group: 'onsite', icon: Layout, mock: 'native',
    title: 'Native Placements',
    short: 'Placements that look and feel like Costco merchandising — because members trust how Costco presents items.',
    about: 'Native Placements are built in Costco\u2019s own merchandising style and placed inside homepage and category features. They earn attention the way items do in the warehouse: by fitting the discovery members came for.',
    points: ['Designed to match Costco editorial and merchandising content', 'Curated homepage and category features', 'Routes members to brand collections and product pages'],
    buy: 'Managed', measured: 'Warehouse and online sales', reporting: 'Campaign report',
  },
  {
    id: 'brand-showcases', group: 'onsite', icon: ShoppingBag, mock: 'showcase',
    title: 'Brand Showcases',
    short: 'A dedicated home for your brand on Costco.com — your portfolio in one place.',
    about: 'A Brand Showcase is your storefront inside Costco.com: your full portfolio in one destination, built for cross-category discovery and bigger baskets. Other campaigns — display, email, offsite — can all route members here.',
    points: ['A dedicated, interactive brand page hosted on Costco.com', 'Cross-category discovery across your portfolio', 'A landing destination for your other Costco campaigns'],
    buy: 'Managed', measured: 'Warehouse and online sales', reporting: 'Campaign report',
  },
  {
    id: 'same-day-ads', group: 'onsite', icon: Truck, mock: 'phone',
    title: 'Same-Day Delivery Ads',
    short: 'Placements inside Costco\u2019s same-day delivery experience, matched to local warehouse stock.',
    about: 'Reach members building a same-day basket — the everyday-essentials trip. Placements appear in search and category aisles in the same-day experience, matched to what is actually in stock at the member\u2019s warehouse.',
    points: ['Sponsored placements in same-day search and categories', 'Matched to real-time local warehouse availability', 'Built for immediate conversion and share of basket'],
    buy: 'Managed', measured: 'Same-day sales', reporting: 'Campaign report',
  },
  {
    id: 'app-placements', group: 'onsite', icon: Smartphone, mock: 'phone',
    title: 'App Placements',
    short: 'Placements in the Costco app — where members build lists, check savings, and plan trips.',
    about: 'The Costco app is the trip-planning tool: lists, warehouse savings, the digital membership card. App Placements reach members there, before and during the warehouse trip.',
    points: ['Prominent positions in the Costco iOS and Android apps', 'Reach members while they build shopping lists', 'Connects with digital Warehouse Savings offers'],
    buy: 'Managed', measured: 'Warehouse and online sales', reporting: 'Campaign report',
  },

  // --- Offsite ---
  {
    id: 'managed-programmatic', group: 'offsite', icon: Briefcase, mock: 'programmatic',
    title: 'Managed Programmatic',
    short: 'Our team plans and runs your offsite campaign, powered by Costco audiences.',
    about: 'Hand us the brief and we handle the rest: audiences built from Costco purchase history, premium display and video inventory, and reporting that ties exposure back to verified warehouse and online sales.',
    points: ['Costco audiences built from actual purchase history', 'Premium display and video, planned and run by our team', 'Sales reporting that closes the loop to the register'],
    buy: 'Managed', measured: 'Warehouse and online sales', reporting: 'Dashboard',
  },
  {
    id: 'self-serve-programmatic', group: 'offsite', icon: LayoutDashboard, mock: 'programmatic',
    title: 'Self-Serve Programmatic',
    short: 'Your team, your platform, Costco audiences — with closed-loop sales reporting.',
    about: 'Activate Costco member audiences inside the buying platforms your team already uses. You keep full control of the campaign; Costco provides the audiences and the deterministic sales measurement.',
    points: ['Costco audiences available in leading buying platforms', 'Full control for your in-house or agency trading team', 'Member data stays at Costco — audiences are activated, never handed over'],
    buy: 'Self-serve', measured: 'Warehouse and online sales', reporting: 'Dashboard',
  },
  {
    id: 'ctv', group: 'offsite', icon: Tv, mock: 'tv',
    title: 'Connected TV',
    short: 'Streaming TV delivered to Costco member households — measured against real sales.',
    about: 'Big-screen storytelling, addressed to actual Costco households instead of probabilistic guesses. Frequency is controlled, the experience stays premium, and impact is measured in warehouse and online sales.',
    points: ['Premium streaming networks and apps', 'Household targeting based on Costco membership', 'Measured against warehouse visits and sales'],
    buy: 'Managed or self-serve', measured: 'Warehouse and online sales', reporting: 'Dashboard',
  },
  {
    id: 'social', group: 'offsite', icon: Share2, mock: 'social',
    title: 'Social',
    short: 'Social campaigns layered with verified Costco purchase history.',
    about: 'Run social with a signal social platforms don\u2019t have: what members actually buy at Costco. Campaigns drive members to Costco.com product pages and are measured for sales impact.',
    points: ['Purchase-history audiences across major social platforms', 'Co-branded creative that carries Costco\u2019s trust', 'Traffic routed to Costco.com product pages'],
    buy: 'Managed', measured: 'Engagement and sales reporting', reporting: 'Dashboard',
  },
  {
    id: 'shopping-ads', group: 'offsite', icon: ShoppingBag, mock: 'shopping',
    title: 'Shopping Ads',
    short: 'Your Costco-stocked products, promoted in Google Shopping and product search.',
    about: 'When shoppers search for products beyond Costco.com, Shopping Ads put the items you sell at Costco in front of them — and route the click to Costco.com, where the sale is measured.',
    points: ['Promotes products stocked at Costco, in Google Shopping', 'New traffic routed directly to Costco.com', 'Optimised toward the SKUs that convert'],
    buy: 'Managed or self-serve', measured: 'Online sales', reporting: 'Dashboard',
  },
  {
    id: 'email', group: 'offsite', icon: Mail, mock: 'email',
    title: 'Email',
    short: 'Placements in Costco\u2019s member emails — a channel members open, because Costco email means discovery and savings.',
    about: 'Costco email is an event: members expect new items and savings in it. Email placements put your brand in that message, targeted by category affinity and past purchases, and drive traffic online and into the warehouse.',
    points: ['An opted-in member audience, Executive and Gold Star', 'Targeted by category affinity and purchase history', 'Drives online traffic and in-warehouse sales'],
    buy: 'Managed', measured: 'Warehouse and online sales', reporting: 'Campaign report',
  },
  {
    id: 'push', group: 'offsite', icon: Bell, mock: 'push',
    title: 'Push Notifications',
    short: 'Timely, selective messages to Costco app members — new items and seasonal moments.',
    about: 'Push is used sparingly and on purpose: a new item worth knowing about, a seasonal moment, a prompt to build the list before a trip. That restraint is why it works when it arrives.',
    points: ['Sent selectively to engaged app members', 'Timed to behaviour, proximity and season', 'Built for list-building and trip planning'],
    buy: 'Managed', measured: 'Warehouse and online sales', reporting: 'Dashboard',
  },

  // --- Warehouse & In Real Life ---
  {
    id: 'warehouse-screens', group: 'warehouse', icon: MonitorSpeaker, mock: 'warehouse-screen',
    title: 'Warehouse Screens',
    short: 'Digital screens in the warehouse, supporting what\u2019s on the floor in that moment.',
    about: 'Screens at high-traffic points in the warehouse carry messaging that supports the shop in progress — the endcap down the aisle, the demo on the floor, the seasonal moment. Messaging can be localised and day-parted by warehouse.',
    points: ['High-traffic screen positions in the warehouse', 'Localised and day-parted by warehouse or region', 'Works alongside endcaps and product demonstrations'],
    buy: 'Managed', measured: 'Warehouse sales', reporting: 'Dashboard',
  },
  {
    id: 'sampling', group: 'warehouse', icon: UtensilsCrossed, mock: 'sampling',
    title: 'Sampling & Demos',
    short: 'The original Costco medium: put the product in the member\u2019s hand, in the aisle.',
    about: 'Sampling is woven into the Costco trip — members expect it, plan around it, and buy what they taste. Sampling & demo events put your product directly in members\u2019 hands, supported by the media running around the trip so the discovery starts before they arrive and continues after they leave.',
    points: ['Live sampling and demo events in the warehouse', 'Reaches members at the moment of trial — the strongest product introduction there is', 'Pairs with onsite, offsite and screen media around the trip'],
    buy: 'Managed', measured: 'Warehouse sales', reporting: 'Campaign report',
  },
  {
    id: 'fuel-screens', group: 'warehouse', icon: Fuel, mock: 'fuel',
    title: 'Fuel Station Screens',
    short: 'Full-motion screens at the pump — minutes of attention, right before members walk in.',
    about: 'Fuel is one of the most-visited stops at Costco, and members spend minutes at the pump. Fuel screens reach them with full-motion video at the exact moment the warehouse trip is about to start.',
    points: ['Minutes of dwell time at the pump', 'Full-motion video and audio', 'Aligned to the local warehouse\u2019s inventory and promotions'],
    buy: 'Managed', measured: 'Warehouse sales', reporting: 'Dashboard',
  },
  {
    id: 'connection', group: 'warehouse', icon: BookOpen, mock: 'magazine',
    title: 'Costco Connection',
    short: 'Costco\u2019s magazine — brand storytelling in print and online, delivered to member homes.',
    about: 'The Connection is read, kept, and passed around households — one of the largest-circulation magazines in the country. Print placements pair with an online edition that links readers straight to buy.',
    points: ['Delivered to member homes, in print and online', 'Long household life and deep reader engagement', 'Online edition links directly to Costco.com'],
    buy: 'Managed', measured: 'Standard media reporting', reporting: 'Campaign report',
  },
  {
    id: 'direct-mail', group: 'warehouse', icon: Send, mock: 'mail',
    title: 'Direct Mail & Mailers',
    short: 'Your brand in Costco\u2019s mailers and savings books — delivered to verified member households.',
    about: 'Costco\u2019s mail is anticipated, not junked: the savings books and mailers members plan trips around. Inserts reach verified member households, and redemptions are tracked at the register.',
    points: ['Inserts in savings books and member mailers', 'Delivered to verified member households', 'Redemption tracked at the register'],
    buy: 'Managed', measured: 'Warehouse and online sales', reporting: 'Dashboard',
  },

  // --- Measurement ---
  {
    id: 'conversion-api', group: 'measurement', icon: Plug, mock: 'api',
    title: 'Conversion API (CAPI)',
    short: 'Costco conversion data, sent back to your platforms — so optimisation works on real sales.',
    about: 'A secure, server-to-server connection that transmits Costco sales conversions — online and offline — back to your measurement and buying platforms, so your own optimisation works on real outcomes, not proxies.',
    points: ['Server-to-server transmission of conversion data', 'Online and in-warehouse sales included', 'Powers optimisation inside your own platforms'],
    buy: 'Managed setup', measured: 'Warehouse and online sales', reporting: 'Dashboard',
  },

  // --- Audience ---
  {
    id: 'templated-audiences', group: 'audience', icon: Users, mock: 'segments',
    title: 'Templated Audiences',
    short: 'Pre-built member audiences across the categories Costco sells — ready to activate on any plan.',
    about: 'A ready library of audiences built from actual Costco purchase history: category buyers, brand buyers, seasonal buyers, membership tiers and more. Pick the segments that match your goal and they can be applied to any format on this page — onsite, offsite, or in the warehouse.',
    points: ['Built from real purchases, not inferred interests', 'Category, brand, seasonal and membership-tier segments', 'Ready to activate — no build time'],
    buy: 'Added to any campaign', measured: 'Warehouse and online sales', reporting: 'Dashboard',
  },
  {
    id: 'custom-audiences', group: 'audience', icon: LayoutDashboard, mock: 'builder',
    title: 'Custom Audiences',
    short: 'A specific member in mind? We build the audience to your brief — including with your own data.',
    about: 'When the templated library doesn’t fit, we build: custom combinations of purchase behaviour, category and geography, defined with your team. Brands can also bring their own first-party data and collaborate with Costco data in a clean-room environment — matched and measured without either side handing over raw data.',
    points: ['Built to your brief, with our team', 'Combine purchase behaviour, category and geography', 'Clean-room collaboration with your first-party data'],
    buy: 'Managed', measured: 'Warehouse and online sales', reporting: 'Dashboard',
  },

  // --- Measurement (continued) ---
  {
    id: 'velocity-platform', group: 'measurement', icon: Gauge, mock: 'dashboard',
    title: 'Costco Velocity',
    short: 'The platform behind every campaign: activation, reporting and sales measurement in one place.',
    about: 'Costco Velocity is the system every campaign on this page runs on. It connects the audiences, the media and the register — so planning, activation and closed-loop sales reporting happen in one place, on one version of the truth.',
    points: ['One platform across onsite, offsite and warehouse media', 'Campaign reporting built on actual sales', 'The same membership-linked data from targeting to measurement'],
    buy: 'Included with campaigns', measured: 'Warehouse and online sales', reporting: 'Dashboard',
  },
  {
    id: 'clean-room', group: 'measurement', icon: ShieldCheck, mock: 'cleanroom',
    title: 'Clean Room',
    short: 'Collaborate with your own data — matched and measured, without raw data changing hands.',
    about: 'Costco’s clean room is a secure environment where your first-party data and Costco’s membership data can be matched and analysed under strict controls. Overlap analysis, audience building and incrementality measurement — with member privacy protected throughout.',
    points: ['Secure matching of your data with Costco membership data', 'Overlap and audience analysis before you spend', 'Incrementality measurement on real sales'],
    buy: 'Managed', measured: 'Warehouse and online sales', reporting: 'Clean-room outputs & dashboard',
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
    a: 'From real member purchase history: what members buy, in which categories, and how often — supplemented by membership, demographic and geographic signals. Member data stays at Costco. Audiences are activated for your campaign; they are never sold or handed over as lists.',
  },
  {
    q: 'What do you need from us, and how quickly can we launch?',
    a: 'Creative built to the format\u2019s specs — your rep provides them, and each format\u2019s details here tell you what to expect. Digital formats move fastest; warehouse, sampling and print run on production calendars, so seasonal moments reward early planning. Your rep will give you exact dates for the formats you choose.',
  },
  {
    q: 'What does it cost?',
    a: 'Pricing depends on the format, timing and scale — there\u2019s no public rate card, because most plans are built around a sales goal, not a fixed package. A first conversation costs nothing: tell us the goal and the budget range you\u2019re working with, and we\u2019ll scope what it can do at Costco.',
  },
];

/* ---------- Ad-unit mockups, drawn in code ---------- */

function ProductCard({ highlighted = false, label = 'YOUR ITEM' }) {
  return (
    <div className={`border ${highlighted ? 'border-costco-red border-2 bg-red-50' : 'border-gray-200 bg-white'} p-2`}>
      <div className="bg-gray-100 h-12 mb-2 flex items-center justify-center">
        <div className="w-7 h-9 bg-costco-blue/70" />
      </div>
      <p className="text-[9px] font-bold text-gray-800 leading-tight">{label}</p>
      <p className="text-[9px] text-gray-500">$14.99</p>
      {highlighted && <p className="text-[8px] font-extrabold text-costco-red uppercase mt-1">Sponsored</p>}
    </div>
  );
}

function BrowserFrame({ children, url = 'costco.com' }) {
  return (
    <div className="border border-gray-300 bg-white shadow-sm w-full">
      <div className="flex items-center gap-2 bg-gray-100 border-b border-gray-200 px-3 py-2">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="ml-2 text-[10px] text-gray-500 bg-white border border-gray-200 rounded-full px-3 py-0.5">{url}</span>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}

function PhoneFrame({ children }) {
  return (
    <div className="w-[170px] mx-auto border-[5px] border-gray-900 rounded-[26px] bg-white overflow-hidden shadow-md">
      <div className="bg-costco-darkBlue text-white text-center text-[9px] font-bold py-1.5">Costco App</div>
      <div className="p-2.5">{children}</div>
    </div>
  );
}

function Mockup({ type }) {
  switch (type) {
    case 'search':
      return (
        <BrowserFrame>
          <div className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1.5 mb-3">
            <Search className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[10px] text-gray-500">coffee, 3 lb</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <ProductCard highlighted />
            <ProductCard />
            <ProductCard />
          </div>
          <p className="text-[9px] text-gray-400 mt-2 text-center">Search results — your item, first</p>
        </BrowserFrame>
      );
    case 'display':
      return (
        <BrowserFrame>
          <div className="bg-costco-red text-white text-center text-[11px] font-extrabold py-2.5 mb-3">YOUR BRAND — NEW AT COSTCO</div>
          <div className="grid grid-cols-3 gap-2"><ProductCard /><ProductCard /><ProductCard /></div>
        </BrowserFrame>
      );
    case 'hero':
      return (
        <BrowserFrame>
          <div className="bg-costco-darkBlue text-white p-4 mb-3">
            <p className="text-[13px] font-extrabold leading-tight">YOUR BRAND.<br />THE MOMENT IS YOURS.</p>
            <p className="text-[9px] text-blue-200 mt-1">Homepage hero placement</p>
          </div>
          <div className="grid grid-cols-3 gap-2"><ProductCard /><ProductCard /><ProductCard /></div>
        </BrowserFrame>
      );
    case 'native':
      return (
        <BrowserFrame>
          <p className="text-[11px] font-extrabold text-gray-900 mb-2">This month at Costco</p>
          <div className="flex gap-3 border border-gray-200 p-2.5">
            <div className="w-16 h-16 bg-gray-100 flex items-center justify-center shrink-0"><div className="w-8 h-10 bg-costco-blue/70" /></div>
            <div>
              <p className="text-[11px] font-bold text-gray-900 leading-snug">Discover your brand&rsquo;s story, the Costco way</p>
              <p className="text-[9px] text-gray-500 mt-1">Presented in Costco&rsquo;s merchandising style</p>
            </div>
          </div>
        </BrowserFrame>
      );
    case 'showcase':
      return (
        <BrowserFrame>
          <div className="bg-gray-900 text-white text-center py-3 mb-3">
            <p className="text-[12px] font-extrabold tracking-wide">YOUR BRAND SHOWCASE</p>
            <p className="text-[9px] text-gray-400">Your whole portfolio, one destination</p>
          </div>
          <div className="grid grid-cols-3 gap-2"><ProductCard /><ProductCard /><ProductCard /></div>
        </BrowserFrame>
      );
    case 'phone':
      return (
        <PhoneFrame>
          <div className="border border-gray-200 rounded-lg p-2 mb-2 bg-red-50 border-l-4 border-l-costco-red">
            <p className="text-[9px] font-extrabold text-costco-red uppercase">Featured</p>
            <p className="text-[10px] font-bold text-gray-900">Your item, in the app</p>
            <p className="text-[9px] text-gray-500">On lists before the trip</p>
          </div>
          {['Warehouse savings', 'My list (12 items)', 'Orders'].map((t) => (
            <p key={t} className="text-[10px] font-semibold text-gray-700 border-b border-gray-100 py-1.5">{t}</p>
          ))}
        </PhoneFrame>
      );
    case 'programmatic':
      return (
        <BrowserFrame url="your campaign">
          <div className="flex items-end gap-2 h-20 mb-2 px-2">
            {[30, 45, 40, 62, 78, 95].map((h, i) => (
              <div key={i} className="flex-1 bg-costco-blue/80" style={{ height: `${h}%` }} />
            ))}
          </div>
          <p className="text-[9px] text-gray-500 text-center">Costco audiences, activated — sales, reported back</p>
        </BrowserFrame>
      );
    case 'tv':
      return (
        <div className="w-full">
          <div className="bg-gray-950 rounded-lg aspect-video flex flex-col items-center justify-center relative overflow-hidden">
            <Play className="w-10 h-10 text-white/90" />
            <div className="absolute bottom-0 inset-x-0 bg-costco-red text-white text-[10px] font-extrabold px-3 py-1.5">YOUR BRAND — NOW AT COSTCO</div>
          </div>
          <p className="text-[9px] text-gray-400 mt-2 text-center">Streaming TV, to member households</p>
        </div>
      );
    case 'social':
      return (
        <PhoneFrame>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-costco-blue" />
            <p className="text-[10px] font-bold text-gray-900">yourbrand <span className="text-gray-400 font-normal">· Sponsored</span></p>
          </div>
          <div className="bg-gray-100 h-28 flex items-center justify-center mb-2"><div className="w-10 h-12 bg-costco-blue/70" /></div>
          <p className="text-[10px] text-gray-700 leading-snug">Now at Costco — members are talking about it.</p>
        </PhoneFrame>
      );
    case 'shopping':
      return (
        <BrowserFrame url="google.com/shopping">
          <div className="grid grid-cols-3 gap-2">
            <ProductCard highlighted label="YOUR ITEM — COSTCO" />
            <ProductCard />
            <ProductCard />
          </div>
          <p className="text-[9px] text-gray-400 mt-2 text-center">Product search — routed to Costco.com</p>
        </BrowserFrame>
      );
    case 'email':
      return (
        <BrowserFrame url="member inbox">
          <div className="border border-gray-200">
            <div className="bg-costco-darkBlue text-white text-[10px] font-bold px-3 py-2">What&rsquo;s new at Costco this week</div>
            <div className="p-3 flex gap-3">
              <div className="w-14 h-14 bg-gray-100 flex items-center justify-center shrink-0"><div className="w-7 h-9 bg-costco-blue/70" /></div>
              <div>
                <p className="text-[11px] font-bold text-gray-900">Your brand, in the message members open</p>
                <p className="text-[9px] text-gray-500 mt-0.5">New items · Savings · Discoveries</p>
              </div>
            </div>
          </div>
        </BrowserFrame>
      );
    case 'push':
      return (
        <PhoneFrame>
          <div className="bg-gray-100 rounded-xl p-2.5 shadow-sm border border-gray-200 mt-6">
            <p className="text-[8px] font-bold text-gray-500 uppercase mb-0.5">Costco · now</p>
            <p className="text-[10px] font-bold text-gray-900 leading-snug">New at your warehouse: your brand just landed</p>
            <p className="text-[9px] text-gray-500">Add it to your list before Saturday&rsquo;s trip</p>
          </div>
          <div className="h-16" />
        </PhoneFrame>
      );
    case 'warehouse-screen':
      return (
        <div className="w-full">
          <div className="bg-gray-200 p-4">
            <div className="bg-gray-950 rounded-md aspect-video flex items-center justify-center mx-auto max-w-[300px] border-4 border-gray-800">
              <p className="text-white text-[12px] font-extrabold text-center px-3">YOUR BRAND<br /><span className="text-[9px] font-semibold text-gray-400">Aisle 12 · Today at this warehouse</span></p>
            </div>
          </div>
          <p className="text-[9px] text-gray-400 mt-2 text-center">In-warehouse screens</p>
        </div>
      );
    case 'sampling':
      return (
        <div className="w-full bg-gray-100 border border-gray-200 p-4">
          <div className="max-w-[300px] mx-auto">
            <div className="bg-costco-red h-3 rounded-t-full" />
            <div className="bg-white border border-gray-300 p-3 text-center">
              <UtensilsCrossed className="w-7 h-7 text-costco-blue mx-auto mb-1.5" />
              <p className="text-[11px] font-extrabold text-gray-900">TRY IT TODAY</p>
              <p className="text-[9px] text-gray-500">Your product, in members&rsquo; hands</p>
              <div className="flex justify-center gap-1.5 mt-2">
                {[0, 1, 2, 3].map((i) => (<span key={i} className="w-4 h-4 rounded-full bg-yellow-200 border border-yellow-400" />))}
              </div>
            </div>
            <div className="bg-gray-400 h-2" />
          </div>
          <p className="text-[9px] text-gray-400 mt-2 text-center">Sampling & demo station</p>
        </div>
      );
    case 'fuel':
      return (
        <div className="w-full flex justify-center">
          <div className="w-[190px]">
            <div className="bg-gray-800 rounded-t-xl p-2.5">
              <div className="bg-costco-darkBlue rounded-md aspect-[4/3] flex items-center justify-center">
                <Play className="w-7 h-7 text-white" />
              </div>
              <p className="text-[8px] text-gray-300 text-center mt-1.5 font-bold">YOUR BRAND — FULL-MOTION VIDEO</p>
            </div>
            <div className="bg-gray-200 border border-gray-300 h-10 flex items-center justify-center gap-2">
              <span className="w-8 h-3 bg-gray-400 rounded-sm" />
              <span className="w-8 h-3 bg-gray-400 rounded-sm" />
            </div>
          </div>
        </div>
      );
    case 'magazine':
      return (
        <div className="w-[200px] mx-auto bg-white border border-gray-300 shadow-md">
          <div className="bg-costco-blue text-white px-3 py-2">
            <p className="text-[13px] font-extrabold leading-none">Costco <span className="font-light">Connection</span></p>
          </div>
          <div className="p-3">
            <div className="bg-gray-100 h-20 flex items-center justify-center mb-2"><div className="w-9 h-11 bg-costco-blue/70" /></div>
            <p className="text-[11px] font-extrabold text-gray-900 leading-snug">Your brand&rsquo;s story, told at length</p>
            <p className="text-[9px] text-gray-500 mt-1">Read at home · Kept · Passed along</p>
          </div>
        </div>
      );
    case 'mail':
      return (
        <div className="w-full flex justify-center py-2">
          <div className="w-[290px] bg-white border border-gray-300 shadow-md rotate-[-1.5deg]">
            <div className="flex justify-between items-start p-3 border-b border-dashed border-gray-200">
              <p className="text-[11px] font-extrabold text-costco-red">SAVINGS BOOK</p>
              <div className="w-9 h-10 border border-gray-300 bg-gray-50 flex items-center justify-center text-[7px] text-gray-400 text-center">MEMBER<br />MAIL</div>
            </div>
            <div className="p-3 flex gap-3 items-center">
              <div className="w-11 h-11 bg-gray-100 flex items-center justify-center shrink-0"><div className="w-6 h-8 bg-costco-blue/70" /></div>
              <div>
                <p className="text-[11px] font-bold text-gray-900">Your insert, inside the mail members wait for</p>
                <p className="text-[9px] text-gray-500">Redemption tracked at the register</p>
              </div>
            </div>
          </div>
        </div>
      );
    case 'api':
      return (
        <div className="w-full bg-gray-50 border border-gray-200 p-4">
          <div className="flex items-center justify-between max-w-[330px] mx-auto">
            <div className="bg-costco-darkBlue text-white text-center px-3 py-2.5 w-[110px]">
              <p className="text-[10px] font-extrabold">COSTCO SALES</p>
              <p className="text-[8px] text-blue-200">Online + warehouse</p>
            </div>
            <div className="flex-1 flex flex-col items-center px-1">
              <p className="text-[8px] font-bold text-gray-500 uppercase">Secure API</p>
              <div className="w-full border-t-2 border-dashed border-costco-red relative">
                <ArrowRight className="w-4 h-4 text-costco-red absolute -top-2 right-0 bg-gray-50" />
              </div>
            </div>
            <div className="bg-gray-900 text-white text-center px-3 py-2.5 w-[110px]">
              <p className="text-[10px] font-extrabold">YOUR PLATFORMS</p>
              <p className="text-[8px] text-gray-400">Optimise on real sales</p>
            </div>
          </div>
        </div>
      );
    case 'segments':
      return (
        <BrowserFrame url="costco velocity — audiences">
          <p className="text-[10px] font-extrabold text-gray-900 mb-2">Templated audiences</p>
          <div className="flex flex-wrap gap-1.5">
            {['Category buyers', 'Brand buyers', 'New-item triers', 'Seasonal buyers', 'Executive members', 'Lapsed buyers', 'Bulk buyers', 'Regional'].map((t, i) => (
              <span key={t} className={`text-[9px] font-bold px-2 py-1 rounded-full border ${i < 3 ? 'bg-costco-blue text-white border-costco-blue' : 'bg-white text-gray-600 border-gray-300'}`}>{t}</span>
            ))}
          </div>
          <p className="text-[9px] text-gray-400 mt-2.5">Pick segments — activate on any format</p>
        </BrowserFrame>
      );
    case 'builder':
      return (
        <BrowserFrame url="costco velocity — custom audience">
          {[
            ['Buys in category', 80],
            ['Shops these warehouses', 55],
            ['Purchase frequency', 65],
          ].map(([t, w]) => (
            <div key={t} className="mb-2.5">
              <div className="flex justify-between text-[9px] font-bold text-gray-700 mb-1"><span>{t}</span><span className="text-costco-blue">On</span></div>
              <div className="h-2 bg-gray-200 rounded-full"><div className="h-2 bg-costco-blue rounded-full" style={{ width: `${w}%` }} /></div>
            </div>
          ))}
          <p className="text-[9px] text-gray-400">Built to your brief — sized before you spend</p>
        </BrowserFrame>
      );
    case 'dashboard':
      return (
        <BrowserFrame url="costco velocity — reporting">
          <div className="grid grid-cols-3 gap-2 mb-2">
            {[['Sales', '$—'], ['New to brand', '—%'], ['ROAS', '—x']].map(([k, v]) => (
              <div key={k} className="border border-gray-200 p-2 text-center">
                <p className="text-[13px] font-extrabold text-costco-darkBlue">{v}</p>
                <p className="text-[8px] font-bold text-gray-500 uppercase">{k}</p>
              </div>
            ))}
          </div>
          <div className="flex items-end gap-1.5 h-12 px-1">
            {[35, 50, 44, 66, 82, 97].map((h, i) => (
              <div key={i} className="flex-1 bg-costco-blue/80" style={{ height: `${h}%` }} />
            ))}
          </div>
          <p className="text-[9px] text-gray-400 mt-1.5 text-center">Closed-loop sales, online + warehouse</p>
        </BrowserFrame>
      );
    case 'cleanroom':
      return (
        <div className="w-full bg-gray-50 border border-gray-200 p-4">
          <div className="flex items-center justify-between max-w-[340px] mx-auto">
            <div className="bg-white border border-gray-300 text-center px-2 py-2.5 w-[104px]">
              <p className="text-[9px] font-extrabold text-gray-900">YOUR DATA</p>
              <p className="text-[8px] text-gray-500">First-party</p>
            </div>
            <div className="bg-gray-900 text-white text-center px-2 py-2.5 w-[118px]">
              <ShieldCheck className="w-4 h-4 mx-auto mb-0.5 text-blue-300" />
              <p className="text-[9px] font-extrabold">CLEAN ROOM</p>
              <p className="text-[8px] text-gray-400">Matched securely</p>
            </div>
            <div className="bg-costco-darkBlue text-white text-center px-2 py-2.5 w-[104px]">
              <p className="text-[9px] font-extrabold">COSTCO DATA</p>
              <p className="text-[8px] text-blue-200">Membership</p>
            </div>
          </div>
          <p className="text-[9px] text-gray-400 text-center mt-2.5">Raw data never changes hands</p>
        </div>
      );
    default:
      return (
        <BrowserFrame>
          <div className="grid grid-cols-3 gap-2"><ProductCard highlighted /><ProductCard /><ProductCard /></div>
        </BrowserFrame>
      );
  }
}

/* ---------- Page ---------- */

function SectionHeader({ label, title, intro }) {
  return (
    <div className="mb-12">
      {label && (
        <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-costco-red mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
        {title}
      </h2>
      {intro && <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">{intro}</p>}
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

  const navItems = [
    ...GROUPS.map((g) => ({ id: `sol-${g.id}`, label: g.label })),
    { id: 'sol-faqs', label: 'Advertiser FAQs' },
  ];

  return (
    <div className="w-full bg-white font-sans">
      {/* ---------- HERO (borrowed from the prototype's promise) ---------- */}
      <section className="bg-costco-darkBlue text-white py-20 lg:py-24 w-full">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95] mb-6">
            Solutions built to drive growth.
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-white mb-4 max-w-3xl">
            Reach members wherever they are.
          </p>
          <p className="text-lg text-blue-100 max-w-3xl leading-relaxed">
            Measurable sales growth across Costco.com, the warehouse,
            and everywhere members shop in between — with transparent
            reporting and closed-loop measurement on every campaign.
          </p>
        </div>
      </section>

      {/* ---------- NAV (scroll buttons — hash links break this router) ---------- */}
      <nav className="sticky top-[116px] z-30 bg-white border-b border-gray-200">
        <div className="container-custom flex gap-2 overflow-x-auto py-3">
          {navItems.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollToId(n.id)}
              className="whitespace-nowrap text-sm font-bold text-gray-700 hover:text-costco-blue border border-gray-300 hover:border-costco-blue rounded-full px-4 py-2 transition-colors"
            >
              {n.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ---------- FORMAT GROUPS ---------- */}
      {GROUPS.map((group, gi) => (
        <section
          key={group.id}
          id={`sol-${group.id}`}
          className={`py-16 lg:py-24 w-full scroll-mt-44 ${
            gi % 2 === 1 ? 'bg-gray-50 border-y border-gray-200' : 'bg-white'
          }`}
        >
          <div className="container-custom">
            <SectionHeader label={group.label} title={group.title} intro={group.intro} />
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
                        className="text-costco-blue font-bold text-sm hover:underline"
                      >
                        See it &amp; details
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            {group.id === 'audience' && (
              <div className="flex items-start gap-3 bg-gray-50 border border-gray-200 p-5 max-w-5xl mt-10">
                <Users className="w-5 h-5 text-costco-blue shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed">
                  <strong>Member data stays at Costco.</strong> Audiences are
                  activated for your campaign inside Costco&rsquo;s systems —
                  never sold, never handed over as lists.
                </p>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* ---------- PARTNERS LINK ---------- */}
      <section className="py-12 w-full bg-gray-50 border-y border-gray-200">
        <div className="container-custom flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-lg text-gray-800">
            <strong>Prefer to work through a partner?</strong> Many of
            our partners offer managed service and activation support.
          </p>
          <Link
            to="/partners"
            className="text-costco-blue font-bold inline-flex items-center gap-2 hover:underline shrink-0"
          >
            Meet our partners <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ---------- ADVERTISER FAQs ---------- */}
      <section id="sol-faqs" className="py-16 lg:py-24 w-full bg-white scroll-mt-44">
        <div className="container-custom">
          <SectionHeader
            title="Advertiser FAQs"
            intro="Straight answers, the way we'd give them in a meeting."
          />
          <div className="max-w-4xl">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="border-t border-gray-300">
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-lg sm:text-xl font-extrabold text-gray-900">{f.q}</span>
                    <ChevronDown className={`w-5 h-5 text-costco-blue shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
                  </button>
                  {open && <p className="text-gray-700 leading-relaxed pb-7 pr-10 max-w-3xl">{f.a}</p>}
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
            to="/"
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
            format&rsquo;s standard reporting. Mockups are illustrative
            renderings of each format. Warehouse count — Costco company
            reporting.
          </p>
        </div>
      </section>

      {/* ---------- DETAIL MODAL (centered) ---------- */}
      {selected && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-gray-950/60" onClick={() => setSelected(null)} />
          <div className="relative bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 sm:px-8 py-4 flex items-center justify-between z-10">
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
            <div className="px-6 sm:px-8 py-7">
              <h2 className="text-3xl font-extrabold text-gray-900 leading-tight mb-6">
                {selected.title}
              </h2>

              {/* Mockup visual */}
              <div className="bg-gray-50 border border-gray-200 p-4 sm:p-6 mb-8">
                <Mockup type={selected.mock} />
              </div>

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
                    <p className="text-xs font-extrabold uppercase tracking-wide text-gray-500">{k}</p>
                    <p className="font-bold text-gray-900 text-sm">{v}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/"
                className="w-full bg-costco-red hover:bg-red-700 text-white font-bold py-4 rounded-full transition text-sm uppercase tracking-wider flex items-center justify-center gap-2"
              >
                Ask about this format <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-gray-500 text-center mt-4">
                Specs, pricing and available dates come from the team —
                that&rsquo;s the meeting.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
