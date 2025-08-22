"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  X, 
  ChevronLeft, 
  ChevronRight,
  HeartPulse,
  Users,
  Building,
  Award,
  Calendar,
  MapPin
} from "lucide-react";

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample gallery images with categories and descriptions
  const galleryImages = [
    {
      id: 1,
      src: "/api/placeholder/400/300",
      category: "facility",
      title: "Modern Reception Area",
      description: "Our welcoming reception area designed to make children feel comfortable"
    },
    {
      id: 2,
      src: "/api/placeholder/400/300",
      category: "facility",
      title: "Pediatric Examination Room",
      description: "Child-friendly examination rooms with specialized equipment"
    },
    {
      id: 3,
      src: "/api/placeholder/400/300",
      category: "facility",
      title: "Play Area",
      description: "Safe and engaging play area for children of all ages"
    },
    {
      id: 4,
      src: "/api/placeholder/400/300",
      category: "team",
      title: "Our Pediatric Team",
      description: "Dedicated healthcare professionals specializing in pediatric care"
    },
    {
      id: 5,
      src: "/api/placeholder/400/300",
      category: "team",
      title: "Nursing Staff",
      description: "Compassionate nurses trained in pediatric patient care"
    },
    {
      id: 6,
      src: "/api/placeholder/400/300",
      category: "technology",
      title: "Advanced Laboratory",
      description: "State-of-the-art laboratory for accurate diagnostics"
    },
    {
      id: 7,
      src: "/api/placeholder/400/300",
      category: "technology",
      title: "Imaging Center",
      description: "Low-radiation imaging technology designed for children"
    },
    {
      id: 8,
      src: "/api/placeholder/400/300",
      category: "events",
      title: "Health Checkup Camp",
      description: "Community health camp providing free checkups for children"
    },
    {
      id: 9,
      src: "/api/placeholder/400/300",
      category: "events",
      title: "Vaccination Drive",
      description: "Immunization program for preventable diseases"
    },
    {
      id: 10,
      src: "/api/placeholder/400/300",
      category: "awards",
      title: "Excellence in Pediatric Care",
      description: "Award received for outstanding pediatric services in 2023"
    },
    {
      id: 11,
      src: "/api/placeholder/400/300",
      category: "awards",
      title: "Patient Safety Award",
      description: "Recognition for maintaining highest safety standards"
    },
    {
      id: 12,
      src: "/api/placeholder/400/300",
      category: "facility",
      title: "Neonatal Unit",
      description: "Specialized care unit for newborns and premature babies"
    }
  ];

  const categories = [
    { id: "all", name: "All Photos", icon: <HeartPulse className="h-5 w-5" /> },
    { id: "facility", name: "Facility", icon: <Building className="h-5 w-5" /> },
    { id: "team", name: "Our Team", icon: <Users className="h-5 w-5" /> },
    { id: "technology", name: "Technology", icon: <Award className="h-5 w-5" /> },
    { id: "events", name: "Events", icon: <Calendar className="h-5 w-5" /> },
    { id: "awards", name: "Awards", icon: <Award className="h-5 w-5" /> }
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset'; // Re-enable scrolling
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentImageIndex(prev => 
        prev === filteredImages.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentImageIndex(prev => 
        prev === 0 ? filteredImages.length - 1 : prev - 1
      );
    }
  };

  // Close lightbox when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxOpen) {
        closeLightbox();
      }
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyDown);
    }
    
    // Cleanup function to remove event listener
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [lightboxOpen]); // Only re-run if lightboxOpen changes

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
                Our <span className="text-primary">Gallery</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-text mb-8"
              >
                Take a visual journey through our pediatric healthcare facility, 
                meet our team, and see the advanced technology we use to care for your children.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Gallery Filters */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-2 mb-8"
            >
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category.id ? 'bg-primary text-white' : 'bg-white text-text border border-gray-200 hover:bg-gray-50'}`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </motion.div>

            {/* Gallery Grid */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-w-4 aspect-h-3 bg-gray-200 overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold">{image.title}</h3>
                      <p className="text-sm mt-1">{image.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredImages.length === 0 && (
              <div className="text-center py-12">
                <div className="bg-blue-50 p-8 rounded-xl max-w-md mx-auto">
                  <HeartPulse className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-text mb-2">No images found</h3>
                  <p className="text-text/80">There are no images in this category yet. Please check back later.</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "50+", label: "Rooms & Facilities" },
                { value: "150+", label: "Healthcare Professionals" },
                { value: "25+", label: "Advanced Technologies" },
                { value: "10+", label: "Awards & Recognitions" }
              ].map((stat: { value: string; label: string }, index) => (
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

        {/* Virtual Tour CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-text mb-4"
              >
                Experience Our Facility Virtually
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text/80 max-w-2xl mx-auto mb-8"
              >
                Can't visit us in person? Take a virtual tour of our pediatric healthcare facility from the comfort of your home.
              </motion.p>
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center bg-primary text-white hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Start Virtual Tour
              </motion.button>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl w-full max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <div className="flex items-center justify-center h-full">
              <button
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="absolute left-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              
              <div className="flex flex-col items-center">
                <img 
                  src={filteredImages[currentImageIndex].src} 
                  alt={filteredImages[currentImageIndex].title}
                  className="max-w-full max-h-[70vh] object-contain"
                  onClick={(e: React.MouseEvent) => e.stopPropagation()}
                />
                <div className="mt-4 text-white text-center max-w-2xl">
                  <h3 className="text-xl font-semibold">{filteredImages[currentImageIndex].title}</h3>
                  <p className="mt-2">{filteredImages[currentImageIndex].description}</p>
                  <p className="mt-4 text-sm text-gray-300">
                    {currentImageIndex + 1} of {filteredImages.length}
                  </p>
                </div>
              </div>
              
              <button
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="absolute right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default GalleryPage;