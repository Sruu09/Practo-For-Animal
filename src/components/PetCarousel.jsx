import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Sparkles } from 'lucide-react';

const petSlides = [
  {
    id: 1,
    name: 'Bruno & Leo',
    badge: 'Healthy & Vaccinated',
    breed: 'Golden Retriever & Indie Mix',
    story: 'Routine wellness and dental care keeps these playful brothers thriving!',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=80',
    color: '#D9E6D2'
  },
  {
    id: 2,
    name: 'Ginger & Bella',
    badge: 'Adopted Through NGO',
    breed: 'Persian Companion & Calico',
    story: 'Rescued as stranded kittens, now ruling their cozy sunlit living room.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80',
    color: '#F2BE55'
  },
  {
    id: 3,
    name: 'Rocky',
    badge: 'Emergency Recovery Champion',
    breed: 'Beagle Wonder',
    story: 'Treated for accidental chocolate ingestion at Apex 24/7 ICU, back to full bounce.',
    image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=1200&q=80',
    color: '#D9E6D2'
  },
  {
    id: 4,
    name: 'Maya',
    badge: 'Boarding & Agility Star',
    breed: 'Border Collie Mix',
    story: 'Enjoys weekend splash pool parties at Whiskers Eco-Retreat while parents travel.',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=80',
    color: '#F2BE55'
  }
];

const PetCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % petSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + petSlides.length) % petSlides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % petSlides.length);
  };

  const current = petSlides[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-3xl border-3 border-[#315A4D] overflow-hidden shadow-[6px_6px_0px_#315A4D] bg-white">
      
      {/* Visual Frame */}
      <div className="relative h-[300px] sm:h-[380px] md:h-[420px] w-full overflow-hidden bg-slate-900">
        <img
          src={current.image}
          alt={current.name}
          className="w-full h-full object-cover object-center transition-all duration-700 transform scale-100 hover:scale-105"
        />
        
        {/* Soft gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#173F35]/95 via-[#173F35]/40 to-transparent" />

        {/* Floating Top Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span 
            className="soft-tag shadow-[2px_2px_0px_#315A4D] text-xs font-black text-[#173F35]"
            style={{ backgroundColor: current.color }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#173F35]" />
            {current.badge}
          </span>
        </div>

        {/* Bottom Details Card */}
        <div className="absolute bottom-4 left-4 right-4 z-10 bg-[#FFF5E8]/95 backdrop-blur-md border-2 border-[#315A4D] rounded-2xl p-4 md:p-5 shadow-[4px_4px_0px_#315A4D] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-xl md:text-2xl text-[#173F35]">
                {current.name}
              </h3>
              <span className="text-xs font-bold text-[#203B34] bg-[#D9E6D2] px-2.5 py-0.5 rounded-full border border-[#315A4D]">
                {current.breed}
              </span>
            </div>
            <p className="text-xs md:text-sm text-[#52675D] font-semibold mt-1">
              "{current.story}"
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-bold text-[#173F35] bg-[#F2BE55] px-3 py-1 rounded-full border border-[#315A4D] flex items-center gap-1 shadow-[1px_1px_0px_#315A4D]">
              <Heart className="w-3.5 h-3.5 text-[#E97856] fill-[#E97856]" /> Real Patient Story
            </span>
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 hover:bg-white border-2 border-[#315A4D] flex items-center justify-center text-[#173F35] shadow-[2px_2px_0px_#315A4D] transition-transform active:scale-90 z-20 cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 hover:bg-white border-2 border-[#315A4D] flex items-center justify-center text-[#173F35] shadow-[2px_2px_0px_#315A4D] transition-transform active:scale-90 z-20 cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-black/40 px-2.5 py-1.5 rounded-full backdrop-blur-xs border border-white/30">
          {petSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === idx ? 'w-6 bg-[#F2BE55]' : 'w-2 bg-white/60 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

    </div>
  );
};

export default PetCarousel;
