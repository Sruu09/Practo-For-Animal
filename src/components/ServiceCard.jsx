import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  description, 
  image, 
  linkTo, 
  tag, 
  bgColor = '#D9E6D2'
}) => {
  return (
    <div className="playful-card p-5 md:p-6 flex flex-col justify-between group h-full bg-white border-2 border-[#315A4D] shadow-[4px_4px_0px_#315A4D]">
      <div>
        {/* Card Header & Tag */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span 
            className="soft-tag text-xs font-black shadow-[1px_1px_0px_#315A4D] text-[#173F35]"
            style={{ backgroundColor: bgColor }}
          >
            {tag}
          </span>
          <Sparkles className="w-4 h-4 text-[#52675D]/40 group-hover:text-[#E97856] transition-colors" />
        </div>

        {/* Custom Illustration Asset */}
        <div className="w-full h-44 rounded-2xl border-2 border-[#315A4D] overflow-hidden mb-4 bg-[#FFF5E8]/60 relative flex items-center justify-center p-2 shadow-[2px_2px_0px_#315A4D]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Title & Description */}
        <h3 className="font-extrabold text-xl text-[#173F35] mb-2 group-hover:text-[#E97856] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[#52675D] font-medium leading-relaxed mb-4">
          {description}
        </p>
      </div>

      {/* Explore Action Button */}
      <div className="pt-2">
        <Link
          to={linkTo}
          className="w-full playful-btn bg-[#FFF5E8] hover:bg-[#E97856] text-[#173F35] hover:text-white border-2 border-[#315A4D] text-sm flex items-center justify-between group/btn transition-colors"
        >
          <span>Explore Providers</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
