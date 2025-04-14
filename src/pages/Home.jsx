import React, { useEffect, useState, useRef } from 'react';
import ProductCard from '../components/ProductCard';
import { FaPhone, FaHeadphones, FaMicrophone, FaMusic, FaVolumeUp } from 'react-icons/fa';
import logo from '../assets/hg_audio_logo.png';

const Home = () => {
  const [products] = useState([
    {
      id: 1,
      title: "Sistema de Sonido Profesional",
      price: "Consultar",
      image_url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Sistemas completos para eventos y conciertos"
    },
    {
      id: 2,
      title: "Micrófonos de Estudio",
      price: "Consultar",
      image_url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Micrófonos profesionales para grabación"
    },
    {
      id: 3,
      title: "Monitores de Estudio",
      price: "Consultar",
      image_url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Monitores de alta fidelidad para estudio"
    },
    {
      id: 4,
      title: "Consola de Mezcla Digital",
      price: "Consultar",
      image_url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Consolas digitales para mezcla profesional"
    },
    {
      id: 5,
      title: "Procesadores de Audio",
      price: "Consultar",
      image_url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Procesadores de señal y efectos"
    },
    {
      id: 6,
      title: "Equipos de Grabación",
      price: "Consultar",
      image_url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Equipos completos para estudio de grabación"
    }
  ]);

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const sections = useRef([]);

  useEffect(() => {
    // Navbar visibility on scroll
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavbarVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Intersection Observer for section animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const currentSections = sections.current;
    currentSections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      currentSections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.querySelector('.contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-title-section">
            <img src={logo} alt="HG Audio" className="hero-logo" />
            <h1 className="hero-title">HG Audio</h1>
          </div>
          <p className="hero-subtitle">Tu destino para equipos de audio de alta calidad</p>
          <div className="hero-icons">
            <FaHeadphones className="icon" />
            <FaMicrophone className="icon" />
            <FaMusic className="icon" />
            <FaVolumeUp className="icon" />
          </div>
        </div>
        <div className="scroll-indicator">
          <span className="scroll-indicator-text">Desliza hacia abajo</span>
          <div className="scroll-indicator-arrow"></div>
        </div>
      </section>

      <section 
        ref={(el) => (sections.current[0] = el)} 
        className="about"
      >
        <h2>Quiénes Somos</h2>
        <p>
          Somos una empresa dedicada a la venta y distribución de equipos de audio profesional.
          Con más de 10 años de experiencia en el mercado, ofrecemos productos de la más alta calidad
          y servicio personalizado para satisfacer todas tus necesidades de audio.
        </p>
        <div className="about-features">
          <div className="feature">
            <FaHeadphones />
            <h3>Equipos Profesionales</h3>
            <p>La mejor selección de equipos de audio profesional</p>
          </div>
          <div className="feature">
            <FaMicrophone />
            <h3>Asesoramiento Experto</h3>
            <p>Nuestro equipo te ayudará a encontrar la mejor solución</p>
          </div>
          <div className="feature">
            <FaMusic />
            <h3>Servicio Personalizado</h3>
            <p>Atención dedicada a cada uno de nuestros clientes</p>
          </div>
        </div>
      </section>

      <section 
        ref={(el) => (sections.current[1] = el)} 
        className="products"
      >
        <h2>Nuestros Productos</h2>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image_url}
              description={product.description}
            />
          ))}
        </div>
      </section>

      <section 
        ref={(el) => (sections.current[2] = el)} 
        className="contact"
      >
        <h2>Contacto</h2>
        <div className="contact-info">
          <p>Email: info@hgaudio.com</p>
          <p>Teléfono: (123) 456-7890</p>
          <p>Dirección: Calle Principal 123, Ciudad</p>
          <p>Horario: Lunes a Viernes 9:00 - 18:00</p>
        </div>
      </section>

      <button className="fab" onClick={scrollToContact}>
        <FaPhone />
      </button>
    </div>
  );
};

export default Home; 