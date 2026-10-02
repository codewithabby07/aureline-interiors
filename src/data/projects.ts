export interface ProjectDetail {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  area: string;
  year: string;
  heroImage: string;
  gallery: {
    url: string;
    caption: string;
    aspect?: 'landscape' | 'portrait' | 'wide';
  }[];
  overview: string;
  designDirection: string;
  designApproach: string;
  materials: {
    name: string;
    description: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
}

export const PROJECTS: ProjectDetail[] = [
  {
    id: 'the-aria-residence',
    number: '01',
    title: 'The Aria Residence',
    subtitle: 'Contemporary residential interior with a seamless dialogue between architecture, light, and private garden.',
    category: 'Residential Architecture & Interior',
    location: 'Metropolitan Suburb',
    area: '4,400 sq.ft',
    year: '2025',
    heroImage: '/images/the-aria-residence.jpg',
    gallery: [
      {
        url: '/images/hero.jpg',
        caption: 'Double-height living pavilion with floor-to-ceiling slender bronze glazing and honed travertine flooring.',
        aspect: 'wide'
      },
      {
        url: '/images/the-aria-residence.jpg',
        caption: 'Curated conversation lounge featuring low-slung custom bouclé sectional and fluted limestone coffee table.',
        aspect: 'landscape'
      },
      {
        url: '/images/material-palette.jpg',
        caption: 'Tactile material palette: Honed beige travertine, patinated brass, European rift-cut oak, and raw wool bouclé.',
        aspect: 'portrait'
      }
    ],
    overview: 'Designed as an expansive yet intimate family sanctuary, The Aria Residence balances double-height volume with tactile warmth. The brief was to create an uncluttered, light-filled home that provides calm from urban density while maintaining seamless continuity with the landscaped courtyard.',
    designDirection: 'Warm Minimalist Sanctuary',
    designApproach: 'We prioritized honest materials with rich tactile qualities—pale travertine floors that absorb the morning daylight, brushed bronze window framing that ages gracefully, and bespoke millwork finished in smoked European oak. Every piece of furniture is low-profile to maintain sightlines across the garden.',
    materials: [
      { name: 'Honed Navona Travertine', description: 'Continuous large-format stone paving connecting interior to exterior terrace.' },
      { name: 'Smoked European White Oak', description: 'Custom architectural slatted partitions and integrated storage millwork.' },
      { name: 'Raw Textured Linen & Bouclé', description: 'Soft neutral upholstery balancing the monolithic architectural planes.' },
      { name: 'Brushed Patinated Bronze', description: 'Subtle hardware, recessed trim details, and bespoke lighting fixtures.' }
    ],
    specifications: [
      { label: 'Project Type', value: 'Complete Residential Interior & Architecture' },
      { label: 'Scope', value: 'Space Planning, Custom Millwork, Lighting Design, Furniture Curation' },
      { label: 'Floor Area', value: '4,400 sq.ft / 410 m²' },
      { label: 'Status', value: 'Completed' }
    ],
    challenge: 'Reconciling an expansive double-height living pavilion with human-scale warmth and acoustic comfort.',
    solution: 'Introduced acoustic timber slatted wall elements, deeply textured wool floor coverings, and recessed warm-dim architectural lighting to soften spatial acoustics and create intimate gathering pockets within the larger volume.'
  },
  {
    id: 'oak-and-stone',
    number: '02',
    title: 'Oak & Stone',
    subtitle: 'Warm modern family home defined by sculptural woodwork and monolithic fluted limestone.',
    category: 'Family Residence',
    location: 'Hillside Enclave',
    area: '5,200 sq.ft',
    year: '2025',
    heroImage: '/images/oak-and-stone.jpg',
    gallery: [
      {
        url: '/images/oak-and-stone.jpg',
        caption: 'Dining room centerpiece with solid white oak table, fluted stone divider wall, and delicate washi paper pendant.',
        aspect: 'landscape'
      },
      {
        url: '/images/material-palette.jpg',
        caption: 'Material study: natural rift oak grain juxtaposed against textured limestone and woven linen.',
        aspect: 'portrait'
      },
      {
        url: '/images/kitchen-detail.jpg',
        caption: 'Adjacent open kitchen with Calacatta Viola marble island and rift-cut white oak cabinetry.',
        aspect: 'wide'
      }
    ],
    overview: 'Oak & Stone explores the harmony between grounded architectural masonry and the organic warmth of solid timber. Conceived for a family who values quiet daily rituals, the layout moves gracefully from open gathering spaces to secluded private alcoves.',
    designDirection: 'Textural Organic Modernism',
    designApproach: 'A sculptural fluted limestone feature wall anchors the central dining space, creating a sense of permanence while softly diffusing sound and light. The dining table was custom-commissioned in monolithic white oak with rounded profiles that invite tactile touch.',
    materials: [
      { name: 'Solid European White Oak', description: 'Hand-rubbed matte oil finish on custom dining and architectural joinery.' },
      { name: 'Fluted Portuguese Limestone', description: 'Precision-grooved vertical stone slabs providing acoustic and textural depth.' },
      { name: 'Washi Paper & Cast Brass', description: 'Sculptural lighting elements emitting warm diffuse 2400K illumination.' },
      { name: 'Warm Sand Bouclé', description: 'Ergonomic upholstered seating designed for extended dinner conversations.' }
    ],
    specifications: [
      { label: 'Project Type', value: 'Single Family Residence Interior' },
      { label: 'Scope', value: 'Full Interior Architecture, Bespoke Furniture, Art Sourcing' },
      { label: 'Floor Area', value: '5,200 sq.ft / 485 m²' },
      { label: 'Status', value: 'Completed' }
    ],
    challenge: 'Creating a cohesive aesthetic flow across open-plan dining and culinary zones without sacrificing spatial definition.',
    solution: 'Used the fluted stone divider as an architectural screen rather than a solid wall, maintaining ambient sightlines while creating purposeful zoning and distinct light play.'
  },
  {
    id: 'the-atelier',
    number: '03',
    title: 'The Atelier',
    subtitle: 'Refined contemporary apartment embracing raw linen, tailored walnut joinery, and ambient illumination.',
    category: 'Urban Apartment Penthouse',
    location: 'Historic Cultural District',
    area: '2,650 sq.ft',
    year: '2024',
    heroImage: '/images/the-atelier.jpg',
    gallery: [
      {
        url: '/images/the-atelier.jpg',
        caption: 'Master bedroom suite with fluted walnut headboard wall, cantilevered ledges, and sheer morning curtains.',
        aspect: 'landscape'
      },
      {
        url: '/images/bathroom-detail.jpg',
        caption: 'Ensuite sanctuary with freestanding travertine bathtub overlooking a private screened greenery courtyard.',
        aspect: 'portrait'
      },
      {
        url: '/images/commercial-lounge.jpg',
        caption: 'Study and reading salon with full-height walnut shelving and stone consultation plinth.',
        aspect: 'wide'
      }
    ],
    overview: 'Set within an urban high-rise with generous ceiling heights, The Atelier was designed as a restorative private retreat. The interior replaces conventional residential clutter with disciplined architectural planes, integrated storage, and sensory materials.',
    designDirection: 'Tailored Quiet Luxury',
    designApproach: 'The master suite features a full-height fluted American walnut headboard wall with seamlessly integrated brass task sconces and floating cantilevered nightstands. The bed is upholstered in natural oatmeal linen, elevating everyday comfort through understated craftsmanship.',
    materials: [
      { name: 'American Black Walnut', description: 'Architectural fluting and precision cabinetry with subtle grain matching.' },
      { name: 'Belgian Washed Linen', description: 'Relaxed raw linen drapery and bed coverings in muted oat and sand tones.' },
      { name: 'Brushed Muted Brass', description: 'Wall sconces, recessed cabinetry pulls, and discreet switch plates.' },
      { name: 'Micro-cement Ceiling', description: 'Soft matte grey ceiling providing subtle industrial contrast to warm timber.' }
    ],
    specifications: [
      { label: 'Project Type', value: 'Urban Penthouse Interior' },
      { label: 'Scope', value: 'Interior Architecture, Custom Joinery, Ensuite Bathrooms' },
      { label: 'Floor Area', value: '2,650 sq.ft / 246 m²' },
      { label: 'Status', value: 'Completed' }
    ],
    challenge: 'Maximizing perceived space and natural light within a deep urban apartment footprint.',
    solution: 'Designed floating joinery elements and semi-translucent partition screens that allow light to penetrate deep into the bedroom and dressing areas without compromising privacy.'
  },
  {
    id: 'casa-nera',
    number: '04',
    title: 'Casa Nera',
    subtitle: 'Minimal architectural residence defined by deep charcoal timber, honed granite, and courtyard integration.',
    category: 'Private Residence',
    location: 'Coastal Escarpment',
    area: '3,800 sq.ft',
    year: '2024',
    heroImage: '/images/casa-nera.jpg',
    gallery: [
      {
        url: '/images/casa-nera.jpg',
        caption: 'Living pavilion with smoked oak wall cladding, linear recessed fireplace, and flamed charcoal granite plinth.',
        aspect: 'landscape'
      },
      {
        url: '/images/studio-workspace.jpg',
        caption: 'Private creative lounge and library with monolithic stone worktable and dark joinery.',
        aspect: 'wide'
      },
      {
        url: '/images/material-palette.jpg',
        caption: 'Material contrast: charcoal woven linen, flamed Nero granite, and patinated brass accents.',
        aspect: 'portrait'
      }
    ],
    overview: 'Casa Nera celebrates the richness of dark tones, shadow, and tactile depth. Designed for an art collector and bibliophile, the residence embraces moody espresso oak, monolithic stone plinths, and expansive glass walls framing a verdant fern and maple courtyard.',
    designDirection: 'Dark Architectural Serenity',
    designApproach: 'Rather than relying on stark whites, Casa Nera uses dark smoked timber cladding and charcoal micro-cement to absorb light and create an intensely serene atmosphere. The linear fireplace with its flamed granite bench serves as the grounded focal point.',
    materials: [
      { name: 'Smoked Bog Oak', description: 'Deep espresso stained architectural wall paneling with natural open grain.' },
      { name: 'Flamed Nero Granite', description: 'Tactile textured stone hearth and low-profile cantilevered plinth.' },
      { name: 'Espresso Aniline Leather', description: 'Supple leather upholstery with natural patina and hand-stitched seams.' },
      { name: 'Low-Iron Structural Glass', description: 'Floor-to-ceiling glass walls establishing direct courtyard transparency.' }
    ],
    specifications: [
      { label: 'Project Type', value: 'Architectural Residence' },
      { label: 'Scope', value: 'Spatial Architecture, Custom Fireplace Design, Furnishing' },
      { label: 'Floor Area', value: '3,800 sq.ft / 353 m²' },
      { label: 'Status', value: 'Completed' }
    ],
    challenge: 'Ensuring dark-toned interiors feel warm, inviting, and architecturally rich rather than cave-like or flat.',
    solution: 'Balanced dark vertical timber walls with large glass apertures framing vibrant garden greenery, paired with warm 2200K cove illumination and tactile textured surfaces.'
  }
];

export const SERVICE_HIGHLIGHT_PROJECTS = [
  {
    title: 'The Culinary Pavilion',
    category: 'Kitchen & Wardrobe Design',
    image: '/images/kitchen-detail.jpg',
    description: 'Bespoke marble island, integrated oak joinery, and concealed pantry planning.'
  },
  {
    title: 'The Limestone Sanctuary',
    category: 'Material & Finish Selection',
    image: '/images/bathroom-detail.jpg',
    description: 'Freestanding travertine tub, micro-cement walls, and private courtyard daylighting.'
  },
  {
    title: 'The Creative Lounge',
    category: 'Commercial Interiors',
    image: '/images/studio-workspace.jpg',
    description: 'Monolithic consultation table, library joinery, and architectural lighting.'
  }
];
