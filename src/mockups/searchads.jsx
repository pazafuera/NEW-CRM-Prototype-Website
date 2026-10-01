import React, { useState } from 'react';
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  Star,
  StarHalf,
  ChevronDown,
  Filter,
  MapPin,
  LayoutTemplate,
  Play,
  Info,
} from 'lucide-react';

const MOCK_PRODUCTS = [
  {
    id: 1,
    title: 'Kirkland Signature Moisture Shampoo, 33.8 fl oz',
    price: '11.99',
    rating: 4.8,
    reviews: 4521,
    image: 'https://placehold.co/300x300/ffffff/475569?text=Kirkland+Shampoo',
    delivery: '2-Day Delivery',
  },
  {
    id: 2,
    title: 'Pantene Advanced Care Shampoo, 38.2 fl oz',
    price: '14.99',
    rating: 4.5,
    reviews: 8932,
    image: 'https://placehold.co/300x300/ffffff/475569?text=Pantene',
    delivery: 'Same-Day Delivery',
  },
  {
    id: 3,
    title: 'Nexxus Therappe Replenishing System Shampoo, 33.8 oz',
    price: '19.99',
    rating: 4.6,
    reviews: 3102,
    image: 'https://placehold.co/300x300/ffffff/475569?text=Nexxus',
    delivery: 'Standard, 3-5 Business Days',
  },
  {
    id: 4,
    title: 'Head & Shoulders Classic Clean Dandruff Shampoo, 43.3 fl oz',
    price: '15.49',
    rating: 4.7,
    reviews: 12453,
    image: 'https://placehold.co/300x300/ffffff/475569?text=Head+%26+Shoulders',
    delivery: '2-Day Delivery',
  },
  {
    id: 5,
    title: 'Herbal Essences Hello Hydration Shampoo, 29.2 fl oz',
    price: '9.99',
    rating: 4.4,
    reviews: 2154,
    image: 'https://placehold.co/300x300/ffffff/475569?text=Herbal+Essences',
    delivery: 'Same-Day Delivery',
  },
  {
    id: 6,
    title: 'Dove Nutritive Solutions Daily Moisture Shampoo, 40 fl oz',
    price: '12.99',
    rating: 4.6,
    reviews: 6732,
    image: 'https://placehold.co/300x300/ffffff/475569?text=Dove',
    delivery: 'Standard, 3-5 Business Days',
  },
  {
    id: 7,
    title: 'Olaplex No.4 Bond Maintenance Shampoo, 8.5 fl oz',
    price: '28.00',
    rating: 4.9,
    reviews: 1542,
    image: 'https://placehold.co/300x300/ffffff/475569?text=Olaplex',
    delivery: '2-Day Delivery',
  },
  {
    id: 8,
    title: "Pura D'or Original Gold Label Anti-Thinning Shampoo, 16 fl oz",
    price: '24.99',
    rating: 4.2,
    reviews: 890,
    image: 'https://placehold.co/300x300/ffffff/475569?text=Pura+Dor',
    delivery: 'Standard, 3-5 Business Days',
  },
  {
    id: 9,
    title: 'Aveeno Scalp Soothing Oat Milk Blend Shampoo, 12 fl oz',
    price: '8.99',
    rating: 4.5,
    reviews: 3412,
    image: 'https://placehold.co/300x300/ffffff/475569?text=Aveeno',
    delivery: '2-Day Delivery',
  },
  {
    id: 10,
    title: 'Garnier Fructis Sleek & Shine Shampoo, 40 fl oz',
    price: '10.49',
    rating: 4.3,
    reviews: 452,
    image: 'https://placehold.co/300x300/ffffff/475569?text=Garnier',
    delivery: 'Same-Day Delivery',
  },
  {
    id: 11,
    title: 'Tresemme Moisture Rich Shampoo, 39 fl oz',
    price: '11.49',
    rating: 4.4,
    reviews: 5634,
    image: 'https://placehold.co/300x300/ffffff/475569?text=Tresemme',
    delivery: 'Standard, 3-5 Business Days',
  },
  {
    id: 12,
    title: 'OGX Thick & Full + Biotin & Collagen Shampoo, 25.4 fl oz',
    price: '16.99',
    rating: 4.6,
    reviews: 2987,
    image: 'https://placehold.co/300x300/ffffff/475569?text=OGX',
    delivery: '2-Day Delivery',
  },
  {
    id: 13,
    title: 'Biolage ColorLast Shampoo, 33.8 fl oz',
    price: '23.00',
    rating: 4.7,
    reviews: 2100,
    image: 'https://placehold.co/300x300/ffffff/475569?text=Biolage',
    delivery: '2-Day Delivery',
  },
  {
    id: 14,
    title: 'Paul Mitchell Awapuhi Wild Ginger Shampoo, 33.8 fl oz',
    price: '45.00',
    rating: 4.8,
    reviews: 850,
    image: 'https://placehold.co/300x300/ffffff/475569?text=Paul+Mitchell',
    delivery: 'Standard, 3-5 Business Days',
  },
  {
    id: 15,
    title: 'Redken All Soft Argan-6 Oil Shampoo, 33.8 fl oz',
    price: '34.00',
    rating: 4.6,
    reviews: 3120,
    image: 'https://placehold.co/300x300/ffffff/475569?text=Redken',
    delivery: '2-Day Delivery',
  },
  {
    id: 16,
    title: 'Moroccanoil Moisture Repair Shampoo, 33.8 fl oz',
    price: '50.00',
    rating: 4.9,
    reviews: 5420,
    image: 'https://placehold.co/300x300/ffffff/475569?text=Moroccanoil',
    delivery: 'Standard, 3-5 Business Days',
  },
];

