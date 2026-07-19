import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroAvatar from "./HeroAvatar";

import "../../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Animated Background */}
      <HeroBackground />

      {/* Main Hero Layout */}
      <div className="hero-wrapper flex gap-30">
        {/* Left Content */}
        <div className="hero-content">
          <HeroContent />
        </div>

        {/* Right Avatar */}
        <div className="hero-avatar-container mt-20">
          <HeroAvatar />
        </div>
      </div>
    </section>
  );
};

export default Hero;