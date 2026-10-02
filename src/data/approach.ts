export interface ApproachPillar {
  number: string;
  title: string;
  short: string;
  description: string;
  quote: string;
  image: string;
  details: string[];
}

export const APPROACH_PILLARS: ApproachPillar[] = [
  {
    number: '01',
    title: 'Material',
    short: 'Natural textures, considered finishes and tactile surfaces.',
    description: 'We believe that luxury is felt through touch. We favor unembellished materials that carry intrinsic character: travertine with open pores, European oak with authentic grain, patinated brass that darkens gently with touch, and heavyweight raw linen. These surfaces do not date; they gain depth over time.',
    quote: 'Authentic materials communicate permanence and sensory grounding.',
    image: '/images/material-palette.jpg',
    details: [
      'Honest, un-veneered masonry and timber',
      'Tactile balance between smooth stone and woven textiles',
      'Patinated metals that age gracefully',
      'Sustainable and non-toxic lime plasters'
    ]
  },
  {
    number: '02',
    title: 'Light',
    short: 'Daylight and artificial lighting used to shape atmosphere.',
    description: 'Light is the medium through which architecture is experienced. We study the solar orientation of every room to choreograph how natural daylight washes across textured walls. After dusk, layered indirect illumination takes over—soft 2400K coves, recessed floor grazers, and quiet table lamps that invite stillness.',
    quote: 'Lighting should never be an afterthought; it defines the emotional cadence of a home.',
    image: '/images/the-aria-residence.jpg',
    details: [
      'Solar orientation and shadow analysis',
      'Concealed linear joinery lighting',
      'Warm-dim circadian spectrums (2200K - 2700K)',
      'Sculptural statement illumination'
    ]
  },
  {
    number: '03',
    title: 'Proportion',
    short: 'Furniture, architecture and negative space balanced carefully.',
    description: 'A great space does not overwhelm; it breathes. We treat negative space with the same deliberate intention as built elements. By calibrating low furniture datums against expansive ceiling heights and maintaining generous sightlines, we create rooms that feel calm, orderly, and deeply restful.',
    quote: 'True refinement is knowing what to leave out.',
    image: '/images/oak-and-stone.jpg',
    details: [
      'Architectural datum lines and sightline alignment',
      'Generous spatial clearance and intuitive circulation',
      'Low-slung horizontal furniture silhouettes',
      'Deliberate negative space that frames garden views'
    ]
  }
];
