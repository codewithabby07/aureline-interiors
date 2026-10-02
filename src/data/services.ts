export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  idealFor: string;
  image?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'residential-interiors',
    number: '01',
    title: 'Residential Interiors',
    shortDescription: 'Complete interior design for apartments, villas, and private residences.',
    fullDescription: 'From initial spatial planning through to final styling, we develop complete, cohesive interior schemes tailored to private residences. Every room is designed in dialogue with the whole home, ensuring harmony of material, palette, and architectural character.',
    deliverables: [
      'Comprehensive spatial concepts & mood boards',
      'Full architectural drawings & 3D visualization',
      'Custom furniture & millwork specifications',
      'Sanitaryware, ironmongery & finish schedules',
      'Procurement, coordination & site supervision'
    ],
    idealFor: 'Full-home new builds, substantial renovations, or high-end property refurbishments.',
    image: '/images/hero.jpg'
  },
  {
    id: 'space-planning',
    number: '02',
    title: 'Space Planning',
    shortDescription: 'Functional layouts designed around movement, use, and natural light.',
    fullDescription: 'Before selecting materials or furnishings, we analyze how you move, live, and gather. We reconfigure floor plans to optimize flow, natural illumination, storage efficiency, and intuitive transitions between private and social zones.',
    deliverables: [
      'Detailed scaled architectural floor plans',
      'Circulation & movement pattern studies',
      'Structural partition & opening alignments',
      'Furniture placement & clearance layouts',
      'Sightline & daylight penetration mapping'
    ],
    idealFor: 'Properties with awkward existing layouts or new architectural builds requiring optimized living flow.',
    image: '/images/the-aria-residence.jpg'
  },
  {
    id: 'kitchen-wardrobe',
    number: '03',
    title: 'Kitchen & Wardrobe Design',
    shortDescription: 'Custom storage, precision joinery, and architectural cabinetry planning.',
    fullDescription: 'Kitchens and wardrobes are the most hardworking spaces in any residence. We design bespoke joinery that pairs exquisite materials—natural stone, solid timber, fluted glass—with ergonomic internal organization and concealed appliances.',
    deliverables: [
      'Bespoke millwork elevation & section drawings',
      'Stone fabrication & waterfall island detailing',
      'Internal hardware & organizer specifications',
      'Integrated appliance & ventilation coordination',
      'Under-cabinet & task lighting integration'
    ],
    idealFor: 'Culinary enthusiasts and homeowners seeking seamless, clutter-free custom cabinetry.',
    image: '/images/kitchen-detail.jpg'
  },
  {
    id: 'material-finish',
    number: '04',
    title: 'Material & Finish Selection',
    shortDescription: 'Curated materials, textures, colours, and tactile architectural surfaces.',
    fullDescription: 'We assemble physical palettes of natural stone, timber species, lime plasters, metal patinas, and woven textiles. Each material is chosen for its tactile honesty, durability, and how it responds to changing daylight throughout the day.',
    deliverables: [
      'Physical curated material sample boards',
      'Floor, wall & ceiling finish specifications',
      'Custom paint & plaster color schedules',
      'Textile, drapery & rug curation',
      'Technical specification documentation for contractors'
    ],
    idealFor: 'Clients who already have a base plan and want a cohesive, tactile luxury material language.',
    image: '/images/material-palette.jpg'
  },
  {
    id: 'lighting-design',
    number: '05',
    title: 'Lighting Design',
    shortDescription: 'Lighting planned as part of the architecture, mood, and diurnal rhythm.',
    fullDescription: 'We approach lighting as an architectural sculpting medium rather than merely decorative fixtures. By layering concealed linear coves, low-glare architectural downlights, and sculptural decorative pendants, we create rich atmospheric depth.',
    deliverables: [
      'Layered architectural lighting layouts',
      'Circuiting, switching & dimming schedules',
      'Luminaire specifications (Kelvin, CRI, beam angles)',
      'Custom joinery integrated lighting details',
      'Architectural lighting control scene guidelines'
    ],
    idealFor: 'Spaces needing atmospheric transformation and tailored evening ambiance.',
    image: '/images/casa-nera.jpg'
  },
  {
    id: 'turnkey-execution',
    number: '06',
    title: 'Turnkey Interior Execution',
    shortDescription: 'Design coordination through execution, artisan fabrication, and finishing.',
    fullDescription: 'We oversee the realization of our designs from first demolition to final art placement. Working closely with vetted specialist trades, stone masons, and master joiners, we protect design integrity and manage quality at every milestone.',
    deliverables: [
      'Site coordination & architectural oversight',
      'Sample approvals & workshop mock-up reviews',
      'Trade coordination & quality control audits',
      'Defect inspection & snagging resolution',
      'Final dressing, art styling & white-glove handover'
    ],
    idealFor: 'Clients seeking an end-to-end, stress-free delivery experience with uncompromising finish quality.',
    image: '/images/studio-workspace.jpg'
  }
];
