import profileImg from "../assets/my-image.png";
import "./Hero.css";
import BlurText from "./Reactbits/BlurText";
import SplitText from "./Reactbits/SplitText";
import AnimatedContent from './Reactbits/AnimatedContent'

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export default function Hero() {
  return (
    <section id="home" className="hero-main-section">

      <AnimatedContent
        className="hero-name-div"
        delay={2.2}
        distance={20}
        direction="vertical"
        animateOpacity
      >
        <div className="hero-design-that-speaks">
          <div className="hero-name-flex">
            <span>I Am</span>
            <span>Mohankumar</span>
          </div>
        </div>

        <div className="hero-name-flex">
          <span>Design that speaks</span>
          <span>Visuals that convert</span>
        </div>
      </AnimatedContent>

      <div className="hero-role">
        <BlurText
          text="Software Developer"
          delay={80}
          animateBy="letters"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
        />
      </div>

      <div className="hero-my-image">
        <AnimatedContent
          distance={200}
          direction="vertical"
          reverse={false}
          duration={2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={3.2}
          className="hero-my-image-animation"
        >
          <img src={profileImg} alt="Mohankumar a Software Developer" />
        </AnimatedContent>
      </div>

      <AnimatedContent
        className="hero-contact-div"
        delay={2.2}
        distance={20}
        direction="vertical"
        animateOpacity
      >
        <span className="hero-git-link">
          <span className="hero-cursor-1">
            <span className="hero-git-icon">
              <i className="fa-brands fa-github"></i>
            </span>
            GitHub
          </span>
          <span className="hero-cursor-2">
            <span className="hero-linkedin-icon">
              <i className="fa-brands fa-linkedin" id="linkedin"></i>
            </span>
            LinkedIn
          </span>
        </span>

        <span className="hero-webdev-app-dev">
          <span>Web & App Developer</span>
        </span>
      </AnimatedContent>

      <AnimatedContent
        className="hero-discription"
        delay={2.2}
        distance={20}
        direction="vertical"
        animateOpacity
      >
        <p>
          <span>
            I build modern web and mobile applications that combine clean design with reliable performance. From planning and development to deployment, I focus on creating scalable, user-centered solutions that solve real business challenges. Every project is crafted with quality, efficiency, and long-term maintainability in mind.
          </span>
        </p>
      </AnimatedContent>
    </section>
  );
}