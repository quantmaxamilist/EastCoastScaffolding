export const site = {
  name: 'East Coast Scaffolding Ltd',
  shortName: 'East Coast Scaffolding',
  tagline: 'Erected right. Struck on time.',
  description:
    'Beccles scaffolding contractors for residential, commercial and heritage work across Norfolk and Suffolk. CISRS-trained, fully insured, over 60 years’ combined experience.',
  phone: '01502 716005',
  phoneHref: 'tel:+441502716005',
  phoneSecondary: '07917 448624',
  phoneSecondaryHref: 'tel:+447917448624',
  email: 'office@eastcoastscaffolding.co.uk',
  emailHref: 'mailto:office@eastcoastscaffolding.co.uk',
  address: 'Office 3, Unit 9B, Ellough Industrial Estate, Ellough, Beccles, Suffolk, NR34 7TD',
  addressLines: ['Office 3, Unit 9B', 'Ellough Industrial Estate', 'Ellough, Beccles', 'Suffolk, NR34 7TD'] as const,
  url: 'https://eastcoastscaffolding.co.uk',
  facebookUrl: 'https://www.facebook.com/eastcoastscaffoldingltd',
  instagramUrl: 'https://www.instagram.com/eastcoastscaffoldingltd',
  areaServed: 'Norfolk & Suffolk',
  ctaPrimary: 'Get a Quote',
  ctaSecondary: 'Call 01502 716005',
} as const;

export const contacts = [
  { name: 'Jenny Evans', role: 'Office', phone: site.phone, phoneHref: site.phoneHref },
  { name: 'Alex Winser', role: 'Site', phone: site.phoneSecondary, phoneHref: site.phoneSecondaryHref },
] as const;

export const towns = [
  'Beccles',
  'Bungay',
  'Lowestoft',
  'Southwold',
  'Great Yarmouth',
  'Norwich',
  'Woodbridge',
  'Ipswich',
] as const;

export const counties = ['Suffolk', 'Norfolk', 'Essex'] as const;

export const townLine = [...towns, ...counties].join(' · ');

export const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Past Projects', href: '/gallery' },
  { label: 'About & Safety', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const trustPillars = [
  {
    tagNumber: 'ECS-001',
    header: 'Valid',
    title: '60+ years combined',
    date: 'Current',
    description: 'Operatives with more than sixty years’ combined scaffolding experience, based in Beccles.',
  },
  {
    tagNumber: 'ECS-002',
    header: 'Current',
    title: 'CISRS / CITB',
    date: 'Current',
    description: 'CITB-trained operatives. Every scaffolder holds a CISRS card.',
  },
  {
    tagNumber: 'ECS-003',
    header: 'Inspected',
    title: 'Fully insured',
    date: 'Current',
    description: 'Full Public and Employers’ Liability Insurance on every job.',
  },
] as const;

export const credentials = [
  'Full Public & Employers’ Liability Insurance',
  'CITB-trained operatives',
  'All CISRS card holders',
  'Health & safety policy reviewed annually',
] as const;

export const ogImage = '/best.jpg';
