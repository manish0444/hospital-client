"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  HeartPulse, 
  Droplets, 
  Shield, 
  Calendar, 
  Users, 
  Phone, 
  MapPin, 
  Clock,
  ArrowRight,
  CheckCircle,
  FileText
} from "lucide-react";
import Link from "next/link";

const BloodBankPage = () => {
  const [activeTab, setActiveTab] = useState("about");

  const bloodTypes = [
    { type: "A+", availability: "Adequate" },
    { type: "A-", availability: "Low" },
    { type: "B+", availability: "Adequate" },
    { type: "B-", availability: "Critical" },
    { type: "AB+", availability: "Adequate" },
    { type: "AB-", availability: "Low" },
    { type: "O+", availability: "Adequate" },
    { type: "O-", availability: "Critical" },
  ];

  const processes = [
    {
      title: "Collection",
      description: "Safe and sterile blood collection procedures following international standards.",
      icon: <Droplets className="h-8 w-8 text-primary" />
    },
    {
      title: "Donation",
      description: "Streamlined donation process with minimal discomfort for our generous donors.",
      icon: <HeartPulse className="h-8 w-8 text-primary" />
    },
    {
      title: "Processing",
      description: "Advanced testing and processing to ensure blood safety and quality.",
      icon: <FileText className="h-8 w-8 text-primary" />
    },
    {
      title: "Exchange",
      description: "Blood exchange services for specialized medical treatments.",
      icon: <Users className="h-8 w-8 text-primary" />
    },
    {
      title: "Apheresis",
      description: "Specialized procedure to collect specific blood components.",
      icon: <Shield className="h-8 w-8 text-primary" />
    },
    {
      title: "Storage",
      description: "State-of-the-art storage facilities maintaining optimal conditions.",
      icon: <Clock className="h-8 w-8 text-primary" />
    },
  ];

  const eligibilityCriteria = [
    "Age between 18-65 years",
    "Weight at least 50 kg",
    "Hemoglobin level at least 12.5 g/dL",
    "No fever or illness in last 2 weeks",
    "No tattoos or piercings in last 6 months",
    "Not pregnant or breastfeeding",
    "No major surgery in last 6 months"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-white z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-28">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold leading-tight text-text mb-6"
              >
                <span className="text-primary">IFCH Blood Bank</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-text mb-8"
              >
                Saving lives through safe blood donation and transfusion services
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Link
                  href="#donate"
                  className="inline-flex items-center bg-primary text-white hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Donate Blood
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
                <Link
                  href="#request"
                  className="inline-flex items-center bg-white text-primary border border-primary hover:bg-red-50 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Request Blood
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

     

        {/* About Blood Bank Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-text mb-6">
                  About <span className="text-primary">IFCH Blood Bank</span>
                </h2>
                <p className="text-text/80 mb-6">
                  IFCH Blood Bank has been running since the start of 2020 and has been providing blood to many in need. Our expert Lab techs make sure to take extra good care of the donated blood and do extensive testing to ensure the blood is safe to use. You can depend on us when you are in need.
                </p>
                <p className="text-text/80 mb-8">
                  As a Blood Bank, we perform all of the following processes to ensure the highest standards of blood safety and availability.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {processes.slice(0, 4).map((process, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span className="text-text">{process.title}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 gap-6"
              >
                {processes.map((process, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="bg-red-100 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                      {process.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-text mb-2">{process.title}</h3>
                    <p className="text-text/80 text-sm">{process.description}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Blood Drive Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-text mb-6">
                  Organize a <span className="text-primary">Blood Drive</span>
                </h2>
                <p className="text-text/80 mb-6">
                  We also conduct blood drives for volunteer donors who want to give blood and save lives. Contact us for organizing blood donation campaigns in your areas, different organizations or clubs.
                </p>
                <p className="text-text/80 mb-8">
                  Our mobile blood collection units are fully equipped with modern facilities and staffed by experienced professionals to ensure a safe and comfortable donation experience.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span className="text-text">We provide all necessary equipment</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span className="text-text">Certified medical staff</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span className="text-text">Promotional materials and support</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span className="text-text">Post-donation refreshments</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-primary/5 p-8 rounded-xl"
              >
                <h3 className="text-xl font-semibold text-text mb-6">Request a Blood Drive</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text mb-1">Organization Name</label>
                    <input type="text" className="w-full rounded-lg border border-gray-300 focus:ring-primary focus:border-primary p-3" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1">Contact Person</label>
                    <input type="text" className="w-full rounded-lg border border-gray-300 focus:ring-primary focus:border-primary p-3" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1">Email Address</label>
                    <input type="email" className="w-full rounded-lg border border-gray-300 focus:ring-primary focus:border-primary p-3" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1">Phone Number</label>
                    <input type="tel" className="w-full rounded-lg border border-gray-300 focus:ring-primary focus:border-primary p-3" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1">Expected Participants</label>
                    <input type="number" className="w-full rounded-lg border border-gray-300 focus:ring-primary focus:border-primary p-3" />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white hover:bg-primary/90 py-3 rounded-lg font-medium transition-colors"
                  >
                    Submit Request
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-text mb-3"
              >
                Donor <span className="text-primary">Eligibility</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text/80 max-w-2xl mx-auto"
              >
                Check if you meet the requirements to become a blood donor
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {eligibilityCriteria.map((criteria, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-text">{criteria}</span>
                </div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 bg-white p-8 rounded-xl shadow-sm max-w-4xl mx-auto"
            >
              <h3 className="text-xl font-semibold text-text mb-4">Before You Donate</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-text mb-2">Do:</h4>
                  <ul className="space-y-2 text-text/80">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Eat a healthy meal before donating</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Drink plenty of fluids</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Get a good night's sleep</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text mb-2">Don't:</h4>
                  <ul className="space-y-2 text-text/80">
                    <li className="flex items-start">
                      <div className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0">✕</div>
                      <span>Consume alcohol 24 hours before</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0">✕</div>
                      <span>Smoke before donation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0">✕</div>
                      <span>Donate on an empty stomach</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/90 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6"
            >
              Ready to Make a Difference?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl mb-8 max-w-3xl mx-auto opacity-90"
            >
              Your blood donation can save up to three lives. Join us in our mission to ensure a stable blood supply for those in need.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                href="#donate"
                className="inline-flex items-center bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Schedule Donation
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-text mb-3"
              >
                Contact <span className="text-primary">Blood Bank</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text/80 max-w-2xl mx-auto"
              >
                Reach out to us for blood donations, requests, or any inquiries
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">Phone</h3>
                <p className="text-text/80">+977-1-4123500</p>
                <p className="text-text/80">+977-9851012345 (Emergency)</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">Address</h3>
                <p className="text-text/80">IFCH Blood Bank</p>
                <p className="text-text/80">Meridian Polyclinic Building</p>
                <p className="text-text/80">Kathmandu, Nepal</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">Hours</h3>
                <p className="text-text/80">Open 24/7 for emergencies</p>
                <p className="text-text/80">Donation: 8:00 AM - 6:00 PM</p>
                <p className="text-text/80">Every day including weekends</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BloodBankPage;