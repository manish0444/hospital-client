"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Phone,
  Clock,
  Mail,
  MapPin,
  User,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const authCode = process.env.NEXT_PUBLIC_AUTH_CODE || "";

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

  // outside click closes dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    {
      href: "/about-us",
      label: "About",
      submenu: [
        { href: "/about-us", label: "About Us" },
        { href: "/about-us/career", label: "Career" },
        { href: "/about-us/blood-bank", label: "Blood Bank" },
        { href: "/about-us/gallery", label: "Gallery" },
      ],
    },
    { href: "/services", label: "Services" },
    { href: "/departments", label: "Departments" },
    { href: "/doctors", label: "Doctors" },
    { href: "/contact", label: "Contact" },
    { href: "/news", label: "News & Update" },
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
                <span>01-5914999 / 01-5916444</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:info@ifch.com.np"
                className="flex items-center hover:text-blue-400"
              >
                <Mail className="h-4 w-4 mr-1" />
                <span>info@ifch.com.np</span>
              </a>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Maharajgunj, Kathmandu</span>
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
              <img src="/ifch-logo.png" alt="Logo" className="h-8 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden md:flex items-center space-x-6"
              ref={dropdownRef}
            >
              {navLinks.map((link) => (
                <div key={link.href} className="relative">
                  {link.submenu ? (
                    <>
                      <button
                        className={`text-sm font-medium flex items-center ${
                          pathname.startsWith(link.href)
                            ? "text-primary"
                            : "text-text hover:text-primary"
                        }`}
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === link.href ? null : link.href
                          )
                        }
                      >
                        {link.label}
                        <ChevronDown
                          className={`h-4 w-4 ml-1 transition-transform ${
                            openDropdown === link.href ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openDropdown === link.href && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                        >
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block px-4 py-2 text-sm text-text hover:text-primary"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`text-sm font-medium ${
                        pathname === link.href
                          ? "text-primary"
                          : "text-text hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
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
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <ChevronDown className="h-6 w-6" />
              )}
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
                  <div key={link.href}>
                    {link.submenu ? (
                      <>
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === link.href ? null : link.href
                            )
                          }
                          className="w-full flex justify-between items-center px-3 py-2 text-text"
                        >
                          {link.label}
                          {openDropdown === link.href ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </button>
                        {openDropdown === link.href && (
                          <div className="pl-4">
                            {link.submenu.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className="block px-3 py-2 text-sm text-text hover:text-primary"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className="block px-3 py-2 text-text hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
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
