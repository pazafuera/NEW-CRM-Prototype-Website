import React, { useState, useMemo } from 'react';
import {
  Search,
  X,
  ChevronDown,
  Image as ImageIcon,
  Shield,
  Award,
  Tag,
  Sparkles,
  Box,
  ShoppingBag,
  Store,
} from 'lucide-react';

// Using pure CSS/HTML placeholders instead of external URLs to guarantee rendering
const MOCK_DATA = {
  cheese: [
    {
      id: '1254332',
      title: 'KIRKLAND SIGNATURE PARMIGIANO REGGIANO AGED 24 MONTHS, 1 LB',
      price: '$12.49',
      stockStatus: 'In Stock',
      stockColor: 'text-green-700',
      hasFindNearby: false,
      placeholder: {
        bg: 'bg-yellow-100',
        text: 'text-yellow-800',
        label: 'Parmigiano',
      },
    },
    {
      id: '1552210',
      title: 'TILLAMOOK MEDIUM CHEDDAR CHEESE, 2.5 LBS',
      price: '$9.99',
      stockStatus: 'Low Stock',
      stockColor: 'text-amber-700',
      hasFindNearby: true,
      placeholder: {
        bg: 'bg-orange-100',
        text: 'text-orange-800',
        label: 'Cheddar',
      },
    },
    {
      id: '1431122',
      title: 'BABEL MINI BABYBEL ORIGINAL CHEESE, 36 CT',
      price: '$14.69',
      stockStatus: 'In Stock',
      stockColor: 'text-green-700',
      hasFindNearby: false,
      placeholder: { bg: 'bg-red-100', text: 'text-red-800', label: 'Babybel' },
    },
    {
      id: '1098443',
      title:
        'KIRKLAND SIGNATURE SHREDDED MEXICAN STYLE BLEND CHEESE, 2.5 LBS, 2-COUNT',
      price: '$15.49',
      stockStatus: 'Low Stock',
      stockColor: 'text-amber-700',
      hasFindNearby: true,
      placeholder: {
        bg: 'bg-amber-100',
        text: 'text-amber-800',
        label: 'Mexican Blend',
      },
    },
    {
      id: '1129934',
      title: 'GALBANI FRESH MOZZARELLA LOG, 16 OZ, 2-COUNT',
      price: '$11.89',
      stockStatus: 'In Stock',
      stockColor: 'text-green-700',
      hasFindNearby: false,
      placeholder: {
        bg: 'bg-slate-100',
        text: 'text-slate-800',
        label: 'Mozzarella',
      },
    },
  ],
  chips: [
    {
      id: '1334455',
      title: 'FRITO-LAY CLASSIC MIX, VARIETY PACK, 54-COUNT',
      price: '$18.99',
      stockStatus: 'In Stock',
      stockColor: 'text-green-700',
      hasFindNearby: false,
      placeholder: {
        bg: 'bg-red-100',
        text: 'text-red-800',
        label: 'Frito-Lay Mix',
      },
    },
    {
      id: '1122334',
      title: 'KIRKLAND SIGNATURE KETTLE HIMALAYAN SALT POTATO CHIPS, 32 OZ',
      price: '$6.99',
      stockStatus: 'In Stock',
      stockColor: 'text-green-700',
      hasFindNearby: false,
      placeholder: {
        bg: 'bg-stone-200',
        text: 'text-stone-800',
        label: 'Kettle Chips',
      },
    },
    {
      id: '1556677',
      title: 'DORITOS NACHO CHEESE, 30 OZ',
      price: '$5.89',
      stockStatus: 'Out of Stock',
      stockColor: 'text-red-700',
      hasFindNearby: true,
      placeholder: {
        bg: 'bg-orange-100',
        text: 'text-orange-800',
        label: 'Doritos',
      },
    },
    {
      id: '1667788',
      title: 'CAPE COD KETTLE COOKED POTATO CHIPS, REDUCED FAT, 30 OZ',
      price: '$7.49',
      stockStatus: 'In Stock',
      stockColor: 'text-green-700',
      hasFindNearby: false,
      placeholder: {
        bg: 'bg-blue-100',
        text: 'text-blue-800',
        label: 'Cape Cod',
      },
    },
  ],
  makeup: [
    {
      id: '1889900',
      title:
        'CLINIQUE DRAMATICALLY DIFFERENT MOISTURIZING LOTION+, 4.2 FL OZ, 2-PACK',
      price: '$44.99',
      stockStatus: 'In Stock',
      stockColor: 'text-green-700',
      hasFindNearby: false,
      placeholder: {
        bg: 'bg-yellow-50',
        text: 'text-yellow-700',
        label: 'Clinique Lotion',
      },
    },
    {
      id: '1990011',
      title: "L'OREAL PARIS VOLUMINOUS MASCARA, BLACKEST BLACK, 4-PACK",
      price: '$19.99',
      stockStatus: 'Low Stock',
      stockColor: 'text-amber-700',
      hasFindNearby: true,
      placeholder: {
        bg: 'bg-gray-200',
        text: 'text-gray-800',
        label: 'Mascara',
      },
    },
    {
      id: '1778899',
      title: 'OLAY REGENERIST MICRO-SCULPTING CREAM, 1.7 OZ, 2-PACK',
      price: '$39.99',
      stockStatus: 'In Stock',
      stockColor: 'text-green-700',
      hasFindNearby: false,
      placeholder: {
        bg: 'bg-red-50',
        text: 'text-red-700',
        label: 'Olay Cream',
      },
    },
  ],
};

