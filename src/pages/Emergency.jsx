import React, { useState } from 'react';
import { 
  ShieldAlert, 
  PhoneCall, 
  MapPin, 
  AlertTriangle, 
  Clock 
} from 'lucide-react';
import { emergencyHotlines, mockProviders } from '../data/mockData';
import { Link } from 'react-router-dom';

const emergencyTriageGuide = [
  {
    situation: 'Toxic Ingestion (Chocolate, Grapes, Rat Poison)',
    action: 'DO NOT induce vomiting without consulting a vet. Keep the packaging/label to show the doctor. Rush to the nearest 24/7 ICU.',
    color: '#FFF5E8'
  },
  {
    situation: 'Hit-and-Run / Blunt Trauma / Broken Bones',
    action: 'Do not twist or bend the spine. Carefully slide a firm cardboard board or blanket underneath. Cover gently to prevent hypothermia.',
    color: '#D9E6D2'
  },
  {
    situation: 'Severe Heatstroke & Hyperthermia',
    action: 'Move to a shaded or air-conditioned area immediately. Apply cool (not freezing ice) water to paw pads and belly. Offer small sips of water.',
    color: '#FFF5E8'
  },
  {
    situation: 'Choking or Laboured Respiratory Distress',
    action: 'Check oral cavity for lodged foreign objects only if safe without getting bitten. Administer oxygen during transit if an ambulance is available.',
    color: '#D9E6D2'
  }
];

