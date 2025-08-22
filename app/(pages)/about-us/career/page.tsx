"use client";

import { motion } from "framer-motion";
import { Check, Clock, HeartPulse, Users, Phone, MapPin, ArrowRight, Mail, Calendar, Award, Briefcase, Syringe, Droplets, FileText, Stethoscope } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const CareersPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const jobOpenings = [
    {
      id: 1,
      title: "Pediatrician",
      department: "Pediatric Medicine",
      type: "Full-time",
      experience: "3+ years",
      location: "Kathmandu",
      description: "We are seeking a dedicated Pediatrician to provide comprehensive medical care for children from birth through adolescence.",
      requirements: ["MD in Pediatrics", "Board Certified", "Excellent communication skills", "Compassionate patient care"],
      postedDate: "2023-10-15"
    },
    {
      id: 2,
      title: "Pediatric Nurse",
      department: "Nursing",
      type: "Full-time",
      experience: "2+ years",
      location: "Kathmandu",
      description: "Looking for a compassionate Pediatric Nurse to provide exceptional care to our young patients and support their families.",
      requirements: ["BSN degree", "Pediatric Nursing Certification", "CPR certification", "Experience with children"],
      postedDate: "2023-10-10"
    },
    {
      id: 3,
      title: "Medical Laboratory Technician",
      department: "Laboratory",
      type: "Part-time",
      experience: "1+ years",
      location: "Lalitpur",
      description: "Seeking a skilled Lab Technician to perform diagnostic testing and support our pediatric diagnostic services.",
      requirements: ["MLT certification", "Experience in pediatric lab work", "Attention to detail", "Knowledge of safety protocols"],
      postedDate: "2023-10-05"
    },
    {
      id: 4,
      title: "Child Life Specialist",
      department: "Patient Support",
      type: "Full-time",
      experience: "2+ years",
      location: "Kathmandu",
      description: "Join our team to help reduce anxiety and stress for children and families through therapeutic play and education.",
      requirements: ["Bachelor's in Child Life", "Child Life Certification", "Experience in hospital setting", "Creative problem-solving"],
      postedDate: "2023-09-28"
    },
    {
      id: 5,
      title: "Pediatric Surgeon",
      department: "Pediatric Surgery",
      type: "Full-time",
      experience: "5+ years",
      location: "Kathmandu",
      description: "We're seeking an experienced Pediatric Surgeon to perform surgical procedures on infants, children, and adolescents.",
      requirements: ["MD in Surgery", "Pediatric Surgery Fellowship", "Board Certified", "Excellent surgical skills"],
      postedDate: "2023-09-20"
    },
    {
      id: 6,
      title: "Medical Receptionist",
      department: "Administration",
      type: "Part-time",
      experience: "Entry Level",
      location: "Bhaktapur",
      description: "Friendly and organized Receptionist needed to manage front desk operations and provide excellent patient service.",
      requirements: ["High school diploma", "Computer skills", "Customer service experience", "Multitasking ability"],
      postedDate: "2023-09-15"
    }
  ];

  const departments = [
    { id: "all", name: "All Departments" },
    { id: "Pediatric Medicine", name: "Pediatric Medicine" },
    { id: "Nursing", name: "Nursing" },
    { id: "Laboratory", name: "Laboratory" },
    { id: "Patient Support", name: "Patient Support" },
    { id: "Pediatric Surgery", name: "Pediatric Surgery" },
    { id: "Administration", name: "Administration" }
  ];

  const filteredJobs = activeTab === "all" 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === activeTab);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
      

     

        {/* Job Openings Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-text mb-3"
              >
                Current <span className="text-primary">Job Openings</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text/80 max-w-2xl mx-auto"
              >
                Explore opportunities to join our team of dedicated pediatric healthcare professionals.
              </motion.p>
            </div>

            {/* Department Filter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-2 mb-8"
            >
              {departments.map(dept => (
                <button
                  key={dept.id}
                  onClick={() => setActiveTab(dept.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === dept.id ? 'bg-primary text-white' : 'bg-white text-text border border-gray-200 hover:bg-gray-50'}`}
                >
                  {dept.name}
                </button>
              ))}
            </motion.div>

            {/* Jobs Grid */}
            <div className="grid grid-cols-1 gap-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-200"
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-text">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm">{job.department}</span>
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">{job.type}</span>
                          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">{job.location}</span>
                        </div>
                      </div>
                      <Link
                        href={`/career/${job.id}`}
                        className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group whitespace-nowrap"
                      >
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                    
                    <p className="text-text/80 mb-4">{job.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-text mb-2">Requirements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.slice(0, 3).map((req, i) => (
                          <span key={i} className="bg-gray-100 text-text/80 px-3 py-1 rounded-full text-sm">
                            {req}
                          </span>
                        ))}
                        {job.requirements.length > 3 && (
                          <span className="bg-gray-100 text-text/60 px-3 py-1 rounded-full text-sm">
                            +{job.requirements.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                      <div className="text-sm text-text/70">
                        Posted: {new Date(job.postedDate).toLocaleDateString()}
                      </div>
                      <Link
                        href={`/about-us/career/application`}
                        className="inline-flex items-center bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <div className="bg-blue-50 p-8 rounded-xl max-w-md mx-auto">
                  <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-text mb-2">No current openings</h3>
                  <p className="text-text/80 mb-4">There are no current openings in this department. Please check back later.</p>
                  <button 
                    onClick={() => setActiveTab("all")}
                    className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group"
                  >
                    View all openings
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-text mb-3"
              >
                Employee <span className="text-primary">Benefits</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text/80 max-w-2xl mx-auto"
              >
                We value our team members and offer comprehensive benefits to support their professional and personal well-being.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Competitive Compensation",
                  description: "Industry-competitive salary and performance bonuses",
                  icon: <Award className="h-8 w-8 text-primary" />
                },
                {
                  title: "Health Insurance",
                  description: "Comprehensive medical, dental, and vision coverage",
                  icon: <HeartPulse className="h-8 w-8 text-primary" />
                },
                {
                  title: "Professional Development",
                  description: "Continuing education allowances and training programs",
                  icon: <Briefcase className="h-8 w-8 text-primary" />
                },
                {
                  title: "Work-Life Balance",
                  description: "Flexible scheduling and generous paid time off",
                  icon: <Calendar className="h-8 w-8 text-primary" />
                }
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl text-center"
                >
                  <div className="bg-blue-100 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2">{benefit.title}</h3>
                  <p className="text-text/80">{benefit.description}</p>
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
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Can't Find the Right Position?</h2>
                  <p className="mb-6 opacity-90">
                    Send us your resume anyway! We're always looking for talented healthcare professionals 
                    and may have upcoming opportunities that match your skills.
                  </p>
                  <Link
                    href="/about-us/career/application"
                    className="inline-flex items-center bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
                  >
                    Submit General Application
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
                
                <div className="bg-white/10 p-6 rounded-xl">
                  <h3 className="font-semibold mb-4 text-lg">HR Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-3" />
                      <span>Human Resources Department</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3" />
                      <span>+977-1-4123500</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3" />
                      <span>hr@meridianpolyclinic.com</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-3" />
                      <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
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
export default CareersPage;