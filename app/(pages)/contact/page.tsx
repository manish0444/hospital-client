"use client";

import { Phone, MapPin, Mail, Calendar, Clock, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const ContactPage = () => {
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

  const faqs = [
    {
      question: "What are your clinic hours?",
      answer: "We are open Sunday through Saturday from 7:00 AM to 7:00 PM."
    },
    {
      question: "Do I need a referral for physiotherapy?",
      answer: "No, you can book directly with us without a doctor's referral."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring any medical reports, MRI/CT scans, and a list of current medications."
    },
    {
      question: "How long is each therapy session?",
      answer: "Initial assessments are 45-60 minutes, follow-up sessions are 30-45 minutes."
    }
  ];

  const services = [
    "Neurological Rehabilitation",
    "Orthopedic Physiotherapy", 
    "Manual Therapy",
    "Dry Needling",
    "Sports Injury Rehabilitation",
    "Geriatric Care"
  ];

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

        @keyframes fadeInSmall {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        .fade-in-left {
          animation: fadeInLeft 0.5s ease-out forwards;
        }

        .fade-in-right {
          animation: fadeInRight 0.6s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-100ms {
          animation-delay: 0.1s;
        }

        .delay-200ms {
          animation-delay: 0.2s;
        }

        .stagger-1 {
          animation-delay: 0.1s;
        }

        .stagger-2 {
          animation-delay: 0.2s;
        }

        .stagger-3 {
          animation-delay: 0.3s;
        }

        .stagger-4 {
          animation-delay: 0.4s;
        }

        .stagger-5 {
          animation-delay: 0.5s;
        }

        .stagger-6 {
          animation-delay: 0.6s;
        }

        .animate-on-scroll.fade-left.animate-in {
          animation: fadeInLeft 0.5s ease-out forwards;
        }

        .animate-on-scroll.fade-right.animate-in {
          animation: fadeInRight 0.6s ease-out forwards;
        }

        .animate-on-scroll.fade-small.animate-in {
          animation: fadeInSmall 0.3s ease-out forwards;
        }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
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

        .link-hover {
          transition: color 0.2s ease;
        }
      `}</style>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white z-0"></div>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10 py-10 md:py-18">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-text mb-6 fade-in-up">
                Contact <span className="text-primary">CMC Physiotherapy</span>
              </h1>
              
              <p className="text-lg text-text mb-8 fade-in-up delay-200">
                Get in touch with our expert physiotherapy team for personalized care and treatment. 
                We&apos;re here to help you on your journey to better health and mobility.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Map */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="animate-on-scroll fade-left bg-white rounded-xl shadow-sm hover-lift overflow-hidden border border-gray-200">
                  <div className="p-6">
                    <div className="text-primary p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 bg-blue-100">
                      <Phone className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-text mb-2">Call Us</h3>
                    <a href="tel:++9779865366154" className="text-primary font-medium text-lg link-hover">
                      +977 9865366154
                    </a>
                  </div>
                </div>

                <div className="animate-on-scroll fade-left stagger-1 bg-white rounded-xl shadow-sm hover-lift overflow-hidden border border-gray-200">
                  <div className="p-6">
                    <div className="text-primary p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 bg-blue-100">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-text mb-2">Visit Us</h3>
                    <p className="text-text/80">
                      Saket Complex, Second Floor<br />
                      Tripureshwor 11, KMC<br />
                      Kathmandu, Nepal 44600
                    </p>
                  </div>
                </div>

                <div className="animate-on-scroll fade-left stagger-2 bg-white rounded-xl shadow-sm hover-lift overflow-hidden border border-gray-200">
                  <div className="p-6">
                    <div className="text-primary p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 bg-blue-100">
                      <Mail className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-text mb-2">Email Us</h3>
                    <a href="mailto:chiropracticmanual@gmail.com" className="text-primary font-medium link-hover break-all">
                      chiropracticmanual@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="animate-on-scroll fade-right bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                <div className="h-full min-h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.834372435158!2d85.31623257533755!3d27.69384017619125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1966b0e0a519%3A0x5b844a12c267c590!2sTripureshwor%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinic Hours & Services */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Clinic Hours */}
              <div className="animate-on-scroll bg-white rounded-xl shadow-sm hover-lift overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-text mb-4 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    Clinic Hours
                  </h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-text/80">Sunday - Saturday</span>
                      <span className="font-medium text-text">7:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-text/80">By Appointment</span>
                      <span className="font-medium text-text">Recommended</span>
                    </div>
                  </div>
                  <Link
                    href="/appointment"
                    className="inline-flex items-center text-primary font-medium link-hover group"
                  >
                    Book Appointment
                    <ArrowRight className="h-4 w-4 ml-2 group-hover-translate" />
                  </Link>
                </div>
              </div>

              {/* Our Services */}
              <div className="animate-on-scroll stagger-1 bg-white rounded-xl shadow-sm hover-lift overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-text mb-4">Our Services</h2>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className={`flex items-center text-sm text-text/80 animate-on-scroll fade-small stagger-${index + 1}`}
                      >
                        <Check className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        {service}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-primary font-medium link-hover group"
                  >
                    View All Services
                    <ArrowRight className="h-4 w-4 ml-2 group-hover-translate" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-text mb-8 text-center animate-on-scroll">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`animate-on-scroll bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-all stagger-${index + 1}`}
                >
                  <h3 className="font-semibold text-text mb-2">{faq.question}</h3>
                  <p className="text-text/80 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="relative bg-white py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-primary/90 rounded-2xl p-8 md:p-12 shadow-lg text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
                  <p className="mb-6 opacity-90">
                    Contact us today to begin your journey to better health and mobility. 
                    Our team is ready to provide you with the care you deserve.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:++9779865366154"
                      className="inline-flex items-center justify-center bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md button-hover"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </a>
                    <Link
                      href="/appointment"
                      className="inline-flex items-center justify-center border border-white text-white hover:bg-white hover:text-primary px-6 py-3 rounded-lg font-medium transition-colors button-hover"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Appointment
                    </Link>
                  </div>
                </div>
                
                <div className="bg-white/10 p-6 rounded-xl">
                  <h3 className="font-semibold mb-4 text-lg">Quick Contact</h3>
                  <div className="space-y-3">
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
                      <span>Open 7:00 AM - 7:00 PM</span>
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

export default ContactPage;