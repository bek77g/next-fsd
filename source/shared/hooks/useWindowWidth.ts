'use client';
import { useEffect, useState } from 'react';

export const useWindowWidth = (): number => {
  const [width, setWidth] = useState();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};
