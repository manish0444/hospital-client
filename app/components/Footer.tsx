import Link from "next/link";
import { Phone, Mail, MapPin, User, ExternalLink, ChevronDown } from "lucide-react";

export const Footer = () => {
  const authCode = process.env.NEXT_PUBLIC_AUTH_CODE || "";

  return (
    <footer className="bg-[#0a1f44] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">International Friendship Children's Hospital</h3>
            <p className="text-gray-400 leading-relaxed">
              Providing exceptional healthcare with compassion and innovation
              since 2202. Your health is our priority.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.334-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.204 1.006.121.832.934z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronDown className="h-4 w-4 mr-2 transform -rotate-90" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronDown className="h-4 w-4 mr-2 transform -rotate-90" />
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/doctors"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronDown className="h-4 w-4 mr-2 transform -rotate-90" />
                  Doctors
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronDown className="h-4 w-4 mr-2 transform -rotate-90" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/departments"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronDown className="h-4 w-4 mr-2 transform -rotate-90" />
                  Departments
                </Link>
              </li>
              <li>
                <Link
                  href="/appointment"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronDown className="h-4 w-4 mr-2 transform -rotate-90" />
                  Book Appointment
                </Link>
              </li>
              <li>
                <span className="text-gray-400 flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Emergency: 01-5916444
                </span>
              </li>
              <li>
                <a
                  href={`http://202.51.74.38:10050/?authCode=${authCode}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <User className="h-4 w-4 mr-2" />
                  Patient Portal
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-2">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                 Maharajgunj
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                Kathmandu, Nepal
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                 01-5914999 / 01-5916444
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                 info@ifch.com.np
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()}{" "}
              <a
                href="https://dtrg.com.np"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                DTRG Network
              </a>
              . All rights reserved.
            </p>
            <div className="text-gray-400 text-sm text-center md:text-right">
              Built with care by DTRG Network
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};