"use client";

import { motion } from "framer-motion";
import { Check, Clock, HeartPulse, Stethoscope, Users, Phone, MapPin, ArrowRight, Mail, Brain, Bone, Activity } from "lucide-react";
import Link from "next/link";

const Home = () => {
  const services = [
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Neurological Rehabilitation",
      description: "Specialized care for stroke, spinal injuries, and neurological disorders using evidence-based approaches.",
    },
    {
      icon: <Bone className="h-6 w-6" />,
      title: "Orthopedic Rehabilitation",
      description: "Comprehensive post-surgical and injury rehabilitation for musculoskeletal conditions.",
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Exercise Therapy",
      description: "Customized exercise regimens to restore normal pain-free movement and improve function.",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Manual Therapy",
      description: "Evidence-based hands-on techniques for pain relief and improved mobility.",
    },
    {
      icon: <HeartPulse className="h-6 w-6" />,
      title: "Dry Needling Therapy",
      description: "Advanced myofascial trigger point treatment for muscle pain and dysfunction.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Geriatric Rehabilitation",
      description: "Specialized care for elderly patients focusing on mobility and fall prevention.",
    },
  ];

  const doctors = [
    {
      name: "Dr. Tenzing Norbu Lama, PT",
      specialty: "Senior Consultant Neurophysiotherapist",
      image: "/images/doctor1.jpg",
    },
    {
      name: "Dr. Saroj K.C., PT",
      specialty: "Consultant Orthopedic & Sports Physiotherapist",
      image: "/images/doctor2.jpg",
    },
    {
      name: "Dr. Sambandha Tandukar, PT",
      specialty: "Consultant Orthopedic & Sports Physiotherapist",
      image: "/images/doctor3.jpg",
    },
    {
      name: "Dr. Rajan Suwal, PT",
      specialty: "Consultant Orthopedic & Sports Physiotherapist",
      image: "/images/doctor4.jpg",
    },
  ];

  const testimonials = [
    {
      quote: "The neurorehabilitation program helped me recover significantly after my stroke. The team is exceptional and truly cares.",
      author: "Ramesh Adhikari",
      role: "Stroke Recovery Patient",
    },
    {
      quote: "My chronic back pain is completely gone after dry needling and manual therapy. Life-changing treatment!",
      author: "Sita Gurung",
      role: "Chronic Pain Patient",
    },
    {
      quote: "As a referring physician, I confidently send my patients to CMC for their expertise in neurological and orthopedic rehabilitation.",
      author: "Dr. Binod Khanal",
      role: "Referring Physician",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold leading-tight text-text"
                >
                  Expert <span className="text-primary">Neurophysiotherapy</span> & Rehabilitation
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-text max-w-lg"
                >
                  Specialized care for neurological and orthopedic conditions using evidence-based techniques including manual therapy, dry needling, and advanced rehabilitation protocols.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 pt-2"
                >
                  <Link
                    href="/appointment"
                    className="bg-primary text-white hover:bg-primary/80 px-6 py-3 rounded-lg font-medium text-center transition-colors shadow-sm hover:shadow-md"
                  >
                    Book Appointment
                  </Link>
                  <Link
                    href="/services"
                    className="border border-primary text-primary hover:bg-primary/20 px-6 py-3 rounded-lg font-medium text-center transition-colors shadow-sm hover:shadow-md"
                  >
                    Our Services
                  </Link>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative hidden md:block"
              >
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  <img
                    src="https://impeccabuild.com.au/medical-clinic-interior-design-ideas/"
                    alt="Physiotherapy Treatment"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Users className="h-5 w-5 text-primary/80" />
                    </div>
                    <div>
                      <p className="font-medium text-text text-sm">100+ Patients Monthly</p>
                      <p className="text-xs text-text">Trusted Care</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "10+ Years", label: "Clinical Experience" },
                { value: "100+", label: "Patients Monthly" },
                { value: "3+", label: "Research Publications" },
                { value: "4", label: "Specialist Doctors" },
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-text text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="relative bg-white py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-white/30 z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-text">About <span className="text-primary">CMC</span></h2>
                <p className="text-text leading-relaxed">
                  CMC Chiropractic and Manual Therapy, founded by Dr. Tenzing Norbu Lama, is a leading neurophysiotherapy and rehabilitation center in Kathmandu. We specialize in evidence-based treatment for neurological and orthopedic conditions.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Advanced Neurokinetic Therapy & Manual Techniques",
                    "Experienced Neurophysiotherapy Specialists",
                    "Evidence-Based Rehabilitation Protocols"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        <Check className="h-5 w-5 text-blue-600" />
                      </div>
                      <p className="text-gray-700 ml-3">{item}</p>
                    </div>
                  ))}
                </div>
                
                <Link
                  href="/about"
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group"
                >
                  Learn more about us
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
                    alt="CMC Clinic Interior"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-md border border-gray-200 hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Clock className="h-5 w-5 text-primary/80" />
                    </div>
                    <div>
                      <h4 className="font-medium text-text text-sm">Opening Hours</h4>
                      <p className="text-text/80 text-xs">Sun-Sat: 7:00 AM - 7:00 PM</p>
                      <p className="text-text/80 text-xs">By Appointment</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-text mb-3"
              >
                Our <span className="text-cta/80">Specialized Services</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text/80 max-w-2xl mx-auto"
              >
                Comprehensive physiotherapy services using advanced evidence-based techniques.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200"
                >
                  <div className=" text-primary p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2">{service.title}</h3>
                  <p className="text-text/80">{service.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center bg-primary/80 text-white hover:bg-primary/90 px-5 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section className="relative bg-white py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-white/30 z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-text mb-3"
              >
                Meet Our <span className="text-primary/80">Expert Team</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text/80 max-w-2xl mx-auto"
              >
                Our team of highly qualified physiotherapists specialized in neurological and orthopedic rehabilitation.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {doctors.map((doctor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all border border-gray-200"
                >
                  <div className="h-48 overflow-hidden bg-gray-200 flex items-center justify-center">
                    <div className="text-gray-400 text-center">
                      <Users className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">Doctor Photo</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-text">{doctor.name}</h3>
                    <p className="text-primary/80 text-sm mb-3">{doctor.specialty}</p>
                    <Link
                      href="/appointment"
                      className="text-sm font-medium text-primary/80 hover:text-primary/70 transition-colors flex items-center group"
                    >
                      Book Appointment
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/doctors"
                className="inline-flex items-center bg-primary/80 text-white hover:bg-primary/90 px-5 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
              >
                View All Doctors
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-text mb-3"
              >
                Patient <span className="text-primary/80">Testimonials</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text max-w-2xl mx-auto"
              >
                Hear what our patients say about their recovery journey with us.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                >
                  <div className="mb-5 text-primary/60">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-text/80 italic mb-5">&quot;{testimonial.quote}&quot;</p>
                  <div>
                    <p className="font-semibold text-text">{testimonial.author}</p>
                    <p className="text-text/70 text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative bg-white py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-text">Visit Our Clinic</h2>
                <p className="text-text/80">
                  Schedule your appointment for specialized neurophysiotherapy and rehabilitation services.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary/80" />
                    <span className="text-text">Saket Complex, Second Floor, Tripureshwor 11, KMC, Kathmandu, Nepal 44600</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary/80" />
                    <span className="text-text">+977 9865366154</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary/80" />
                    <span className="text-text">chiropracticmanual@gmail.com</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    href="tel:++9779865366154"
                    className="bg-primary/80 text-white hover:bg-primary/90 px-6 py-3 rounded-lg font-medium text-center transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                  <Link
                    href="/contact"
                    className="border border-primary/80 text-primary/80 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium text-center transition-colors shadow-sm hover:shadow-md"
                  >
                    Get Directions
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative overflow-hidden rounded-xl shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
                    alt="CMC Clinic Location"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;