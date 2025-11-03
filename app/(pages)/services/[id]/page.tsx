"use client";

import { motion } from "framer-motion";
import { Check, Clock, ArrowRight, Phone, MapPin, Mail, Calendar } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// This would be in a separate file with all service data
const serviceData = {
  physiotherapy: {
    title: "Physiotherapy Services",
    description: "Comprehensive physiotherapy services including conventional and advanced treatments for various musculoskeletal and neurological conditions.",
    longDescription: "Our physiotherapy department offers a wide range of evidence-based treatments using both conventional and advanced techniques. We provide personalized rehabilitation programs for orthopedic, neurological, and geriatric conditions, along with specialized pain management and ergonomic solutions.",
    icon: "Activity",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Conventional Physiotherapy",
      "Advanced Physiotherapy Techniques",
      "Chronic Pain Management",
      "Neurological Rehabilitation",
      "Orthopedic Rehabilitation",
      "Geriatric Care",
      "Sports Injury Treatment",
      "Ergonomic Assessments"
    ],
    procedures: [
      "Electrotherapy",
      "Exercise Therapy",
      "Manual Therapy",
      "Dry Needling",
      "Taping Techniques",
      "Neurological Rehabilitation",
      "Orthopedic Rehabilitation",
      "Geriatric Rehabilitation"
    ],
    subServices: {
      conventional: {
        title: "Conventional Physiotherapy",
        treatments: [
          {
            name: "Electrotherapy",
            description: "Comprehensive electrotherapy services using electrical signals, sound waves, and electromagnetic radiations to manage pain, accelerate tissue healing, and improve muscle function.",
            modalities: [
              "Ultrasound therapy",
              "Class 4 laser therapy",
              "Moist heat therapy",
              "Paraffin Wax bath",
              "Low and medium frequency electrical stimulation"
            ],
            benefits: [
              "Pain signal interference",
              "Tissue healing acceleration",
              "Muscle re-education",
              "Nerve re-stimulation",
              "Soft tissue relaxation"
            ]
          },
          {
            name: "Exercise Therapy",
            description: "Customized physical activity regimens designed by qualified physiotherapists to restore normal pain-free movement and improve musculoskeletal function.",
            approaches: [
              "Closed and open kinematic chain exercises",
              "Concentric/eccentric/isometric exercises",
              "Strengthening and stretching exercises",
              "Anti-gravity exercises",
              "Cardio-respiratory endurance training"
            ],
            benefits: [
              "Pain reduction",
              "Improved mobility",
              "Enhanced strength",
              "Better fitness levels",
              "Restored joint range of motion"
            ]
          },
          {
            name: "Orthopedic Rehabilitation",
            description: "Tailor-made rehabilitation protocols for musculoskeletal injuries and post-operative conditions, restoring patients to normal or near-normal function.",
            conditions: [
              "Shoulder Arthroscopies",
              "Knee Arthroscopies",
              "Total Knee Replacement",
              "Total Hip Replacement",
              "Post Fracture Fixation",
              "Rotator Cuff Repair"
            ],
            features: [
              "Evidence-based protocols",
              "Individualized treatment plans",
              "Result-oriented approach",
              "Age-specific rehabilitation"
            ]
          },
          {
            name: "Neurological Rehabilitation",
            description: "Advanced evidence-based approaches for treating progressive and non-progressive neurological conditions affecting movement and function.",
            conditions: [
              "Cerebro-vascular Accidents (Stroke)",
              "Traumatic Brain Injuries",
              "Spinal Cord Injuries",
              "Parkinson's Disease",
              "Multiple Sclerosis",
              "Facial Palsy/Bell's Palsy",
              "GB Syndrome",
              "Myasthenia Gravis",
              "Motor Neuron Disease",
              "Cerebral Palsy",
              "Metabolic Neuropathies",
              "Muscular Dystrophy"
            ],
            techniques: [
              "Motor Relearning Protocol",
              "Bobath and Brunnstrom approaches",
              "Constraint Induced Movement Therapy (CIMT)",
              "Sensory-motor Integration",
              "Balance and coordination training"
            ]
          },
          {
            name: "Geriatric Rehabilitation",
            description: "Specialized rehabilitation addressing neuro-musculoskeletal issues in elderly patients, focusing on mobility, fitness, and fall prevention.",
            services: [
              "Mobility improvement",
              "Fitness enhancement",
              "Cardio-respiratory endurance training",
              "Fall risk screening",
              "Home safety assessments",
              "Customized exercise programs"
            ],
            benefits: [
              "Reduced fear of falling",
              "Improved independence",
              "Enhanced quality of life",
              "Better balance and coordination"
            ]
          }
        ]
      },
      advanced: {
        title: "Advanced Physiotherapy",
        treatments: [
          {
            name: "Evidence Based Manual Therapy",
            description: "Advanced hands-on techniques providing instant relief for various pain conditions through evidence-based manual therapy approaches.",
            techniques: [
              "Maitland's techniques",
              "Mulligan's techniques",
              "Kaltenborne's techniques",
              "McKenzie's methods",
              "Neurodynamics",
              "Cyriax's techniques"
            ],
            conditions: [
              "Knee pain",
              "Shoulder pain",
              "Ankle pain",
              "Neck pain",
              "Mid back pain",
              "Lower back pain"
            ]
          },
          {
            name: "Complete Chronic Pain Management",
            description: "Holistic approach to chronic pain management addressing pain lasting more than 12 weeks through multiple therapeutic tools.",
            approaches: [
              "Correction of Pathomechanics",
              "Dry Needling therapy",
              "Manual therapy",
              "Pain Neuro Science Education",
              "Cognitive Behavioral therapy"
            ],
            painTypes: [
              "Dull aching pain",
              "Sharp shooting pain",
              "Pinching type pain",
              "Shocking type pain",
              "Unexplained pain syndromes"
            ]
          },
          {
            name: "Taping Techniques",
            description: "Specialized taping methods for treating musculoskeletal injuries and enhancing athletic performance.",
            types: [
              "Sports taping",
              "Kinesiology taping",
              "Athletic taping",
              "Mulligan taping",
              "McConnell Taping",
              "Kinesio taping"
            ],
            benefits: [
              "Injury protection",
              "Enhanced support",
              "Optimal function maintenance",
              "Tissue healing acceleration",
              "Early return to sports",
              "Prevention of compensatory injuries"
            ]
          },
          {
            name: "Dry Needling Therapy",
            description: "Advanced treatment using thin solid filiform needles to address muscle pains caused by Myofascial Trigger Points.",
            conditions: [
              "Upper back Pain",
              "Neck Pain",
              "Shoulder Region Pain",
              "Forearm Pain",
              "Lower Back Pain",
              "Thigh Pain",
              "Calf Muscle Pain",
              "Heel Pain"
            ],
            benefits: [
              "Myofascial trigger point release",
              "Pain cycle interruption",
              "Muscle relaxation",
              "Improved range of motion"
            ]
          },
          {
            name: "Ergonomics",
            description: "Science-based approach to optimizing workplace setup and body posture to prevent musculoskeletal problems.",
            services: [
              "Workstation assessments",
              "Posture correction",
              "Corporate awareness programs",
              "Individual screening",
              "Workplace modifications"
            ],
            focusAreas: [
              "IT industry musculoskeletal issues",
              "Proper workstation setup",
              "Body posture correction",
              "Pain syndrome prevention",
              "Long sitting position management"
            ]
          }
        ]
      }
    },
    doctors: [
      {
        name: "Dr. Arjun Kumar",
        specialty: "Senior Physiotherapist & Rehabilitation Specialist",
        image: "/images/physio1.jpg",
      },
      {
        name: "Dr. Neha Sharma",
        specialty: "Neurological Physiotherapy Specialist",
        image: "/images/physio2.jpg",
      },
      {
        name: "Dr. Vikram Patel",
        specialty: "Sports Physiotherapist & Manual Therapy Expert",
        image: "/images/physio3.jpg",
      }
    ]
  }
};

const ServiceDetailPage = () => {
  const params = useParams();
  const serviceId = params.serviceName as string;
  const service = serviceData[serviceId as keyof typeof serviceData] || serviceData.physiotherapy;

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
                    href="tel:+9779865366154"
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
                    href="tel:+9779865366154"
                    className="inline-flex items-center justify-center w-full border border-primary text-primary hover:bg-primary/20 px-4 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call: +9779865366154
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