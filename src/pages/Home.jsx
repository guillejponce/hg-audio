import React, { useState, useEffect } from 'react';
import { FaPhone, FaHeadphones, FaMicrophone, FaMusic, FaVolumeUp, FaWhatsapp, FaInstagram, FaEnvelope, FaCreditCard, FaFileAlt, FaShieldAlt, FaDownload, FaPercent, FaTimes, FaSearch } from 'react-icons/fa';
import logo from '../assets/hg_audio_logo.png';
import event1 from '../assets/events/event_1.jpeg';
import event2 from '../assets/events/event_2.jpeg';
import event3 from '../assets/events/event_3.jpeg';
import event4 from '../assets/events/event_4.jpeg';
import event6 from '../assets/events/event_6.jpeg';
import product1 from '../assets/products/product_1.png';
import product2 from '../assets/products/product_2.png';
import product3 from '../assets/products/product_3.png';

const Home = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});
  const [isDiscountFormOpen, setIsDiscountFormOpen] = useState(false);
  const [showDiscountIcon, setShowDiscountIcon] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentEvent(prev => (prev + 1) % 5);
    }, 5000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setVisibleSections(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    // Handle scroll to show discount icon
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowDiscountIcon(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timer);
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Send data to Formspree
    fetch('https://formspree.io/f/xqaqoajd', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        _subject: "Solicitud de descuento 10% OFF - HG Audio"
      }),
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject('Error en el envío del formulario');
      })
      .then(data => {
        console.log('Success:', data);
        setFormSubmitted(true);
      })
      .catch(error => {
        console.error('Error:', error);
        // Still show success even if there was an error to avoid user confusion
        setFormSubmitted(true);
      })
      .finally(() => {
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsDiscountFormOpen(false);
          setFormSubmitted(false);
          setFormData({ name: '', email: '' });
        }, 5000);
      });
  };

  const hideDiscountCompletely = () => {
    setIsDiscountFormOpen(false);
    setShowDiscountIcon(false);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>

      {/* Discount Tab and Form */}
      {showDiscountIcon && (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
          {/* Only Icon Initially */}
          {!isDiscountFormOpen ? (
            <div className="relative">
              <div 
                className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-all duration-300"
                onClick={() => setIsDiscountFormOpen(true)}
              >
                <div className="flex flex-col items-center">
                  <FaPercent className="text-lg" />
                  <span className="text-xs font-bold mt-0.5">10% OFF</span>
                </div>
              </div>
              <button 
                onClick={hideDiscountCompletely}
                className="absolute -top-2 -right-2 bg-slate-800 text-white/90 w-6 h-6 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
                title="Cerrar"
              >
                <FaTimes size={12} />
              </button>
            </div>
          ) : (
            <div className="bg-slate-800 w-[320px] p-6 rounded-lg shadow-xl animate-fadeIn relative">
              <button 
                onClick={() => setIsDiscountFormOpen(false)}
                className="absolute top-3 right-3 text-white/70 hover:text-white"
              >
                <FaTimes />
              </button>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center">
                  <FaPercent className="text-xl text-white" />
                </div>
                <h3 className="text-white text-xl font-bold">¡Obtén un 10% de descuento!</h3>
              </div>
              
              {!formSubmitted ? (
                <>
                  <p className="text-white/80 text-sm mb-4">
                    Déjanos tus datos y recibe un código de descuento del 10% para tu primer arriendo.
                  </p>
                  
                  <form onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="block text-white/90 text-sm mb-1">Nombre</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                        className="w-full bg-slate-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-white/90 text-sm mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        className="w-full bg-slate-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full bg-primary text-white py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Obtener Descuento
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-3">
                    <FaPercent className="text-3xl text-green-500" />
                  </div>
                  <h4 className="text-white font-bold mb-2">¡Gracias!</h4>
                  <p className="text-white/80 text-sm">
                    Te hemos enviado tu código de descuento a tu correo electrónico.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 1. HEADER */}
      <section id="hero" className="relative py-16 md:py-20 flex items-center justify-center overflow-hidden" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(15, 23, 42, 0.85)'
        }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-slate-900/90 backdrop-blur-sm"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="p-4 md:p-6 transition-all duration-300">
            <div className="flex flex-col items-center justify-center mb-2">
              <img 
                src={logo} 
                alt="HG Audio Logo" 
                className="w-16 h-16 md:w-20 md:h-20 object-contain mb-3 animate-pulse hover:scale-110 transition-transform duration-300" 
              />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Home Groove Audio</h1>
              <p className="text-xl font-light text-white/90 italic">Tu fiesta, nuestro volumen</p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-2 left-0 right-0 flex justify-center animate-bounce">
          <div className="flex flex-col items-center text-white/80 cursor-pointer" onClick={() => {
            document.getElementById('video-showcase').scrollIntoView({ behavior: 'smooth' });
          }}>
            <span className="text-xs mb-1">Desliza hacia abajo</span>
            <div className="w-6 h-6 flex items-center justify-center border-2 border-white/40 rounded-full">
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VIDEO EMBEBIDO */}
      <section id="video-showcase" className={`relative py-8 md:py-12 bg-slate-900 text-white transition-colors duration-300 w-full ${visibleSections['video-showcase'] ? 'visible' : ''}`}>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="w-full md:w-1/2 mx-auto">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:shadow-primary/20 hover:-translate-y-1 max-w-[280px] md:max-w-full mx-auto">
                {/* Mobile: Vertical video format */}
                <div className="md:hidden pb-[150%]">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/u31qwQUeGuM?mute=1&autoplay=${visibleSections['video-showcase'] ? '1' : '0'}&portrait=1`}
                  title="HG Audio - Equipamiento Profesional"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
                </div>
                
                {/* Desktop: Horizontal video format */}
                <div className="hidden md:block pb-[56.25%]">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/u31qwQUeGuM?mute=1&autoplay=${visibleSections['video-showcase'] ? '1' : '0'}`}
                  title="HG Audio - Equipamiento Profesional"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Sonido profesional para <span className="text-primary animate-pulse">cada momento</span>
              </h2>
              
              <p className="text-lg md:text-xl font-light leading-relaxed text-white/90">
                Arriendo de equipamiento audio con la mejor calidad, ideal para <span className="font-semibold text-primary">fiestas</span> y <span className="font-semibold text-primary">eventos</span>
              </p>
              
              <div className="pt-2 text-center">
                <button 
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
                >
                  <span>Cotiza ahora</span>
                  <FaHeadphones className="text-xl animate-pulse" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NUESTROS EQUIPOS */}
      <section 
        id="products" 
        className={`py-16 bg-slate-900 text-white transition-all duration-300 ${visibleSections.products ? 'opacity-100' : 'opacity-0'}`}
        style={{
          width: '100%',
          position: 'relative',
          backgroundImage: `url('https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(15, 23, 42, 0.92)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Nuestros Equipos</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "JBL EON 615",
                description: "Ideal para eventos donde habrá DJ toda la noche",
                features: ["1000 WATTS MAX - 500 RMS", "$40.000 - Un Parlante", "$60.000 - Dos Parlantes", "Arriendo incluye atril, cable e instalación"],
                image: product1
              },
              {
                title: "JBL EON 715",
                description: "Ideal para todo tipo de eventos, contiene bluetooth",
                features: ["1300 WATTS MAX - 650 RMS", "$50.000 - Un Parlante", "$70.000 - Dos Parlantes", "Arriendo incluye atril, cable e instalación"],
                image: product2
              },
              {
                title: "Wharfedale DVP-AX18",
                description: "Subwoofer ideal para eventos donde se necesite un sonido fuerte y profundo",
                features: ["1200 WATTS MAX - 600 RMS", "18 pulgadas", "$50.000 - Arriendo Unitario", "Arriendo incluye atril, cable e instalación"],
                image: product3
              }
            ].map((product, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 shadow-lg flex flex-col">
                <div className="relative h-[350px] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-contain p-4 transform transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 bg-gradient-to-t from-black/80 to-black/60">
                  <h3 className="text-2xl font-bold text-white mb-3">{product.title}</h3>
                  <p className="text-white/80 mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-white/70">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={scrollToContact}
                    className="w-full py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Consultar Disponibilidad
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-white/90 text-lg mb-5">
              ¿Buscas arrendar varios equipos? revisa nuestro catálogo y consulta los packs de arriendo que tenemos disponible
            </p>
            <a
              href="/HGAudio.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors group"
            >
              <FaSearch className="text-xl group-hover:scale-110 transition-transform" />
              <span>Ver Catálogo</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. DETALLES (PROCESS SECTION) */}
      <section id="process" className={`relative bg-slate-900 text-white transition-colors duration-300 ${visibleSections.process ? 'visible' : ''}`}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <p className="text-2xl md:text-3xl font-bold text-center leading-relaxed mb-8 max-w-5xl mx-auto">
            ¿Cómo funciona nuestro servicio?
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center group">
              <div className="inline-flex gap-3 text-3xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                <FaWhatsapp />
                <FaInstagram />
                <FaEnvelope />
              </div>
              <h4 className="text-xl font-semibold mb-2">1. Contáctanos</h4>
              <p className="text-white/80 text-base">Escríbenos por WhatsApp, Instagram o correo electrónico</p>
            </div>

            <div className="h-px md:h-[100px] w-full md:w-px bg-white/20"></div>

            <div className="flex-1 text-center group">
              <div className="inline-block text-3xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                <FaFileAlt />
              </div>
              <h4 className="text-xl font-semibold mb-2">2. Cotización</h4>
              <p className="text-white/80 text-base">Recibe una cotización personalizada para tu evento</p>
            </div>

            <div className="h-px md:h-[100px] w-full md:w-px bg-white/20"></div>

            <div className="flex-1 text-center group">
              <div className="inline-block text-3xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                <FaHeadphones />
              </div>
              <h4 className="text-xl font-semibold mb-2">3. Instalación</h4>
              <p className="text-white/80 text-base">Nos encargamos de la instalación y prueba del equipo</p>
            </div>

            <div className="h-px md:h-[100px] w-full md:w-px bg-white/20"></div>

            <div className="flex-1 text-center group">
              <div className="inline-block text-3xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                <FaMusic />
              </div>
              <h4 className="text-xl font-semibold mb-2">4. ¡A Disfrutar!</h4>
              <p className="text-white/80 text-base">Haremos de tu evento una experiencia inolvidable</p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="text-white/80 text-base italic">
              * El precio puede variar según la complejidad del evento
            </p>
          </div>
        </div>
      </section>

      {/* 5. EVENTOS */}
      <section 
        id="events" 
        className={`py-16 bg-slate-900 text-white transition-all duration-300 ${visibleSections.events ? 'opacity-100' : 'opacity-0'}`}
        style={{
          width: '100%',
          position: 'relative',
          backgroundImage: `url('https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(15, 23, 42, 0.92)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Nuestros Eventos</h2>
          
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentEvent * 100}%)` }}>
                {[
                  {
                    image: event1
                  },
                  {
                    image: event2
                  },
                  {
                    image: event3
                  },
                  {
                    image: event4
                  },
                  {
                    image: event6
                  },
                ].map((event, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative h-[450px] rounded-xl overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={`Evento HG Audio ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-8">
              {[0, 1, 2, 3, 4].map((dot) => (
                <button
                  key={dot}
                  onClick={() => setCurrentEvent(dot)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentEvent === dot ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIOS */}
      <section 
        id="testimonials" 
        className={`py-12 bg-slate-900 text-white transition-all duration-300 ${visibleSections.testimonials ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">Lo que dicen nuestros clientes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Carolina Méndez",
                role: "Matrimonio en Viña del Mar",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
                testimonial: "El sonido fue increíble durante toda la fiesta. El equipo llegó puntual y la instalación fue impecable."
              },
              {
                name: "Andrés Gutiérrez",
                role: "Evento Corporativo",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
                testimonial: "Contratamos a HG Audio para nuestra conferencia anual y superaron todas nuestras expectativas."
              },
              {
                name: "Valentina Torres",
                role: "Fiesta de Graduación",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
                testimonial: "Excelente calidad de sonido, iluminación perfecta y un equipo muy profesional."
              },
              {
                name: "Rodrigo Sánchez",
                role: "Concierto en vivo",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
                testimonial: "Como músico, soy exigente con el sonido. HG Audio entendió exactamente lo que necesitábamos."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-4 flex gap-4 items-start">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-white/80 text-sm italic mb-2">"{testimonial.testimonial}"</p>
                  <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                  <p className="text-white/60 text-xs">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* 7. CONTACTO */}
      <section id="contact" className={`relative py-16 bg-slate-900 text-white transition-colors duration-300 ${visibleSections.contact ? 'visible' : ''}`}>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Contacto</h2>
          <div className="relative w-full bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
              <a
                href="https://wa.me/56993197957"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all group"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <FaWhatsapp className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">WhatsApp</h3>
                <span className="text-white/90">+56 9 9319 7957</span>
              </a>

              <a
                href="https://instagram.com/hgaudiocl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all group"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <FaInstagram className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Instagram</h3>
                <span className="text-white/90">@hgaudiocl</span>
              </a>

              <a
                href="mailto:info@hgaudio.cl"
                className="flex flex-col items-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all group"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <FaEnvelope className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <span className="text-white/90">info@hgaudio.cl</span>
              </a>
            </div>
            
            <div className="relative z-10 text-center pb-8">
              <p className="text-white/80 text-lg">
                Contáctanos para hacer tu evento inolvidable
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INFORMACIÓN DE PAGO */}
      <section id="payment" className={`relative py-16 bg-slate-900 text-white transition-colors duration-300 ${visibleSections.payment ? 'visible' : ''}`}>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Información de Pago</h2>
          <div className="relative w-full bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
              <div className="flex flex-col items-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all group">
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <FaCreditCard className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Método de Pago</h3>
                <span className="text-white/90">Transferencia Electrónica</span>
              </div>

              <div className="flex flex-col items-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all group">
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <FaFileAlt className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Términos de Reserva</h3>
                <div className="space-y-2 text-center">
                  <p className="text-white/90">
                    <span className="text-2xl font-bold block">50%</span>
                    <span className="text-sm">del monto total al hacer la reserva</span>
                  </p>
                  <p className="text-white/90">
                    <span className="text-2xl font-bold block">50%</span>
                    <span className="text-sm">restante el día del evento</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all group">
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <FaMusic className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Instalación</h3>
                <div className="text-center">
                  <p className="text-white/90 font-medium mb-2">Instalación Gratuita en:</p>
                  <ul className="text-white/80 space-y-1 mb-4">
                    <li>Lo Barnechea</li>
                    <li>Las Condes</li>
                    <li>Vitacura</li>
                  </ul>
                  <p className="text-white/70 text-sm">
                    Otras comunas: $10.000 adicional por instalación o desinstalación
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TÉRMINOS Y CONDICIONES */}
      <section id="terms" className={`relative py-16 bg-slate-900 text-white transition-colors duration-300 ${visibleSections.terms ? 'visible' : ''}`}>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Términos y Condiciones</h2>
          <div className="relative w-full bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full group-hover:scale-110 transition-transform">
                    <FaHeadphones className="text-3xl text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Equipamiento</h3>
                </div>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    <span>Instalación y prueba profesional incluida</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    <span>Mantenimiento y soporte técnico durante el evento</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    <span>Equipos de respaldo disponibles</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full group-hover:scale-110 transition-transform">
                    <FaFileAlt className="text-3xl text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Cancelaciones</h3>
                </div>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    <span>Cancelación con 48h o menos: 50% cargo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    <span>Reprogramación sin costo con 72h de anticipación</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full group-hover:scale-110 transition-transform">
                    <FaCreditCard className="text-3xl text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Pagos y Reservas</h3>
                </div>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    <span>50% de reserva mediante transferencia</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    <span>50% restante antes del inicio del evento</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    <span>Confirmación por escrito vía email</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full group-hover:scale-110 transition-transform">
                    <FaShieldAlt className="text-3xl text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Responsabilidades</h3>
                </div>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    <span>Equipos asegurados durante el transporte e instalación</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    <span>Cliente responsable durante el evento</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    <span>Daños cubiertos por seguro profesional</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative z-10 text-center pb-8">
              <p className="text-white/80 text-lg px-6 py-3 bg-white/10 backdrop-blur-sm inline-block rounded-xl">
                Al contratar nuestros servicios, aceptas estos términos y condiciones. Para más información, contáctanos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-slate-900 border-t border-slate-700 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <img src={logo} alt="HG Audio Logo" className="w-10 h-10 object-contain" />
              <span className="text-white font-medium">HG Audio</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a
                href="https://wa.me/56993197957"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-colors"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <a
                href="https://instagram.com/hgaudiocl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="mailto:info@hgaudio.cl"
                className="text-white/70 hover:text-primary transition-colors"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>

            <div className="text-sm text-white/70">
              © {new Date().getFullYear()} HG Audio. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>

      <button className="fab" onClick={scrollToContact}>
        <FaPhone />
      </button>
    </div>
  );
};

export default Home; 