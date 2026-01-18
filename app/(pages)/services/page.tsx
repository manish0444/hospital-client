"use client";

import { Check, Clock, HeartPulse, Stethoscope, Users, Phone, MapPin, ArrowRight, Mail, Microscope, Brain, Bone, Ambulance, Eye, Syringe, Hospital, Radio, Zap, Settings, Activity } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const ServicesPage = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

const services = [
  {
    id: "physiotherapy",
    icon: <Activity className="h-6 w-6" />,
    title: "Physiotherapy Services",
    description: "Comprehensive physical therapy services including conventional and advanced treatment techniques for pain management and rehabilitation.",
    features: ["Conventional Physiotherapy", "Advanced Physiotherapy", "Chronic Pain Management", "Sports Rehabilitation"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "conventional-physio",
    icon: <Settings className="h-6 w-6" />,
    title: "Conventional Physiotherapy",
    description: "Traditional physiotherapy approaches including electrotherapy, exercise therapy, and specialized rehabilitation programs.",
    features: [
      "Electrotherapy",
      "Exercise Therapy", 
      "Orthopedic Rehabilitation",
      "Neurological Rehabilitation",
      "Geriatric Rehabilitation"
    ],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "advanced-physio",
    icon: <Zap className="h-6 w-6" />,
    title: "Advanced Physiotherapy",
    description: "Cutting-edge physiotherapy techniques using evidence-based manual therapy and specialized treatment modalities.",
    features: [
      "Evidence Based Manual Therapy",
      "Taping Techniques", 
      "Dry Needling Techniques",
      "Ergonomics",
      "Chronic Pain Management"
    ],
    image: "https://images.unsplash.com/photo-1571019614241-5e5c8b5e8b1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "electrotherapy",
    icon: <Radio className="h-6 w-6" />,
    title: "Electrotherapy",
    description: "Advanced electrical modalities to interfere with pain signals, speed up tissue healing, and re-educate muscles.",
    features: [
      "Ultrasound therapy",
      "Class 4 laser therapy", 
      "Pain signal interference",
      "Tissue healing acceleration",
      "Nerve stimulation"
    ],
    image: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "orthopedic-rehab",
    icon: <Bone className="h-6 w-6" />,
    title: "Orthopedic Rehabilitation",
    description: "Tailor-made rehabilitation protocols for musculoskeletal injuries and post-operative recovery.",
    features: [
      "Shoulder & Knee Arthroscopies",
      "Total Joint Replacements", 
      "Post Fracture Rehabilitation",
      "Rotator Cuff Repair",
      "Sports Injury Recovery"
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "neurological-rehab",
    icon: <Brain className="h-6 w-6" />,
    title: "Neurological Rehabilitation",
    description: "Evidence-based approaches for progressive and non-progressive neurological conditions.",
    features: [
      "Stroke Rehabilitation",
      "Spinal Cord Injuries", 
      "Parkinson's Disease",
      "Multiple Sclerosis",
      "Balance & Coordination Training"
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
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
  }
];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-on-scroll {
          opacity: 0;
        }

        .animate-on-scroll.animate-in {
          animation: fadeInUp 0.5s ease-out forwards;
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        .stagger-7 { animation-delay: 0.7s; }
        .stagger-8 { animation-delay: 0.8s; }
        .stagger-9 { animation-delay: 0.9s; }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .button-hover {
          transition: all 0.2s ease;
        }

        .button-hover:hover {
          transform: translateY(-1px);
        }

        .button-hover:active {
          transform: translateY(0);
        }

        .group:hover .group-hover-translate {
          transform: translateX(4px);
        }

        .group-hover-translate {
          transition: transform 0.2s ease;
        }

        .service-image {
          transition: transform 0.3s ease;
        }

        .hover-lift:hover .service-image {
          transform: scale(1.05);
        }
      `}</style>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white z-0"></div>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10 py-10 md:py-18">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-text mb-6 fade-in-up">
                Our <span className="text-primary">Medical Services</span>
              </h1>
              
              <p className="text-lg text-text mb-8 fade-in-up delay-200">
                Comprehensive healthcare services delivered with compassion and expertise. 
                We offer a wide range of medical specialties to meet all your healthcare needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`animate-on-scroll hover-lift bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 stagger-${index + 1}`}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover service-image"
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
                      <ArrowRight className="h-4 w-4 ml-2 group-hover-translate" />
                    </Link>
                  </div>
                </div>
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
                    className="inline-flex items-center bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md button-hover group"
                  >
                    Contact Us
                    <ArrowRight className="h-4 w-4 ml-2 group-hover-translate" />
                  </Link>
                </div>
                
                <div className="bg-white/10 p-6 rounded-xl">
                  <h3 className="font-semibold mb-4 text-lg">Quick Contact</h3>
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