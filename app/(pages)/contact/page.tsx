"use client";

import { motion } from "framer-motion";
import { Check, Clock, HeartPulse, Phone, MapPin, ArrowRight, Mail, Calendar, Send, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      subject: "",
      message: ""
    });
  };

  const departments = [
    { id: "", name: "Select Department" },
    { id: "pediatric-medicine", name: "Pediatric Medicine" },
    { id: "pediatric-surgery", name: "Pediatric Surgery" },
    { id: "pediatric-cardiology", name: "Pediatric Cardiology" },
    { id: "pediatric-neurology", name: "Pediatric Neurology" },
    { id: "pediatric-orthopedics", name: "Pediatric Orthopedics" },
    { id: "pediatric-endocrinology", name: "Pediatric Endocrinology" },
    { id: "pediatric-ophthalmology", name: "Pediatric Ophthalmology" },
    { id: "neonatology", name: "Neonatology" },
    { id: "emergency", name: "Pediatric Emergency" },
    { id: "appointment", name: "Appointment Booking" },
    { id: "billing", name: "Billing & Insurance" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-28">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold leading-tight text-text mb-6"
              >
                Contact <span className="text-primary">Meridian Pediatric Clinic</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-text mb-8"
              >
                We're here to answer your questions and provide the best care for your child. 
                Reach out to us through any of the following channels.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-blue-50 p-6 rounded-xl text-center"
              >
                <div className="bg-primary/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">Phone</h3>
                <p className="text-text/80 mb-2">Call us directly</p>
                <a href="tel:+977-1-4123456" className="text-primary font-medium text-lg hover:text-primary/80 transition-colors">
                  +977-1-4123456
                </a>
                <p className="text-text/60 text-sm mt-2">24/7 Pediatric Emergency</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-blue-50 p-6 rounded-xl text-center"
              >
                <div className="bg-primary/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">Email</h3>
                <p className="text-text/80 mb-2">Send us a message</p>
                <a href="mailto:pediatrics@meridianpolyclinic.com" className="text-primary font-medium text-lg hover:text-primary/80 transition-colors">
                  pediatrics@meridianpolyclinic.com
                </a>
                <p className="text-text/60 text-sm mt-2">We respond within 24 hours</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-blue-50 p-6 rounded-xl text-center"
              >
                <div className="bg-primary/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">Location</h3>
                <p className="text-text/80 mb-2">Visit our clinic</p>
                <p className="text-primary font-medium text-lg">Children's Wing, 2nd Floor</p>
                <p className="text-text/60 text-sm mt-2">Open Mon-Sat: 8:00 AM - 8:00 PM</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
              >
                <h2 className="text-2xl font-bold text-text mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="department" className="block text-sm font-medium text-text mb-2">
                        Department
                      </label>
                      <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      >
                        {departments.map(dept => (
                          <option key={dept.id} value={dept.id}>{dept.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="What is your message regarding?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Please share details about your inquiry..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary text-white hover:bg-primary/90 px-6 py-4 rounded-lg font-medium transition-colors flex items-center justify-center"
                  >
                    Send Message
                    <Send className="h-5 w-5 ml-2" />
                  </button>
                </form>
              </motion.div>
              
              {/* Map & Additional Info */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Map */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-text mb-4">Our Location</h3>
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    {/* Replace with actual map component */}
                    <div className="w-full h-full flex items-center justify-center bg-blue-50">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                        <p className="text-text/80">Interactive Map Would Appear Here</p>
                        <p className="text-sm text-text/60 mt-1">Children's Wing, 2nd Floor</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center text-text/80">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span>123 Pediatric Way, Medical District, Kathmandu 44600</span>
                  </div>
                </div>
                
                {/* Emergency Contact */}
                <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">Pediatric Emergency</h3>
                  <p className="text-red-700 mb-4">
                    For urgent medical concerns after hours, our pediatric emergency department is available 24/7.
                  </p>
                  <div className="flex items-center justify-between">
                    <a href="tel:+977-1-4111000" className="text-red-800 font-bold text-lg hover:text-red-700 transition-colors">
                      +977-1-4111000
                    </a>
                    <div className="bg-red-100 p-2 rounded-lg">
                      <Clock className="h-5 w-5 text-red-700" />
                    </div>
                  </div>
                </div>
                
                {/* Office Hours */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-text mb-4">Office Hours</h3>
                  <div className="space-y-3">
                    {[
                      { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM" },
                      { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
                      { day: "Sunday", hours: "Emergency services only" },
                    ].map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="text-text/80">{schedule.day}</span>
                        <span className="font-medium text-text">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-text mb-3"
              >
                Frequently Asked <span className="text-primary">Questions</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text/80 max-w-2xl mx-auto"
              >
                Find quick answers to common questions about our pediatric services.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  question: "How do I schedule an appointment?",
                  answer: "You can schedule an appointment by calling our main line, using our online booking system, or by filling out the contact form above."
                },
                {
                  question: "Do you accept insurance?",
                  answer: "We accept most major insurance providers. Please contact our billing department to verify your insurance coverage."
                },
                {
                  question: "What should I bring to my first appointment?",
                  answer: "Please bring your insurance card, photo ID, any relevant medical records, and a list of current medications."
                },
                {
                  question: "How do I get urgent care after hours?",
                  answer: "Our pediatric emergency department is available 24/7. For urgent concerns after hours, call our emergency line."
                },
                {
                  question: "Can I request a specific pediatrician?",
                  answer: "Yes, you can request a specific pediatrician when scheduling your appointment, subject to availability."
                },
                {
                  question: "Do you offer telehealth appointments?",
                  answer: "Yes, we offer telehealth appointments for follow-up visits and certain conditions. Call to see if your needs can be met virtually."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl"
                >
                  <h3 className="text-lg font-semibold text-text mb-2">{faq.question}</h3>
                  <p className="text-text/80">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mt-12"
            >
              <Link
                href="/faq"
                className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group"
              >
                View all frequently asked questions
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-white py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-primary/90 rounded-2xl p-8 md:p-12 shadow-lg text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
                  <p className="mb-6 opacity-90">
                    Our patient coordinators are available to help you find the right specialist, 
                    schedule appointments, and answer any questions about our services.
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href="tel:+977-1-4123456"
                      className="inline-flex items-center bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </a>
                    <Link
                      href="/appointment"
                      className="inline-flex items-center bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Online
                    </Link>
                  </div>
                </div>
                
                <div className="bg-white/10 p-6 rounded-xl">
                  <h3 className="font-semibold mb-4 text-lg">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3" />
                      <span>+977-1-4123456 (Main)</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3" />
                      <span>+977-1-4111000 (Emergency)</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3" />
                      <span>pediatrics@meridianpolyclinic.com</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3" />
                      <span>Children's Wing, 2nd Floor</span>
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