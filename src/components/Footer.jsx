import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-800 text-sm w-full mt-auto">
      <div className="container-custom flex justify-center items-center">
        <p className="text-xs sm:text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Costco Wholesale Corporation. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
