import { Star, StarHalf } from 'lucide-react';
import '../styles/testimonialcard.css';
/*<Star />
<StarHalf />*/

const TestimonialCard = ({ testimony }) => {
  const ratingLevels = { 0.5: StarHalf, 1: Star };

  return (
    <article className='testimonial-card'>
      <img src={testimony.image} alt={testimony.name} />
      <h4>{testimony.name}</h4>

      <span>
        {testimony.rating.map((ratingPoint, index) => {
          const StarComponent = ratingLevels[ratingPoint];
          return (
            <StarComponent key={index} size={20} fill='gold' color='gold' />
          );
        })}
      </span>
      <blockquote>
        <p>"{testimony.says}"</p>
      </blockquote>
    </article>
  );
};

export default TestimonialCard;
