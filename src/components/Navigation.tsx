"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  { label: "Home", href: "/" },
  {
    label: "Über uns",
    href: "/ueber-uns",
    subItems: [
      { label: "Beitritt", href: "/ueber-uns/beitritt" },
      { label: "Geschichte", href: "/ueber-uns/geschichte" },
    ],
  },
  { label: "Aktuelles", href: "/aktuelles" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="AFC Spittal"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-lg hidden sm:block">AFC Spittal</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.subItems && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 rounded-md hover:bg-navy-light transition-colors inline-flex items-center gap-1"
                >
                  {item.label}
                  {item.subItems && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
                {/* Dropdown */}
                {item.subItems && openDropdown === item.label && (
                  <div className="absolute left-0 top-full mt-0 w-48 bg-navy-light rounded-md shadow-lg py-1 z-50">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2 hover:bg-navy transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md hover:bg-navy-light"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-navy-light">
          <div className="px-4 py-2 space-y-1">
            {menuItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 rounded-md hover:bg-navy-light"
                  onClick={() => !item.subItems && setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.subItems && (
                  <div className="pl-4">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-navy-light rounded-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
