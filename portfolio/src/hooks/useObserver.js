import { useEffect, useState, useRef } from 'react';

/**
 * Custom hook for IntersectionObserver
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Root margin for observer
 * @returns {Array} [ref, isVisible] - Reference to attach and visibility state
 */
export const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options.threshold, options.rootMargin]);

  return [elementRef, isVisible];
};

/**
 * Custom hook for scroll position tracking
 * @returns {Object} { scrollY, scrollProgress, direction }
 */
export const useScrollPosition = () => {
  const [scrollData, setScrollData] = useState({
    scrollY: 0,
    scrollProgress: 0,
    direction: 'down',
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (currentScrollY / windowHeight) * 100;

      setScrollData({
        scrollY: currentScrollY,
        scrollProgress: progress,
        direction: currentScrollY > lastScrollY ? 'down' : 'up',
      });

      lastScrollY = currentScrollY;
    };

    const throttledScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  return scrollData;
};

/**
 * Custom hook for detecting active section in viewport
 * @param {Array} sections - Array of section IDs to track
 * @param {number} offset - Offset from top for detection
 * @returns {string} - ID of currently active section
 */
export const useActiveSection = (sections = [], offset = 100) => {
  const [activeSection, setActiveSection] = useState(sections[0] || '');

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, offset]);

  return activeSection;
};