const Header = () => (
  <header className="bg-white border-b border-gray-200">
    <div className="bg-[#eeeeee] text-xs py-1 px-4 text-right text-gray-600 flex justify-end space-x-4">
      <a href="#" className="hover:underline">
        Costco Next
      </a>
      <a href="#" className="hover:underline">
        While Supplies Last
      </a>
      <a href="#" className="hover:underline">
        Online-Only
      </a>
      <a href="#" className="hover:underline">
        Treasure Hunt
      </a>
      <a href="#" className="hover:underline">
        What's New
      </a>
      <a href="#" className="hover:underline">
        Member Perks
      </a>
    </div>

    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-6 w-full max-w-6xl mx-auto">
        <div className="text-3xl font-extrabold text-[#e31837] tracking-tighter shrink-0 cursor-pointer flex flex-col">
          COSTCO
          <span className="text-xs text-[#0060a9] tracking-normal -mt-1 font-bold">
            WHOLESALE
          </span>
        </div>

        <div className="flex-grow flex items-center max-w-3xl">
          <div className="flex w-full border-2 border-[#0060a9] rounded-sm overflow-hidden">
            <input
              type="text"
              defaultValue="shampoo"
              className="w-full px-4 py-2 text-gray-700 focus:outline-none"
            />
            <button className="bg-[#0060a9] text-white px-6 flex items-center justify-center hover:bg-blue-800 transition-colors">
              <Search size={20} />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-6 shrink-0 text-[#0060a9]">
          <div className="flex flex-col items-center cursor-pointer hover:underline">
            <User size={24} />
            <span className="text-xs font-semibold mt-1">
              Sign In / Register
            </span>
          </div>
          <div className="flex flex-col items-center cursor-pointer hover:underline">
            <ShoppingCart size={24} />
            <span className="text-xs font-semibold mt-1">Cart</span>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-[#0060a9] text-white px-4 py-2">
      <div className="container mx-auto max-w-6xl flex items-center justify-between text-sm font-semibold">
        <div className="flex items-center space-x-6 overflow-x-auto whitespace-nowrap hide-scrollbar">
          <button className="flex items-center hover:underline">
            <Menu size={20} className="mr-1" />
            Shop
          </button>
          <a href="#" className="hover:underline">
            Grocery
          </a>
          <a href="#" className="hover:underline">
            Same-Day
          </a>
          <a href="#" className="hover:underline">
            Deals
          </a>
          <a href="#" className="hover:underline">
            Business Delivery
          </a>
          <a href="#" className="hover:underline">
            Optical
          </a>
          <a href="#" className="hover:underline">
            Pharmacy
          </a>
          <a href="#" className="hover:underline">
            Services
          </a>
        </div>

        <div className="flex items-center hover:bg-blue-800 px-2 py-1 rounded cursor-pointer shrink-0">
          <MapPin size={18} className="mr-2" />
          <span>My Warehouse</span>
          <span className="mx-2 font-normal text-blue-300">|</span>
          <span>Delivery Location</span>
          <ChevronDown size={16} className="ml-1" />
        </div>
      </div>
    </div>
  </header>
);

const ProductCard = ({ product, isSponsored = false }) => {
  return (
    <div
      className={`flex flex-col group border p-3 transition-all duration-200 bg-white h-full relative ${
        isSponsored
          ? 'border-gray-200 shadow-sm'
          : 'border-transparent hover:border-gray-300 hover:shadow-lg'
      }`}
    >
      {isSponsored && (
        <div className="text-[11px] text-gray-500 mb-2 flex items-center">
          <span>Sponsored</span>
          <Info
            size={12}
            className="ml-1 cursor-pointer text-gray-400 hover:text-gray-600"
          />
        </div>
      )}
      <div className="relative w-full aspect-square mb-4 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <div className="text-lg font-bold text-gray-900 mb-1">
          ${product.price}
        </div>

        <h2 className="text-sm text-blue-700 hover:underline cursor-pointer mb-2 line-clamp-3">
          {product.title}
        </h2>

        <div className="flex items-center space-x-1 mb-2">
          <div className="flex text-yellow-500">
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            {product.rating > 4.5 ? (
              <Star size={14} fill="currentColor" />
            ) : (
              <StarHalf size={14} fill="currentColor" />
            )}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        <div className="text-xs text-gray-600 mb-4 font-semibold">
          {product.delivery}
        </div>

        <div className="mt-auto pt-2">
          <button className="w-full bg-[#0060a9] hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition-colors text-sm">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

const SponsoredBrandAd = ({ isVideo, isTile, className }) => {
  if (isTile) {
    return (
      <div
        className={`flex flex-col border border-gray-200 h-full w-full bg-white shadow-sm overflow-hidden group cursor-pointer hover:border-gray-300 ${className}`}
      >
        <div
          className={`h-32 flex items-center justify-center text-center relative overflow-hidden ${
            isVideo ? 'bg-zinc-900' : 'bg-white border-b border-gray-100'
          }`}
        >
          <div
            className={`absolute top-1 right-1 text-[9px] uppercase flex items-center z-10 ${
              isVideo ? 'text-white/50' : 'text-gray-400'
            }`}
          >
            Sponsored <Info size={10} className="ml-1" />
          </div>
          {isVideo ? (
            <div className="w-full h-full relative">
              <img
                src="https://placehold.co/400x300/27272a/71717a?text=Brand+Video"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Play size={14} className="text-white fill-white ml-0.5" />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <span className="font-serif italic text-2xl text-gray-800 tracking-wide">
                L'Oréal
              </span>
              <span className="text-[8px] tracking-[0.2em] text-gray-500 uppercase mt-0.5">
                Paris
              </span>
            </div>
          )}
        </div>
        <div className="p-3 flex-grow bg-white flex flex-col justify-between">
          <div>
            <p className="text-sm font-bold text-gray-900 line-clamp-2 mb-1">
              Advanced Hair Science
            </p>
            <p className="text-xs text-gray-500 line-clamp-2 mb-2">
              Deep nourishment for 48H of silky hair.
            </p>
          </div>
          <div className="text-xs text-[#0060a9] font-bold group-hover:underline">
            Shop the Collection ›
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col md:flex-row w-full border border-gray-200 bg-white overflow-hidden shadow-sm ${className}`}
    >
      {/* 30% Branded Section */}
      <div
        className={`w-full md:w-[35%] p-4 md:p-5 flex flex-col justify-center relative overflow-hidden shrink-0 ${
          isVideo ? 'bg-zinc-900 text-white' : 'bg-white text-gray-800'
        }`}
      >
        {isVideo && (
          <div className="absolute top-0 left-0 w-48 h-48 bg-fuchsia-600 rounded-full blur-[64px] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        )}

        <div
          className={`absolute top-2 left-2 text-[10px] flex items-center z-20 ${
            isVideo ? 'text-white/60' : 'text-gray-400'
          }`}
        >
          Sponsored{' '}
          <Info
            size={12}
            className={`ml-1 cursor-pointer ${
              isVideo ? 'hover:text-white' : 'hover:text-gray-600'
            }`}
          />
        </div>

        {isVideo ? (
          <>
            <div className="w-full aspect-video bg-zinc-800 rounded mb-3 overflow-hidden relative group cursor-pointer border border-zinc-700 z-10 mt-1">
              <img
                src="https://placehold.co/600x400/27272a/71717a?text=Brand+Video"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-lg">
                  <Play size={16} className="text-white fill-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2 right-2 flex items-center space-x-2">
                <div className="h-1 bg-white/30 rounded flex-grow overflow-hidden">
                  <div className="h-full w-1/3 bg-[#e31837] rounded"></div>
                </div>
                <span className="text-[10px] font-bold text-white drop-shadow-md">
                  0:15
                </span>
              </div>
            </div>
            <h3 className="font-bold text-lg mb-1 z-10 leading-tight text-white">
              Advanced Hair Science
            </h3>
            <p className="text-[13px] text-zinc-300 mb-3 z-10 line-clamp-2 leading-snug">
              Deep nourishment for 48H of silky hair. Discover the science of
              beautiful hair.
            </p>

            <button className="self-start text-xs font-bold bg-white text-zinc-900 px-5 py-1.5 rounded-sm hover:bg-zinc-200 transition-colors z-10">
              Shop the Collection
            </button>
          </>
        ) : (
          <div className="flex flex-col justify-center h-full pt-2">
            <div className="mb-3 z-10">
              <div className="text-3xl font-serif italic tracking-wide text-gray-900">
                L'Oréal
              </div>
              <div className="text-[10px] tracking-[0.3em] text-gray-500 uppercase mt-0.5">
                Paris
              </div>
            </div>
            <h3 className="font-bold text-lg mb-1 z-10 leading-tight text-gray-900">
              Advanced Hair Science
            </h3>
            <p className="text-[13px] text-gray-600 mb-4 z-10 line-clamp-2 leading-snug">
              Deep nourishment for 48H of silky hair.
            </p>

            <button className="self-start text-sm font-bold text-[#0060a9] hover:underline transition-colors z-10 flex items-center">
              Shop the Collection{' '}
              <span className="ml-1 text-lg leading-none">›</span>
            </button>
          </div>
        )}
      </div>

      {/* 70% Product Carousel Section */}
      <div className="w-full md:w-[65%] p-3 flex gap-3 overflow-x-auto hide-scrollbar items-stretch bg-gray-50 border-l border-gray-200">
        {MOCK_PRODUCTS.slice(4, 9).map((p, idx) => (
          <div
            key={`brand-prod-${p.id}`}
            className="min-w-[130px] max-w-[130px] flex flex-col group cursor-pointer hover:shadow-lg p-2.5 transition-shadow border border-transparent hover:border-gray-300 h-full bg-white rounded shadow-sm"
          >
            <div className="relative w-full aspect-square mb-2">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <div className="text-sm font-bold text-gray-900 mb-1">
                ${p.price}
              </div>
              <div className="text-xs text-blue-700 line-clamp-2 group-hover:underline mb-1 leading-tight">
                {p.title}
              </div>
              <div className="flex text-yellow-500 mt-auto">
                <Star size={10} fill="currentColor" />
                <Star size={10} fill="currentColor" />
                <Star size={10} fill="currentColor" />
                <Star size={10} fill="currentColor" />
                <Star size={10} fill="currentColor" />
              </div>
            </div>
          </div>
        ))}
        {/* "See More" Card */}
        <div className="min-w-[130px] max-w-[130px] flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-shadow border border-gray-200 bg-white rounded shadow-sm group">
          <div className="w-10 h-10 rounded-full border-2 border-[#0060a9] text-[#0060a9] flex items-center justify-center group-hover:bg-[#0060a9] group-hover:text-white transition-colors mb-2">
            <span className="text-lg font-bold leading-none mb-0.5">›</span>
          </div>
          <span className="text-xs font-bold text-[#0060a9]">View All</span>
        </div>
      </div>
    </div>
  );
};

const SponsoredDisplayAd = ({ isTile, className }) => {
  if (isTile) {
    return (
      <div
        className={`flex flex-col border border-gray-200 bg-white h-full w-full relative group cursor-pointer hover:shadow-lg transition-all overflow-hidden ${className}`}
      >
        <div className="absolute top-1 right-1 bg-white/90 px-1.5 py-0.5 rounded-sm text-[9px] text-gray-500 flex items-center z-20 shadow-sm backdrop-blur-sm">
          Sponsored <Info size={10} className="ml-1" />
        </div>

        {/* Brand / Lifestyle Image Area */}
        <div className="w-full aspect-square bg-slate-100 relative overflow-hidden">
          <img
            src="https://placehold.co/400x400/0f172a/ffffff?text=Lifestyle+Image"
            alt="Sponsored Content"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Copy & CTA */}
        <div className="p-3 flex flex-col flex-grow justify-between bg-slate-50 border-t border-gray-100">
          <div>
            <div className="text-[10px] font-bold text-slate-800 uppercase tracking-wider mb-1">
              Featured Event
            </div>
            <div className="font-bold text-gray-900 leading-tight mb-1 text-sm line-clamp-2">
              Buy $100, Get $25
            </div>
            <div className="text-xs text-gray-600 line-clamp-2">
              Stock up on P&G favorites and receive a digital shop card.
            </div>
          </div>
          <button className="mt-3 w-full bg-white border border-[#0060a9] text-[#0060a9] font-bold py-1.5 px-4 rounded hover:bg-[#0060a9] hover:text-white transition-colors text-xs shadow-sm">
            Shop Now
          </button>
        </div>
      </div>
    );
  }
  return (
    <div
      className={`w-full bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 border border-gray-300 flex flex-col md:flex-row items-center p-0 relative overflow-hidden shadow-sm mb-2 rounded-sm md:h-24 ${className}`}
    >
      <div className="absolute top-1 right-2 text-[10px] text-white/50 flex items-center z-30">
        Sponsored{' '}
        <Info size={10} className="ml-1 cursor-pointer hover:text-white" />
      </div>

      {/* Visual Side */}
      <div className="w-full md:w-1/4 h-20 md:h-full relative overflow-hidden flex items-center justify-center bg-white/5 backdrop-blur-sm border-b md:border-b-0 md:border-r border-white/10 shrink-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-400 rounded-full blur-[50px] opacity-20 z-0"></div>

        {/* Product Cluster */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <div className="bg-white p-1.5 rounded shadow-lg transform -rotate-6 z-10 absolute left-[25%]">
            <img
              src={MOCK_PRODUCTS[1].image}
              className="w-10 h-10 object-contain mix-blend-multiply"
            />
          </div>
          <div className="bg-white p-1.5 rounded shadow-lg transform rotate-6 z-20 absolute right-[25%] mt-4 border border-gray-100">
            <img
              src={MOCK_PRODUCTS[3].image}
              className="w-12 h-12 object-contain mix-blend-multiply"
            />
          </div>
        </div>
      </div>

      {/* Copy & CTA Side */}
      <div className="w-full md:w-3/4 py-3 px-4 md:px-6 flex flex-col md:flex-row items-center md:justify-between relative z-20">
        <div className="absolute right-0 top-0 w-64 h-full bg-[url('https://placehold.co/400x400/ffffff/ffffff?text=Pattern')] opacity-5 mix-blend-overlay"></div>

        <div className="text-center md:text-left mb-3 md:mb-0 relative z-10 flex-grow pr-4">
          <div className="text-cyan-400 font-bold tracking-widest text-[10px] uppercase mb-1">
            Member Exclusive Offer
          </div>
          <h3 className="text-xl md:text-2xl font-extrabold text-white mb-1 leading-tight drop-shadow-md">
            Buy $100, <span className="text-yellow-400">Get $25</span>
          </h3>
          <p className="text-cyan-50 text-xs max-w-lg leading-snug opacity-90 truncate md:whitespace-normal line-clamp-1">
            Stock up on your favorite Procter & Gamble essentials and receive a
            Digital Shop Card via email.
          </p>
        </div>

        <button className="bg-yellow-400 text-yellow-900 px-6 py-2 rounded-sm font-extrabold hover:bg-yellow-300 transition-all duration-200 shadow-md shrink-0 relative z-10 whitespace-nowrap text-xs uppercase tracking-wide">
          Shop Items
        </button>
      </div>
    </div>
  );
};

const AdRenderer = ({ format, isTile = false, className = '' }) => {
  if (format === 'Sponsored Product') {
    return <ProductCard product={MOCK_PRODUCTS[8]} isSponsored={true} />;
  }
  if (format === 'Sponsored Display') {
    return <SponsoredDisplayAd isTile={isTile} className={className} />;
  }

  const isVideo = format === 'Sponsored Brand (Image/Video)';
  return (
    <SponsoredBrandAd isVideo={isVideo} isTile={isTile} className={className} />
  );
};

const Sidebar = ({ adSettings }) => (
  <aside className="w-64 shrink-0 hidden md:block pr-6">
    <div className="mb-6">
      <h3 className="font-bold text-gray-800 mb-3 border-b pb-2">Category</h3>
      <ul className="text-sm text-gray-700 space-y-2">
        <li className="cursor-pointer hover:underline">
          Beauty & Personal Care (142)
        </li>
        <li className="cursor-pointer hover:underline pl-4 font-semibold">
          Hair Care (120)
        </li>
        <li className="cursor-pointer hover:underline pl-8 text-gray-600">
          Shampoo (85)
        </li>
        <li className="cursor-pointer hover:underline pl-8 text-gray-600">
          Conditioner (35)
        </li>
      </ul>
    </div>

    <div className="mb-6">
      <h3 className="font-bold text-gray-800 mb-3 border-b pb-2 flex justify-between items-center">
        Brand <ChevronDown size={16} />
      </h3>
      <div className="space-y-2 text-sm">
        {[
          'Kirkland Signature (4)',
          'Pantene (8)',
          'Head & Shoulders (6)',
          'Dove (5)',
          'Nexxus (3)',
        ].map((brand) => (
          <label
            key={brand}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="checkbox"
              className="rounded text-[#0060a9] focus:ring-[#0060a9]"
            />
            <span>{brand}</span>
          </label>
        ))}
      </div>
    </div>

    <div className="mb-6">
      <h3 className="font-bold text-gray-800 mb-3 border-b pb-2 flex justify-between items-center">
        Price <ChevronDown size={16} />
      </h3>
      <div className="space-y-2 text-sm">
        {['$0 - $10', '$10 - $20', '$20 - $30', '$30+'].map((price) => (
          <label
            key={price}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="checkbox"
              className="rounded text-[#0060a9] focus:ring-[#0060a9]"
            />
            <span>{price}</span>
          </label>
        ))}
      </div>
    </div>

    {adSettings.leftRail.enabled && (
      <div className="mt-8">
        <AdRenderer
          format={adSettings.leftRail.format}
          isTile={true}
          className="min-h-[400px]"
        />
      </div>
    )}
  </aside>
);

export default function App() {
  const [adSettings, setAdSettings] = useState({
    fullWidthTop: { enabled: true, format: 'Sponsored Brand (Image/Video)' },
    aboveGrid: { enabled: false, format: 'Sponsored Display' },
    sponsoredTiles: { enabled: true, format: 'Sponsored Product' },
    inGridDisplayTiles: { enabled: true, format: 'Sponsored Display' }, // New placement
    inGridRows: { enabled: true, format: 'Sponsored Brand (Logo Only)' },
    leftRail: { enabled: false, format: 'Sponsored Display' },
    fullWidthBottom: { enabled: false, format: 'Sponsored Display' },
  });

  const PLACEMENTS = [
    { id: 'fullWidthTop', label: 'Full Width (Below Header)' },
    { id: 'aboveGrid', label: 'Above Grid (Right of Rail)' },
    { id: 'sponsoredTiles', label: 'Sponsored Tiles (Slots 2,3,8,12,16)' },
    { id: 'inGridDisplayTiles', label: 'In-Grid Display Tiles (Slots 6, 14)' }, // New placement in controls
    { id: 'inGridRows', label: 'In-Grid Rows (Between 2 rows)' },
    { id: 'leftRail', label: 'Left Rail (Under Filters)' },
    { id: 'fullWidthBottom', label: 'Full Width (Above Footer)' },
  ];

  const FORMATS = [
    'Sponsored Brand (Logo Only)',
    'Sponsored Brand (Image/Video)',
    'Sponsored Display',
    'Sponsored Product',
  ];

  // Logic to build the grid incorporating organic products and injected ads
  const renderGridItems = () => {
    const items = [];
    let pIndex = 0;
    let slot = 1; // logical slot position in the 4-column grid
    let rowAdCount = 0;

    while (pIndex < MOCK_PRODUCTS.length) {
      // 1. Evaluate In-Grid Display Tile Slots (Walmart Style)
      if (adSettings.inGridDisplayTiles.enabled && [6, 14].includes(slot)) {
        items.push({
          id: `ad-display-tile-${slot}`,
          type: 'tile',
          format: adSettings.inGridDisplayTiles.format,
        });
        slot++;
      }
      // 2. Evaluate Sponsored Product Tile Slots
      else if (
        adSettings.sponsoredTiles.enabled &&
        [2, 3, 8, 12, 16].includes(slot)
      ) {
        items.push({
          id: `ad-tile-${slot}`,
          type: 'tile',
          format: adSettings.sponsoredTiles.format,
        });
        slot++;
      } else {
        // 3. Render Organic Product
        items.push({
          id: `organic-${MOCK_PRODUCTS[pIndex].id}`,
          type: 'organic',
          product: MOCK_PRODUCTS[pIndex],
        });
        pIndex++;
        slot++;
      }

      // 4. Evaluate In-Grid Row Sponsorship
      // Spliced in between every 2 visual rows (which is every 8 logical slots)
      if (adSettings.inGridRows.enabled && (slot - 1) % 8 === 0) {
        rowAdCount++;
        const rowFormat =
          rowAdCount === 1
            ? 'Sponsored Brand (Image/Video)'
            : 'Sponsored Display';

        items.push({
          id: `in-grid-row-${slot - 1}`,
          type: 'row',
          format: rowFormat,
        });
      }
    }
    return items;
  };

  return (
    <>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="min-h-screen bg-white font-sans text-gray-800 flex flex-col relative">
        {/* Prototype Controls Panel */}
        <div className="bg-slate-100 border-b border-slate-300 p-4 z-50 text-sm">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="flex items-center mb-4 font-bold text-slate-800 text-lg">
              <LayoutTemplate size={20} className="mr-2" /> Ad Placement &
              Format Controls
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              {PLACEMENTS.map((placement) => (
                <div
                  key={placement.id}
                  className="flex flex-col bg-white p-3 rounded shadow-sm border border-slate-200"
                >
                  <label className="flex items-center font-semibold mb-2 text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mr-2 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      checked={adSettings[placement.id].enabled}
                      onChange={(e) =>
                        setAdSettings({
                          ...adSettings,
                          [placement.id]: {
                            ...adSettings[placement.id],
                            enabled: e.target.checked,
                          },
                        })
                      }
                    />
                    {placement.label}
                  </label>
                  <select
                    className="border border-slate-300 rounded p-1.5 text-xs w-full bg-slate-50 focus:outline-none focus:border-blue-500 disabled:opacity-50"
                    value={
                      placement.id === 'inGridRows'
                        ? 'Mixed (Brand / Display)'
                        : adSettings[placement.id].format
                    }
                    onChange={(e) =>
                      setAdSettings({
                        ...adSettings,
                        [placement.id]: {
                          ...adSettings[placement.id],
                          format: e.target.value,
                        },
                      })
                    }
                    disabled={
                      !adSettings[placement.id].enabled ||
                      placement.id === 'inGridRows'
                    }
                  >
                    {placement.id === 'inGridRows' ? (
                      <option value="Mixed (Brand / Display)">
                        Mixed (Brand / Display)
                      </option>
                    ) : (
                      FORMATS.map((f) => (
                        <option key={f} value={f}>
                          {f}
                        </option>
                      ))
                    )}
                  </select>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Header />

        {/* Full Width Top Ad Placement */}
        {adSettings.fullWidthTop.enabled && (
          <div className="container mx-auto max-w-7xl px-4 mt-6">
            <AdRenderer format={adSettings.fullWidthTop.format} />
          </div>
        )}

        <main className="flex-grow container mx-auto max-w-7xl px-4 py-6 flex">
          <Sidebar adSettings={adSettings} />

          <div className="flex-grow w-full max-w-full overflow-hidden">
            {/* Above Grid Ad Placement */}
            {adSettings.aboveGrid.enabled && (
              <div className="mb-6">
                <AdRenderer format={adSettings.aboveGrid.format} />
              </div>
            )}

            {/* Results Header */}
            <div className="flex justify-between items-end mb-4 border-b pb-2">
              <div>
                <h1 className="text-2xl font-normal text-gray-800">
                  Showing results for{' '}
                  <span className="font-bold text-gray-900">"shampoo"</span>
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Showing 1-16 of 85 Products
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <button className="md:hidden flex items-center space-x-1 text-sm border px-3 py-1.5 rounded">
                  <Filter size={16} />
                  <span>Filter</span>
                </button>
                <div className="hidden md:flex items-center space-x-2 text-sm">
                  <span className="text-gray-600 font-semibold">Sort by:</span>
                  <select className="border border-gray-300 rounded px-2 py-1 bg-white focus:outline-none focus:border-[#0060a9]">
                    <option>Best Match</option>
                    <option>Price (Low to High)</option>
                    <option>Price (High to Low)</option>
                    <option>Highest Rated</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Product Grid with Advanced Ad Placements */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-6">
              {renderGridItems().map((item) => {
                if (item.type === 'tile') {
                  return (
                    <div key={item.id} className="h-full w-full">
                      <AdRenderer format={item.format} isTile={true} />
                    </div>
                  );
                }
                if (item.type === 'organic') {
                  return (
                    <div key={item.id} className="h-full w-full">
                      <ProductCard product={item.product} />
                    </div>
                  );
                }
                if (item.type === 'row') {
                  return (
                    <div
                      key={item.id}
                      className="col-span-2 md:col-span-3 lg:col-span-4 mt-2 mb-4"
                    >
                      <AdRenderer format={item.format} />
                    </div>
                  );
                }
                return null;
              })}
            </div>

            {/* Pagination Placeholder */}
            <div className="mt-12 flex justify-center">
              <div className="flex space-x-1 text-sm">
                <button className="px-3 py-1 border text-gray-400 cursor-not-allowed">
                  Previous
                </button>
                <button className="px-3 py-1 border bg-[#0060a9] text-white">
                  1
                </button>
                <button className="px-3 py-1 border text-[#0060a9] hover:bg-gray-100">
                  2
                </button>
                <button className="px-3 py-1 border text-[#0060a9] hover:bg-gray-100">
                  3
                </button>
                <span className="px-2 py-1">...</span>
                <button className="px-3 py-1 border text-[#0060a9] hover:bg-gray-100">
                  8
                </button>
                <button className="px-3 py-1 border text-[#0060a9] hover:bg-gray-100">
                  Next
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Full Width Bottom Ad Placement */}
        {adSettings.fullWidthBottom.enabled && (
          <div className="container mx-auto max-w-7xl px-4 mt-6 mb-8">
            <AdRenderer format={adSettings.fullWidthBottom.format} />
          </div>
        )}

        {/* Basic Footer Mock */}
        <footer className="bg-gray-100 border-t mt-12 py-8">
          <div className="container mx-auto max-w-6xl px-4 text-center text-sm text-gray-600">
            <p>
              © 1998 — 2026 Costco Wholesale Corporation. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
