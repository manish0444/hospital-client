"use client";

import { motion } from "framer-motion";
import { Check, Clock, HeartPulse, Stethoscope, Users, Phone, MapPin, ArrowRight, Mail, Brain, Bone, Eye, Syringe, Baby, Activity } from "lucide-react";
import Link from "next/link";

const DepartmentsPage = () => {
  const departments = [
    {
      id: "pediatric-medicine",
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Pediatric Medicine",
      description: "Comprehensive medical care for children from birth through adolescence.",
      features: ["Well-child visits", "Vaccinations", "Acute illness care", "Chronic condition management"],
      image: "https://images.unsplash.com/photo-1622572773651-7e8e71a65375?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specialists: 8
    },
    {
      id: "pediatric-surgery",
      icon: <Syringe className="h-6 w-6" />,
      title: "Pediatric Surgery",
      description: "Specialized surgical care for infants, children, and adolescents.",
      features: ["Minimally invasive surgery", "Newborn surgery", "Trauma surgery", "Oncologic surgery"],
      image: "https://images.unsplash.com/photo-1584614375600-ca0638f21602?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specialists: 5
    },
    {
      id: "pediatric-cardiology",
      icon: <HeartPulse className="h-6 w-6" />,
      title: "Pediatric Cardiology",
      description: "Diagnosis and treatment of heart conditions in children.",
      features: ["Fetal echocardiography", "Congenital heart disease", "Cardiac catheterization", "Electrophysiology"],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specialists: 6
    },
    {
      id: "pediatric-neurology",
      icon: <Brain className="h-6 w-6" />,
      title: "Pediatric Neurology",
      description: "Care for children with neurological disorders.",
      features: ["Epilepsy treatment", "Headache management", "Neuromuscular disorders", "Developmental delays"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specialists: 4
    },
    {
      id: "pediatric-orthopedics",
      icon: <Bone className="h-6 w-6" />,
      title: "Pediatric Orthopedics",
      description: "Treatment of musculoskeletal issues in children.",
      features: ["Fracture care", "Scoliosis treatment", "Sports injuries", "Congenital deformities"],
      image: "https://images.unsplash.com/photo-1599045118108-bf9954418b76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specialists: 7
    },
    {
      id: "pediatric-endocrinology",
      icon: <Activity className="h-6 w-6" />,
      title: "Pediatric Endocrinology",
      description: "Management of hormonal disorders in children.",
      features: ["Diabetes care", "Growth disorders", "Thyroid conditions", "Puberty disorders"],
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specialists: 5
    },
    {
      id: "pediatric-ophthalmology",
      icon: <Eye className="h-6 w-6" />,
      title: "Pediatric Ophthalmology",
      description: "Eye care specialized for children's visual needs.",
      features: ["Strabismus treatment", "Refractive errors", "Amblyopia therapy", "Genetic eye disorders"],
      image: "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specialists: 4
    },
    {
      id: "neonatology",
      icon: <Baby className="h-6 w-6" />,
      title: "Neonatology",
      description: "Specialized care for newborn infants, especially the ill or premature.",
      features: ["NICU care", "Premature infant care", "Newborn resuscitation", "Developmental follow-up"],
      image: "https://images.unsplash.com/photo-1549056572-75914d6d7e1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specialists: 6
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
                Our <span className="text-primary">Medical Departments</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-text mb-8"
              >
                Specialized care for every stage of childhood. Our pediatric departments offer 
                comprehensive medical services tailored to the unique needs of infants, children, and adolescents.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "8+", label: "Specialized Departments" },
                { value: "45+", label: "Pediatric Specialists" },
                { value: "15K+", label: "Children Treated Yearly" },
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

        {/* Departments Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-text mb-3"
              >
                Pediatric <span className="text-primary">Specialties</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text/80 max-w-2xl mx-auto"
              >
                Our specialized departments provide comprehensive care for all aspects of children's health.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((department, index) => (
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
                      src={department.image}
                      alt={department.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-primary p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 bg-blue-100">
                      {department.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-text mb-2">{department.title}</h3>
                    <p className="text-text/80 mb-4">{department.description}</p>
                    <div className="mb-5">
                      <h4 className="font-medium text-text mb-2">Services Include:</h4>
                      <ul className="space-y-1">
                        {department.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-text/80 text-sm">{feature}</span>
                          </li>
                        ))}
                        {department.features.length > 3 && (
                          <li className="text-text/60 text-sm">+{department.features.length - 3} more services</li>
                        )}
                      </ul>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-sm text-text/70">
                        {department.specialists}+ specialists
                      </div>
                      <Link
                        href={`/departments/${department.id}`}
                        className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group"
                      >
                        Learn more
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Child-Friendly Environment Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-text">
                  Child-Friendly <span className="text-primary">Environment</span>
                </h2>
                
                <p className="text-text leading-relaxed">
                  We understand that hospitals can be intimidating for children. That's why we've designed our 
                  pediatric departments with children's comfort in mind. Our facilities feature:
                </p>
                
                <div className="space-y-4">
                  {[
                    "Colorful, welcoming decor and play areas",
                    "Child life specialists to reduce anxiety",
                    "Age-appropriate medical equipment",
                    "Family-centered care approach"
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
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Child-friendly hospital environment"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-md border border-gray-200 hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Users className="h-5 w-5 text-primary/80" />
                    </div>
                    <div>
                      <h4 className="font-medium text-text text-sm">Family-Centered Care</h4>
                      <p className="text-text/80 text-xs">Parents are part of the care team</p>
                    </div>
                  </div>
                </div>
              </motion.div>
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
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help Finding the Right Department?</h2>
                  <p className="mb-6 opacity-90">
                    Our patient coordinators are here to help you find the right specialist for your child's needs 
                    and answer any questions you may have about our services.
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

export default DepartmentsPage;