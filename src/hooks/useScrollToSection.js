import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { SECTION_ROUTES } from '../utils/routes';

export const useScrollToSection = () => {
  const navigate = useNavigate();

  const scrollToSection = useCallback((sectionId, updateUrl = true) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Actualizar URL si se solicita
      if (updateUrl) {
        const route = SECTION_ROUTES[sectionId] || '/';
        navigate(route, { replace: true });
      }
    }
  }, [navigate]);

  return scrollToSection;
};

export default useScrollToSection; 