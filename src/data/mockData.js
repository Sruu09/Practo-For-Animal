export const mockProviders = [
  {
    id: 'vet-1',
    name: 'Dr. Arjun Deshmukh, BVSc & AH',
    clinicName: 'TailWags Veterinary Centre',
    category: 'Veterinary Care',
    subcategory: 'General Physician & Canine Specialist',
    rating: 4.9,
    reviewCount: 142,
    experience: '12+ years experience',
    locality: 'Indiranagar',
    location: 'Indiranagar, Bengaluru',
    distance: '1.2 km away',
    address: '42, 100ft Road, Defence Colony, Indiranagar, Bengaluru - 560038',
    phone: '+91 80 4123 9988',
    email: 'hello@tailwagsvet.in',
    operatingHours: 'Mon - Sat: 9:00 AM - 8:00 PM | Sun: 10:00 AM - 2:00 PM',
    fee: '₹600 - ₹800',
    verified: true,
    emergencyAvailable: true,
    badges: ['Top Rated Vet', 'Fear-Free Certified', 'Dog & Cat Specialist'],
    bio: 'Passionate small animal practitioner specializing in preventative medicine, orthopaedic examinations, and feline geriatrics. Known for patient, stress-free clinical handling.',
    servicesOffered: [
      'Comprehensive Physical Examination',
      'Core & Non-Core Vaccinations',
      'Puppy & Kitten Pediatric Care',
      'Dental Descaling & Polishing',
      'Minor Soft Tissue Surgery',
      'Microchipping & Health Certificates'
    ],
    amenities: ['In-house Pharmacy', 'Digital X-Ray', 'Waiting Lounge with Pet Separation', 'Parking Available'],
    reviews: [
      {
        id: 'rev-1',
        author: 'Rohan Mehra',
        pet: 'Sheru (Labrador, 4 yrs)',
        rating: 5,
        date: '3 days ago',
        comment: 'Dr. Arjun is remarkably gentle. Sheru usually panics at the clinic, but here he was wagging his tail throughout the checkup!'
      },
      {
        id: 'rev-2',
        author: 'Priya Sundaram',
        pet: 'Ginger (Persian Cat)',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Accurate diagnosis for Ginger’s ear infection. Highly recommended clinic with reasonable fees.'
      }
    ]
  },
  {
    id: 'hosp-1',
    name: 'Apex 24/7 Multi-Speciality Animal Hospital',
    clinicName: 'Apex Animal Hospital & ICU',
    category: 'Animal Hospitals',
    subcategory: '24/7 Trauma, ICU & Surgical Care',
    rating: 4.8,
    reviewCount: 389,
    experience: 'Established 2014',
    locality: 'Koramangala',
    location: 'Koramangala, Bengaluru',
    distance: '3.4 km away',
    address: '78, 4th Block, 80ft Perimeter Road, Koramangala, Bengaluru - 560034',
    phone: '+91 80 6700 1122',
    email: 'emergency@apexvetcare.org',
    operatingHours: 'Open 24 Hours / 7 Days a Week (Including Holidays)',
    fee: '₹1,000 Consultation',
    verified: true,
    emergencyAvailable: true,
    badges: ['24/7 Trauma Center', 'Critical Care ICU', 'Advanced Diagnostics'],
    bio: 'State-of-the-art tertiary care hospital with modern surgical suites, dedicated oxygen cages, neonatal incubators, and round-the-clock emergency doctors.',
    servicesOffered: [
      '24/7 Trauma & Poisoning Resuscitation',
      'Laparoscopic & Orthopaedic Surgery',
      'Intensive Care Unit (ICU) Monitoring',
      'In-house Biochemistry & Hematology',
      'Blood Bank & Transfusion Services',
      'Inpatient Hospitalization'
    ],
    amenities: ['24/7 Emergency Ambulance', 'Oxygen Cages', 'Pet Ultrasound & Color Doppler', 'Isolation Ward'],
    reviews: [
      {
        id: 'rev-3',
        author: 'Siddharth Iyer',
        pet: 'Rocky (Beagle)',
        rating: 5,
        date: '1 week ago',
        comment: 'Saved our beagle when he accidentally ingested dark chocolate. The midnight emergency team was alert and extremely professional.'
      }
    ]
  },
  {
    id: 'board-1',
    name: 'Whiskers & Paws Eco-Retreat & Daycare',
    clinicName: 'Whiskers & Paws Boarding',
    category: 'Pet Boarding',
    subcategory: 'Boutique Boarding, Grooming & Agility Park',
    rating: 4.9,
    reviewCount: 210,
    experience: '8+ years',
    locality: 'Sarjapur Road',
    location: 'Sarjapur Road, Bengaluru',
    distance: '5.8 km away',
    address: 'Survey 14/2, Carmelaram Post, Sarjapur Road, Bengaluru - 560035',
    phone: '+91 99002 44551',
    email: 'stay@whiskersandpaws.in',
    operatingHours: 'Check-in: 8:00 AM - 7:00 PM (Caretakers 24/7 on premises)',
    fee: '₹950 / day',
    verified: true,
    emergencyAvailable: false,
    badges: ['Cage-Free Suites', '24/7 CCTV Feed', 'Swimming & Agility Park'],
    bio: 'Sprawling 2-acre green sanctuary designed for joyful stays. Featuring private climate-controlled suites, splash pool, organic meals, and live webcam access for owners.',
    servicesOffered: [
      'Cage-Free Luxury Dog Boarding',
      'Cat Penthouse Suites with Scratching Trees',
      'Daily Agility & Socialization Sessions',
      'Customized Diet & Medication Regimens',
      'Pet Hydrotherapy & Fun Swimming Pool',
      'Pick-up & Drop Pet Taxi'
    ],
    amenities: ['CCTV Mobile App Access', 'On-call Vet', 'Double-Gated Security', 'Grass Running Yards'],
    reviews: [
      {
        id: 'rev-4',
        author: 'Nandini Rao',
        pet: 'Simba (Golden Retriever)',
        rating: 5,
        date: 'Last month',
        comment: 'Simba returned so happy and fresh! Getting daily video updates and watching him play in the pool gave us total peace of mind during our vacation.'
      }
    ]
  },
  {
    id: 'diag-1',
    name: 'PetVitals Veterinary Imaging & Diagnostic Lab',
    clinicName: 'PetVitals Diagnostic Lab',
    category: 'Diagnostic Centres',
    subcategory: 'Pathology, Digital Radiography & Ultrasound',
    rating: 4.7,
    reviewCount: 96,
    experience: '6+ years',
    locality: 'HSR Layout',
    location: 'HSR Layout, Bengaluru',
    distance: '2.8 km away',
    address: '15th Cross, Sector 4, HSR Layout, Bengaluru - 560102',
    phone: '+91 80 4899 3344',
    email: 'reports@petvitalslab.com',
    operatingHours: 'Mon - Sat: 8:00 AM - 7:00 PM | Sun: 8:00 AM - 1:00 PM',
    fee: 'Test dependent (from ₹450)',
    verified: true,
    emergencyAvailable: false,
    badges: ['Same-Day Reports', 'AI Assisted Radiography', 'Home Sample Collection'],
    bio: 'Dedicated animal pathology and diagnostic imaging centre providing high-precision hematology, microbiology, allergy panels, and digital X-rays with expedited delivery.',
    servicesOffered: [
      'Complete Blood Count (CBC) & Serum Biochemistry',
      'Digital Radiography (High-res X-Ray)',
      'Abdominal Ultrasound & Echocardiogram',
      'Skin Scrape & Cytology Testing',
      'Feline Viral Screening (FeLV/FIV/FIP)',
      'Doorstep Blood & Urine Sample Collection'
    ],
    amenities: ['Online PDF Reports', 'Zero Stress Sampling Room', 'Automated Analyzers', 'Sample Transport Vans'],
    reviews: [
      {
        id: 'rev-5',
        author: 'Vikram Joshi',
        pet: 'Leo (Shih Tzu)',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Got pre-surgical blood work results within 3 hours. Friendly phlebotomists who know how to soothe anxious dogs.'
      }
    ]
  },
  {
    id: 'amb-1',
    name: 'RapidRescue 24/7 Animal Ambulance Service',
    clinicName: 'RapidRescue Mobile Veterinary Fleet',
    category: 'Pet Ambulance',
    subcategory: 'Oxygen-Equipped Critical Transit',
    rating: 4.9,
    reviewCount: 168,
    experience: '24/7 On-Duty Fleet',
    locality: 'Central Dispatch',
    location: 'Central Dispatch, Bengaluru',
    distance: 'Average response: 18-25 mins',
    address: 'Central Dispatch Station, Domlur, Bengaluru - 560071',
    phone: '+91 80 2200 9911',
    email: 'sos@rapidrescueanimals.org',
    operatingHours: '24 Hours Emergency Dispatch',
    fee: 'Base fare ₹800 + distance (Emergency assistance)',
    verified: true,
    emergencyAvailable: true,
    badges: ['Mobile ICU', 'Paramedic on Board', 'Real-time GPS Tracking'],
    bio: 'Specially fitted emergency ambulances with on-board oxygen delivery, stretchers, nebulizers, IV drip fixtures, and experienced veterinary nurses.',
    servicesOffered: [
      '24/7 Critical Emergency Transport',
      'On-site First Aid & Trauma Stabilization',
      'Transfer Between Clinics and Tertiary Hospitals',
      'Stretcher Assistance for Immobile / Giant Breeds',
      'Oxygen Therapy During Transit'
    ],
    amenities: ['Oxygen Concentrators', 'Spinal Boards', 'Fluid Infusion Warmers', 'GPS Fleet Tracking'],
    reviews: [
      {
        id: 'rev-6',
        author: 'Deepak Chawla',
        pet: 'Bruno (Rottweiler)',
        rating: 5,
        date: '3 weeks ago',
        comment: 'When Bruno suffered heat exhaustion, their ambulance arrived within 15 minutes with chilled IV fluids and oxygen. A literal lifesaver.'
      }
    ]
  },
  {
    id: 'ngo-1',
    name: 'Paws & Hope Animal Welfare Foundation',
    clinicName: 'Paws & Hope Sanctuary & Rescue',
    category: 'NGOs and Animal Rescue',
    subcategory: 'Rescue, ABC (Sterilization), Shelter & Adoption',
    rating: 5.0,
    reviewCount: 420,
    experience: 'Non-Profit Charity (Reg. 80G)',
    locality: 'Bannerghatta Road',
    location: 'Bannerghatta Road, Bengaluru',
    distance: '9.5 km away',
    address: 'Post Box 12, Koppa Gate, Bannerghatta Road, Bengaluru - 560083',
    phone: '+91 80 2845 7766',
    email: 'adoptions@pawsandhope.org',
    operatingHours: 'Shelter Visits: Wed - Sun: 11:00 AM - 4:30 PM | Helpline: 24/7',
    fee: 'Non-profit / Adoption fee voluntary donation',
    verified: true,
    emergencyAvailable: true,
    badges: ['Registered 80G Non-Profit', 'Zero Kill Shelter', 'Cruelty Response Unit'],
    bio: 'Dedicated to rescuing injured stray animals, rehabilitation, anti-rabies vaccination drives, and finding loving forever homes for abandoned pets.',
    servicesOffered: [
      'Stray & Abandoned Animal Rescues',
      'Community Dog Sterilization (ABC) Drives',
      'Foster & Ethical Pet Adoption Programs',
      'Anti-Rabies Mass Vaccination Camps',
      'Free Emergency Care for Street Animals',
      'Humane Education & Volunteer Programs'
    ],
    amenities: ['Rehabilitation Paddocks', 'Puppy Play Sanctuary', 'Senior Animal Wing', 'Volunteers Hub'],
    reviews: [
      {
        id: 'rev-7',
        author: 'Ananya & Kabir',
        pet: 'adopted Coco (Indie Pup)',
        rating: 5,
        date: '1 month ago',
        comment: 'We adopted our darling Coco through Paws & Hope. The foster team walked us through every single step with such care.'
      }
    ]
  },
  {
    id: 'vet-2',
    name: 'Dr. Meera Nambiar, MVSc',
    clinicName: 'Whiskers & Fur Companion Care',
    category: 'Veterinary Care',
    subcategory: 'Feline Specialist & Internal Medicine',
    rating: 4.9,
    reviewCount: 118,
    experience: '9+ years experience',
    locality: 'Jayanagar',
    location: 'Jayanagar, Bengaluru',
    distance: '4.1 km away',
    address: '12th Main, 4th Block, Jayanagar, Bengaluru - 560011',
    phone: '+91 80 2665 4433',
    email: 'meera.vet@whiskersandfur.in',
    operatingHours: 'Tue - Sun: 10:00 AM - 7:00 PM (Mondays Closed)',
    fee: '₹700',
    verified: true,
    emergencyAvailable: false,
    badges: ['Cat Friendly Gold Standard', 'Nutritional Counsellor'],
    bio: 'Devoted advocate for feline health, elderly pet comfort, and preventive wellness. Certified in low-stress cat handling and clinical nutrition.',
    servicesOffered: [
      'Comprehensive Cat & Dog Health Checkups',
      'Senior Pet Geriatric Care & Arthritis Relief',
      'Weight Management & Diet Formulation',
      'Routine Vaccinations & Deworming',
      'Chronic Kidney Disease Management'
    ],
    amenities: ['Cat-Only Consultation Room', 'Pheromone Diffusers', 'Appointment Reminders'],
    reviews: [
      {
        id: 'rev-8',
        author: 'Sunita Menon',
        pet: 'Mochi (Persian, 8 yrs)',
        rating: 5,
        date: '2 months ago',
        comment: 'Dr. Meera helped manage Mochi’s kidney health with tailored diet and gentle fluids. Her patience is unmatched.'
      }
    ]
  },
  {
    id: 'hosp-2',
    name: 'CarePet Veterinary Hospital & Surgery Center',
    clinicName: 'CarePet Multispeciality Centre',
    category: 'Animal Hospitals',
    subcategory: 'Orthopaedic & Soft Tissue Surgeries',
    rating: 4.7,
    reviewCount: 175,
    experience: '15+ years',
    locality: 'Whitefield',
    location: 'Whitefield, Bengaluru',
    distance: '11.0 km away',
    address: 'ITPL Main Road, Near Hope Farm, Whitefield, Bengaluru - 560066',
    phone: '+91 80 4911 2233',
    email: 'contact@carepethospital.in',
    operatingHours: 'Mon - Sun: 8:00 AM - 10:00 PM (Emergency triage 24/7)',
    fee: '₹850 Consultation',
    verified: true,
    emergencyAvailable: true,
    badges: ['Surgical Excellence', 'Clean Recovery Suites', 'In-house Lab'],
    bio: 'Premier veterinary surgical centre equipped with inhalation anaesthesia machines, cardiac monitors, and modern recovery wards.',
    servicesOffered: [
      'Orthopaedic Fractures & Cruciate Repair',
      'Emergency C-Section & Obstetric Care',
      'General Soft Tissue & Tumor Surgeries',
      'Pre-anesthetic Blood Work',
      'Post-Operative Physiotherapy'
    ],
    amenities: ['HEPA Filtered Surgical Suite', 'Inpatient Kennels', 'Wheelchair Accessible'],
    reviews: [
      {
        id: 'rev-9',
        author: 'Farhan Zaidi',
        pet: 'Ghost (Husky)',
        rating: 5,
        date: '1 month ago',
        comment: 'Flawless hip surgery for our husky. The team gave us clear rehab milestones and checked in on his recovery weekly.'
      }
    ]
  }
];

