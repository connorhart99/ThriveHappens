'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-purple-700">Thrive Happens</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink href="/" isActive={pathname === '/'}>Home</NavLink>
              <NavLink href="/services" isActive={pathname === '/services'}>Services</NavLink>
              <NavLink href="/about" isActive={pathname === '/about'}>About</NavLink>
              <NavLink href="/blog" isActive={pathname === '/blog'}>Blog</NavLink>
              <Link
                href="/contact"
                className={`px-5 py-2.5 font-medium rounded-md transition-colors ${
                  pathname === '/contact'
                    ? 'bg-purple-800 text-white'
                    : 'bg-purple-700 text-white hover:bg-purple-800'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-700 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <MobileNavLink href="/" isActive={pathname === '/'}>Home</MobileNavLink>
          <MobileNavLink href="/services" isActive={pathname === '/services'}>Services</MobileNavLink>
          <MobileNavLink href="/about" isActive={pathname === '/about'}>About</MobileNavLink>
          <MobileNavLink href="/blog" isActive={pathname === '/blog'}>Blog</MobileNavLink>
          <Link
            href="/contact"
            className={`block px-3 py-2 text-base font-medium rounded-md ${
              pathname === '/contact'
                ? 'bg-purple-800 text-white'
                : 'bg-purple-700 text-white'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) {
  return (
    <Link
      href={href}
      className={`font-medium transition-colors ${
        isActive
          ? 'text-purple-700 font-semibold'
          : 'text-gray-700 hover:text-purple-700'
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) {
  return (
    <Link
      href={href}
      className={`block px-3 py-2 text-base font-medium rounded-md ${
        isActive
          ? 'text-purple-700 bg-purple-50'
          : 'text-gray-700 hover:text-purple-700 hover:bg-gray-50'
      }`}
    >
      {children}
    </Link>
  );
} 