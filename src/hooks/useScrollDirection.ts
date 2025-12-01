import { useState, useEffect } from 'react';

interface ScrollState {
  isVisible: boolean;
  scrollY: number;
}

const SCROLL_THRESHOLD = 40;

export function useScrollDirection(): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    isVisible: true,
    scrollY: 0,
  });
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const currentScrollY = window.scrollY;

      // Show ribbon when at top or scrolling up
      // Hide when scrolling down past threshold
      const isVisible = currentScrollY < SCROLL_THRESHOLD || currentScrollY < lastScrollY;

      setScrollState({
        isVisible,
        scrollY: currentScrollY,
      });
      setLastScrollY(currentScrollY);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return scrollState;
}
