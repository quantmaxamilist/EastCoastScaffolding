export interface Testimonial {
  quote: string;
  name: string;
  attribution: string;
  header: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'East Coast Scaffolding did a fantastic job. They were quick, efficient and friendly. They arrived when they said they would and were able to come at short notice to remove the scaffolding at the end of the job. I would definitely use them again.',
    name: 'Patsy P',
    attribution: 'Google Review',
    header: 'Google review',
  },
  {
    quote:
      'Superb service, very competitive price and installed on agreed date. Rang to request striking and was amazed that they took it down the next day. Will definitely be using east coast in the future.',
    name: 'Neil Richings',
    attribution: 'Google Review',
    header: 'Google review',
  },
  {
    quote:
      'Could not fault the service and turn around. Fantastic scaffolders who attended to erect the scaffold, friendly polite and very professional. Cleaned down when they removed scaffold and left the site spotlessly clean. Wouldn’t bother going anywhere else.',
    name: 'Trevor Flegg',
    attribution: 'Cullen UK Ltd',
    header: 'Verified',
  },
  {
    quote:
      'Very professional & punctual job done. Clear to see safety is key part of their operation. Would certainly use again & would recommend to anyone.',
    name: 'Steve Buckenham',
    attribution: 'Google Review',
    header: 'Google review',
  },
];