const Emergency = () => {
  const [copiedNumber, setCopiedNumber] = useState('');
  const emergencyHospitals = mockProviders.filter(p => p.emergencyAvailable);

  const handleCopy = (num) => {
    navigator.clipboard.writeText(num);
    setCopiedNumber(num);
    setTimeout(() => setCopiedNumber(''), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-12 bg-[#FFF5E8]">
      
      {/* Top Critical Alert Hero (Strong Coral Red) */}
      <div className="bg-[#E97856] text-white border-3 border-[#315A4D] rounded-3xl p-6 md:p-10 shadow-[6px_6px_0px_#315A4D] relative overflow-hidden">
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-white text-[#173F35] px-3.5 py-1.5 rounded-full text-xs font-black shadow-[2px_2px_0px_#315A4D]">
            <ShieldAlert className="w-4 h-4 text-[#E97856] animate-bounce" />
            <span>24/7 Veterinary Emergency Dispatch Desk</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white">
            Urgent Animal Care & Emergency Response
          </h1>

          <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
            Immediate contacts for round-the-clock veterinary hospitals, mobile oxygen ambulances, and verified street rescue hotlines in Bengaluru.
          </p>

          <div className="bg-white/15 backdrop-blur-md border border-white/40 rounded-2xl p-4 text-xs font-semibold text-white">
            ⚠️ <em>Notice: All emergency telephone numbers displayed on this demo portal are curated sample helplines to illustrate functional triage workflows. In a real-life pet emergency, please contact your local registered hospital or city control room directly.</em>
          </div>
        </div>

        {/* Ambient background paw print watermark */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-15 pointer-events-none select-none text-[180px]">
          🚨
        </div>
      </div>

      {/* Emergency Hotlines Cards */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="soft-tag bg-[#D9E6D2] text-xs font-black text-[#173F35]">
              Direct Voice Helplines
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#173F35] mt-1">
              Active Animal Distress Hotlines
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {emergencyHotlines.map((hotline, idx) => (
            <div 
              key={idx}
              className="playful-card p-5 md:p-6 flex flex-col justify-between bg-white border-2 border-[#315A4D]"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="soft-tag bg-[#FFF5E8] text-xs font-black text-[#E97856] border-[#E97856]">
                    {hotline.type}
                  </span>
                  <span className="text-[11px] font-bold text-[#173F35] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#173F35]" /> {hotline.availability}
                  </span>
                </div>

                <h3 className="font-extrabold text-xl text-[#173F35] mb-1">
                  {hotline.label}
                </h3>

                <div className="my-4 p-4 rounded-2xl bg-[#FFF5E8] border-2 border-[#315A4D] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#E97856] text-white flex items-center justify-center shrink-0 shadow-[1px_1px_0px_#315A4D]">
                      <PhoneCall className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#52675D] block uppercase">Helpline</span>
                      <span className="text-lg md:text-xl font-black text-[#173F35] tracking-wide">{hotline.number}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(hotline.number)}
                    className="text-xs font-bold text-[#173F35] hover:underline cursor-pointer bg-white border border-[#315A4D] px-2.5 py-1 rounded-lg"
                  >
                    {copiedNumber === hotline.number ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <a
                  href={`tel:${hotline.number}`}
                  className="flex-1 playful-btn bg-[#E97856] hover:bg-[#D86341] text-white border-2 border-[#315A4D] text-xs md:text-sm font-black py-2.5 flex items-center justify-center gap-2 shadow-[2px_2px_0px_#315A4D]"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Dispatch Now</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nearby 24/7 Trauma Hospitals & Ambulance Providers */}
      <div className="space-y-6">
        <div>
          <span className="soft-tag bg-[#D9E6D2] text-xs font-black text-[#173F35]">
            Equipped Trauma Facilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#173F35] mt-1">
            Nearby 24/7 Animal Hospitals & Mobile ICUs
          </h2>
          <p className="text-xs sm:text-sm text-[#52675D] font-medium">
            Facilities equipped with in-house oxygen concentrators, night surgeons, and emergency blood banks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {emergencyHospitals.map((hosp) => (
            <div key={hosp.id} className="playful-card p-5 flex flex-col justify-between bg-white border-2 border-[#315A4D] shadow-[4px_4px_0px_#315A4D]">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="soft-tag bg-[#D9E6D2] text-[10px] font-black text-[#173F35]">
                    Open 24/7
                  </span>
                  <span className="text-xs font-black text-[#E97856]">
                    {hosp.distance}
                  </span>
                </div>

                <h3 className="font-extrabold text-lg text-[#173F35] mb-1">
                  {hosp.name}
                </h3>
                <p className="text-xs font-bold text-[#E97856] mb-2">{hosp.subcategory}</p>

                <p className="text-xs text-[#52675D] mb-3 font-medium bg-[#FFF5E8] p-2.5 rounded-xl border border-[#315A4D]/25">
                  <MapPin className="w-3.5 h-3.5 inline text-[#E97856] mr-1" />
                  {hosp.address}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {hosp.amenities.slice(0, 3).map((a, idx) => (
                    <span key={idx} className="text-[10px] font-bold bg-[#D9E6D2]/60 text-[#173F35] px-2 py-0.5 rounded-md border border-[#315A4D]/30">
                      ✓ {a}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t-2 border-[#315A4D]/20 flex items-center gap-2">
                <Link
                  to={`/provider/${hosp.id}`}
                  className="flex-1 playful-btn bg-[#FFF5E8] hover:bg-[#D9E6D2] text-[#173F35] border-2 border-[#315A4D] text-xs font-black py-2"
                >
                  View Facility Profile
                </Link>
                <a
                  href={`tel:${hosp.phone}`}
                  className="playful-btn bg-[#E97856] hover:bg-[#D86341] text-white border-2 border-[#315A4D] text-xs py-2 px-3 shadow-[2px_2px_0px_#315A4D]"
                  title="Call Facility Directly"
                >
                  <PhoneCall className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Essential First Aid Instructions Grid */}
      <div className="bg-white border-3 border-[#315A4D] rounded-3xl p-6 md:p-8 shadow-[6px_6px_0px_#315A4D]">
        <div className="max-w-3xl mb-6">
          <span className="soft-tag bg-[#F2BE55] text-xs font-black text-[#173F35]">
            Life-Saving Protocol
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#173F35] mt-1">
            Essential Emergency First-Aid Guidelines
          </h2>
          <p className="text-xs sm:text-sm text-[#52675D] font-medium">
            Critical actions to stabilize your pet while the ambulance is en route or during travel to the clinic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {emergencyTriageGuide.map((guide, idx) => (
            <div 
              key={idx}
              className="border-2 border-[#315A4D] rounded-2xl p-4 shadow-[2px_2px_0px_#315A4D]"
              style={{ backgroundColor: guide.color }}
            >
              <h4 className="font-black text-sm md:text-base text-[#173F35] mb-1 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#E97856] shrink-0" />
                {guide.situation}
              </h4>
              <p className="text-xs md:text-sm text-[#203B34] font-medium leading-relaxed mt-2">
                {guide.action}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Emergency;
