// Application-wide Constants

// Scroll Thresholds
export const SCROLL_THRESHOLDS = {
  HEADER_HIDE: 100,
  SCROLL_TOP_BUTTON: 300,
  HEADER_OFFSET: 60,
};

// Intersection Observer Options
export const OBSERVER_OPTIONS = {
  SECTION_FADE: {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  },
  PROFICIENCY: {
    threshold: 0.3,
  },
};

// Navigation Sections
export const NAV_SECTIONS = ["home", "about", "experience", "hobbies", "contact"];

// Animation Delays
export const ANIMATION_DELAYS = {
  THROTTLE_SCROLL: 16, // ~60fps
  SMOOTH_SCROLL_DURATION: 300,
};

// Breakpoints (px)
export const BREAKPOINTS = {
  MOBILE: 576,
  TABLET: 768,
  DESKTOP: 1024,
  LARGE: 1440,
};
