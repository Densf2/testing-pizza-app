'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [sidebarShown, setSidebarShown] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="text-2xl font-bold text-orange-600">
                  🍕 Pizza Express
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link 
                  href="/" 
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </Link>
                <Link 
                  href="/menu" 
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Menu
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  About
                </Link>
                <Link 
                  href="/cart" 
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors relative"
                >
                  Cart
                  {/* Cart badge - you can make this dynamic later */}
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </Link>
                <Link 
                  href="/login" 
                  className="bg-orange-600 text-white hover:bg-orange-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Login
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setSidebarShown(!sidebarShown)}
                className="text-gray-700 hover:text-orange-600 focus:outline-none focus:text-orange-600 p-2"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${sidebarShown ? 'rotate-45 translate-y-1.5' : ''}`} />
                  <div className={`w-6 h-0.5 bg-current my-1 transition-all duration-300 ${sidebarShown ? 'opacity-0' : ''}`} />
                  <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${sidebarShown ? '-rotate-45 -translate-y-1.5' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile sidebar */}
        {sidebarShown && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setSidebarShown(false)}
              >
                Home
              </Link>
              <Link 
                href="/menu" 
                className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setSidebarShown(false)}
              >
                Menu
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setSidebarShown(false)}
              >
                About
              </Link>
              <Link 
                href="/cart" 
                className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setSidebarShown(false)}
              >
                Cart
              </Link>
              <Link 
                href="/login" 
                className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setSidebarShown(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile backdrop */}
      {sidebarShown && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarShown(false)}
        />
      )}
    </>
  );
}
