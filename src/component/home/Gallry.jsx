// Gallery.jsx
import React, { useState } from "react";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      id: 1,
      src: "https://www.shutterstock.com/shutterstock/photos/2507089869/display_1500/stock-photo-woman-pipette-and-scientist-with-medical-research-chemistry-laboratory-and-science-for-2507089869.jpg",
      title: "Modern Lab Equipment",
      category: "Laboratory"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
      title: "Sample Collection",
      category: "Services"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop",
      title: "Healthcare Professionals",
      category: "Team"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
      title: "Patient Care",
      category: "Services"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1530023367847-a683933f4172?w=400&h=300&fit=crop",
      title: "Advanced Technology",
      category: "Laboratory"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=300&fit=crop",
      title: "Happy Patients",
      category: "Testimonials"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=400&h=300&fit=crop",
      title: "Blood Test Analysis",
      category: "Laboratory"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=300&fit=crop",
      title: "Digital X-Ray",
      category: "Services"
    }
  ];

  const filters = ["All", "Laboratory", "Services", "Team", "Testimonials"];

  const filteredImages = activeFilter === "All" 
    ? images 
    : images.filter(img => img.category === activeFilter);

  // Get current filtered image index
  const getCurrentIndex = () => {
    return filteredImages.findIndex(img => img.id === selectedImage?.id);
  };

  // Handle image click
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setZoomLevel(1);
    setCurrentIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  // Close viewer - ONLY when explicitly called
  const closeViewer = () => {
    setSelectedImage(null);
    setZoomLevel(1);
  };

  // Navigate to previous image
  const prevImage = (e) => {
    if (e) {
      e.stopPropagation();
    }
    const currentIdx = getCurrentIndex();
    if (currentIdx > 0) {
      setSelectedImage(filteredImages[currentIdx - 1]);
      setZoomLevel(1);
    }
    // If at first image, do nothing - viewer stays open
  };

  // Navigate to next image
  const nextImage = (e) => {
    if (e) {
      e.stopPropagation();
    }
    const currentIdx = getCurrentIndex();
    if (currentIdx < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIdx + 1]);
      setZoomLevel(1);
    }
    // If at last image, do nothing - viewer stays open
  };

  // Zoom in
  const zoomIn = (e) => {
    e.stopPropagation();
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  // Zoom out
  const zoomOut = (e) => {
    e.stopPropagation();
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  // Reset zoom to normal
  const resetZoom = (e) => {
    e.stopPropagation();
    setZoomLevel(1);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        closeViewer();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const currentIdx = getCurrentIndex();
        if (currentIdx > 0) {
          setSelectedImage(filteredImages[currentIdx - 1]);
          setZoomLevel(1);
        }
        // If at first image, do nothing - viewer stays open
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        const currentIdx = getCurrentIndex();
        if (currentIdx < filteredImages.length - 1) {
          setSelectedImage(filteredImages[currentIdx + 1]);
          setZoomLevel(1);
        }
        // If at last image, do nothing - viewer stays open
      } else if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        setZoomLevel(prev => Math.min(prev + 0.25, 3));
      } else if (e.key === '-') {
        e.preventDefault();
        setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
      } else if (e.key === '0') {
        e.preventDefault();
        setZoomLevel(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredImages]);

  // Check if at first or last image
  const currentIdx = getCurrentIndex();
  const isFirstImage = currentIdx === 0;
  const isLastImage = currentIdx === filteredImages.length - 1;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Our Gallery
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our state-of-the-art facilities, professional team, and quality healthcare services
        </p>
        <div className="w-24 h-1 bg-[#007A55] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Filter Buttons without Icons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full transition duration-200 font-medium ${
              activeFilter === filter
                ? "bg-[#007A55] text-white shadow-lg shadow-[#007A55]/30"
                : "bg-gray-200 text-gray-700 hover:bg-[#007A55] hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Gallery Grid - Pure Images Only */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            onClick={() => handleImageClick(image)}
            className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:shadow-[#007A55]/20 cursor-pointer bg-white"
          >
            <div className="relative overflow-hidden aspect-square">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Image title overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold text-sm">{image.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-10">
        <button className="border-2 border-[#007A55] text-[#007A55] hover:bg-[#007A55] hover:text-white font-semibold py-3 px-8 rounded-xl transition duration-200">
          View All Photos
        </button>
      </div>

      {/* Full Screen Image Viewer Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeViewer}
        >
          {/* Close button */}
          <button
            onClick={closeViewer}
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl transition-colors z-10"
          >
            ×
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm font-medium bg-black/50 px-4 py-2 rounded-full">
            {currentIdx + 1} / {filteredImages.length}
          </div>

          {/* Navigation buttons - only show when not at boundaries */}
          {!isFirstImage && (
            <button
              onClick={prevImage}
              className="absolute left-4 md:left-8 text-white hover:text-[#007A55] text-5xl transition-colors z-10 bg-black/30 hover:bg-black/50 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center"
            >
              ‹
            </button>
          )}

          {!isLastImage && (
            <button
              onClick={nextImage}
              className="absolute right-4 md:right-8 text-white hover:text-[#007A55] text-5xl transition-colors z-10 bg-black/30 hover:bg-black/50 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center"
            >
              ›
            </button>
          )}

          {/* Image */}
          <div 
            className="relative max-w-[90vw] max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="transition-transform duration-300 ease-out"
              style={{
                transform: `scale(${zoomLevel})`,
                maxWidth: '90vw',
                maxHeight: '85vh',
                objectFit: 'contain'
              }}
            />
            
            {/* Image title */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white text-center text-lg font-medium">{selectedImage.title}</p>
              <p className="text-gray-300 text-center text-sm">{selectedImage.category}</p>
            </div>
          </div>

          {/* Zoom Controls */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-black/70 backdrop-blur-md px-4 py-3 rounded-full border border-white/10">
            <button
              onClick={zoomOut}
              className="text-white hover:text-[#007A55] text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              title="Zoom Out"
            >
              −
            </button>
            
            <span className="text-white text-sm font-medium min-w-[60px] text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            
            <button
              onClick={zoomIn}
              className="text-white hover:text-[#007A55] text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              title="Zoom In"
            >
              +
            </button>
            
            <div className="w-px h-6 bg-white/20 mx-1"></div>
            
            <button
              onClick={resetZoom}
              className="text-white hover:text-[#007A55] text-sm px-3 py-1 rounded-lg hover:bg-white/10 transition-colors"
              title="Reset Zoom"
            >
              Reset
            </button>
          </div>

          {/* Keyboard shortcuts hint */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/30 text-xs hidden md:block">
            ← → to navigate • + to zoom in • - to zoom out • 0 to reset • ESC to close
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;