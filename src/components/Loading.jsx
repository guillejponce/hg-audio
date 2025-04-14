import { useEffect, useState } from 'react';
import logo from '../assets/hg_audio_logo.png';

const Loading = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="relative">
        <img
          src={logo}
          alt="HG Audio Logo"
          className="w-32 h-32 animate-pulse"
        />
        <div className="absolute inset-0 border-4 border-primary rounded-full animate-spin border-t-transparent"></div>
      </div>
    </div>
  );
};

export default Loading; 