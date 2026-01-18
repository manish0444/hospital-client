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
      <style jsx>{`
        @keyframes slideInFromTop {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .mobile-menu-enter {
          animation: slideInFromRight 0.3s ease-out forwards;
        }

        .mobile-menu-overlay {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .nav-transition {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .button-hover {
          transition: all 0.2s ease;
        }

        .button-hover:hover {
          transform: translateY(-1px);
        }

        .button-hover:active {
          transform: translateY(0);
        }

        .link-hover {
          position: relative;
          transition: color 0.2s ease;
        }

        .link-hover::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 50%;
          background-color: currentColor;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .link-hover:hover::after {
          width: 100%;
        }

        .menu-button {
          transition: transform 0.2s ease, background-color 0.2s ease;
        }

        .menu-button:hover {
          transform: scale(1.05);
        }

        .menu-button:active {
          transform: scale(0.95);
        }

        .mobile-nav-link {
          transition: all 0.2s ease;
        }

        .mobile-nav-link:hover {
          transform: translateX(4px);
          background-color: rgba(0, 115, 230, 0.05);
        }

        .top-header-item {
          transition: color 0.2s ease;
        }

        .top-header-item:hover {
          color: #60a5fa;
        }
      `}</style>

      {/* 🔹 Top Header */}
      <div className="sticky top-0 w-full bg-topheader text-white py-2 hidden sm:block z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center top-header-item">
                <Clock className="h-4 w-4 mr-2" />
                <span>Sun-Sat: 7:00 A.M - 7:00 P.M</span>
              </div>
              <div className="flex items-center top-header-item">
                <Phone className="h-4 w-4 mr-2" />
                <span>+977 9865366154</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:chiropracticmanual@gmail.com"
                className="flex items-center top-header-item"
              >
                <Mail className="h-4 w-4 mr-1" />
                <span>chiropracticmanual@gmail.com</span>
              </a>
              <div className="flex items-center top-header-item">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Tripureshwor 11, Kathmandu</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Main Header */}
      <nav
        className={`fixed w-full z-40 nav-transition ${
          isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
        } ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
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
                  className={`text-sm font-medium link-hover ${
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
                  className="bg-primary text-white hover:bg-[#0073e6e6] hover:shadow-md text-sm px-4 py-2 rounded-full button-hover"
                >
                  Book Appointment
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-200 menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* 🔹 Mobile Nav */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 mobile-menu-overlay"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto mobile-menu-enter">
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <span className="text-2xl text-gray-900 font-semibold">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-700 menu-button"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-3 py-3 rounded-lg mobile-nav-link ${
                      pathname === link.href
                        ? "text-primary bg-blue-50 font-medium"
                        : "text-text hover:text-primary"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Buttons bottom */}
              <div className="mt-8 pt-6 border-t">
                <Link
                  href="/appointment"
                  className="block w-full py-3 px-4 bg-primary text-white hover:bg-[#0073e6e6] hover:shadow-md text-sm text-center rounded-full button-hover"
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