import HeroImage from '../assets/hero-image.jpg';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-container'>
        <div className='hero-text'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className='cta-button'>Reserve a table</button>
        </div>

        <img src={HeroImage} alt='Hero Image' className='hero-image' />
      </div>
    </section>
  );
};

export default Hero;
