export type ServiceIconId =
  | 'traditional'
  | 'guard-rails'
  | 'edge-protection'
  | 'chutes'
  | 'hoists'
  | 'sheeting'
  | 'loading-bays'
  | 'temporary-roofs'
  | 'ewi-access'
  | 'design';

export interface Service {
  slug: ServiceIconId;
  title: string;
  summary: string;
  detail: string;
}

export const services: Service[] = [
  {
    slug: 'traditional',
    title: 'Traditional scaffolding',
    summary: 'Tube, fittings and boards erected to the job — not a one-size hire tower.',
    detail:
      'Independent and putlog scaffolds for roofing, rendering, masonry and general access. Designed around the building, with the lifts, loading and ties the work actually needs.',
  },
  {
    slug: 'guard-rails',
    title: 'Permanent & temporary guard rails',
    summary: 'Edge rails that stay put for the duration — or come down when the trade is finished.',
    detail:
      'Temporary guard rails for short-term roof and floor edges, plus longer-stay systems where a structure needs a protected edge for an extended programme.',
  },
  {
    slug: 'edge-protection',
    title: 'Edge protection & brick guards',
    summary: 'Brick guards and edge systems so debris stays on the lift, not on the pavement.',
    detail:
      'Mesh brick guards, toe boards and edge protection fitted as standard on working lifts — particularly on street-facing and occupied sites.',
  },
  {
    slug: 'chutes',
    title: 'Rubbish chutes',
    summary: 'A controlled drop for waste, instead of throwing it off the roof.',
    detail:
      'Chute runs tied into the scaffold so roofers and strip-out gangs can get waste down to a skip without crossing a live site or a public footway.',
  },
  {
    slug: 'hoists',
    title: 'Hoists',
    summary: 'Materials up, not carried up the ladder.',
    detail:
      'Goods hoists mounted to the scaffold for bricks, tiles, insulation and plant — sized to the lift heights and loading the programme requires.',
  },
  {
    slug: 'sheeting',
    title: 'Monoflex sheeting & debris netting',
    summary: 'Containment for weather, dust and falling material.',
    detail:
      'Monoflex sheeting for wind and rain protection, debris netting where you need visibility and containment. Fixed properly so it doesn’t become a sail.',
  },
  {
    slug: 'loading-bays',
    title: 'Loading bays',
    summary: 'A dedicated lift for pallets, not a crowded working platform.',
    detail:
      'Cantilever and in-line loading bays so materials can be craned or hoisted onto the scaffold without blocking the run of boards the trades are working from.',
  },
  {
    slug: 'temporary-roofs',
    title: 'Temporary roofs',
    detail:
      'Sheeted temporary roofs over occupied buildings and open structures — so work continues and the interior stays dry when the existing roof is off.',
    summary: 'A weatherproof cover over the job while the permanent roof is open.',
  },
  {
    slug: 'ewi-access',
    title: 'External wall insulation access',
    summary: 'Close, even lifts for insulation, render and cladding crews.',
    detail:
      'Scaffolds set out for EWI and render systems: consistent lift heights, brick-guarded edges and enough clear working width for boards, beads and insulation packs.',
  },
  {
    slug: 'design',
    title: 'Design service',
    summary: 'A scaffold drawn for this building, not a standard bay repeated.',
    detail:
      'Cost-effective bespoke design where the structure is irregular, loaded, or needs TG20 / design calculations — so the scaffold fits the programme instead of fighting it.',
  },
];

export const homeServiceTeasers = services.filter((s) =>
  ['traditional', 'temporary-roofs', 'sheeting', 'edge-protection', 'loading-bays', 'ewi-access', 'hoists', 'design'].includes(
    s.slug,
  ),
);
