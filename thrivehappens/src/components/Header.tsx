'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold">Thrive Happens</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/" className="px-3 py-2 text-gray-900 hover:text-purple-800">
              Home
            </Link>
            <div className="relative group">
              <button className="px-3 py-2 text-gray-900 hover:text-purple-800 flex items-center">
                Services
              </button>
              <div className="absolute z-10 left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/services/platform-speaker" className="block px-4 py-2 text-gray-900 hover:bg-purple-100">
                  Platform Speaker
                </Link>
                <Link href="/services/executive-coaching" className="block px-4 py-2 text-gray-900 hover:bg-purple-100">
                  Executive & Team Coaching
                </Link>
                <Link href="/services/resilience-workshops" className="block px-4 py-2 text-gray-900 hover:bg-purple-100">
                  Resilience Workshops
                </Link>
                <Link href="/services/media" className="block px-4 py-2 text-gray-900 hover:bg-purple-100">
                  Media
                </Link>
              </div>
            </div>
            <Link href="/gallery" className="px-3 py-2 text-gray-900 hover:text-purple-800">
              Gallery
            </Link>
            <Link href="/#contact" className="px-3 py-2 text-gray-900 hover:text-purple-800">
              Contact
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className="block px-3 py-2 text-gray-900 hover:bg-purple-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="block px-3 py-2 text-gray-900">
              <span className="font-medium">Services</span>
              <div className="pl-4 mt-2 space-y-1">
                <Link 
                  href="/services/platform-speaker" 
                  className="block px-3 py-2 text-gray-900 hover:bg-purple-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Platform Speaker
                </Link>
                <Link 
                  href="/services/executive-coaching" 
                  className="block px-3 py-2 text-gray-900 hover:bg-purple-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Executive & Team Coaching
                </Link>
                <Link 
                  href="/services/resilience-workshops" 
                  className="block px-3 py-2 text-gray-900 hover:bg-purple-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resilience Workshops
                </Link>
                <Link 
                  href="/services/media" 
                  className="block px-3 py-2 text-gray-900 hover:bg-purple-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Media
                </Link>
              </div>
            </div>
            <Link 
              href="/gallery" 
              className="block px-3 py-2 text-gray-900 hover:bg-purple-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              href="/#contact" 
              className="block px-3 py-2 text-gray-900 hover:bg-purple-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 