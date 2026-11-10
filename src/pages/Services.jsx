import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  Star, 
  Clock, 
  Bookmark, 
  CheckCircle, 
  ShieldAlert, 
  Sparkles 
} from 'lucide-react';
import { mockProviders } from '../data/mockData';
import { illustrations } from '../assets';
import { useApp } from '../context/AppContext';

const categories = [
  'All Services',
  'Veterinary Care',
  'Animal Hospitals',
  'Pet Boarding',
  'Diagnostic Centres',
  'Pet Ambulance',
  'NGOs and Animal Rescue'
];

const categoryImageMap = {
  'Veterinary Care': illustrations.vetCare,
  'Animal Hospitals': illustrations.animalHospital,
  'Pet Boarding': illustrations.petBoarding,
  'Diagnostic Centres': illustrations.diagnosticCenter,
  'Pet Ambulance': illustrations.petAmbulance,
  'NGOs and Animal Rescue': illustrations.ngoRescue,
};

const Services = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All Services';
  const initialSearch = searchParams.get('search') || '';

  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedLocation, setSelectedLocation] = useState('All Bengaluru');
  const [onlyEmergency, setOnlyEmergency] = useState(false);
  const [minRating, setMinRating] = useState(0);

  const { savedProviderIds, toggleSaveProvider } = useApp();

  // Filter logic
  const filteredProviders = useMemo(() => {
    return mockProviders.filter((p) => {
      if (activeCategory !== 'All Services' && p.category !== activeCategory) {
        return false;
      }
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesClinic = p.clinicName.toLowerCase().includes(query);
        const matchesCat = p.category.toLowerCase().includes(query);
        const matchesSubcat = p.subcategory.toLowerCase().includes(query);
        const matchesServices = p.servicesOffered.some(s => s.toLowerCase().includes(query));
        if (!matchesName && !matchesClinic && !matchesCat && !matchesSubcat && !matchesServices) {
          return false;
        }
      }
      // Locality / Region filtering
      if (selectedLocation && selectedLocation !== 'All Bengaluru') {
        const locTarget = selectedLocation.toLowerCase().trim();
        const providerLocality = (p.locality || '').toLowerCase().trim();
        const providerLocation = (p.location || '').toLowerCase().trim();
        const providerAddress = (p.address || '').toLowerCase().trim();

        const matchesLocality = providerLocality === locTarget || providerLocality.includes(locTarget);
        const matchesLocation = providerLocation.includes(locTarget);
        const matchesAddress = providerAddress.includes(locTarget);

        if (!matchesLocality && !matchesLocation && !matchesAddress) {
          return false;
        }
      }
      if (onlyEmergency && !p.emergencyAvailable) {
        return false;
      }
      if (minRating > 0 && p.rating < minRating) {
        return false;
      }
      return true;
    });
  }, [activeCategory, searchTerm, selectedLocation, onlyEmergency, minRating]);

  const handleCategorySelect = (cat) => {
    setActiveCategory(cat);
    if (cat === 'All Services') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-8 bg-[#FFF5E8]">
      
      {/* Header Banner */}
      <div className="bg-[#D9E6D2] border-3 border-[#315A4D] rounded-3xl p-6 md:p-8 shadow-[5px_5px_0px_#315A4D]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="soft-tag bg-[#F2BE55] text-xs font-black text-[#173F35]">
              Animal Care Discovery
            </span>
            <h1 className="text-3xl md:text-4xl font-black text-[#173F35]">
              Discover Veterinary & Animal Services
            </h1>
            <p className="text-sm md:text-base text-[#52675D] font-medium max-w-2xl">
              Browse verified doctors, hospitals, boarding facilities, and specialized diagnostic centres.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white/95 border-2 border-[#315A4D] px-4 py-2.5 rounded-2xl shadow-[2px_2px_0px_#315A4D] shrink-0">
            <Sparkles className="w-5 h-5 text-[#E97856]" />
            <div>
              <p className="text-xs font-bold text-[#52675D]">Verified Listings</p>
              <p className="text-sm font-black text-[#173F35]">{mockProviders.length} Active Providers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategorySelect(cat)}
            className={`playful-btn text-xs md:text-sm whitespace-nowrap cursor-pointer ${
              activeCategory === cat
                ? 'bg-[#173F35] text-white border-2 border-[#315A4D]'
                : 'bg-white hover:bg-[#D9E6D2] text-[#173F35] border-2 border-[#315A4D]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search & Filter Toolbar */}
      <div className="bg-white border-2 border-[#315A4D] p-4 rounded-2xl shadow-[4px_4px_0px_#315A4D] flex flex-col md:flex-row items-stretch md:items-center gap-4">
        
        {/* Search Input */}
        <div className="flex-1 flex items-center gap-2 px-3 py-1.5 bg-[#FFF5E8]/60 border-2 border-[#315A4D]/30 rounded-xl focus-within:border-[#315A4D]">
          <Search className="w-5 h-5 text-[#52675D]/60 shrink-0" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search doctor, clinic name, vaccine, ultrasound..."
            className="w-full bg-transparent text-sm font-semibold text-[#173F35] placeholder:text-[#52675D]/60 focus:outline-none"
          />
        </div>

        {/* Location Dropdown */}
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#E97856] shrink-0" />
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="bg-[#D9E6D2] border-2 border-[#315A4D] rounded-xl px-3 py-2 text-xs md:text-sm font-bold text-[#173F35] focus:outline-none cursor-pointer shadow-[2px_2px_0px_#315A4D]"
          >
            <option value="All Bengaluru">All Bengaluru</option>
            <option value="Indiranagar">Indiranagar</option>
            <option value="Koramangala">Koramangala</option>
            <option value="HSR Layout">HSR Layout</option>
            <option value="Jayanagar">Jayanagar</option>
            <option value="Whitefield">Whitefield</option>
            <option value="Sarjapur Road">Sarjapur Road</option>
          </select>
        </div>

        {/* Min Rating Filter */}
        <select
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
          className="bg-white border-2 border-[#315A4D] rounded-xl px-3 py-2 text-xs md:text-sm font-bold text-[#173F35] focus:outline-none cursor-pointer shadow-[2px_2px_0px_#315A4D]"
        >
          <option value="0">All Ratings</option>
          <option value="4.5">★ 4.5 & above</option>
          <option value="4.8">★ 4.8 & above</option>
        </select>

        {/* Emergency Toggle Filter */}
        <label className="flex items-center gap-2 px-3 py-2 rounded-xl border-2 border-[#315A4D] bg-[#FFF5E8] cursor-pointer shadow-[2px_2px_0px_#315A4D] select-none">
          <input
            type="checkbox"
            checked={onlyEmergency}
            onChange={(e) => setOnlyEmergency(e.target.checked)}
            className="rounded accent-[#E97856] w-4 h-4 cursor-pointer"
          />
          <span className="text-xs md:text-sm font-extrabold text-[#E97856] whitespace-nowrap flex items-center gap-1">
            <ShieldAlert className="w-3.5 h-3.5" /> 24/7 Emergency
          </span>
        </label>

      </div>

      {/* Results Count & Active Category Indicator */}
      <div className="flex items-center justify-between text-xs md:text-sm font-bold text-[#52675D]">
        <p>
          Showing <span className="text-[#173F35] font-black">{filteredProviders.length}</span> verified providers
          {activeCategory !== 'All Services' && ` in ${activeCategory}`}
        </p>

        {(searchTerm || selectedLocation !== 'All Bengaluru' || onlyEmergency || minRating > 0) && (
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedLocation('All Bengaluru');
              setOnlyEmergency(false);
              setMinRating(0);
            }}
            className="text-[#E97856] hover:underline font-extrabold cursor-pointer"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Provider Cards Listing */}
      {filteredProviders.length === 0 ? (
        <div className="bg-white border-2 border-[#315A4D] rounded-3xl p-12 text-center shadow-[4px_4px_0px_#315A4D] space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#F2BE55] border-2 border-[#315A4D] flex items-center justify-center mx-auto text-2xl">
            🐾
          </div>
          <h3 className="text-xl font-black text-[#173F35]">
            {selectedLocation !== 'All Bengaluru'
              ? 'No providers found in this area. Try selecting another location.'
              : 'No matching providers found'}
          </h3>
          <p className="text-sm text-[#52675D] max-w-md mx-auto font-medium">
            {selectedLocation !== 'All Bengaluru'
              ? `We currently don't have listed providers in ${selectedLocation} matching all your active filters. Try broadening your region to "All Bengaluru" or adjusting your search.`
              : 'Try adjusting your search terms, changing the location, or unchecking the emergency filter.'}
          </p>
          <button
            onClick={() => {
              setActiveCategory('All Services');
              setSearchTerm('');
              setSelectedLocation('All Bengaluru');
              setOnlyEmergency(false);
              setMinRating(0);
            }}
            className="playful-btn bg-[#D9E6D2] text-[#173F35] border-2 border-[#315A4D] text-sm font-bold"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProviders.map((provider) => {
            const isSaved = savedProviderIds.includes(provider.id);
            const cardImg = categoryImageMap[provider.category] || illustrations.vetCare;

            return (
              <div 
                key={provider.id}
                className="playful-card p-5 md:p-6 flex flex-col justify-between group bg-white border-2 border-[#315A4D] shadow-[4px_4px_0px_#315A4D]"
              >
                <div>
                  
                  {/* Top Bar: Category badge, Emergency badge, Bookmark */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="soft-tag bg-[#D9E6D2] text-[11px] font-black text-[#173F35]">
                        {provider.category}
                      </span>
                      {provider.emergencyAvailable && (
                        <span className="soft-tag bg-[#FFF5E8] text-[11px] font-black text-[#E97856] border-[#E97856]">
                          <ShieldAlert className="w-3 h-3" /> 24/7 Emergency
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => toggleSaveProvider(provider.id)}
                      className={`w-9 h-9 rounded-full border-2 border-[#315A4D] flex items-center justify-center transition-all cursor-pointer shadow-[1px_1px_0px_#315A4D] ${
                        isSaved ? 'bg-[#F2BE55] text-[#173F35]' : 'bg-white text-[#52675D]/60 hover:text-[#173F35]'
                      }`}
                      title={isSaved ? 'Remove from Saved' : 'Save Provider'}
                    >
                      <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-[#173F35]' : ''}`} />
                    </button>
                  </div>

                  {/* Provider Info Row */}
                  <div className="flex gap-4 items-start mb-4">
                    <div className="w-20 h-20 rounded-2xl border-2 border-[#315A4D] overflow-hidden bg-[#FFF5E8] shrink-0 p-1 shadow-[2px_2px_0px_#315A4D]">
                      <img
                        src={cardImg}
                        alt={provider.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <h2 className="font-extrabold text-lg md:text-xl text-[#173F35] truncate">
                          {provider.name}
                        </h2>
                        {provider.verified && (
                          <CheckCircle className="w-4 h-4 text-[#173F35] shrink-0" title="Verified Provider" />
                        )}
                      </div>

                      <p className="text-xs font-bold text-[#E97856] mt-0.5">{provider.clinicName}</p>
                      <p className="text-xs text-[#52675D] font-medium">{provider.subcategory}</p>

                      <div className="flex items-center gap-3 mt-2 text-xs font-bold">
                        <span className="flex items-center gap-1 text-[#173F35] bg-[#F2BE55] px-2 py-0.5 rounded-md border border-[#315A4D]">
                          <Star className="w-3.5 h-3.5 text-[#173F35] fill-[#173F35]" />
                          {provider.rating} ({provider.reviewCount})
                        </span>
                        <span className="text-[#315A4D]/40">•</span>
                        <span className="text-[#52675D]">{provider.experience}</span>
                      </div>
                    </div>
                  </div>

                  {/* Address & Distance */}
                  <div className="bg-[#FFF5E8]/60 border border-[#315A4D]/30 rounded-xl p-3 mb-3 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-[#173F35]">
                      <MapPin className="w-3.5 h-3.5 text-[#E97856] shrink-0" />
                      <span>{provider.location}</span>
                      <span className="text-[#52675D] font-normal">({provider.distance})</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#52675D]">
                      <Clock className="w-3.5 h-3.5 text-[#52675D] shrink-0" />
                      <span className="truncate">{provider.operatingHours}</span>
                    </div>
                  </div>

                  {/* Highlights / Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {provider.badges.map((b, idx) => (
                      <span key={idx} className="text-[10px] font-bold bg-[#D9E6D2]/60 text-[#173F35] px-2 py-0.5 rounded-full border border-[#315A4D]/40">
                        {b}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Bottom Actions */}
                <div className="pt-3 border-t-2 border-[#315A4D]/20 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold text-[#52675D] block">Consultation Fee</span>
                    <span className="text-sm font-black text-[#173F35]">{provider.fee}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      to={`/provider/${provider.id}`}
                      className="playful-btn bg-[#E97856] hover:bg-[#D86341] text-white border-2 border-[#315A4D] text-xs font-black py-2 px-3.5 shadow-[2px_2px_0px_#315A4D]"
                    >
                      Book / Details →
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};

export default Services;