const SPONSORED_DATA = {
  cheese: [
    {
      id: '9988776',
      title: 'LAUGHING COW SPREADABLE CHEESE WEDGES, 32 CT',
      price: '$9.49',
      stockStatus: 'In Stock',
      stockColor: 'text-green-700',
      hasFindNearby: false,
      isSponsored: true,
      placeholder: {
        bg: 'bg-red-100',
        text: 'text-red-800',
        label: 'Laughing Cow',
      },
    },
    {
      id: '9988777',
      title: 'KRAFT SINGLES AMERICAN CHEESE SLICES, 72 CT',
      price: '$10.99',
      stockStatus: 'In Stock',
      stockColor: 'text-green-700',
      hasFindNearby: false,
      isSponsored: true,
      placeholder: {
        bg: 'bg-blue-100',
        text: 'text-blue-800',
        label: 'Kraft Singles',
      },
    },
    {
      id: '9988778',
      title: 'SARGENTO STRING CHEESE MOZZARELLA, 48 CT',
      price: '$12.99',
      stockStatus: 'In Stock',
      stockColor: 'text-green-700',
      hasFindNearby: true,
      isSponsored: true,
      placeholder: {
        bg: 'bg-yellow-100',
        text: 'text-yellow-800',
        label: 'Sargento',
      },
    },
  ],
  chips: [
    {
      id: '8877665',
      title: 'PRINGLES VARIETY PACK, 36 CT',
      price: '$16.99',
      stockStatus: 'In Stock',
      stockColor: 'text-green-700',
      hasFindNearby: false,
      isSponsored: true,
      placeholder: {
        bg: 'bg-red-200',
        text: 'text-red-800',
        label: 'Pringles',
      },
    },
    {
      id: '8877666',
      title: 'LAYS CLASSIC POTATO CHIPS, 1 OZ, 50 CT',
      price: '$19.99',
      stockStatus: 'Low Stock',
      stockColor: 'text-amber-700',
      hasFindNearby: true,
      isSponsored: true,
      placeholder: {
        bg: 'bg-yellow-200',
        text: 'text-yellow-800',
        label: 'Lays',
      },
    },
    {
      id: '8877667',
      title: 'SUN CHIPS VARIETY PACK, 30 CT',
      price: '$14.99',
      stockStatus: 'In Stock',
      stockColor: 'text-green-700',
      hasFindNearby: false,
      isSponsored: true,
      placeholder: {
        bg: 'bg-orange-200',
        text: 'text-orange-800',
        label: 'Sun Chips',
      },
    },
  ],
  makeup: [
    {
      id: '7766554',
      title: 'MAYBELLINE INSTANT AGE REWIND CONCEALER, 2-PACK',
      price: '$17.99',
      stockStatus: 'In Stock',
      stockColor: 'text-green-700',
      hasFindNearby: false,
      isSponsored: true,
      placeholder: {
        bg: 'bg-pink-100',
        text: 'text-pink-800',
        label: 'Maybelline',
      },
    },
    {
      id: '7766555',
      title: 'NEUTROGENA MAKEUP REMOVER CLEANSING TOWELETTES, 114 CT',
      price: '$19.99',
      stockStatus: 'In Stock',
      stockColor: 'text-green-700',
      hasFindNearby: true,
      isSponsored: true,
      placeholder: {
        bg: 'bg-blue-50',
        text: 'text-blue-800',
        label: 'Neutrogena',
      },
    },
    {
      id: '7766556',
      title: 'REVLON ONE-STEP VOLUMIZER PLUS 2.0',
      price: '$44.99',
      stockStatus: 'Low Stock',
      stockColor: 'text-amber-700',
      hasFindNearby: false,
      isSponsored: true,
      placeholder: { bg: 'bg-red-100', text: 'text-red-800', label: 'Revlon' },
    },
  ],
};

