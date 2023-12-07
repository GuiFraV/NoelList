// src/App.js
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Star from './components/Star';
import Header from './components/Header';
import ProductList from './components/ProductList';

function App() {
  const [stars, setStars] = useState([]);
  const starsRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newStarId = Math.random();
      const newStar = {
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 5,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        id: newStarId
      };

      setStars(prevStars => [...prevStars, newStar]);

      // Attendre que l'étoile soit rendue
      setTimeout(() => {
        const starElement = starsRefs.current[newStarId];
        if (starElement) {
          gsap.to(starElement, {
            y: e.clientY + 100,
            opacity: 0,
            duration: 2,
            ease: 'power1.out',
            onComplete: () => {
              setStars(prevStars => prevStars.filter(star => star.id !== newStarId));
            }
          });
        }
      }, 0);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <ProductList />
      {/* Logique pour les étoiles tombantes */}
      {stars.map(star => (
        <Star key={star.id} ref={el => starsRefs.current[star.id] = el} {...star} />
      ))}
    </div>
  );
}

export default App;
