import '../styles/testimonials.css';
import mikeHudson from '../assets/testimonial1.png';
import jenniferBridge from '../assets/testimonial2.png';
import tamikaWilliam from '../assets/testimonial3.png';
import bryanChad from '../assets/testimonial4.png';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mike Hudson',
      image: mikeHudson,
      rating: [1, 1, 1, 1, 0.5],
      says: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Jennifer Bridge',
      image: jenniferBridge,
      rating: [1, 1, 1, 1, 1],
      says: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Tamika William',
      image: tamikaWilliam,
      rating: [1, 1, 1, 1, 0.5],
      says: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Bryan Chad',
      image: bryanChad,
      rating: [1, 1, 1, 1],
      says: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <section className='testimonials-section'>
      <div className='testimonials'>
        <h2>What people say about us!</h2>
        {testimonials.map((testimony, index) => (
          <TestimonialCard key={index} testimony={testimony} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