export const mockAdoptions = [
  {
    id: 'adopt-1',
    name: 'Kaju & Badam',
    type: 'Bonded Indie Pups',
    age: '3 months',
    gender: 'Brother & Sister',
    vaccinated: 'First shots done',
    location: 'Bannerghatta Shelter, Bengaluru',
    story: 'Rescued from a construction site during heavy monsoon rains. Inseparable, playful, and loving towards everyone they meet.',
    ngo: 'Paws & Hope Animal Welfare',
    status: 'Ready for Adoption',
    traits: ['Playful', 'Cuddle Bugs', 'Good with Kids', 'Bonded Pair']
  },
  {
    id: 'adopt-2',
    name: 'Bella',
    type: 'Golden Retriever Mix',
    age: '2 years',
    gender: 'Female (Spayed)',
    vaccinated: 'Fully Vaccinated',
    location: 'Indiranagar Foster Home, Bengaluru',
    story: 'Abandoned by a commercial breeder due to minor paw fracture that is now completely healed. She loves squeaky toys and quiet car rides.',
    ngo: 'Second Chance Sanctuary',
    status: 'Urgent Foster / Forever Home',
    traits: ['Gentle', 'Leash Trained', 'Quiet', 'Loving']
  },
  {
    id: 'adopt-3',
    name: 'Whiskers Oliver',
    type: 'Ginger Indie Cat',
    age: '8 months',
    gender: 'Male (Neutered)',
    vaccinated: 'Vaccinated & Dewormed',
    location: 'Koramangala Foster Care',
    story: 'Found as a solitary orphan kitten inside a drain pipe. Now a purring champion who loves warm laps and sunny window sills.',
    ngo: 'Feline Friends Guild',
    status: 'Ready for Adoption',
    traits: ['Litter Trained', 'Purr Machine', 'Curious', 'Indoor Only']
  },
  {
    id: 'adopt-4',
    name: 'Sheru',
    type: 'Desi Street Champion',
    age: '1 year',
    gender: 'Male (Neutered)',
    vaccinated: 'Fully Vaccinated & Microchipped',
    location: 'Whitefield Care Hub',
    story: 'Survived a hit-and-run, nurtured through 6 weeks of physiotherapy. Healthy, resilient, and full of unbounded joy.',
    ngo: 'Street Paw Protection NGO',
    status: 'Ready for Adoption',
    traits: ['Athletic', 'Eager to Learn', 'Terrific Watchdog', 'High Immunity']
  }
];

