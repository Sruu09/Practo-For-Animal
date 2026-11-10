import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Star, 
  ShieldCheck, 
  Bookmark, 
  CheckCircle2, 
  Share2, 
  Calendar, 
  Sparkles,
  ArrowLeft,
  ShieldAlert,
  Award,
  Check
} from 'lucide-react';
import { mockProviders } from '../data/mockData';
import { illustrations } from '../assets';
import { useApp } from '../context/AppContext';

const categoryImageMap = {
  'Veterinary Care': illustrations.vetCare,
  'Animal Hospitals': illustrations.animalHospital,
  'Pet Boarding': illustrations.petBoarding,
  'Diagnostic Centres': illustrations.diagnosticCenter,
  'Pet Ambulance': illustrations.petAmbulance,
  'NGOs and Animal Rescue': illustrations.ngoRescue,
};

const ProviderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pets, addBooking, savedProviderIds, toggleSaveProvider } = useApp();

  const provider = mockProviders.find((p) => p.id === id) || mockProviders[0];
  const isSaved = savedProviderIds.includes(provider.id);

  // Booking Modal State
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedPet, setSelectedPet] = useState(pets[0]?.name || 'Milo');
  const [selectedDate, setSelectedDate] = useState('2026-11-20');
  const [selectedSlot, setSelectedSlot] = useState('11:00 AM');
  const [bookingService, setBookingService] = useState(provider.servicesOffered[0]);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingRefId, setBookingRefId] = useState('');

  const timeSlots = ['09:30 AM', '11:00 AM', '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM'];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const newRef = `BK-${Math.floor(1000 + Math.random() * 9000)}`;
    addBooking({
      id: newRef,
      providerId: provider.id,
      providerName: `${provider.name} (${provider.clinicName})`,
      serviceType: bookingService,
      petName: selectedPet,
      date: selectedDate,
      timeSlot: selectedSlot,
      fee: provider.fee,
      paymentMethod: 'Pay at Clinic'
    });
    setBookingRefId(newRef);
    setBookingSuccess(true);
  };

  const cardImg = categoryImageMap[provider.category] || illustrations.vetCare;

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-8 bg-[#FFF5E8]">
      
      {/* Back button */}
      <div className="flex items-center justify-between">
        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#173F35] hover:text-[#E97856] bg-white border-2 border-[#315A4D] px-3.5 py-1.5 rounded-full shadow-[2px_2px_0px_#315A4D]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Providers</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleSaveProvider(provider.id)}
            className={`playful-btn text-xs py-1.5 px-3 flex items-center gap-1.5 border-2 border-[#315A4D] ${
              isSaved ? 'bg-[#F2BE55] text-[#173F35]' : 'bg-white text-[#173F35]'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-[#173F35]' : ''}`} />
            <span>{isSaved ? 'Saved to Profile' : 'Save'}</span>
          </button>

          <button
            onClick={() => alert(`Profile link for ${provider.name} copied to clipboard!`)}
            className="playful-btn bg-white hover:bg-[#D9E6D2] text-[#173F35] border-2 border-[#315A4D] text-xs py-1.5 px-3 flex items-center gap-1.5"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Main Profile Header Card */}
      <div className="bg-white border-3 border-[#315A4D] rounded-3xl p-6 md:p-8 shadow-[6px_6px_0px_#315A4D]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Avatar / Visual Image */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="rounded-2xl border-3 border-[#315A4D] overflow-hidden bg-[#D9E6D2] p-3 shadow-[4px_4px_0px_#315A4D]">
              <img
                src={cardImg}
                alt={provider.name}
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
            {provider.emergencyAvailable && (
              <div className="mt-3 bg-[#E97856] text-white border-2 border-[#315A4D] font-black text-xs py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_#315A4D]">
                <ShieldAlert className="w-4 h-4" /> 24/7 Emergency Care Ready
              </div>
            )}
          </div>

          {/* Details */}
          <div className="md:col-span-8 lg:col-span-9 space-y-4">
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="soft-tag bg-[#D9E6D2] text-xs font-black text-[#173F35]">
                {provider.category}
              </span>
              <span className="soft-tag bg-[#FFF5E8] text-xs font-black text-[#173F35]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#173F35]" /> Verified Practitioner
              </span>
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#173F35]">
                {provider.name}
              </h1>
              <p className="text-base font-extrabold text-[#E97856] mt-1">{provider.clinicName}</p>
              <p className="text-sm font-semibold text-[#52675D]">{provider.subcategory}</p>
            </div>

            {/* Rating & Exp Pill */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-bold">
              <span className="bg-[#F2BE55] text-[#173F35] px-3 py-1 rounded-full border border-[#315A4D] flex items-center gap-1 shadow-[1px_1px_0px_#315A4D]">
                <Star className="w-4 h-4 text-[#173F35] fill-[#173F35]" />
                {provider.rating} Rating ({provider.reviewCount} Reviews)
              </span>
              <span className="bg-[#D9E6D2] text-[#173F35] px-3 py-1 rounded-full border border-[#315A4D] flex items-center gap-1">
                <Award className="w-4 h-4 text-[#173F35]" />
                {provider.experience}
              </span>
              <span className="bg-[#FFF5E8] text-[#173F35] px-3 py-1 rounded-full border border-[#315A4D]">
                Consultation: <strong className="text-[#173F35]">{provider.fee}</strong>
              </span>
            </div>

            <p className="text-sm text-[#203B34] font-medium leading-relaxed bg-[#FFF5E8] border border-[#315A4D]/25 p-4 rounded-2xl">
              {provider.bio}
            </p>

            {/* Location & Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold">
              <div className="flex items-start gap-2 bg-[#FFF5E8]/60 border border-[#315A4D]/30 p-3 rounded-xl">
                <MapPin className="w-4 h-4 text-[#E97856] shrink-0 mt-0.5" />
                <div>
                  <span className="font-extrabold text-[#173F35] block">Address</span>
                  <span className="text-[#52675D]">{provider.address}</span>
                  <span className="text-[#173F35] font-bold block mt-0.5">({provider.distance})</span>
                </div>
              </div>

              <div className="flex items-start gap-2 bg-[#FFF5E8]/60 border border-[#315A4D]/30 p-3 rounded-xl">
                <Clock className="w-4 h-4 text-[#173F35] shrink-0 mt-0.5" />
                <div>
                  <span className="font-extrabold text-[#173F35] block">Operating Hours</span>
                  <span className="text-[#52675D]">{provider.operatingHours}</span>
                </div>
              </div>
            </div>

            {/* CTA action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  setBookingSuccess(false);
                  setShowBookingModal(true);
                }}
                className="playful-btn bg-[#E97856] hover:bg-[#D86341] text-white border-2 border-[#315A4D] font-extrabold text-sm sm:text-base px-6 py-2.5 flex items-center gap-2 shadow-[3px_3px_0px_#315A4D]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <a
                href={`tel:${provider.phone}`}
                className="playful-btn bg-white hover:bg-[#D9E6D2] text-[#173F35] border-2 border-[#315A4D] font-extrabold text-sm sm:text-base px-5 py-2.5 flex items-center gap-2 shadow-[3px_3px_0px_#315A4D]"
              >
                <Phone className="w-4 h-4 text-[#173F35]" />
                <span>Call {provider.phone}</span>
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Services, Amenities & Reviews Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Services & Amenities */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Services Offered */}
          <div className="bg-white border-2 border-[#315A4D] rounded-2xl p-6 shadow-[4px_4px_0px_#315A4D]">
            <h3 className="text-xl font-black text-[#173F35] mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#E97856]" />
              Available Services & Clinical Procedures
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {provider.servicesOffered.map((svc, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[#D9E6D2]/60 border border-[#315A4D]/30 text-xs font-bold text-[#173F35]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#173F35] shrink-0" />
                  <span>{svc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities & Facility */}
          <div className="bg-white border-2 border-[#315A4D] rounded-2xl p-6 shadow-[4px_4px_0px_#315A4D]">
            <h3 className="text-xl font-black text-[#173F35] mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#173F35]" />
              Facility Amenities & Diagnostics
            </h3>

            <div className="flex flex-wrap gap-2">
              {provider.amenities.map((amenity, idx) => (
                <span 
                  key={idx}
                  className="soft-tag bg-[#FFF5E8] text-xs font-bold text-[#173F35]"
                >
                  ✓ {amenity}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Right: Verified Patient Reviews */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white border-2 border-[#315A4D] rounded-2xl p-6 shadow-[4px_4px_0px_#315A4D]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-black text-[#173F35]">
                Patient & Pet Parent Reviews
              </h3>
              <span className="text-xs font-bold text-[#52675D]">
                {provider.reviews.length} Featured
              </span>
            </div>

            <div className="space-y-4">
              {provider.reviews.map((rev) => (
                <div key={rev.id} className="p-3.5 rounded-xl bg-[#FFF5E8]/60 border border-[#315A4D]/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-black text-[#173F35]">{rev.author}</p>
                      <p className="text-[11px] font-bold text-[#E97856]">Pet: {rev.pet}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-black text-[#173F35] bg-[#F2BE55] px-2 py-0.5 rounded-md border border-[#315A4D]">
                      ★ {rev.rating}.0
                    </div>
                  </div>
                  <p className="text-xs text-[#203B34] font-medium italic">
                    "{rev.comment}"
                  </p>
                  <p className="text-[10px] text-[#52675D] font-bold">{rev.date}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-[#315A4D]/20 text-center">
              <button 
                onClick={() => alert('Review submission open to verified booked patients.')}
                className="text-xs font-black text-[#E97856] hover:underline cursor-pointer"
              >
                Write a Pet Parent Review →
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* BOOKING MODAL COMPONENT                                   */}
      {/* ======================================================== */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 bg-[#173F35]/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border-3 border-[#315A4D] rounded-3xl max-w-lg w-full p-6 shadow-[8px_8px_0px_#315A4D] relative animate-in fade-in zoom-in-95 duration-200">
            
            {bookingSuccess ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#D9E6D2] border-2 border-[#315A4D] flex items-center justify-center mx-auto shadow-[2px_2px_0px_#315A4D]">
                  <Check className="w-8 h-8 text-[#173F35]" />
                </div>
                <h3 className="text-2xl font-black text-[#173F35]">Appointment Confirmed!</h3>
                <p className="text-sm text-[#52675D] font-medium">
                  Your appointment for <strong className="text-[#173F35]">{selectedPet}</strong> with <strong className="text-[#173F35]">{provider.name}</strong> has been scheduled.
                </p>
                <div className="bg-[#FFF5E8] border border-[#315A4D] p-3 rounded-xl text-xs font-bold text-[#173F35]">
                  Booking Reference: <span className="font-black text-[#E97856]">{bookingRefId}</span> • {selectedDate} at {selectedSlot}
                </div>
                <div className="flex items-center justify-center gap-3 pt-3">
                  <button
                    onClick={() => {
                      setShowBookingModal(false);
                      navigate('/profile');
                    }}
                    className="playful-btn bg-[#E97856] hover:bg-[#D86341] text-white border-2 border-[#315A4D] text-sm font-bold shadow-[2px_2px_0px_#315A4D]"
                  >
                    View in My Profile
                  </button>
                  <button
                    onClick={() => setShowBookingModal(false)}
                    className="playful-btn bg-white text-[#173F35] border-2 border-[#315A4D] text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b-2 border-[#315A4D]/20">
                  <h3 className="text-xl font-black text-[#173F35]">
                    Book Consultation
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowBookingModal(false)}
                    className="w-8 h-8 rounded-full border border-[#315A4D] bg-[#FFF5E8] text-xs font-black text-[#173F35] hover:bg-[#E97856] hover:text-white cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <div>
                  <p className="text-xs font-bold text-[#E97856]">{provider.name} • {provider.clinicName}</p>
                  <p className="text-xs text-[#52675D]">Standard Fee: {provider.fee}</p>
                </div>

                {/* Pet Selection */}
                <div>
                  <label className="text-xs font-extrabold text-[#173F35] block mb-1">
                    Select Which Pet Needs Care:
                  </label>
                  <select
                    value={selectedPet}
                    onChange={(e) => setSelectedPet(e.target.value)}
                    className="w-full bg-[#D9E6D2] border-2 border-[#315A4D] rounded-xl px-3 py-2 text-sm font-bold text-[#173F35] focus:outline-none cursor-pointer"
                  >
                    {pets.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.type} - {p.breed})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="text-xs font-extrabold text-[#173F35] block mb-1">
                    Reason / Service Required:
                  </label>
                  <select
                    value={bookingService}
                    onChange={(e) => setBookingService(e.target.value)}
                    className="w-full bg-white border-2 border-[#315A4D] rounded-xl px-3 py-2 text-xs font-semibold text-[#173F35] focus:outline-none cursor-pointer"
                  >
                    {provider.servicesOffered.map((s, idx) => (
                      <option key={idx} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Date & Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-extrabold text-[#173F35] block mb-1">
                      Preferred Date:
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-[#FFF5E8] border-2 border-[#315A4D] rounded-xl px-3 py-2 text-xs font-bold text-[#173F35] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-extrabold text-[#173F35] block mb-1">
                      Available Slot:
                    </label>
                    <select
                      value={selectedSlot}
                      onChange={(e) => setSelectedSlot(e.target.value)}
                      className="w-full bg-[#FFF5E8] border-2 border-[#315A4D] rounded-xl px-3 py-2 text-xs font-bold text-[#173F35] focus:outline-none cursor-pointer"
                    >
                      {timeSlots.map((ts) => (
                        <option key={ts} value={ts}>{ts}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="bg-[#FFF5E8] border border-[#315A4D]/30 p-2.5 rounded-xl text-[11px] text-[#203B34] font-medium">
                  💳 No upfront deposit required for demo booking. Pay at clinic counter.
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowBookingModal(false)}
                    className="playful-btn bg-white text-[#173F35] border-2 border-[#315A4D] text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="playful-btn bg-[#E97856] hover:bg-[#D86341] text-white border-2 border-[#315A4D] font-black text-xs px-5 shadow-[2px_2px_0px_#315A4D]"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

export default ProviderDetail;
