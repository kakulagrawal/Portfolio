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
      <div className="hero-wrapper mx-auto
    flex
    flex-col
    items-center
    justify-center
    gap-12
    px-6
    pt-12
    pb-10
    max-w-7xl
    min-h-screen

    lg:flex-row
    lg:justify-between
    lg:gap-20
    lg:px-8">
        {/* Left Content */}
        <div className="hero-content w-full max-w-2xl text-center lg:text-left ">
          <HeroContent />
        </div>

        {/* Right Avatar */}
        <div className="hero-avatar-container justify-center  lg:justify-end ">
          <HeroAvatar />
        </div>
      </div>
    </section>
  );
};

export default Hero;