const DISPLAY_ADS_DATA = {
  cheese: {
    banner: {
      type: 'banner',
      id: 'ban_cheese_1',
      title: 'Kraft Cheese Event',
      subtitle: 'Save $5 on select Kraft & Velveeta items',
      color: 'from-blue-700 to-[#1f5a9e]',
      icon: <Award size={32} className="text-blue-100" />,
    },
    brand: {
      type: 'sponsoredBrand',
      id: 'sb_cheese_1',
      brandName: 'Tillamook',
      tagline: 'Award-Winning Dairy',
      brandPlaceholder: {
        bg: 'bg-orange-50',
        text: 'text-orange-800',
        label: 'Tillamook',
      },
      product: {
        id: '1552210',
        title: 'TILLAMOOK MEDIUM CHEDDAR CHEESE, 2.5 LBS',
        price: '$9.99',
        stockStatus: 'Low Stock',
        stockColor: 'text-amber-700',
        placeholder: {
          bg: 'bg-orange-100',
          text: 'text-orange-800',
          label: 'Cheddar',
        },
      },
    },
  },
  chips: {
    banner: {
      type: 'banner',
      id: 'ban_chips_1',
      title: 'Game Day Essentials',
      subtitle: 'Stock up on Doritos & Tostitos party packs',
      color: 'from-red-700 to-orange-600',
      icon: <Tag size={32} className="text-red-100" />,
    },
    brand: {
      type: 'sponsoredBrand',
      id: 'sb_chips_1',
      brandName: 'Frito-Lay',
      tagline: 'Snacks for Everyone',
      brandPlaceholder: {
        bg: 'bg-red-50',
        text: 'text-red-800',
        label: 'Frito-Lay',
      },
      product: {
        id: '1334455',
        title: 'FRITO-LAY CLASSIC MIX, VARIETY PACK, 54-COUNT',
        price: '$18.99',
        stockStatus: 'In Stock',
        stockColor: 'text-green-700',
        placeholder: {
          bg: 'bg-red-100',
          text: 'text-red-800',
          label: 'Variety Pack',
        },
      },
    },
  },
  makeup: {
    banner: {
      type: 'banner',
      id: 'ban_makeup_1',
      title: 'Beauty Bonus Days',
      subtitle: "Get 20% off all L'Oreal Paris cosmetics",
      color: 'from-purple-700 to-pink-600',
      icon: <Sparkles size={32} className="text-purple-100" />,
    },
    brand: {
      type: 'sponsoredBrand',
      id: 'sb_makeup_1',
      brandName: 'Clinique',
      tagline: 'Skin Care Essentials',
      brandPlaceholder: {
        bg: 'bg-teal-50',
        text: 'text-teal-800',
        label: 'Clinique',
      },
      product: {
        id: '1889900',
        title:
          'CLINIQUE DRAMATICALLY DIFFERENT MOISTURIZING LOTION+, 4.2 FL OZ',
        price: '$44.99',
        stockStatus: 'In Stock',
        stockColor: 'text-green-700',
        placeholder: {
          bg: 'bg-yellow-50',
          text: 'text-yellow-700',
          label: 'Lotion',
        },
      },
    },
  },
};

