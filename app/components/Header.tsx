"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Phone,
  Clock,
  Mail,
  MapPin,
  ChevronDown,
  X,
} from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const pathname = usePathname();

  // scroll hide/show
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      if (delta < 0) setIsHidden(false);

      if (window.scrollY > 20) {
        setIsScrolled(true);
        if (window.scrollY > 100 && delta >= 0) setIsHidden(true);
      } else {
        setIsScrolled(false);
        setIsHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/doctors", label: "Doctors" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* 🔹 Top Header */}
      <div className="sticky top-0 w-full bg-topheader text-white py-2 hidden sm:block z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Sun-Sat: 7:00 A.M - 7:00 P.M</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+977 9865366154</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:chiropracticmanual@gmail.com"
                className="flex items-center hover:text-blue-400"
              >
                <Mail className="h-4 w-4 mr-1" />
                <span>chiropracticmanual@gmail.com</span>
              </a>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Tripureshwor 11, Kathmandu</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Main Header */}
      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
        } ${isHidden ? "-translate-y-full" : "translate-x-0"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-text hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Buttons */}
              <div className="flex items-center space-x-3">
                <Link
                  href="/appointment"
                  className="bg-primary text-white hover:bg-[#0073e6e6] hover:shadow-md text-sm px-4 py-2 rounded-full transition"
                >
                  Book Appointment
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* 🔹 Mobile Nav */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto">
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <span className="text-2xl text-gray-900">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-500"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-col gap-4 flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2 text-text hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Buttons bottom */}
              <div className="mt-8 pt-6 border-t">
                <Link
                  href="/appointment"
                  className="block w-full py-3 px-4 bg-primary text-white hover:bg-[#240496e6] hover:shadow-md text-sm text-center mb-3 rounded-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