export const mockNgos = [
  {
    id: 'ngo-org-1',
    name: 'Paws & Hope Animal Welfare Foundation',
    cause: 'Stray Medical Aid, Mass Sterilization & Shelter',
    founded: '2016',
    rescuedCount: '4,500+ Animals Healed',
    adoptionsCount: '1,200+ Homes Found',
    rating: 5.0,
    location: 'Bannerghatta Road, Bengaluru',
    address: 'Survey 48/1, Near Forest Boundary, Bannerghatta Post, Bengaluru - 560083',
    phone: '+91 80 2845 7766',
    email: 'contact@pawsandhope.org',
    upiId: 'pawsandhope@upi',
    taxExemption: '80G Tax Exemption Available',
    needsVolunteers: true,
    volunteerRoles: ['Weekend Dog Walkers', 'Foster Parents', 'Adoption Camp Handlers', 'Rescue Drivers'],
    urgentNeeds: ['Puppy Starter Formula', 'Adult Dog Kibble (40 bags)', 'Gauze & Betadine Supplies', 'Clean Old Towels'],
    story: 'Started by two veterinary nurses with a single rescue ambulance, Paws & Hope now houses over 120 recovering community animals and conducts weekly vaccination camps in rural Karnataka.'
  },
  {
    id: 'ngo-org-2',
    name: 'Second Chance Animal Rescue',
    cause: 'Rehabilitation of Abandoned Pedigree & Senior Dogs',
    founded: '2019',
    rescuedCount: '1,800+ Rescued Pets',
    adoptionsCount: '950+ Adoptions',
    rating: 4.9,
    location: 'Hennur Road, Bengaluru',
    address: 'Site 22, Green Valley Enclave, Hennur Bagalur Main Rd, Bengaluru - 560077',
    phone: '+91 98450 11223',
    email: 'help@secondchanceblr.org',
    upiId: 'secondchancerescue@upi',
    taxExemption: '80G Certified',
    needsVolunteers: true,
    volunteerRoles: ['Social Media Storytellers', 'Pet Bathing Assistants', 'Home Verification Volunteers'],
    urgentNeeds: ['Senior Joint Supplements', 'Hypoallergenic Food', 'Bedding & Cushions', 'Tick & Flea Pipettes'],
    story: 'Specializing in healing neglected animals abandoned due to old age or sickness, offering them dignity, medical therapy, and peaceful forever families.'
  },
  {
    id: 'ngo-org-3',
    name: 'Indie Pride Wildlife & Community Dog Trust',
    cause: 'Community Co-existence, Dog Feeding & Emergency Medical Care',
    founded: '2015',
    rescuedCount: '6,200+ Treatments Conducted',
    adoptionsCount: '800+ Adoptions',
    rating: 4.8,
    location: 'Malleswaram, Bengaluru',
    address: '8th Cross, Temple Street, Malleswaram, Bengaluru - 560003',
    phone: '+91 80 2334 8877',
    email: 'indiepride.trust@gmail.com',
    upiId: 'indiepride@sbi',
    taxExemption: 'Registered Trust',
    needsVolunteers: true,
    volunteerRoles: ['Neighbourhood Community Feeders', 'First Aid First Responders', 'Awareness Workshop Leads'],
    urgentNeeds: ['Anti-rabies Vaccines (100 doses)', 'Rice & Boiled Egg Kitchen Stock', 'Thermal Blankets'],
    story: 'Empowering local community caretakers to feed, vaccinate, and monitor street animals in their own pin codes through structured first-aid toolkits.'
  }
];

export const emergencyHotlines = [
  {
    label: '24/7 Central Animal Helpline (Demo Hotline)',
    number: '1800-425-PAWS (7297)',
    availability: '24/7 Toll-Free Animal Distress',
    type: 'National Animal Emergency Network'
  },
  {
    label: 'Apex Trauma & ICU Hospital Dispatch',
    number: '+91 80 6700 1122',
    availability: '24 Hours Emergency Intake & ICU',
    type: 'Critical Surgical & Poisoning Care'
  },
  {
    label: 'RapidRescue Mobile Ambulance Team',
    number: '+91 80 2200 9911',
    availability: '15-25 min avg urban response',
    type: 'Oxygen & Paramedic On-Board Transport'
  },
  {
    label: 'Wildlife & Stray Animal Rescue Helpline',
    number: '+91 98450 99881',
    availability: 'Day & Night Street Rescue',
    type: 'Injured & Stranded Animals'
  }
];
