// src/config/site.ts
// ─────────────────────────────────────────────────────────────
// Single source of truth for all site-wide configuration.
// Every component, layout, and page imports from here.
// To update contact info, links, or personal details: edit this file only.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  // ── Identity ──────────────────────────────────────────────
  name:           'Dylan Howard',
  role:           'Software Engineer',
  tagline:        '.NET · Next.js · Identity Systems',
  expandedSkills: '.NET / C# · Next.js / React · TypeScript · Go · AWS / Azure · SQL',
  location:       'Bowling Green, KY',
  employer:       'Warren County Public Schools',

  // ── URLs ──────────────────────────────────────────────────
  url:         'https://dylan-howard.github.io',

  // ── SEO defaults ──────────────────────────────────────────
  description:
    'Full-stack Software Engineer specialising in identity infrastructure, ' +
    'data pipelines, and enterprise integration. Based in Bowling Green, KY.',
  keywords: [
    'Dylan Howard',
    'Software Engineer',
    'Software Developer',
    'Senior Software Engineer',
    'Full Stack Engineer',
    'Identity Access Management',
    'IAM',
    'Full Stack Developer',
    'Next.js',
    'React',
    'TypeScript',
    'Java',
    'C#',
    '.NET',
    'Go',
    'AWS',
    'Azure',
    'SaaS Engineering',
    'Distributed Systems',
    'Bowling Green Kentucky',
    'K-12 Technology',
  ],
  ogImage: '/og.png',
  twitterHandle: undefined as string | undefined, // add @handle if you have one

  // ── Contact ───────────────────────────────────────────────
  email:    'dylanhoward6@gmail.com',
  phone:    '(270) 349-3025',

  // ── Social links ──────────────────────────────────────────
  links: {
    github:   'https://github.com/Dylan-Howard',
    linkedin: 'https://www.linkedin.com/in/dylanlhoward/',
    resume:   'https://drive.google.com/file/d/1J-RspJoFl6_dGBuUCKBHjSKS4cjCKMrc/view?usp=drive_link',
  },

  // ── Contact form ──────────────────────────────────────────
  // Google Apps Script web app endpoint
  contactEndpoint:
    'https://script.google.com/macros/s/AKfycbzgcp7xdbWVFjB3CZHm0G_mTBTWR0Ma-x-KPhTETEYd_2x9E9GgII6S79eeeTBsMxQX_g/exec',

  // ── Recognition ───────────────────────────────────────────
  awards: [
    {
      title:  'Stillwell Award',
      org:    'Kentucky DOE Office of Educational Technology',
      year:   2022,
      short:  'Stillwell Award 2022',
    },
  ],

  speaking: [
    {
      event: 'Identity Automation User Group',
      role:  'Speaker & Panelist',
      date:  'June 2025',
    },
  ],

  // ── Nav links (order matters) ──────────────────────────────
  nav: [
    { href: '/#work',    label: 'Work'    },
    { href: '/#about',   label: 'About'   },
    { href: '/resume',   label: 'Résumé'  },
    { href: '/#contact', label: 'Contact' },
  ],
} as const;

// ── Derived helpers ────────────────────────────────────────
export const FULL_NAME   = SITE.name;
export const SITE_TITLE  = `${SITE.name} — ${SITE.role}`;
export const MAILTO      = `mailto:${SITE.email}`;
