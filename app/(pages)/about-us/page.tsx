"use client";

import { motion } from "framer-motion";
import { Check, Clock, HeartPulse, Users, Award, Calendar, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

const AboutUs = () => {
  const values = [
    {
      icon: <HeartPulse className="h-6 w-6" />,
      title: "Child-Centered Care",
      description: "We prioritize the unique needs of children in all our services and treatments.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence",
      description: "We maintain the highest standards in pediatric healthcare and service.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Compassionate Service",
      description: "We treat every child and family with empathy, respect, and dignity.",
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "Integrity",
      description: "We uphold honesty and transparency in all our interactions.",
    },
  ];

  const milestones = [
    { year: "2007", event: "IFCH established with a vision to serve children" },
    { year: "2010", event: "Expanded to include specialized pediatric services" },
    { year: "2015", event: "Recognized as a leading pediatric hospital in Nepal" },
    { year: "2022", event: "Celebrated 15 years of serving children's health needs" },
  ];

  const leadership = [
    {
      name: "Dr. Bhagawan Koirala",
      position: "Chairman",
      image: "/images/chairman.jpg",
      bio: "Renowned cardiologist and healthcare leader with a vision for quality pediatric care in Nepal.",
    },
    {
      name: "Dr. Ashok K. Singh",
      position: "Medical Director",
      image: "/images/medical-director.jpg",
      bio: "Experienced pediatric specialist leading our medical team with expertise and compassion.",
    },
    {
      name: "Ms. Sarita K.C.",
      position: "Administrative Director",
      image: "/images/admin-director.jpg",
      bio: "Ensuring smooth operations and exceptional patient experiences across all departments.",
    },
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
                About <span className="text-primary">International Friendship Children's Hospital</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-text mb-8"
              >
                For over 15 years, we've been providing exceptional pediatric healthcare with compassion, 
                cutting-edge technology, and a child-first approach.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-center gap-4 pt-2"
              >
                <Link
                  href="/contact"
                  className="bg-primary text-white hover:bg-primary/80 px-6 py-3 rounded-lg font-medium text-center transition-colors shadow-sm hover:shadow-md"
                >
                  Contact Us
                </Link>
                <Link
                  href="/services"
                  className="border border-primary text-primary hover:bg-primary/20 px-6 py-3 rounded-lg font-medium text-center transition-colors shadow-sm hover:shadow-md"
                >
                  Our Services
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "30+", label: "Expert Doctors" },
                { value: "15+", label: "Specialized Departments" },
                { value: "50K+", label: "Children Treated" },
                { value: "24/7", label: "Pediatric Emergency" }
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

        {/* Our Story Section */}
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
                <h2 className="text-3xl font-bold text-text">
                  Our <span className="text-primary">Story</span>
                </h2>
                
                <p className="text-text leading-relaxed">
                  Established in 2007, International Friendship Children's Hospital (IFCH) was founded with 
                  a vision to provide specialized pediatric care to the children of Nepal. We began as a 
                  modest facility and have grown into a comprehensive children's hospital serving thousands 
                  of young patients annually.
                </p>
                
                <p className="text-text leading-relaxed">
                  Our journey has been guided by our commitment to pediatric excellence, technological 
                  innovation, and above all, compassionate care for children. We've continuously expanded 
                  our services and facilities to meet the evolving healthcare needs of Nepal's children.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Child-friendly medical environment",
                    "Specialized pediatric equipment and technology",
                    "Continuous staff training in pediatric care",
                    "Family-centered care philosophy",
                    "Community child health initiatives"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        <Check className="h-5 w-5 text-blue-600" />
                      </div>
                      <p className="text-gray-700 ml-3">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src="https://ifch.com.np/assets/images/banner/banner-2.jpg"
                    alt="IFCH Hospital Building"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-md border border-gray-200 hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Award className="h-5 w-5 text-primary/80" />
                    </div>
                    <div>
                      <h4 className="font-medium text-text text-sm">Recognized Excellence</h4>
                      <p className="text-text/80 text-xs">Leading Pediatric Hospital in Nepal</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
              >
                <div className="text-primary p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-6 bg-blue-100">
                  <HeartPulse className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-text mb-4">Our Mission</h3>
                <p className="text-text/80">
                  To provide high quality, compassionate and specialized healthcare services to children 
                  in a child-friendly environment. We are dedicated to improving child health outcomes 
                  through evidence-based treatments, preventive care, and health education for families.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
              >
                <div className="text-primary p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-6 bg-blue-100">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-text mb-4">Our Vision</h3>
                <p className="text-text/80">
                  To be the leading children's hospital in Nepal, recognized for clinical excellence in 
                  pediatric care, patient-centered services, and community outreach. We aspire to set new 
                  standards in children's healthcare while remaining accessible to families from all 
                  socioeconomic backgrounds.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-text mb-3"
              >
                Our <span className="text-primary">Values</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text/80 max-w-2xl mx-auto"
              >
                The principles that guide everything we do at International Friendship Children's Hospital
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200 text-center"
                >
                  <div className="text-primary p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 mx-auto bg-blue-100">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2">{value.title}</h3>
                  <p className="text-text/80 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-text mb-3"
              >
                Our <span className="text-primary">Journey</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text/80 max-w-2xl mx-auto"
              >
                Key milestones in our growth and development
              </motion.p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-xl font-bold text-primary mb-2">{milestone.year}</h3>
                        <p className="text-text/80">{milestone.event}</p>
                      </div>
                    </div>
                    
                    <div className="relative w-8 h-8 flex items-center justify-center">
                      <div className="absolute w-8 h-8 rounded-full bg-primary border-4 border-white shadow-md"></div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-text mb-3"
              >
                Leadership <span className="text-primary">Team</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text/80 max-w-2xl mx-auto"
              >
                Experienced professionals guiding our mission forward
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all border border-gray-200"
                >
                  <div className="h-60 overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-text mb-1">{leader.name}</h3>
                    <p className="text-primary/80 text-sm mb-3">{leader.position}</p>
                    <p className="text-text/70 text-sm">{leader.bio}</p>
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
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Experience the IFCH Difference</h2>
                  <p className="mb-6 opacity-90">
                    Schedule a consultation with our pediatric specialists and discover why thousands of families 
                    trust us with their children's healthcare needs.
                  </p>
                  <Link
                    href="/appointment"
                    className="inline-flex items-center bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
                  >
                    Book Appointment
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
                
                <div className="bg-white/10 p-6 rounded-xl">
                  <h3 className="font-semibold mb-4 text-lg">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3" />
                      <span>Maharajgunj, Kathmandu, Nepal</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3" />
                      <span>01-5914999 / 01-5916444</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3" />
                      <span>info@ifch.com.np</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-3" />
                      <span>Open 24/7 for pediatric emergencies</span>
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

export default AboutUs;