import React, { useState, useEffect } from 'react';
import { FaPhone, FaHeadphones, FaMicrophone, FaMusic, FaVolumeUp, FaWhatsapp, FaInstagram, FaEnvelope, FaCreditCard, FaFileAlt, FaShieldAlt, FaDownload } from 'react-icons/fa';
import logo from '../assets/hg_audio_logo.png';

const Home = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentEvent(prev => (prev + 1) % 3);
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

    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="hero relative">
        <div className="hero-content">
          <div className="hero-title-section">
            <img src={logo} alt="HG Audio Logo" className="hero-logo" />
            <h1 className="hero-title text-4xl">HG Audio</h1>
          </div>
          <p className="hero-subtitle text-xl">Tu fiesta, nuestro volumen</p>
          <div className="hero-icons">
            <FaHeadphones className="icon text-2xl" />
            <FaMicrophone className="icon text-2xl" />
            <FaMusic className="icon text-2xl" />
            <FaVolumeUp className="icon text-2xl" />
          </div>
        </div>
        <div className="scroll-indicator">
          <span className="scroll-indicator-text">Desliza hacia abajo</span>
          <div className="scroll-indicator-arrow"></div>
        </div>
      </section>

      <section id="process" className={`relative bg-gradient-to-r from-secondary to-primary text-white ${visibleSections.process ? 'visible' : ''}`}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <p className="text-3xl md:text-4xl font-light text-center leading-relaxed mb-12 max-w-5xl mx-auto">
            Arriendo de equipamiento audio con la mejor calidad, ideal para <span className="font-semibold">fiestas</span> y <span className="font-semibold">eventos</span>
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center group">
              <div className="inline-flex gap-3 text-4xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                <FaWhatsapp />
                <FaInstagram />
                <FaEnvelope />
              </div>
              <h4 className="text-2xl font-semibold mb-4">1. Contáctanos</h4>
              <p className="text-white/80 text-lg">Escríbenos por WhatsApp, Instagram o correo electrónico</p>
            </div>

            <div className="h-px md:h-[100px] w-full md:w-px bg-white/20"></div>

            <div className="flex-1 text-center group">
              <div className="inline-block text-4xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                <FaFileAlt />
              </div>
              <h4 className="text-2xl font-semibold mb-4">2. Cotización</h4>
              <p className="text-white/80 text-lg">Recibe una cotización personalizada para tu evento</p>
            </div>

            <div className="h-px md:h-[100px] w-full md:w-px bg-white/20"></div>

            <div className="flex-1 text-center group">
              <div className="inline-block text-4xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                <FaHeadphones />
              </div>
              <h4 className="text-2xl font-semibold mb-4">3. Instalación</h4>
              <p className="text-white/80 text-lg">Nos encargamos de la instalación y prueba del equipo</p>
            </div>

            <div className="h-px md:h-[100px] w-full md:w-px bg-white/20"></div>

            <div className="flex-1 text-center group">
              <div className="inline-block text-4xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                <FaMusic />
              </div>
              <h4 className="text-2xl font-semibold mb-4">4. ¡A Disfrutar!</h4>
              <p className="text-white/80 text-lg">Haremos de tu evento una experiencia inolvidable</p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <p className="text-white/80 text-lg italic">
              * El precio puede variar según la complejidad del evento
            </p>
          </div>
        </div>
      </section>

      <section id="products" className={`products relative py-16 bg-gradient-to-r from-gray-50 to-white ${visibleSections.products ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Nuestros Equipos</h2>
          <div className="text-center mb-8">
            <a
              href="/HGAudio.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors group"
            >
              <FaDownload className="text-xl group-hover:scale-110 transition-transform" />
              <span>Descargar Catálogo Completo</span>
            </a>
          </div>
          <div className="space-y-16">
            {[
              {
                title: "Parlantes para Fiestas",
                description: "Equipos de sonido potentes y de alta calidad para fiestas y eventos pequeños",
                features: ["Parlantes activos de alta potencia", "Subwoofers para graves profundos", "Ideal para fiestas de hasta 100 personas", "Fácil instalación y operación"],
                image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Iluminación Profesional",
                description: "Sistemas de iluminación para crear el ambiente perfecto",
                features: ["Luces LED programables", "Efectos láser y estroboscópicos", "Máquinas de humo", "Control DMX para sincronización"],
                image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Pack DJ & Eventos Grandes",
                description: "Sistemas completos para eventos de gran escala y DJs profesionales",
                features: ["Line arrays de alta potencia", "Consolas de mezcla profesionales", "Monitores de escenario", "Sistema completo para +200 personas"],
                image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((product, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 items-center`}>
                <div className="w-full md:w-1/2">
                  <div className="relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden group">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                      <p className="text-white/90">{product.description}</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800">{product.title}</h3>
                    <p className="text-lg text-gray-600">{product.description}</p>
                    <ul className="space-y-3">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700">
                          <span className="w-2 h-2 rounded-full bg-primary"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button 
                    onClick={scrollToContact}
                    className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors w-full md:w-auto"
                  >
                    Consultar Disponibilidad
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className={`relative py-16 bg-gradient-to-r from-secondary to-primary text-white ${visibleSections.events ? 'visible' : ''}`}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Eventos</h2>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentEvent * 100}%)` }}>
                {[
                  {
                    title: "Evento Corporativo",
                    subtitle: "Soluciones profesionales para tu empresa",
                    description: "Equipamiento de alta gama para conferencias y eventos empresariales",
                    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                  },
                  {
                    title: "Concierto en Vivo",
                    subtitle: "Sonido de alta fidelidad para artistas",
                    description: "Sistema de sonido profesional para bandas y presentaciones en vivo",
                    image: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                  },
                  {
                    title: "Fiesta Privada",
                    subtitle: "Haz tu celebración inolvidable",
                    description: "Equipos de sonido y efectos para fiestas y celebraciones",
                    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                  }
                ].map((event, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative h-[450px]">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h3 className="text-3xl font-bold mb-3">{event.title}</h3>
                        <p className="text-lg text-white/90 mb-2">{event.subtitle}</p>
                        <p className="text-base text-white/70">{event.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-8">
              {[0, 1, 2].map((dot) => (
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

      <section id="contact" className={`relative py-16 bg-white ${visibleSections.contact ? 'visible' : ''}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Contacto</h2>
          <div className="relative w-full bg-gradient-to-r from-secondary to-primary rounded-2xl overflow-hidden">
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

      <section id="payment" className={`relative py-16 bg-white ${visibleSections.payment ? 'visible' : ''}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Información de Pago</h2>
          <div className="relative w-full bg-gradient-to-r from-secondary to-primary rounded-2xl overflow-hidden">
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

      <section id="terms" className={`relative py-16 bg-white ${visibleSections.terms ? 'visible' : ''}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Términos y Condiciones</h2>
          <div className="relative w-full bg-gradient-to-r from-secondary to-primary rounded-2xl overflow-hidden">
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

      <footer className="bg-gray-50 border-t border-gray-100 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <img src={logo} alt="HG Audio Logo" className="w-10 h-10 object-contain" />
              <span className="text-gray-600 font-medium">HG Audio</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a
                href="https://wa.me/56993197957"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <a
                href="https://instagram.com/hgaudiocl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="mailto:info@hgaudio.cl"
                className="text-gray-500 hover:text-primary transition-colors"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>

            <div className="text-sm text-gray-500">
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