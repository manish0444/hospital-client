"use client";

import { motion } from "framer-motion";
import { Check, Clock, HeartPulse, Stethoscope, Users, Phone, MapPin, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

const Home = () => {
  const services = [
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "General Medicine",
      description: "Comprehensive care for adults with acute and chronic illnesses.",
    },
    {
      icon: <HeartPulse className="h-6 w-6" />,
      title: "Cardiology",
      description: "Specialized care for heart conditions and cardiovascular health.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Pediatrics",
      description: "Expert care for infants, children, and adolescents.",
    },
    {
      icon: <HeartPulse className="h-6 w-6" />,
      title: "Neurology",
      description: "Diagnosis and treatment of nervous system disorders.",
    },
    {
      icon: <HeartPulse className="h-6 w-6" />,
      title: "Orthopedics",
      description: "Care for musculoskeletal system injuries and disorders.",
    },
    {
      icon: <HeartPulse className="h-6 w-6" />,
      title: "Emergency Care",
      description: "24/7 emergency services for critical health situations.",
    },
  ];

  const doctors = [
    {
      name: "Dr. Rajesh Sharma",
      specialty: "Cardiologist",
      image: "/images/doctor1.jpg",
    },
    {
      name: "Dr. Priya Patel",
      specialty: "Pediatrician",
      image: "/images/doctor2.jpg",
    },
    {
      name: "Dr. Amit Singh",
      specialty: "Neurologist",
      image: "/images/doctor3.jpg",
    },
    {
      name: "Dr. Sunita Yadav",
      specialty: "Orthopedic Surgeon",
      image: "/images/doctor4.jpg",
    },
  ];

  const testimonials = [
    {
      quote: "The care I received was exceptional. The doctors took time to listen and explain everything clearly.",
      author: "Ramesh Adhikari",
      role: "Patient",
    },
    {
      quote: "Clean facilities and professional staff. My surgery went smoothly and recovery was faster than expected.",
      author: "Sita Gurung",
      role: "Patient",
    },
    {
      quote: "As a referring physician, I'm always confident my patients will receive excellent care at this facility.",
      author: "Dr. Binod Khanal",
      role: "General Practitioner",
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
                  Specialized <span className="text-primary">Care</span> for Little Smiles
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-text max-w-lg"
                >
                Compassionate pediatric experts providing world-class treatment in a safe, friendly, and child-centered environment.
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
                    src="https://www.future-doctor.de/wp-content/uploads/2024/08/shutterstock_2480850611.jpg"
                    alt="Doctor"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Users className="h-5 w-5 text-primary/80" />
                    </div>
                    <div>
                      <p className="font-medium text-text text-sm">24/7 Patient Support</p>
                      <p className="text-xs text-text">Always here for you</p>
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
                { value: "50 Beds", label: "Pediatric Capacity" },
                { value: "Since 2008", label: "Years of Service" },
                { value: "90K+", label: "Children Served" },
                { value: "24/7", label: "Emergency Available" },
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
                {/* About Section */}
              <h2 className="text-3xl font-bold text-text">About <span className="text-primary">IFCH</span></h2>
              <p className="text-text leading-relaxed">
                Established in 2008, IFCH is Nepal’s first cooperative pediatric hospital with 50 beds.
                We’ve served over 90,000 children through compassionate, affordable care, including charity beds and emergency services.
              </p>

                
                <div className="space-y-4">
                  {[
                    "Advanced diagnostic equipment",
                    "Experienced and compassionate staff",
                    "Patient-centered approach to care"
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
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Hospital-de-Bellvitge.jpg/800px-Hospital-de-Bellvitge.jpg"
                    alt="Hospital Building"
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
                      <p className="text-text/80 text-xs">Sun-Sat: 7:00 A.M - 7:00 P.M</p>
                      <p className="text-text/80 text-xs">24/7 Emergency</p>
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
                Our <span className="text-cta/80">Services</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text/80 max-w-2xl mx-auto"
              >
                Comprehensive medical services to meet all your healthcare needs.
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
                Meet Our <span className="text-primary/80">Specialists</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text/80 max-w-2xl mx-auto"
              >
                Our team of highly qualified doctors dedicated to your care.
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
                  <div className="h-48 overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
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
                Hear what our patients say about their experiences.
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
                  <p className="text-text/80 italic mb-5">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-text">{testimonial.author}</p>
                    <p className="text-text/70 text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Section */}
        <section className="relative bg-white py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-text">24/7 Emergency Services</h2>
                <p className="text-text/80">
                  Immediate care when you need it most. Our emergency department is always open.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    href="tel:9801155251"
                    className="bg-primary/80 text-white hover:bg-primary/90 px-6 py-3 rounded-lg font-medium text-center transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    Call Emergency
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRweIalLtH1lgJioEAIZ4wgpMAoydtwxNCpYg&s"
                    alt="Emergency Services"
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