"use client";

import { motion } from "framer-motion";
import { Check, Clock, ArrowRight, Phone, MapPin, Mail, Calendar, Users } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// This would be in a separate file with all department data
const departmentData = {
  "pediatric-medicine": {
    title: "Pediatric Medicine",
    description: "Comprehensive medical care for children from birth through adolescence.",
    longDescription: "Our Pediatric Medicine department provides complete healthcare for infants, children, and teenagers. We focus on preventive care, early detection of health issues, and management of acute and chronic illnesses. Our team of pediatricians is dedicated to supporting your child's health and development through every stage of growth.",
    icon: "Stethoscope",
    image: "https://images.unsplash.com/photo-1622572773651-7e8e71a65375?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Well-child visits and developmental screenings",
      "Immunizations and vaccinations",
      "Acute illness diagnosis and treatment",
      "Chronic condition management (asthma, allergies, etc.)",
      "Nutritional guidance and counseling",
      "Behavioral and developmental assessments",
      "School and sports physicals",
      "Adolescent medicine"
    ],
    conditions: [
      "Common childhood illnesses (ear infections, strep throat, etc.)",
      "Asthma and allergies",
      "Growth and development concerns",
      "Nutritional issues",
      "Behavioral problems",
      "ADHD and learning disabilities",
      "Childhood obesity",
      "Adolescent health issues"
    ],
    doctors: [
      {
        name: "Dr. Priya Patel",
        specialty: "Pediatrician",
        image: "/images/doctor2.jpg",
      },
      {
        name: "Dr. Anjali Mehta",
        specialty: "Adolescent Medicine Specialist",
        image: "/images/doctor5.jpg",
      },
      {
        name: "Dr. Sanjay Kapoor",
        specialty: "Developmental Pediatrician",
        image: "/images/doctor6.jpg",
      }
    ],
    stats: {
      specialists: 8,
      patients: 5000,
      satisfaction: 98
    }
  },
  "pediatric-surgery": {
    title: "Pediatric Surgery",
    description: "Specialized surgical care for infants, children, and adolescents.",
    longDescription: "Our Pediatric Surgery department provides comprehensive surgical care for children of all ages. Our surgeons are specially trained to perform procedures on growing bodies, with expertise in minimally invasive techniques that reduce pain and recovery time. We understand the unique needs of children and families facing surgery.",
    icon: "Syringe",
    image: "https://images.unsplash.com/photo-1584614375600-ca0638f21602?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Minimally invasive (laparoscopic) surgery",
      "Newborn and congenital anomaly surgery",
      "Trauma and emergency surgery",
      "Oncologic surgery for childhood cancers",
      "Gastrointestinal surgery",
      "Thoracic surgery",
      "Urological surgery",
      "Reconstructive surgery"
    ],
    conditions: [
      "Appendicitis",
      "Hernias",
      "Congenital anomalies",
      "Tumors and growths",
      "Trauma injuries",
      "Gastroesophageal reflux",
      "Biliary atresia",
      "Inflammatory bowel disease"
    ],
    doctors: [
      {
        name: "Dr. Rajesh Sharma",
        specialty: "Pediatric Surgeon",
        image: "/images/doctor1.jpg",
      },
      {
        name: "Dr. Sunita Yadav",
        specialty: "Pediatric Urological Surgeon",
        image: "/images/doctor4.jpg",
      }
    ],
    stats: {
      specialists: 5,
      patients: 1200,
      satisfaction: 97
    }
  }
  // Add other departments here...
};

const PediatricMedicinePage = () => {
  const params = useParams();
  const departmentId = params.departmentName as string;
  const department = departmentData[departmentId as keyof typeof departmentData] || departmentData["pediatric-medicine"];

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
                  {department.title}
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-text"
                >
                  {department.description}
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
                    Call Department
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
                    src={department.image}
                    alt={department.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Department Stats */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              {[
                { value: `${department.stats.specialists}+`, label: "Specialists" },
                { value: `${department.stats.patients}+`, label: "Patients Treated Yearly" },
               
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

        {/* Department Details Section */}
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
                  About Our {department.title} Department
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-text/80 mb-8 leading-relaxed"
                >
                  {department.longDescription}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-8"
                >
                  <h3 className="text-2xl font-semibold text-text mb-4">Services & Treatments</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {department.features.map((feature, index) => (
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
                  <h3 className="text-2xl font-semibold text-text mb-4">Conditions We Treat</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <ul className="space-y-2">
                      {department.conditions.map((condition, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-text/80">{condition}</span>
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
                  <h3 className="text-xl font-semibold text-text mb-4">Department Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-primary mr-3" />
                      <span className="text-text/80">Children's Wing, 2nd Floor</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-primary mr-3" />
                      <span className="text-text/80">+977-1-4123456 (Ext. 202)</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-primary mr-3" />
                      <span className="text-text/80">Mon-Sat: 8AM - 6PM</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-primary mr-3" />
                      <span className="text-text/80">{department.stats.specialists}+ Specialists</span>
                    </div>
                  </div>
                  
                  <Link
                    href="/appointment"
                    className="inline-flex items-center justify-center w-full bg-primary text-white hover:bg-primary/80 px-4 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md mt-6"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Appointment
                  </Link>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                >
                  <h3 className="text-xl font-semibold text-text mb-4">Related Departments</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/departments/pediatric-cardiology" className="text-primary hover:text-primary/80 transition-colors flex items-center group">
                        Pediatric Cardiology
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/departments/pediatric-neurology" className="text-primary hover:text-primary/80 transition-colors flex items-center group">
                        Pediatric Neurology
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/departments/pediatric-orthopedics" className="text-primary hover:text-primary/80 transition-colors flex items-center group">
                        Pediatric Orthopedics
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
                Meet our team of experienced specialists in {department.title}.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {department.doctors.map((doctor, index) => (
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
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Have Questions About {department.title}?</h2>
                  <p className="mb-6 opacity-90">
                    Our department coordinators are here to answer any questions you may have about our services, 
                    procedures, or how to prepare for your child's visit.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
                  >
                    Contact Department
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
                
                <div className="bg-white/10 p-6 rounded-xl">
                  <h3 className="font-semibold mb-4 text-lg">Department Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3" />
                      <span>Children's Wing, 2nd Floor</span>
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

export default PediatricMedicinePage;