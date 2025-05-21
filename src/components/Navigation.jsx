import { useState } from 'react';
import { Link } from 'react-scroll';
import { useScrollDirection } from '../hooks/useScrollDirection';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  const menuItems = [
    { name: 'Inicio', to: 'hero' },
    { name: 'Video', to: 'video-showcase' },
    { name: 'Equipos', to: 'products' },
    { name: 'Proceso', to: 'process' },
    { name: 'Eventos', to: 'events' },
    { name: 'Testimonios', to: 'testimonials' },
    { name: 'Contacto', to: 'contact' },
    { name: 'Pagos', to: 'payment' },
    { name: 'Términos', to: 'terms' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-[2px] transition-transform duration-300 ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-white/90 hover:text-white px-2 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Abrir menú principal</span>
              <div className="w-6 h-6 flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-current transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-current transition duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-current transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/30 backdrop-blur-[4px]">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="block px-3 py-2 rounded-md text-base font-medium text-white/90 hover:text-white cursor-pointer hover:bg-white/5 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 