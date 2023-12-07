// src/components/Header.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

const Header = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.to(textRef.current, {
      text: "Ma Liste de Cadeau pour Nöel !",
      duration: 2,
      ease: "none"
    });
  }, []);

  return (
    <header className="bg-blue-500 text-white p-4 shadow-md">
      <h1 className="text-3xl font-bold" ref={textRef}></h1>
    </header>
  );
};

export default Header;
