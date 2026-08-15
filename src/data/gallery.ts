export type GalleryCategory = 'residential' | 'commercial' | 'heritage';

export interface GalleryItem {
  src: string;
  alt: string;
  category: GalleryCategory;
  project: string;
}

export const galleryCategories = [
  { id: 'all', label: 'All projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial & new-build' },
  { id: 'heritage', label: 'Church & heritage' },
] as const;

export const galleryItems: GalleryItem[] = [
  {
    src: '/gallery/4.jpg',
    alt: 'Multi-lift tube-and-fitting scaffold across the garden elevation of a large red-brick house, bridging over a sunroom.',
    category: 'residential',
    project: 'Domestic roofing access',
  },
  {
    src: '/gallery/5.jpg',
    alt: 'Rear elevation of a two-storey red-brick house with boarded working lifts to first-floor windows and the eaves.',
    category: 'residential',
    project: 'Domestic roofing access',
  },
  {
    src: '/gallery/6.jpg',
    alt: 'Front elevation scaffold on a red-brick house with a columned portico, ladder access and boarded lifts to the gable.',
    category: 'residential',
    project: 'Domestic roofing access',
  },
  {
    src: '/gallery/2.jpg',
    alt: 'Three-storey red-brick coastal house fully scaffolded, with the sea visible behind neighbouring rooftops.',
    category: 'residential',
    project: 'Coastal house',
  },
  {
    src: '/gallery/7.jpg',
    alt: 'Large modern building under construction, fully wrapped in a multi-lift steel scaffold on a rural site.',
    category: 'commercial',
    project: 'New-build envelope',
  },
  {
    src: '/gallery/8.jpg',
    alt: 'East Coast Scaffolding truck on site in front of a new-build scaffold following a sloping roofline.',
    category: 'commercial',
    project: 'New-build envelope',
  },
  {
    src: '/gallery/9.jpg',
    alt: 'Branded East Coast Scaffolding flatbed loaded with boards, parked in front of a fully scaffolded contemporary building.',
    category: 'commercial',
    project: 'New-build envelope',
  },
  {
    src: '/gallery/3.jpg',
    alt: 'Tube-and-fitting scaffold around a contemporary two-storey building with dark panels, timber cladding and yellow pole protection at ground level.',
    category: 'commercial',
    project: 'Contemporary facade',
  },
  {
    src: '/gallery/1.jpg',
    alt: 'Street-facing multi-storey scaffold with yellow foam pole protection and traffic cones along a town pavement.',
    category: 'commercial',
    project: 'Town-centre access',
  },
  {
    src: '/gallery/10.jpg',
    alt: 'Octagonal flint church tower wrapped in a tall tube-and-fitting scaffold, with an East Coast Scaffolding sign on the lift.',
    category: 'heritage',
    project: 'Church tower restoration',
  },
  {
    src: '/gallery/11.jpg',
    alt: 'East Coast Scaffolding truck in a churchyard in front of a stone tower under restoration scaffolding.',
    category: 'heritage',
    project: 'Church tower restoration',
  },
  {
    src: '/gallery/big-job.jpg',
    alt: 'Large historic stone facade fully encased in a dense multi-lift scaffold on a formal lawn.',
    category: 'heritage',
    project: 'Heritage facade',
  },
];

export const homeGalleryPreview = galleryItems.filter((item) =>
  ['/gallery/4.jpg', '/gallery/9.jpg', '/gallery/10.jpg', '/gallery/2.jpg', '/gallery/1.jpg', '/gallery/big-job.jpg'].includes(
    item.src,
  ),
);
