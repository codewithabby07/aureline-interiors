export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  activities: string[];
  deliverable: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'DISCOVER',
    tagline: 'Understand the space, lifestyle and requirements.',
    description: 'Every project begins with deep listening. We assess the site, study architectural opportunities and constraints, and unpack how you live—from daily morning routines to entertaining preferences and functional priorities.',
    activities: [
      'Site measurement & architectural survey',
      'Lifestyle & functional brief alignment',
      'Spatial zoning & preliminary budget review',
      'Initial design vision & aspirational direction'
    ],
    deliverable: 'Project Brief & Scope Definition'
  },
  {
    step: '02',
    title: 'DEFINE',
    tagline: 'Develop the design direction, layout and material language.',
    description: 'We establish the fundamental structural layout and tactile language. We present space planning alternatives, circulation studies, and curated physical material palettes that set the tone for the entire interior.',
    activities: [
      '2D space planning & furniture layout iterations',
      'Mood boards & architectural concept decks',
      'Curated physical material & stone selections',
      'Preliminary joinery & millwork sketches'
    ],
    deliverable: 'Schematic Design & Material Direction'
  },
  {
    step: '03',
    title: 'DESIGN',
    tagline: 'Refine drawings, finishes, furniture and lighting.',
    description: 'We translate the approved concept into precise, buildable documentation. Every joinery joint, lighting fixture, plumbing rough-in, and custom sofa dimension is drafted with exacting architectural rigor.',
    activities: [
      'Comprehensive architectural drawing set (plans, elevations, sections)',
      'Custom joinery & kitchen detailed millwork packages',
      'Lighting, switching & electrical schedules',
      'Itemized procurement schedules & tender documentation'
    ],
    deliverable: 'Detailed Design & Specification Package'
  },
  {
    step: '04',
    title: 'EXECUTE',
    tagline: 'Coordinate the approved design through implementation.',
    description: 'We partner with master builders, stone fabricators, and specialist artisans. We conduct regular site inspections to review workshop drawings, material mockups, and ensure exact alignment with design standards.',
    activities: [
      'Tender evaluation & contractor alignment',
      'Shop drawing reviews & sample approvals',
      'Periodic on-site quality control inspections',
      'Trade coordination & architectural clarifications'
    ],
    deliverable: 'Site Supervision & Construction Oversight'
  },
  {
    step: '05',
    title: 'COMPLETE',
    tagline: 'Final styling, detailing and handover.',
    description: 'The culmination of the journey. We oversee the white-glove installation of custom furnishings, drape hanging, rug positioning, lighting calibration, art installation, and tactile accessories.',
    activities: [
      'White-glove furniture delivery & assembly',
      'Artwork hanging & decorative accessory curation',
      'Lighting scene calibration & dimming setup',
      'Defect snagging inspection & final client walkthrough'
    ],
    deliverable: 'Fully Realized Interior & Handover'
  }
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: 'At what stage of our build or purchase should we engage Aureline Interiors?',
    answer: 'Ideally as early as possible. Involving our studio during architectural planning or before framing allows us to optimize window placement, room proportions, structural openings, and electrical layouts before changes become costly.'
  },
  {
    question: 'How do you structure your design fees?',
    answer: 'We operate on a transparent fixed-fee or phase-based structure tailored to the scope and square footage of your project. Following our initial consultation, we provide a detailed written proposal outlining each milestone clearly.'
  },
  {
    question: 'Do you manage custom furniture and joinery fabrication?',
    answer: 'Yes. A cornerstone of our practice is custom architectural millwork and bespoke furnishings. We collaborate with select specialist artisans, stone masons, and cabinet makers to craft tailored pieces designed uniquely for your residence.'
  },
  {
    question: 'Can you work with our existing architect or builder?',
    answer: 'Absolutely. We regularly collaborate with client-appointed architects, general contractors, and project managers, providing clear, detailed technical documentation and proactive on-site design coordination.'
  },
  {
    question: 'What is the typical timeline for a complete residential interior project?',
    answer: 'The design phase (Discover, Define, Design) typically takes 8 to 14 weeks depending on the scale and complexity. Execution timelines vary depending on whether the project is a renovation, apartment refurbishment, or full architectural ground-up build.'
  }
];
