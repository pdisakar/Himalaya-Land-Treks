"use client"
import { useEffect, useRef, RefObject } from 'react';

const useActiveElementScroll = (navRef: RefObject<HTMLElement>) => {
  const isScrolling = useRef<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return; // Ensure window is defined

    const handleScroll = () => {
      if (isScrolling.current) return;

      const activeElement = navRef.current?.querySelector('.active') as HTMLElement | null;
      if (activeElement && navRef.current) {
        const rect = activeElement.getBoundingClientRect();
        const parentRect = navRef.current.getBoundingClientRect();

        // Check if the active element is out of view
        if (rect.left < parentRect.left || rect.right > parentRect.right) {
          isScrolling.current = true;
          activeElement.scrollIntoView({ behavior: 'smooth', inline: 'center' as ScrollLogicalPosition });
          
          // Set a timeout to reset the isScrolling flag
          setTimeout(() => {
            isScrolling.current = false;
          }, 500); // Adjust timeout based on the smooth scroll duration
        }
      }
    };

    const debouncedHandleScroll = debounce(handleScroll, 100); // Adjust debounce time as needed

    window.addEventListener('scroll', debouncedHandleScroll);
    return () => window.removeEventListener('scroll', debouncedHandleScroll);
  }, [navRef]);

  // Debounce function to limit how often the scroll handler is called
  const debounce = (func: (...args: any[]) => void, wait: number) => {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    return function (...args: any[]) {
      const later = () => {
        if (timeout) clearTimeout(timeout);
        func(...args);
      };
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
};

export default useActiveElementScroll;
