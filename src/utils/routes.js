export const SECTION_ROUTES = {
  hero: '/',
  'video-showcase': '/video',
  products: '/productos',
  process: '/proceso',
  events: '/eventos',
  testimonials: '/testimonios',
  about: '/nosotros',
  contact: '/contacto',
  payment: '/pago',
  terms: '/terminos'
};

export const ROUTE_SECTIONS = {
  '/': 'hero',
  '/video': 'video-showcase',
  '/productos': 'products',
  '/equipos': 'products', // Alias para productos
  '/proceso': 'process',
  '/eventos': 'events',
  '/testimonios': 'testimonials',
  '/nosotros': 'about',
  '/contacto': 'contact',
  '/pago': 'payment',
  '/terminos': 'terms'
};

export const MENU_ITEMS = [
  { name: 'Inicio', to: 'hero', path: '/' },
  { name: 'Video', to: 'video-showcase', path: '/video' },
  { name: 'Equipos', to: 'products', path: '/productos' },
  { name: 'Proceso', to: 'process', path: '/proceso' },
  { name: 'Eventos', to: 'events', path: '/eventos' },
  { name: 'Testimonios', to: 'testimonials', path: '/testimonios' },
  { name: 'Nosotros', to: 'about', path: '/nosotros' },
  { name: 'Contacto', to: 'contact', path: '/contacto' },
  { name: 'Pagos', to: 'payment', path: '/pago' },
  { name: 'Términos', to: 'terms', path: '/terminos' },
]; 