// Synthetic Placeholder Image to avoid broken external links
const PlaceholderImage = ({ config, containerClass = '', iconSize = 24 }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center border border-gray-200 rounded-md shadow-inner ${config.bg} ${containerClass}`}
    >
      <Box size={iconSize} className={`${config.text} mb-1 opacity-60`} />
      <span
        className={`text-[10px] font-bold ${config.text} text-center px-1 truncate w-full opacity-80`}
      >
        {config.label}
      </span>
    </div>
  );
};

const ControlButtonGroup = ({ options, value, onChange, disabled = false }) => (
  <div
    className={`flex flex-wrap gap-2 ${
      disabled ? 'opacity-50 pointer-events-none' : ''
    }`}
  >
    {options.map((opt) => (
      <button
        key={opt.value}
        onClick={() => onChange(opt.value)}
        className={`px-3 py-1.5 text-sm font-medium rounded-md border transition-colors ${
          value === opt.value
            ? 'bg-[#1f5a9e] text-white border-[#1f5a9e] shadow-sm'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
        }`}
      >
        {opt.label}
      </button>
    ))}
  </div>
);

export default function App() {
  const [keyword, setKeyword] = useState('cheese');
  const [showSPA, setShowSPA] = useState(false);
  const [displayFormat, setDisplayFormat] = useState('none');
  const [displayPlacement, setDisplayPlacement] = useState('above');

  // Process data based on active toggles
  const { displayResults, topPlacementAd } = useMemo(() => {
    let results = [...MOCK_DATA[keyword]];
    let topAd = null;

    if (showSPA) {
      const spas = SPONSORED_DATA[keyword];
      if (spas[0]) results.splice(1, 0, spas[0]); // Position 2
      if (spas[1]) results.splice(3, 0, spas[1]); // Position 4
      if (spas[2]) results.splice(5, 0, spas[2]); // Position 6
    }

    if (displayFormat !== 'none') {
      const adData = DISPLAY_ADS_DATA[keyword][displayFormat];
      if (displayPlacement === 'above') {
        topAd = adData;
      } else if (displayPlacement === 'in-grid') {
        results.splice(2, 0, adData); // Insert into grid (3rd slot)
      }
    }

    return { displayResults: results, topPlacementAd: topAd };
  }, [keyword, showSPA, displayFormat, displayPlacement]);

  const renderPrice = (priceStr) => {
    const [dollars, cents] = priceStr.split('.');
    return (
      <div className="text-xl font-bold text-gray-900 leading-none mb-2 flex items-start">
        <span className="text-sm mt-0.5">$</span>
        <span>{dollars.replace('$', '')}</span>
        <span className="text-[12px] mt-0.5 ml-[1px]">{cents}</span>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen font-sans">
      {/* Prototype Settings Panel */}
      <div className="w-full max-w-4xl p-5 my-4 bg-white rounded-lg shadow-md border border-gray-200">
        <h2 className="text-lg font-bold text-gray-800 mb-4 uppercase tracking-wider flex items-center">
          <span className="bg-[#1f5a9e] w-2 h-6 mr-3 rounded-sm"></span>
          Prototype Settings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Search Keyword
            </label>
            <ControlButtonGroup
              options={[
                { label: 'Cheese', value: 'cheese' },
                { label: 'Chips', value: 'chips' },
                { label: 'Makeup', value: 'makeup' },
              ]}
              value={keyword}
              onChange={setKeyword}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Native Ads (SPA)
            </label>
            <ControlButtonGroup
              options={[
                { label: 'Off', value: false },
                { label: 'On', value: true },
              ]}
              value={showSPA}
              onChange={setShowSPA}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Display Format
            </label>
            <ControlButtonGroup
              options={[
                { label: 'None', value: 'none' },
                { label: 'Banner', value: 'banner' },
                { label: 'Brand', value: 'brand' },
              ]}
              value={displayFormat}
              onChange={setDisplayFormat}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Display Placement
            </label>
            <ControlButtonGroup
              options={[
                { label: 'Above Grid', value: 'above' },
                { label: 'In-Grid', value: 'in-grid' },
              ]}
              value={displayPlacement}
              onChange={setDisplayPlacement}
              disabled={displayFormat === 'none'}
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[420px] h-[800px] bg-white shadow-2xl overflow-hidden flex flex-col relative border border-gray-300 mb-8 rounded-md">
        {/* App Header */}
        <div className="bg-[#1f5a9e] text-white pt-12 pb-2 px-3 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <div className="w-8"></div>
            <h1 className="text-lg font-bold">Search Warehouse Inventory</h1>
            <button className="p-1 hover:bg-white/10 rounded-full transition-colors">
              <X size={24} />
            </button>
          </div>

          <div className="bg-white rounded flex items-center px-3 py-2 text-gray-900 shadow-sm">
            <Search size={20} className="text-gray-500 mr-2" />
            <input
              type="text"
              value={keyword.charAt(0).toUpperCase() + keyword.slice(1)}
              readOnly
              className="flex-1 outline-none text-base font-medium bg-transparent"
            />
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <X size={18} className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* Results Metadata Bar */}
        <div className="bg-[#184880] text-white px-4 py-3 flex items-center justify-between shadow-inner">
          <div>
            <div className="text-sm">Showing results for</div>
            <div className="text-xs text-blue-100/80 mt-0.5">
              Valid on Sep 10, 2026 at 03:00 PM
            </div>
          </div>
          <button className="flex items-center space-x-1 border border-white/30 rounded hover:bg-white/10 px-3 py-1.5 text-sm transition-colors">
            <span>Sort</span>
            <ChevronDown size={16} />
          </button>
        </div>

        {/* Disclaimer Bar */}
        <div className="bg-gray-50 text-gray-600 text-xs py-2 px-4 border-b border-gray-200 font-medium">
          Select items available online, prices may vary
        </div>

        <div className="flex-1 overflow-y-auto bg-white pb-8">
          {/* Top Placement Ad */}
          {topPlacementAd && (
            <div className="border-b-[6px] border-gray-100">
              {topPlacementAd.type === 'banner' && (
                <div
                  className={`m-3 rounded-md shadow-sm overflow-hidden bg-gradient-to-r ${topPlacementAd.color} flex relative`}
                >
                  <div className="p-4 flex-1 text-white z-10">
                    <div className="text-[10px] font-bold uppercase tracking-wider mb-1 text-white/70">
                      Sponsored
                    </div>
                    <h3 className="text-lg font-bold leading-tight mb-1">
                      {topPlacementAd.title}
                    </h3>
                    <p className="text-xs text-white/90 mb-3">
                      {topPlacementAd.subtitle}
                    </p>
                    <button className="bg-white text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm hover:bg-gray-50">
                      Shop Now
                    </button>
                  </div>
                  <div className="w-24 bg-black/10 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute right-[-10px] bottom-[-10px] opacity-20 transform scale-[2]">
                      {topPlacementAd.icon}
                    </div>
                    {topPlacementAd.icon}
                  </div>
                </div>
              )}

              {topPlacementAd.type === 'sponsoredBrand' && (
                <div className="p-4 bg-gray-50 border-b border-gray-200">
                  <div className="text-xs text-gray-500 mb-2 font-medium">
                    Sponsored Brand
                  </div>
                  <div className="flex">
                    <div className="w-[80px] shrink-0 mr-4 flex flex-col items-center">
                      <div className="w-16 h-16 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm mb-2 overflow-hidden">
                        <Store
                          size={24}
                          className={`${topPlacementAd.brandPlaceholder.text} opacity-50`}
                        />
                      </div>
                      <span className="text-[11px] font-bold text-gray-800 text-center leading-tight">
                        {topPlacementAd.brandName}
                      </span>
                      <span className="text-[10px] text-gray-500 text-center leading-tight mt-1">
                        {topPlacementAd.tagline}
                      </span>
                    </div>

                    <div className="flex-1 bg-white border border-gray-200 rounded-md p-2 flex shadow-sm items-center">
                      <PlaceholderImage
                        config={topPlacementAd.product.placeholder}
                        containerClass="w-[60px] h-[60px] shrink-0 mr-3"
                        iconSize={16}
                      />
                      <div className="flex-1 flex flex-col justify-center">
                        <h4 className="text-[11px] leading-snug font-medium text-gray-800 line-clamp-2 mb-1">
                          {topPlacementAd.product.title}
                        </h4>
                        {renderPrice(topPlacementAd.product.price)}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Regular List (Standard Items, SPAs, and In-Grid Display) */}
          {displayResults.map((item, index) => {
            if (item.type === 'banner') {
              return (
                <div
                  key={item.id}
                  className="border-b-[6px] border-gray-100 bg-white p-3"
                >
                  <div
                    className={`rounded-md shadow-sm overflow-hidden bg-gradient-to-r ${item.color} flex relative h-32`}
                  >
                    <div className="p-4 flex-1 text-white z-10 flex flex-col justify-center">
                      <div className="text-[10px] font-bold uppercase tracking-wider mb-1 text-white/70">
                        Sponsored
                      </div>
                      <h3 className="text-lg font-bold leading-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-white/90 mb-2">
                        {item.subtitle}
                      </p>
                      <div>
                        <button className="bg-white text-gray-900 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm hover:bg-gray-50">
                          Shop Now
                        </button>
                      </div>
                    </div>
                    <div className="w-24 bg-black/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                </div>
              );
            }

            if (item.type === 'sponsoredBrand') {
              return (
                <div
                  key={item.id}
                  className="flex p-4 border-b-[6px] border-gray-100 relative bg-blue-50/30"
                >
                  <div className="w-[80px] shrink-0 mr-4 flex flex-col items-center border-r border-gray-200 pr-4 justify-center">
                    <div className="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm mb-2 overflow-hidden">
                      <Store
                        size={20}
                        className={`${item.brandPlaceholder.text} opacity-50`}
                      />
                    </div>
                    <span className="text-[11px] font-bold text-gray-800 text-center leading-tight mb-1">
                      {item.brandName}
                    </span>
                    <span className="text-[9px] text-gray-500 text-center leading-tight text-blue-700 font-medium cursor-pointer hover:underline">
                      Explore store ›
                    </span>
                  </div>

                  <div className="flex-1 flex flex-col justify-center">
                    <div className="text-[11px] text-gray-500 mb-1 font-medium tracking-wide">
                      Sponsored Brand
                    </div>
                    <div className="flex bg-white rounded border border-gray-100 p-2 shadow-sm items-center hover:border-gray-200 cursor-pointer transition-colors">
                      <PlaceholderImage
                        config={item.product.placeholder}
                        containerClass="w-[50px] h-[50px] shrink-0 mr-3"
                        iconSize={16}
                      />
                      <div className="flex-1">
                        <h4 className="text-[12px] leading-tight font-medium text-gray-800 line-clamp-2 mb-1">
                          {item.product.title}
                        </h4>
                        <div className="text-sm font-bold text-gray-900 leading-none">
                          {item.product.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={item.id}
                className="flex p-4 border-b border-gray-200 last:border-b-0 relative bg-white"
              >
                <PlaceholderImage
                  config={item.placeholder}
                  containerClass="w-[120px] h-[120px] shrink-0 mr-4"
                  iconSize={32}
                />

                <div className="flex-1 flex flex-col pt-1">
                  {/* Sponsored Text goes ABOVE title */}
                  {item.isSponsored && (
                    <div className="text-[11px] text-gray-500 mb-0.5">
                      Sponsored
                    </div>
                  )}

                  <h2 className="text-[14px] leading-snug font-medium text-gray-800 mb-1 line-clamp-3">
                    {item.title}
                  </h2>

                  {/* Item number goes BELOW title */}
                  <div className="text-[11px] text-gray-500 mb-2">
                    Item {item.id}
                  </div>

                  <div className="mt-auto">
                    {renderPrice(item.price)}

                    <div className="flex items-center justify-between mt-1">
                      <span
                        className={`text-[15px] font-bold ${item.stockColor}`}
                      >
                        {item.stockStatus}
                      </span>

                      {item.hasFindNearby && (
                        <button className="px-3 py-1.5 border border-[#1f5a9e] text-[#1f5a9e] rounded text-sm font-medium hover:bg-blue-50 transition-colors bg-white whitespace-nowrap">
                          Find Nearby
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
