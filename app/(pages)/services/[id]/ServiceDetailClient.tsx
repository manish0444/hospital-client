"use client";

import { Check, Clock, ArrowRight, Phone, MapPin, Mail, Calendar } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { serviceData } from "./serviceData";

interface ServiceDetailClientProps {
  service: typeof serviceData.physiotherapy;
  serviceId: string;
}

const ServiceDetailClient = ({ service, serviceId }: ServiceDetailClientProps) => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-on-scroll {
          opacity: 0;
        }

        .animate-on-scroll.animate-in {
          animation: fadeInUp 0.5s ease-out forwards;
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-100ms {
          animation-delay: 0.1s;
        }

        .delay-200ms {
          animation-delay: 0.2s;
        }

        .delay-300ms {
          animation-delay: 0.3s;
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

        .group:hover .group-hover-translate {
          transform: translateX(4px);
        }

        .group-hover-translate {
          transition: transform 0.2s ease;
        }

        .hover-shadow {
          transition: box-shadow 0.3s ease;
        }

        .hover-shadow:hover {
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-text fade-in-up">
                  {service.title}
                </h1>
                
                <p className="text-lg text-text fade-in-up delay-200">
                  {service.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-2 fade-in-up delay-400">
                  <Link
                    href="/appointment"
                    className="bg-primary text-white hover:bg-primary/80 px-6 py-3 rounded-lg font-medium text-center transition-colors shadow-sm hover:shadow-md button-hover"
                  >
                    Book Appointment
                  </Link>
                  <a
                    href="tel:+9779865366154"
                    className="border border-primary text-primary hover:bg-primary/20 px-6 py-3 rounded-lg font-medium text-center transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-2 button-hover"
                  >
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                </div>
              </div>
              
              <div className="relative fade-in-right">
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-text mb-6 animate-on-scroll">
                  About Our {service.title}
                </h2>
                
                <p className="text-text/80 mb-8 leading-relaxed animate-on-scroll delay-100ms">
                  {service.longDescription}
                </p>
                
                <div className="mb-8 animate-on-scroll delay-200ms">
                  <h3 className="text-2xl font-semibold text-text mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-text/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="animate-on-scroll delay-300ms">
                  <h3 className="text-2xl font-semibold text-text mb-4">Procedures & Treatments</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <ul className="space-y-2">
                      {service.procedures.map((procedure, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-text/80">{procedure}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="animate-on-scroll bg-blue-50 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-semibold text-text mb-4">Schedule an Appointment</h3>
                  <p className="text-text/80 mb-4">Book your appointment for {service.title} today.</p>
                  <Link
                    href="/appointment"
                    className="inline-flex items-center justify-center w-full bg-primary text-white hover:bg-primary/80 px-4 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md mb-3 button-hover"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Now
                  </Link>
                  <a
                    href="tel:+9779865366154"
                    className="inline-flex items-center justify-center w-full border border-primary text-primary hover:bg-primary/20 px-4 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md button-hover"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call: +9779865366154
                  </a>
                </div>
                
                <div className="animate-on-scroll delay-100ms bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-text mb-4">Related Services</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/services/emergency" className="text-primary hover:text-primary/80 transition-colors flex items-center group">
                        Emergency Care
                        <ArrowRight className="h-4 w-4 ml-2 group-hover-translate" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/cardiology" className="text-primary hover:text-primary/80 transition-colors flex items-center group">
                        Cardiology
                        <ArrowRight className="h-4 w-4 ml-2 group-hover-translate" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/orthopedics" className="text-primary hover:text-primary/80 transition-colors flex items-center group">
                        Orthopedics
                        <ArrowRight className="h-4 w-4 ml-2 group-hover-translate" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-white py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-primary/90 rounded-2xl p-8 md:p-12 shadow-lg text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Have Questions About {service.title}?</h2>
                  <p className="mb-6 opacity-90">
                    Our team is here to answer any questions you may have about our services, 
                    procedures, or how to prepare for your visit.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md button-hover group"
                  >
                    Contact Us
                    <ArrowRight className="h-4 w-4 ml-2 group-hover-translate" />
                  </Link>
                </div>
                
                <div className="bg-white/10 p-6 rounded-xl">
                  <h3 className="font-semibold mb-4 text-lg">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3" />
                      <span>Saket Complex, Tripureshwor 11, Kathmandu, Nepal</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3" />
                      <span>+977 9865366154</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3" />
                      <span>chiropracticmanual@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-3" />
                      <span>Open 24/7 for emergencies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServiceDetailClient;