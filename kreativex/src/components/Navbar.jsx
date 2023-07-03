import React, { useEffect, useState } from 'react';
import KreativeLogo from '../images/Kreative X Black Background.png';
import WhiteLogo from '../images/Kreative X White Background.png';

const Navbar = () => {
  const [showColor, setShowColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setShowColor(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 px-16 h-24 mx-auto flex items-center w-full ${showColor ? 'bg-white' : ''}`}>
      <img
        className={`relative w-24 -ml-[2rem] md:ml-[2%]`}
        src={showColor ? WhiteLogo : KreativeLogo}
        alt='Logo'
      />
    </div>
  );
};

export default Navbar;



