"use client";

import { motion } from "framer-motion";
import { Check, Clock, HeartPulse, Stethoscope, Users, Phone, MapPin, ArrowRight, Mail, Microscope, Brain, Bone, Ambulance, Eye, Syringe, Hospital } from "lucide-react";
import Link from "next/link";

const ServicesPage = () => {
  const services = [
    {
      id: "inpatient",
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Inpatient Services",
      description: "Comprehensive care for patients requiring hospital admission with 24/7 monitoring.",
      features: ["Private rooms", "Specialized nursing care", "Post-operative care", "Critical care units"],
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "outpatient",
      icon: <Users className="h-6 w-6" />,
      title: "Outpatient Clinics",
      description: "Specialized clinics for consultations, follow-ups, and minor procedures without admission.",
      features: ["Specialist consultations", "Follow-up care", "Minor procedures", "Vaccinations"],
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "diagnostics",
      icon: <Microscope className="h-6 w-6" />,
      title: "Diagnostic Services",
      description: "State-of-the-art imaging and laboratory services for accurate diagnosis.",
      features: ["MRI & CT scanning", "Ultrasound", "Laboratory tests", "Digital X-ray"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cardiology",
      icon: <HeartPulse className="h-6 w-6" />,
      title: "Cardiology",
      description: "Comprehensive heart care with advanced cardiac diagnostics and treatment.",
      features: ["Echocardiography", "Cardiac catheterization", "Stress testing", "Pacemaker implantation"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "neurology",
      icon: <Brain className="h-6 w-6" />,
      title: "Neurology",
      description: "Expert care for disorders of the nervous system and brain.",
      features: ["EEG", "EMG/NCS", "Neurological rehabilitation", "Stroke care"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "orthopedics",
      icon: <Bone className="h-6 w-6" />,
      title: "Orthopedics",
      description: "Treatment for musculoskeletal injuries and conditions.",
      features: ["Joint replacement", "Arthroscopy", "Fracture management", "Sports medicine"],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "emergency",
      icon: <Ambulance className="h-6 w-6" />,
      title: "Emergency Care",
      description: "24/7 emergency services for critical health situations.",
      features: ["Trauma center", "Critical care", "Emergency surgery", "Acute care"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "ophthalmology",
      icon: <Eye className="h-6 w-6" />,
      title: "Ophthalmology",
      description: "Complete eye care services from routine exams to advanced surgery.",
      features: ["Cataract surgery", "Retina services", "Glaucoma management", "LASIK"],
      image: "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "dental",
      icon: <Hospital className="h-6 w-6" />,
      title: "Dental Care",
      description: "Comprehensive dental services for all ages.",
      features: ["Routine cleaning", "Root canal treatment", "Dental implants", "Orthodontics"],
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
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
                Our <span className="text-primary">Medical Services</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-text mb-8"
              >
                Comprehensive healthcare services delivered with compassion and expertise. 
                We offer a wide range of medical specialties to meet all your healthcare needs.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-200"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-primary p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 bg-blue-100">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-text mb-2">{service.title}</h3>
                    <p className="text-text/80 mb-4">{service.description}</p>
                    <div className="mb-5">
                      <h4 className="font-medium text-text mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-text/80 text-sm">{feature}</span>
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-text/60 text-sm">+{service.features.length - 3} more</li>
                        )}
                      </ul>
                    </div>
                    <Link
                      href={`/services/${service.id}`}
                      className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group mt-2"
                    >
                      Learn more about this service
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
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
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help Choosing a Service?</h2>
                  <p className="mb-6 opacity-90">
                    Our patient coordinators are here to help you find the right service for your needs 
                    and answer any questions you may have.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
                  >
                    Contact Us
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
                
                <div className="bg-white/10 p-6 rounded-xl">
                  <h3 className="font-semibold mb-4 text-lg">Quick Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3" />
                      <span>+977-1-4123456</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3" />
                      <span>info@meridianpolyclinic.com</span>
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

export default ServicesPage;