import { useState, useEffect, useRef } from 'react';

const useScrollOpacity = () => {
  const [opacity, setOpacity] = useState(1);
  const componentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const middlePoint = viewportHeight / 2;

        // Calculate distance from the middle point
        const distanceFromMiddle = Math.abs(rect.top + rect.height / 2 - middlePoint);

        // Change opacity based on distance from the middle point
        if (distanceFromMiddle < middlePoint) {
          const newOpacity = 1 - distanceFromMiddle / middlePoint;
          setOpacity(newOpacity);
        } else {
          setOpacity(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to initialize

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup
    };
  }, []);
  return [ opacity, componentRef ];
};

export default useScrollOpacity;
