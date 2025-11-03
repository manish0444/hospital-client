"use client";

import { motion } from "framer-motion";
import { Check, Clock, Users, Phone, MapPin, ArrowRight, Mail, Brain, Bone, Activity, Award, Calendar, Filter, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const DoctorsPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const departments = [
    { id: "all", name: "All Specialties" },
    { id: "neurophysiotherapy", name: "Neurophysiotherapy" },
    { id: "orthopedic", name: "Orthopedic & Sports" },
    { id: "manual-therapy", name: "Manual Therapy" },
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. Tenzing Norbu Lama, PT",
      title: "Senior Consultant Neurophysiotherapist",
      department: "neurophysiotherapy",
      specialty: "Neurological Rehabilitation, Chiropractic, Manual Therapy",
      education: "Master's in Neurological Physiotherapy, KLE University, India",
      experience: "10+ years",
      image: "/images/dr-tenzing.jpg",
      languages: ["English", "Nepali", "Hindi"],
      availability: "Mon-Sat",
    },
    {
      id: 2,
      name: "Dr. Saroj K.C., PT",
      title: "Consultant Physiotherapist",
      department: "orthopedic",
      specialty: "Musculoskeletal Disorders, Sports Rehabilitation, Dry Needling",
      education: "MPT in Musculoskeletal Disorder and Sports, Rajiv Gandhi University",
      experience: "8+ years",
      image: "/images/dr-saroj.jpg",
      languages: ["English", "Nepali"],
      availability: "Mon-Sat",
    },
    {
      id: 3,
      name: "Dr. Sambandha Tandukar, PT",
      title: "Consultant Physiotherapist",
      department: "orthopedic",
      specialty: "Sports Rehabilitation, Orthopedic Conditions, Manual Therapy",
      education: "MPT in Musculoskeletal Disorder and Sports, Rajiv Gandhi University",
      experience: "7+ years",
      image: "/images/dr-sambandha.jpg",
      languages: ["English", "Nepali"],
      availability: "Mon-Sat",
    },
    {
      id: 4,
      name: "Dr. Rajan Suwal, PT",
      title: "Consultant Physiotherapist",
      department: "orthopedic",
      specialty: "Sports Rehabilitation, Orthopedic Conditions, Dry Needling",
      education: "MPT in Musculoskeletal Disorder and Sports, Rajiv Gandhi University",
      experience: "6+ years",
      image: "/images/dr-rajan.jpg",
      languages: ["English", "Nepali"],
      availability: "Mon-Sat",
    },
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesDepartment = selectedDepartment === "all" || doctor.department === selectedDepartment;
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  const getDepartmentIcon = (departmentId: string) => {
    switch(departmentId) {
      case "neurophysiotherapy": return <Brain className="h-4 w-4" />;
      case "orthopedic": return <Bone className="h-4 w-4" />;
      case "manual-therapy": return <Activity className="h-4 w-4" />;
      default: return <Users className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
         <section className="relative bg-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white z-0"></div>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10 py-10 md:py-18">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold leading-tight text-text mb-6"
              >
                Our <span className="text-primary">Expert Physiotherapists</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-text mb-8"
              >
                Meet our team of dedicated physiotherapy specialists committed to providing 
                evidence-based care for neurological and orthopedic conditions.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Filter and Search Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-text">Find the Right Specialist</h2>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search doctors or specialties..."
                    className="pl-10 pr-4 py-2 border text-text border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <select
                    className="pl-10 pr-8 py-2 text-text border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent w-full"
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                  >
                    {departments.map(dept => (
                      <option key={dept.id} value={dept.id}>{dept.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Doctors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredDoctors.map((doctor, index) => (
                <motion.div
                  key={doctor.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-200"
                >
                  <div className="h-64 overflow-hidden relative bg-gray-200 flex items-center justify-center">
                    <div className="text-gray-400 text-center">
                      <Users className="h-16 w-16 mx-auto mb-2" />
                      <p className="text-sm">Doctor Photo</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-text">{doctor.name}</h3>
                        <p className="text-primary font-medium">{doctor.title}</p>
                      </div>
                      <div className="bg-blue-100 p-2 rounded-lg text-primary">
                        {getDepartmentIcon(doctor.department)}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-text/80 text-sm">{doctor.specialty}</p>
                    </div>
                    
                    <div className="space-y-3 mb-5">
                      <div className="flex items-center text-sm text-text/70">
                        <Award className="h-4 w-4 mr-2 text-primary" />
                        <span>{doctor.experience} experience</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-text/70">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        <span>Available: {doctor.availability}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium text-text mb-1">Education:</p>
                      <p className="text-text/80 text-sm">{doctor.education}</p>
                    </div>
                    
                    <div className="flex justify-between items-center mt-6">
                      <Link
                        href={`/doctors/${doctor.id}`}
                        className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group"
                      >
                        View Profile
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                      
                      <Link
                        href={`/appointment?doctor=${doctor.id}`}
                        className="inline-flex items-center bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                      >
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {filteredDoctors.length === 0 && (
              <div className="text-center py-12">
                <p className="text-text/80">No doctors found matching your criteria. Please try a different search.</p>
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Our Doctors Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-text mb-3"
              >
                Why Choose <span className="text-primary">Our Physiotherapy Team</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text/80 max-w-2xl mx-auto"
              >
                Our team is dedicated to providing evidence-based physiotherapy care with proven results.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Specialized Expertise",
                  description: "Our physiotherapists have advanced training in neurological and orthopedic rehabilitation.",
                  icon: <Award className="h-8 w-8 text-primary" />
                },
                {
                  title: "Evidence-Based Approach",
                  description: "We use proven treatment techniques and the latest research in physiotherapy.",
                  icon: <Check className="h-8 w-8 text-primary" />
                },
                {
                  title: "Patient-Centered Care",
                  description: "We create individualized treatment plans focused on your specific recovery goals.",
                  icon: <Users className="h-8 w-8 text-primary" />
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl text-center"
                >
                  <div className="bg-blue-100 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2">{item.title}</h3>
                  <p className="text-text/80">{item.description}</p>
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
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Recovery?</h2>
                  <p className="mb-6 opacity-90">
                    Schedule an appointment with our specialist physiotherapists and begin your journey to better mobility and pain-free living.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/appointment"
                      className="inline-flex items-center justify-center bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
                    >
                      Book Appointment
                      <Calendar className="h-4 w-4 ml-2" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Contact Us
                      <Phone className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>
                
                <div className="bg-white/10 p-6 rounded-xl">
                  <h3 className="font-semibold mb-4 text-lg">Contact Information</h3>
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
                      <span>Sun-Sat: 7:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3" />
                      <span>Saket Complex, Tripureshwor, Kathmandu</span>
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

export default DoctorsPage;