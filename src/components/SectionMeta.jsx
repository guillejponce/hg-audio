import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SectionMeta = () => {
  const location = useLocation();

  const sectionMeta = {
    '/productos': {
      title: 'Equipos de Audio Profesional - HG Audio',
      description: 'Arrienda equipos de audio profesional JBL EON 615, EON 715 y subwoofer Wharfedale. Ideal para fiestas y eventos.',
      keywords: 'arriendo audio, equipos sonido, JBL EON, parlantes profesionales, subwoofer'
    },
    '/equipos': {
      title: 'Equipos de Audio Profesional - HG Audio',
      description: 'Arrienda equipos de audio profesional JBL EON 615, EON 715 y subwoofer Wharfedale. Ideal para fiestas y eventos.',
      keywords: 'arriendo audio, equipos sonido, JBL EON, parlantes profesionales, subwoofer'
    },
    '/eventos': {
      title: 'Nuestros Eventos - HG Audio',
      description: 'Ve la galería de eventos donde HG Audio ha proporcionado equipamiento de sonido y servicios de DJ profesional.',
      keywords: 'eventos audio, fiestas, DJ profesional, galería eventos, sonido fiestas'
    },
    '/testimonios': {
      title: 'Testimonios Clientes - HG Audio',
      description: 'Lee las reseñas y testimonios de nuestros clientes satisfechos con nuestros servicios de audio y DJ.',
      keywords: 'testimonios, reseñas clientes, opiniones, servicio audio, DJ'
    },
    '/nosotros': {
      title: 'Sobre Nosotros - HG Audio',
      description: 'Conoce nuestra misión y visión. Somos HG Audio, especialistas en arriendo de sonido y servicios de DJ profesional.',
      keywords: 'sobre nosotros, HG Audio, misión, visión, empresa audio'
    },
    '/contacto': {
      title: 'Contacto - HG Audio',
      description: 'Contáctanos para arrendar equipos de audio o contratar servicios de DJ. WhatsApp, Instagram y email disponibles.',
      keywords: 'contacto, WhatsApp, Instagram, email, contratar DJ, arriendo audio'
    },
    '/pago': {
      title: 'Información de Pago - HG Audio',
      description: 'Información sobre métodos de pago, términos de reserva y condiciones para arriendo de equipos de audio.',
      keywords: 'pago, transferencia, reserva, términos pago, arriendo audio'
    },
    '/terminos': {
      title: 'Términos y Condiciones - HG Audio',
      description: 'Lee nuestros términos y condiciones para el arriendo de equipos de audio y servicios de DJ profesional.',
      keywords: 'términos, condiciones, cancelaciones, responsabilidades, equipamiento'
    },
    '/video': {
      title: 'Video Promocional - HG Audio',
      description: 'Mira nuestro video promocional y conoce cómo llevamos DJ y sonido profesional directo a tu evento.',
      keywords: 'video, promocional, DJ, sonido profesional, equipamiento'
    },
    '/proceso': {
      title: 'Cómo Funciona - HG Audio',
      description: 'Conoce nuestro proceso: contacto, cotización, instalación y disfrute. Hacemos tu evento inolvidable.',
      keywords: 'proceso, cotización, instalación, funcionamiento, servicio'
    }
  };

  useEffect(() => {
    const currentMeta = sectionMeta[location.pathname];
    
    if (currentMeta) {
      // Actualizar title
      document.title = currentMeta.title;
      
      // Actualizar meta description
      let descriptionMeta = document.querySelector('meta[name="description"]');
      if (!descriptionMeta) {
        descriptionMeta = document.createElement('meta');
        descriptionMeta.name = 'description';
        document.head.appendChild(descriptionMeta);
      }
      descriptionMeta.content = currentMeta.description;
      
      // Actualizar meta keywords
      let keywordsMeta = document.querySelector('meta[name="keywords"]');
      if (!keywordsMeta) {
        keywordsMeta = document.createElement('meta');
        keywordsMeta.name = 'keywords';
        document.head.appendChild(keywordsMeta);
      }
      keywordsMeta.content = currentMeta.keywords;

      // Actualizar Open Graph tags
      let ogTitleMeta = document.querySelector('meta[property="og:title"]');
      if (!ogTitleMeta) {
        ogTitleMeta = document.createElement('meta');
        ogTitleMeta.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitleMeta);
      }
      ogTitleMeta.content = currentMeta.title;

      let ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
      if (!ogDescriptionMeta) {
        ogDescriptionMeta = document.createElement('meta');
        ogDescriptionMeta.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescriptionMeta);
      }
      ogDescriptionMeta.content = currentMeta.description;
    } else {
      // Meta tags por defecto para la página principal
      document.title = 'HG Audio - Arriendo de Equipos de Sonido y DJ Profesional';
      
      let descriptionMeta = document.querySelector('meta[name="description"]');
      if (!descriptionMeta) {
        descriptionMeta = document.createElement('meta');
        descriptionMeta.name = 'description';
        document.head.appendChild(descriptionMeta);
      }
      descriptionMeta.content = 'HG Audio - Tu fiesta, nuestro volumen. Arriendo de equipos de audio profesional y servicios de DJ para todo tipo de eventos.';
    }
  }, [location.pathname]);

  return null; // Este componente no renderiza nada visible
};

export default SectionMeta; 