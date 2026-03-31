// ─── API Configuration ───
export const API_BASE_URL = 'https://linkedbridge.onrender.com/api/v1';
export const API_KEY = 'lb_live_483daca5e04923f321cf061146f84f1be7d56da7387afe98d5be618aba63151c';

// ─── Page Configuration ───
export const PAGES = [
  { id: 'about', label: 'Sobre', icon: '◆' },
  { id: 'projects', label: 'Projetos', icon: '◈' },
  { id: 'social', label: 'Social', icon: '◉' },
  { id: 'contact', label: 'Contato', icon: '◎' },
];

// ─── Personal Information (Placeholder) ───
export const PERSONAL_INFO = {
  name: 'Davyd',
  title: 'Full-Stack Developer',
  subtitle: 'Criando experiências digitais imersivas',
  bio: 'Desenvolvedor apaixonado por criar soluções elegantes e performáticas. Especializado em React, Node.js e arquiteturas modernas de software. Transformo ideias complexas em interfaces intuitivas e sistemas robustos.',
  location: 'Brasil',
  email: 'contato@davyd.dev',
  skills: [
    'React.js', 'Next.js', 'Node.js', 'TypeScript',
    'Prisma', 'PostgreSQL', 'Docker', 'AWS',
    'Fastify', 'REST APIs', 'UI/UX Design', 'Git',
  ],
};

// ─── Projects Data (Placeholder) ───
export const PROJECTS = [
  {
    id: 1,
    title: 'LinkedBridge',
    description: 'SaaS para integração de posts do LinkedIn via API REST. Autenticação OAuth, dashboard de gerenciamento de API keys e circuit breaker pattern.',
    tags: ['Next.js', 'Prisma', 'OAuth', 'SaaS'],
    color: 'hsl(250, 80%, 65%)',
    size: 'large',
    link: '#',
  },
  {
    id: 2,
    title: 'FastCook',
    description: 'PWA de receitas com input por voz usando Web Speech API. Integração com Stripe para pagamentos e PWA offline-first.',
    tags: ['React', 'Fastify', 'Stripe', 'PWA'],
    color: 'hsl(20, 90%, 55%)',
    size: 'medium',
    link: '#',
  },
  {
    id: 3,
    title: 'Portfolio 3D',
    description: 'Este portfólio! Construído como um livro interativo 3D com Framer Motion e integração em tempo real com LinkedIn.',
    tags: ['React', 'Framer Motion', 'CSS Modules'],
    color: 'hsl(190, 90%, 55%)',
    size: 'medium',
    link: '#',
  },
  {
    id: 4,
    title: 'API Gateway',
    description: 'Microserviço de gateway com rate limiting, caching distribuído e observabilidade com métricas Prometheus.',
    tags: ['Node.js', 'Redis', 'Docker', 'K8s'],
    color: 'hsl(140, 70%, 50%)',
    size: 'small',
    link: '#',
  },
  {
    id: 5,
    title: 'Design System',
    description: 'Biblioteca de componentes React com tokens de design, acessibilidade WCAG 2.1 e documentação Storybook.',
    tags: ['React', 'Storybook', 'A11y'],
    color: 'hsl(320, 70%, 60%)',
    size: 'small',
    link: '#',
  },
];

// ─── Social Links ───
export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
];
