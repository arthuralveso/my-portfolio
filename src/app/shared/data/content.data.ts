import { ContentCase, Job, NavItem, StackGroup } from '../interfaces/content.interface';

export const PROFILE = {
  name: 'Arthur Alves',
  email: 'arthuralves91@gmail.com',
  phone: '+55 83 99812-6806',
  phoneHref: 'tel:+5583998126806',
  linkedin: 'https://www.linkedin.com/in/arthuralveso91',
  resume: '/assets/resume-arthur-alves.pdf',
};

export const NAV: NavItem[] = [
  { path: '/', label: 'Home', desc: 'Back to the start.' },
  { path: '/work', label: 'Work', desc: 'Systems I have built and where.' },
  { path: '/about', label: 'About', desc: 'Background, stack and how I think.' },
  { path: '/contact', label: 'Contact', desc: 'Open to remote roles worldwide.' },
];

export const UI = {
  menu: 'Menu',
  close: 'Close',
  resume: 'Resume',
  resumePdf: 'Resume (PDF)',
  themeDark: 'Switch to dark mode',
  themeLight: 'Switch to light mode',
  available: 'Open to remote work',
  skip: 'Skip to content',
  copy: 'Copy email',
  copied: 'Copied',
};

export const HOME = {
  role1: 'Software',
  role2: 'Engineer',
  tags: ['Angular', 'TypeScript', 'Micro Frontends', 'Signals', 'RxJS', 'Java Spring Boot'],
  status: 'Open to full-time roles',
  blurb: [
    'Nine cats, one dog and a stack of fantasy and sci-fi books. In between, I build Angular apps for fintechs and banks.',
  ],
  caption: 'Campina Grande, Brazil',
  credit: 'Designed and developed by Arthur Alves.',
  ctas: [
    { label: 'Get in touch', path: '/contact' },
    { label: 'See my work', path: '/work' },
  ],
};

export const CASES: ContentCase[] = [
  {
    metric: '1.17M',
    metricLabel: 'logins per day',
    title: 'Login & authentication platform',
    where: 'Itaú · BRQ',
    text: 'End-to-end login system for the business (PJ) client platform. Angular on the front, a Java Spring Boot BFF with MySQL for the whole authentication flow, inside a microservices architecture behind an API Gateway.',
    tags: ['Angular', 'Java', 'Spring Boot', 'MySQL', 'API Gateway'],
  },
  {
    metric: 'MFE',
    metricLabel: 'partner ecosystem',
    title: 'Micro frontend system for PJ partners',
    where: 'Itaú · BRQ',
    text: 'Contributing to the micro frontend system behind Itaú’s PJ partner ecosystem with Module Federation and Webpack 5, plus the infrastructure around it: AWS (EC2, S3, CloudFront, API Gateway), Terraform, Docker and CI/CD pipelines across staging and production.',
    tags: ['Module Federation', 'Webpack 5', 'AWS', 'Terraform', 'Docker', 'CI/CD'],
  },
  {
    metric: '−30%',
    metricLabel: 'page load time',
    title: 'Advisor platform migration',
    where: 'BTG Pactual · Beyond',
    text: 'Led development of two integrated Angular 18 applications automating 100% of portfolio management for about 370 financial advisors. Migrated a legacy AngularJS system to micro frontends, cutting load time by 30% and maintenance overhead by 45%.',
    tags: ['Angular 18', 'Signals', 'NgRx', 'Standalone'],
  },
  {
    metric: '16',
    metricLabel: 'documented components',
    title: 'Orquestra design system',
    where: 'BTG Pactual · Beyond',
    text: 'Contributed to BTG’s proprietary design system: visual language, accessibility standards and reusable components, documented in Storybook and adopted across five engineering squads.',
    tags: ['Storybook', 'WCAG 2.1', 'Design system'],
  },
  {
    metric: '−60%',
    metricLabel: 'payment processing time',
    title: 'Payment & custody transfer flows',
    where: 'BTG Pactual · ACT Digital',
    text: 'Built the payment integration module for the advisor platform, replacing an email workflow, and a custody transfer app with Angular Reactive Forms and RxJS that cut processing time by 40% for thousands of monthly transactions.',
    tags: ['Angular', 'RxJS', 'Reactive Forms', 'WCAG 2.1'],
  },
];

export const JOBS: Job[] = [
  {
    period: 'May 2025 — Now',
    company: 'BRQ Digital Solutions',
    client: 'Itaú',
    role: 'Senior Frontend Engineer',
  },
  {
    period: '2024 — 2025',
    company: 'Beyond Soluções',
    client: 'BTG Pactual',
    role: 'Senior Frontend Engineer',
  },
  {
    period: '2021 — 2024',
    company: 'ACT Digital',
    client: 'BTG Pactual',
    role: 'Frontend Engineer',
  },
  { period: '2021', company: 'Unifacisa · IT Lab', role: 'Frontend Engineer' },
  { period: '2020 — 2021', company: 'Dock', role: 'Backend Developer' },
  { period: '2020 — 2021', company: 'Brisanet', role: 'Full-Stack Developer' },
];

export const STACK: StackGroup[] = [
  {
    group: 'Frontend',
    items: [
      'Angular (AngularJS → 20)',
      'Signals',
      'RxJS',
      'NgRx',
      'TypeScript',
      'Module Federation',
      'Webpack 5',
      'Tailwind CSS',
    ],
  },
  {
    group: 'Backend',
    items: ['Java · Spring Boot', 'Node.js', 'MySQL', 'BFF pattern', 'Microservices'],
  },
  {
    group: 'Infra',
    items: ['AWS · EC2 S3 CloudFront', 'API Gateway', 'Terraform', 'Docker', 'CI/CD (YAML)'],
  },
  { group: 'Quality & design', items: ['Jest', 'Jasmine', 'Storybook', 'WCAG 2.1', 'Figma'] },
];
