"use client";

import { motion } from "framer-motion";
import { Check, Clock, HeartPulse, Stethoscope, Users, Phone, MapPin, ArrowRight, Mail, Brain, Bone, Eye, Syringe, Baby, Activity, Star, Award, Calendar, Filter, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const DoctorsPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const departments = [
    { id: "all", name: "All Departments" },
    { id: "pediatric-medicine", name: "Pediatric Medicine" },
    { id: "pediatric-surgery", name: "Pediatric Surgery" },
    { id: "pediatric-cardiology", name: "Pediatric Cardiology" },
    { id: "pediatric-neurology", name: "Pediatric Neurology" },
    { id: "pediatric-orthopedics", name: "Pediatric Orthopedics" },
    { id: "pediatric-endocrinology", name: "Pediatric Endocrinology" },
    { id: "pediatric-ophthalmology", name: "Pediatric Ophthalmology" },
    { id: "neonatology", name: "Neonatology" },
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Chief Pediatrician",
      department: "pediatric-medicine",
      specialty: "General Pediatrics, Adolescent Medicine",
      education: "MD, Boston Children's Hospital, Harvard Medical School",
      experience: "15 years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
     
      languages: ["English", "Spanish"],
      availability: "Mon, Wed, Fri",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      title: "Pediatric Surgeon",
      department: "pediatric-surgery",
      specialty: "Minimally Invasive Surgery, Neonatal Surgery",
      education: "MD, Johns Hopkins Hospital, Fellowship in Pediatric Surgery",
      experience: "12 years",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      
      languages: ["English", "Mandarin"],
      availability: "Tue, Thu, Sat",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      title: "Pediatric Cardiologist",
      department: "pediatric-cardiology",
      specialty: "Congenital Heart Disease, Fetal Echocardiography",
      education: "MD, Children's Hospital of Philadelphia, Cardiology Fellowship",
      experience: "10 years",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
     
      languages: ["English", "Spanish", "French"],
      availability: "Mon, Tue, Thu, Fri",
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      title: "Pediatric Neurologist",
      department: "pediatric-neurology",
      specialty: "Epilepsy, Neuromuscular Disorders",
      education: "MD, Mayo Clinic, Neurology Residency",
      experience: "14 years",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      
      languages: ["English", "German"],
      availability: "Mon, Wed, Thu, Fri",
    },
    {
      id: 5,
      name: "Dr. Lisa Patel",
      title: "Pediatric Orthopedic Surgeon",
      department: "pediatric-orthopedics",
      specialty: "Scoliosis, Sports Injuries",
      education: "MD, Stanford Children's Health, Orthopedic Surgery Fellowship",
      experience: "11 years",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
     
      languages: ["English", "Hindi", "Gujarati"],
      availability: "Tue, Wed, Fri, Sat",
    },
    {
      id: 6,
      name: "Dr. Robert Kim",
      title: "Pediatric Endocrinologist",
      department: "pediatric-endocrinology",
      specialty: "Diabetes, Growth Disorders",
      education: "MD, UCLA Medical Center, Endocrinology Fellowship",
      experience: "9 years",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
     
      languages: ["English", "Korean"],
      availability: "Mon, Tue, Wed, Fri",
    },
    {
      id: 7,
      name: "Dr. Amanda Williams",
      title: "Pediatric Ophthalmologist",
      department: "pediatric-ophthalmology",
      specialty: "Strabismus, Retinopathy of Prematurity",
      education: "MD, Wills Eye Hospital, Pediatric Ophthalmology Fellowship",
      experience: "13 years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
     
      languages: ["English", "Italian"],
      availability: "Mon, Tue, Thu, Fri",
    },
    {
      id: 8,
      name: "Dr. David Thompson",
      title: "Neonatologist",
      department: "neonatology",
      specialty: "Premature Infant Care, Respiratory Disorders",
      education: "MD, Children's National Hospital, Neonatology Fellowship",
      experience: "16 years",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
     
      languages: ["English", "Arabic"],
      availability: "Mon, Wed, Thu, Fri, Sat",
    },
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesDepartment = selectedDepartment === "all" || doctor.department === selectedDepartment;
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  const getDepartmentIcon = (departmentId : string) => {
    switch(departmentId) {
      case "pediatric-medicine": return <Stethoscope className="h-4 w-4" />;
      case "pediatric-surgery": return <Syringe className="h-4 w-4" />;
      case "pediatric-cardiology": return <HeartPulse className="h-4 w-4" />;
      case "pediatric-neurology": return <Brain className="h-4 w-4" />;
      case "pediatric-orthopedics": return <Bone className="h-4 w-4" />;
      case "pediatric-endocrinology": return <Activity className="h-4 w-4" />;
      case "pediatric-ophthalmology": return <Eye className="h-4 w-4" />;
      case "neonatology": return <Baby className="h-4 w-4" />;
      default: return <Stethoscope className="h-4 w-4" />;
    }
  };

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
                Our <span className="text-primary">Pediatric Specialists</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-text mb-8"
              >
                Meet our team of dedicated pediatric specialists who are committed to providing 
                exceptional care for your children at every stage of their growth and development.
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map((doctor, index) => (
                <motion.div
                  key={doctor.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-200"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  
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
                      <p className="text-sm font-medium text-text mb-1">Languages:</p>
                      <div className="flex flex-wrap gap-2">
                        {doctor.languages.map((language, i) => (
                          <span key={i} className="bg-gray-100 text-text/80 px-2 py-1 rounded text-xs">
                            {language}
                          </span>
                        ))}
                      </div>
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
                Why Choose <span className="text-primary">Our Pediatric Specialists</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text/80 max-w-2xl mx-auto"
              >
                Our doctors are dedicated to providing the highest quality care for your children.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Board Certified Expertise",
                  description: "All our pediatric specialists are board-certified with extensive training from top institutions.",
                  icon: <Award className="h-8 w-8 text-primary" />
                },
                {
                  title: "Child-Centered Approach",
                  description: "We create a comfortable, welcoming environment that reduces anxiety for both children and parents.",
                  icon: <HeartPulse className="h-8 w-8 text-primary" />
                },
                {
                  title: "Continuity of Care",
                  description: "We believe in building long-term relationships with our patients and their families.",
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
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Schedule an Appointment?</h2>
                  <p className="mb-6 opacity-90">
                    Our patient coordinators are here to help you find the right specialist for your child's needs 
                    and schedule an appointment at your convenience.
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
                  <h3 className="font-semibold mb-4 text-lg">Quick Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3" />
                      <span>+977-1-4123456</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3" />
                      <span>pediatrics@meridianpolyclinic.com</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-3" />
                      <span>24/7 Pediatric Emergency</span>
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

export default DoctorsPage;