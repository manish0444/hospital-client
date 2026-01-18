"use client";

import { Check, Clock, HeartPulse, Users, Award, Calendar, MapPin, Phone, Mail, ArrowRight, Brain, Bone, Activity } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const AboutUs = () => {
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

  const values = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Neurological Expertise",
      description: "Specialized care for stroke, spinal injuries, and complex neurological conditions.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Clinical Excellence",
      description: "Evidence-based treatments and advanced rehabilitation protocols.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Patient-Centered Care",
      description: "Individualized treatment plans focused on each patient's unique recovery goals.",
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "Integrity & Transparency",
      description: "Honest communication and ethical practice in all our treatments.",
    },
  ];

  const milestones = [
    { year: "2021", event: "CMC Chiropractic and Manual Therapy established by Dr. Tenzing Norbu Lama" },
    { year: "2022", event: "Expanded services to include specialized neurorehabilitation programs" },
    { year: "2023", event: "Introduced advanced Dry Needling and Manual Therapy techniques" },
    { year: "2024", event: "Dr. Tenzing appointed Executive Member of Nepal Physiotherapy Association" },
  ];

  const leadership = [
    {
      name: "Dr. Tenzing Norbu Lama, PT",
      position: "Founder & Chairman, Senior Consultant Neurophysiotherapist",
      image: "/images/dr-tenzing.jpg",
      bio: "Over 10 years of experience in neurological physiotherapy, chiropractic, and manual therapy. Master's in Neurological Physiotherapy from KLE University, India.",
    },
    {
      name: "Dr. Saroj K.C., PT",
      position: "Consultant Orthopedic & Sports Physiotherapist",
      image: "/images/dr-saroj.jpg",
      bio: "Specialized in musculoskeletal disorders and sports rehabilitation. Certified in Chiropractic, Manual Therapy, and Dry Needling.",
    },
    {
      name: "Dr. Sambandha Tandukar, PT",
      position: "Consultant Orthopedic & Sports Physiotherapist",
      image: "/images/dr-sambandha.jpg",
      bio: "Expert in sports rehabilitation and integrated manual therapy. Certified practitioner of Chiropractic and Dry Needling therapy.",
    },
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

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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

        .fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
        }

        .fade-in-right {
          animation: fadeInRight 0.6s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-100ms {
          animation-delay: 0.1s;
        }

        .delay-200ms {
          animation-delay: 0.2s;
        }

        .stagger-1 {
          animation-delay: 0.1s;
        }

        .stagger-2 {
          animation-delay: 0.2s;
        }

        .stagger-3 {
          animation-delay: 0.3s;
        }

        .stagger-4 {
          animation-delay: 0.4s;
        }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .timeline-item-left {
          animation: fadeInLeft 0.5s ease-out forwards;
        }

        .timeline-item-right {
          animation: fadeInRight 0.5s ease-out forwards;
        }

        .animate-on-scroll.timeline-left.animate-in {
          animation: fadeInLeft 0.5s ease-out forwards;
        }

        .animate-on-scroll.timeline-right.animate-in {
          animation: fadeInRight 0.5s ease-out forwards;
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
      `}</style>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-28">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-text mb-6 fade-in-up">
                About <span className="text-primary">CMC Chiropractic & Manual Therapy</span>
              </h1>
              
              <p className="text-lg text-text mb-8 fade-in-up delay-200">
                Leading neurophysiotherapy and rehabilitation center in Kathmandu, specializing in evidence-based 
                treatments for neurological and orthopedic conditions using advanced manual therapy techniques.
              </p>
              
              <div className="flex justify-center gap-4 pt-2 fade-in-up delay-400">
                <Link
                  href="/contact"
                  className="bg-primary text-white hover:bg-primary/80 px-6 py-3 rounded-lg font-medium text-center transition-colors shadow-sm hover:shadow-md button-hover"
                >
                  Contact Us
                </Link>
                <Link
                  href="/services"
                  className="border border-primary text-primary hover:bg-primary/20 px-6 py-3 rounded-lg font-medium text-center transition-colors shadow-sm hover:shadow-md button-hover"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "4", label: "Expert Physiotherapists" },
                { value: "100+", label: "Patients Monthly" },
                { value: "10+", label: "Years Experience" },
                { value: "3+", label: "Research Publications" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`animate-on-scroll bg-white p-6 rounded-lg shadow-sm border border-gray-100 stagger-${index + 1}`}
                >
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-text text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="relative bg-white py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-white/30 z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-on-scroll">
                <h2 className="text-3xl font-bold text-text">
                  Our <span className="text-primary">Story</span>
                </h2>
                
                <p className="text-text leading-relaxed">
                  Founded in August 2021 by Dr. Tenzing Norbu Lama, CMC Chiropractic and Manual Therapy 
                  emerged as a pioneering center dedicated to advanced neurophysiotherapy and rehabilitation 
                  in Nepal. With a vision to bring world-class neurological and orthopedic care to the community.
                </p>
                
                <p className="text-text leading-relaxed">
                  Our clinic combines expertise in neurological physiotherapy, chiropractic care, and 
                  evidence-based manual therapy techniques. We&apos;ve successfully treated numerous patients 
                  with complex neurological conditions, sports injuries, and chronic pain syndromes.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Advanced Neurokinetic Therapy (NKT) Level 2 Certified",
                    "COMT Master's Class in Osteopathic Techniques",
                    "Evidence-based Manual Therapy approaches",
                    "Specialized neurological rehabilitation programs",
                    "Multidisciplinary team of specialist physiotherapists"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        <Check className="h-5 w-5 text-blue-600" />
                      </div>
                      <p className="text-gray-700 ml-3">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative animate-on-scroll">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
                    alt="CMC Clinic Interior"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-md border border-gray-200 hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Award className="h-5 w-5 text-primary/80" />
                    </div>
                    <div>
                      <h4 className="font-medium text-text text-sm">NHPC Registered</h4>
                      <p className="text-text/80 text-xs">PHY42 Certified Practitioner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="animate-on-scroll bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="text-primary p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-6 bg-blue-100">
                  <Brain className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-text mb-4">Our Mission</h3>
                <p className="text-text/80">
                  To provide exceptional, evidence-based neurophysiotherapy and rehabilitation services 
                  that empower patients to achieve optimal recovery and functional independence. We are 
                  committed to advancing neurological and orthopedic care through continuous learning 
                  and innovative treatment approaches.
                </p>
              </div>
              
              <div className="animate-on-scroll bg-white p-8 rounded-xl shadow-sm border border-gray-200 delay-100ms">
                <div className="text-primary p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-6 bg-blue-100">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-text mb-4">Our Vision</h3>
                <p className="text-text/80">
                  To be the leading center for neurophysiotherapy and manual therapy in Nepal, recognized 
                  for clinical excellence, research contributions, and transformative patient outcomes. 
                  We aspire to set new standards in rehabilitation care while making advanced treatments 
                  accessible to all who need them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text mb-3 animate-on-scroll">
                Our <span className="text-primary">Values</span>
              </h2>
              <p className="text-text/80 max-w-2xl mx-auto animate-on-scroll delay-100ms">
                The principles that guide our practice and patient care at CMC Chiropractic and Manual Therapy
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`animate-on-scroll hover-lift bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200 text-center stagger-${index + 1}`}
                >
                  <div className="text-primary p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 mx-auto bg-blue-100">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2">{value.title}</h3>
                  <p className="text-text/80 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text mb-3 animate-on-scroll">
                Our <span className="text-primary">Journey</span>
              </h2>
              <p className="text-text/80 max-w-2xl mx-auto animate-on-scroll delay-100ms">
                Key milestones in our growth and development as a leading neurophysiotherapy center
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-on-scroll ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'} stagger-${index + 1}`}
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text mb-3 animate-on-scroll">
                Our <span className="text-primary">Expert Team</span>
              </h2>
              <p className="text-text/80 max-w-2xl mx-auto animate-on-scroll delay-100ms">
                Highly qualified physiotherapists dedicated to your recovery
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <div
                  key={index}
                  className={`animate-on-scroll hover-lift bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 stagger-${index + 1}`}
                >
                  <div className="h-60 overflow-hidden bg-gray-200 flex items-center justify-center">
                    <div className="text-gray-400 text-center">
                      <Users className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">Doctor Photo</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-text mb-1">{leader.name}</h3>
                    <p className="text-primary/80 text-sm mb-3">{leader.position}</p>
                    <p className="text-text/70 text-sm">{leader.bio}</p>
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
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Your Recovery Journey</h2>
                  <p className="mb-6 opacity-90">
                    Schedule a consultation with our neurophysiotherapy specialists and discover 
                    how our evidence-based treatments can help you achieve your recovery goals.
                  </p>
                  <Link
                    href="/appointment"
                    className="inline-flex items-center bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md button-hover group"
                  >
                    Book Appointment
                    <ArrowRight className="h-4 w-4 ml-2 group-hover-translate" />
                  </Link>
                </div>
                
                <div className="bg-white/10 p-6 rounded-xl">
                  <h3 className="font-semibold mb-4 text-lg">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3" />
                      <span>Saket Complex, Second Floor, Tripureshwor 11, KMC, Kathmandu, Nepal 44600</span>
                    </div>
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