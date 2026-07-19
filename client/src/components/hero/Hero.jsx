import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroAvatar from "./HeroAvatar";

import "../../styles/Hero.css";

const Hero = () => {
  return (
    <section id="home"
    className="hero-section">
      {/* Animated Background */}
      <HeroBackground />

      {/* Main Hero Layout */}
      <div className="hero-wrapper flex gap-20">
        {/* Left Content */}
        <div className="hero-content ml-12">
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