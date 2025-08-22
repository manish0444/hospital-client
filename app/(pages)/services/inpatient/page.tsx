"use client";

import { motion } from "framer-motion";
import { Check, Clock, ArrowRight, Phone, MapPin, Mail, Calendar } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// This would be in a separate file with all service data
const serviceData = {
  inpatient: {
    title: "Inpatient Services",
    description: "Comprehensive care for patients requiring hospital admission with 24/7 monitoring and specialized medical attention.",
    longDescription: "Our inpatient services provide round-the-clock medical care for patients who need close monitoring and specialized treatment. We offer comfortable private rooms, dedicated nursing care, and state-of-the-art medical equipment to ensure the best possible outcomes for our patients.",
    icon: "Stethoscope",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Private rooms with ensuite facilities",
      "24/7 specialized nursing care",
      "Post-operative and recovery care",
      "Critical care and ICU facilities",
      "Advanced monitoring systems",
      "Personalized treatment plans",
      "Nutritional support and dietary planning",
      "Physical therapy and rehabilitation services"
    ],
    procedures: [
      "Major surgical recovery",
      "Complex medical condition management",
      "Critical care and intensive monitoring",
      "Post-operative rehabilitation",
      "Chronic disease management"
    ],
    doctors: [
      {
        name: "Dr. Rajesh Sharma",
        specialty: "Internal Medicine",
        image: "/images/doctor1.jpg",
      },
      {
        name: "Dr. Sunita Yadav",
        specialty: "Critical Care Specialist",
        image: "/images/doctor4.jpg",
      }
    ]
  },
  outpatient: {
    title: "Outpatient Clinics",
    description: "Specialized clinics for consultations, follow-ups, and minor procedures without the need for hospital admission.",
    longDescription: "Our outpatient clinics provide convenient access to specialist care without the need for hospital admission. We offer a wide range of specialist consultations, follow-up care, minor procedures, and preventive health services in a comfortable and efficient setting.",
    icon: "Users",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Specialist consultations across multiple disciplines",
      "Follow-up care and chronic disease management",
      "Minor procedures and treatments",
      "Vaccinations and immunization services",
      "Health screenings and preventive care",
      "Diagnostic tests and imaging",
      "Pharmacy services",
      "Quick and convenient appointments"
    ],
    procedures: [
      "Specialist consultations",
      "Minor surgical procedures",
      "Health screenings and check-ups",
      "Vaccination and immunization",
      "Dressing changes and wound care",
      "Injection therapies"
    ],
    doctors: [
      {
        name: "Dr. Priya Patel",
        specialty: "Family Medicine",
        image: "/images/doctor2.jpg",
      },
      {
        name: "Dr. Amit Singh",
        specialty: "General Practitioner",
        image: "/images/doctor3.jpg",
      }
    ]
  },
  diagnostics: {
    title: "Diagnostic Services",
    description: "State-of-the-art imaging and laboratory services for accurate and timely diagnosis.",
    longDescription: "Our diagnostic department offers comprehensive imaging and laboratory services using the latest technology. Our team of skilled radiologists and pathologists work together to provide accurate and timely results to support your treatment plan.",
    icon: "Microscope",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "MRI and CT scanning",
      "Digital X-ray services",
      "Ultrasound and Doppler studies",
      "Mammography services",
      "Clinical laboratory testing",
      "Pathology services",
      "Electrocardiogram (ECG)",
      "Electroencephalogram (EEG)",
      "Bone density scanning",
      "Pulmonary function tests"
    ],
    procedures: [
      "Radiology and imaging services",
      "Laboratory testing and analysis",
      "Health screening packages",
      "Cardiac diagnostic tests",
      "Neurological diagnostic tests",
      "Cancer screening services"
    ],
    doctors: [
      {
        name: "Dr. Anjali Mehta",
        specialty: "Radiologist",
        image: "/images/doctor5.jpg",
      },
      {
        name: "Dr. Sanjay Kapoor",
        specialty: "Pathologist",
        image: "/images/doctor6.jpg",
      }
    ]
  }
};

const ServiceDetailPage = () => {
  const params = useParams();
  const serviceId = params.serviceName as string;
  const service = serviceData[serviceId as keyof typeof serviceData] || serviceData.inpatient;

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
                  {service.title}
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-text"
                >
                  {service.description}
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
                  <a
                    href="tel:9801155251"
                    className="border border-primary text-primary hover:bg-primary/20 px-6 py-3 rounded-lg font-medium text-center transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Details Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-bold text-text mb-6"
                >
                  About Our {service.title}
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-text/80 mb-8 leading-relaxed"
                >
                  {service.longDescription}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-8"
                >
                  <h3 className="text-2xl font-semibold text-text mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-text/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
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
                </motion.div>
              </div>
              
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-blue-50 p-6 rounded-xl mb-8"
                >
                  <h3 className="text-xl font-semibold text-text mb-4">Schedule an Appointment</h3>
                  <p className="text-text/80 mb-4">Book your appointment for {service.title} today.</p>
                  <Link
                    href="/appointment"
                    className="inline-flex items-center justify-center w-full bg-primary text-white hover:bg-primary/80 px-4 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md mb-3"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Now
                  </Link>
                  <a
                    href="tel:9801155251"
                    className="inline-flex items-center justify-center w-full border border-primary text-primary hover:bg-primary/20 px-4 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call: 9801155251
                  </a>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                >
                  <h3 className="text-xl font-semibold text-text mb-4">Related Services</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/services/emergency" className="text-primary hover:text-primary/80 transition-colors flex items-center group">
                        Emergency Care
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/cardiology" className="text-primary hover:text-primary/80 transition-colors flex items-center group">
                        Cardiology
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/orthopedics" className="text-primary hover:text-primary/80 transition-colors flex items-center group">
                        Orthopedics
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialists Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-text mb-3"
              >
                Our <span className="text-primary">Specialists</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text/80 max-w-2xl mx-auto"
              >
                Meet our team of experienced specialists in {service.title}.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {service.doctors.map((doctor, index) => (
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
                    className="inline-flex items-center bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
                  >
                    Contact Us
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
                
                <div className="bg-white/10 p-6 rounded-xl">
                  <h3 className="font-semibold mb-4 text-lg">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3" />
                      <span>123 Health Avenue, Medical District, Kathmandu</span>
                    </div>
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

export default ServiceDetailPage;