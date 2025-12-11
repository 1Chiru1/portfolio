import { useRef, useEffect } from "react";

const hobbies = [
  {
    icon: "fas fa-baseball-ball",
    name: "Sports",
    description: "Playing and watching various sports",
    color: "#ff6b6b"
  },
  {
    icon: "fas fa-film",
    name: "Movies",
    description: "Enjoying cinema and storytelling",
    color: "#4ecdc4"
  },
  {
    icon: "fas fa-plane",
    name: "Travel",
    description: "Exploring new places and cultures",
    color: "#45b7d1"
  },
  {
    icon: "fas fa-hiking",
    name: "Outdoor Activities",
    description: "Hiking and nature adventures",
    color: "#95e1d3"
  }
];

function Hobbies() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // Start at the middle set
      const middlePosition = (container.scrollWidth / 3);
      container.scrollLeft = middlePosition;
    }
  }, []);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const currentScroll = container.scrollLeft;
    const oneThird = container.scrollWidth / 3;
    const twoThirds = (container.scrollWidth / 3) * 2;

    // If we've scrolled past 2/3, jump back to 1/3
    if (currentScroll >= twoThirds - 50) {
      container.scrollLeft = oneThird + (currentScroll - twoThirds);
    }
    // If we've scrolled before 1/3, jump forward to 2/3
    else if (currentScroll <= 50) {
      container.scrollLeft = oneThird + currentScroll;
    }
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 330;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hobbies" className="hobbies-section">
      <h2>
        <i className="fas fa-heart"></i> Hobbies & Interests
      </h2>
      <p className="hobbies-intro">
        Beyond coding, I love staying active and exploring the world around me.
      </p>
      
      <div className="hobbies-container">
        <button 
          className="scroll-arrow scroll-arrow-left" 
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        
        <div 
          className="hobbies-grid" 
          ref={scrollContainerRef}
          onScroll={handleScroll}
        >
          {/* Render hobbies three times for seamless infinite scroll */}
          {[...hobbies, ...hobbies, ...hobbies].map((hobby, index) => (
            <div 
              key={index} 
              className="hobby-card"
              style={{ '--hobby-color': hobby.color }}
            >
              <div className="hobby-icon">
                <i className={hobby.icon}></i>
              </div>
              <h3>{hobby.name}</h3>
              <p>{hobby.description}</p>
            </div>
          ))}
        </div>
        
        <button 
          className="scroll-arrow scroll-arrow-right" 
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}

export default Hobbies;
